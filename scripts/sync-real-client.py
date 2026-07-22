#!/usr/bin/env python3
"""Synchronize a published Gizmo.Client.UI.Host.Web wwwroot for local preview."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
import tempfile
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = (
    PROJECT_ROOT.parent
    / "Gizmo.Client.UI"
    / "Gizmo.Client.UI.Host.Web"
    / "bin"
    / "Release"
    / "net6.0"
    / "publish"
    / "wwwroot"
)
DEFAULT_DESTINATION = PROJECT_ROOT / "real-client"
BASE_HREF = "/real-client/"
ROOT_FRAMEWORK_FILES = (
    "Gizmo.Web.Components.dll",
    "Gizmo.Client.UI.dll",
)
LOCAL_ENDPOINTS = {
    "ApiEndpoint": "http://localhost",
    "RealTimeEndpoint": "http://localhost/rt",
}
REQUIRED_FILES = (
    Path("index.html"),
    Path("_framework/blazor.webassembly.js"),
    Path("_framework/blazor.boot.json"),
    Path("_framework/Gizmo.Web.Components.dll"),
    Path("_framework/Gizmo.Client.UI.dll"),
    Path("_content/Gizmo.Client.UI/client_internal_style.js"),
    Path("_content/Gizmo.Client.UI/client_external_style.js"),
    Path("_content/Gizmo.Client.UI/webcomponents_style.js"),
    Path("_content/Gizmo.Client.UI/client_internal_code.js"),
    Path("_content/Gizmo.Client.UI/client_external_code.js"),
    Path("_content/Gizmo.Client.UI/client_api_code.js"),
    Path("_content/Gizmo.Client.UI/webcomponents_code.js"),
    Path("_content/Gizmo.Client.UI/img/background.jpg"),
    Path("appsettings.json"),
)


def validate_runtime(root: Path, *, require_patched_base: bool, require_demo_login: bool = False) -> None:
    missing = [str(relative) for relative in REQUIRED_FILES if not (root / relative).is_file()]
    if missing:
        raise RuntimeError(f"Missing required Host.Web files in {root}: {', '.join(missing)}")

    index_text = (root / "index.html").read_text(encoding="utf-8")
    expected_base = f'<base href="{BASE_HREF}" />'
    if require_patched_base and expected_base not in index_text:
        raise RuntimeError(f"Generated index.html does not contain {expected_base}")

    if require_patched_base:
        settings_text = (root / "appsettings.json").read_text(encoding="utf-8")
        for key, expected_value in LOCAL_ENDPOINTS.items():
            pattern = rf'"{re.escape(key)}"\s*:\s*"{re.escape(expected_value)}"'
            if not re.search(pattern, settings_text):
                raise RuntimeError(f"Generated appsettings.json does not use the local {key}")
        environment_settings = sorted(path.name for path in root.glob("appsettings.*.json"))
        if environment_settings:
            raise RuntimeError(f"Generated runtime contains environment settings: {', '.join(environment_settings)}")

    if require_demo_login:
        marker_path = root / "configurator-runtime.json"
        try:
            marker = json.loads(marker_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as error:
            raise RuntimeError(f"Generated runtime has an invalid marker: {marker_path}") from error
        if marker.get("demoLogin") is not True:
            raise RuntimeError("Generated runtime does not contain the demo-login fixture")


def patch_index(index_path: Path) -> None:
    index_text = index_path.read_text(encoding="utf-8")
    original = '<base href="/" />'
    patched = f'<base href="{BASE_HREF}" />'
    if original in index_text:
        index_text = index_text.replace(original, patched, 1)
    elif patched not in index_text:
        raise RuntimeError("Host.Web index.html has an unsupported <base href> value")
    index_path.write_text(index_text, encoding="utf-8")


def sanitize_appsettings(runtime: Path) -> None:
    settings_path = runtime / "appsettings.json"
    settings_text = settings_path.read_text(encoding="utf-8")
    for key, local_value in LOCAL_ENDPOINTS.items():
        pattern = rf'("{re.escape(key)}"\s*:\s*)"[^"]*"'
        settings_text, replacements = re.subn(pattern, rf'\1"{local_value}"', settings_text, count=1)
        if replacements != 1:
            raise RuntimeError(f"Host.Web appsettings.json does not contain {key}")
    settings_path.write_text(settings_text, encoding="utf-8")

    for environment_settings in runtime.glob("appsettings.*.json"):
        environment_settings.unlink()


def synchronize_root_framework_alias(runtime: Path) -> None:
    alias_root = runtime.parent / "_framework"
    if alias_root.exists():
        shutil.rmtree(alias_root)
    alias_root.mkdir()

    for file_name in ROOT_FRAMEWORK_FILES:
        source = runtime / "_framework" / file_name
        if not source.is_file():
            raise RuntimeError(f"Missing dynamic Host.Web assembly: {source}")
        shutil.copy2(source, alias_root / file_name)


def validate_root_framework_alias(runtime: Path) -> None:
    alias_root = runtime.parent / "_framework"
    missing = [file_name for file_name in ROOT_FRAMEWORK_FILES if not (alias_root / file_name).is_file()]
    if missing:
        raise RuntimeError(f"Missing root framework aliases in {alias_root}: {', '.join(missing)}")


def synchronize(source: Path, destination: Path, *, demo_login: bool = False) -> None:
    validate_runtime(source, require_patched_base=False)
    destination.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory(prefix="real-client-", dir=destination.parent) as temp_dir:
        staged = Path(temp_dir) / "wwwroot"
        shutil.copytree(source, staged)
        patch_index(staged / "index.html")
        sanitize_appsettings(staged)
        (staged / "configurator-runtime.json").write_text(
            json.dumps(
                {
                    "generated": True,
                    "baseHref": BASE_HREF,
                    "host": "Gizmo.Client.UI.Host.Web",
                    "client": "TestClient",
                    "demoLogin": demo_login,
                },
                indent=2,
            )
            + "\n",
            encoding="utf-8",
        )
        validate_runtime(staged, require_patched_base=True, require_demo_login=demo_login)

        if destination.exists():
            shutil.rmtree(destination)
        shutil.move(str(staged), destination)
        synchronize_root_framework_alias(destination)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE)
    parser.add_argument("--destination", type=Path, default=DEFAULT_DESTINATION)
    parser.add_argument(
        "--check",
        action="store_true",
        help="Validate the already synchronized destination without copying files.",
    )
    parser.add_argument(
        "--demo-login",
        action="store_true",
        help="Mark a synchronized runtime built with the demo-login fixture patches.",
    )
    parser.add_argument(
        "--require-demo-login",
        action="store_true",
        help="Require the existing runtime marker to declare demo-login support.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    source = args.source.expanduser().resolve()
    destination = args.destination.expanduser().resolve()

    try:
        if args.check:
            validate_runtime(
                destination,
                require_patched_base=True,
                require_demo_login=args.require_demo_login,
            )
            validate_root_framework_alias(destination)
            print(f"Real Host.Web preview is valid: {destination}")
        else:
            synchronize(source, destination, demo_login=args.demo_login)
            print(f"Synchronized Real Host.Web preview: {source} -> {destination}")
    except (OSError, RuntimeError) as error:
        print(f"sync-real-client: {error}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
