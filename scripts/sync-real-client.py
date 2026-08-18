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
BASE_HREF = "./"
PREVIEW_STYLE_ID = "gizmoConfiguratorPreviewLayout"
RUNTIME_PATH_PATCH_MARKER = "remapRuntimeUrl"
RUNTIME_PATH_PATCH = """    <script>
      (() => {
        const runtimeBase = new URL('./', document.baseURI);
        const remapRuntimeUrl = (value) => {
          const raw = typeof value === 'string' ? value : value?.url;
          if (!raw) return value;
          const url = new URL(raw, document.baseURI);
          if (url.origin !== location.origin || !url.pathname.startsWith('/_framework/')) return value;
          const relativePath = url.pathname.slice('/_framework/'.length);
          return new URL(`_framework/${relativePath}${url.search}`, runtimeBase).href;
        };
        const nativeFetch = window.fetch.bind(window);
        window.fetch = (input, init) => nativeFetch(remapRuntimeUrl(input), init);
        const nativeOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, ...rest) {
          return nativeOpen.call(this, method, remapRuntimeUrl(url), ...rest);
        };
      })();
    </script>
"""
PREVIEW_STYLE = f"""    <style id="{PREVIEW_STYLE_ID}">
        [client-theme] .giz-app-card,
        [client-theme] .giz-product-card {{
            width: 340px !important;
            min-width: 340px !important;
            max-width: 340px !important;
            height: 600px !important;
            min-height: 600px !important;
            max-height: 600px !important;
            aspect-ratio: 17 / 30 !important;
            box-sizing: border-box !important;
        }}

        [client-theme] .giz-app-card__content__image,
        [client-theme] .giz-product-card__content__image,
        [client-theme] .giz-product-card__content__image--time {{
            height: 420px !important;
            min-height: 420px !important;
            max-height: 420px !important;
        }}

        [client-theme] .giz-home__body .virtual-chunk-grid,
        [client-theme] .giz-apps__body .virtual-chunk-grid,
        [client-theme] .giz-shop__products__body .virtual-chunk-grid {{
            grid-template-columns: repeat(auto-fill, 340px) !important;
            grid-auto-columns: 340px !important;
            justify-content: start !important;
            align-items: start !important;
        }}

        [client-theme] .giz-news-rotator-item:not(:has(.giz-news-rotator-item__image)) {{
            grid-template-columns: 1fr !important;
        }}

        [client-theme] .giz-news-rotator .giz-news-rotator-item:not(.giz-demo-news-card) {{
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            visibility: visible !important;
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
        }}

        [client-theme] .giz-news-rotator .giz-news-rotator-item:not(.giz-demo-news-card) .giz-news-rotator-item__message {{
            width: 100% !important;
            padding: 2.4rem !important;
            color: var(--shell-text, #fafafa) !important;
            opacity: 1 !important;
            text-align: left !important;
            box-sizing: border-box !important;
        }}

        [client-theme] .giz-demo-news-grid {{
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 16px !important;
            width: 100% !important;
        }}

        [client-theme] .giz-demo-news-grid .giz-demo-news-card {{
            position: relative !important;
            inset: auto !important;
            visibility: visible !important;
            display: grid !important;
            grid-template-columns: 1fr !important;
            width: 100% !important;
            height: 154px !important;
            padding: 20px !important;
            border: var(--shell-panel-border-width, 1px) solid var(--shell-border, rgba(255, 255, 255, 0.16)) !important;
            border-radius: var(--shell-radius-m, 12px) !important;
            background: var(--shell-bg-elevated, #22272b) !important;
            color: var(--shell-text, #fafafa) !important;
            box-shadow: var(--shell-shadow, 0 8px 30px rgba(0, 0, 0, 0.2)) !important;
            cursor: default !important;
            animation: none !important;
            opacity: 1 !important;
            box-sizing: border-box !important;
        }}

        [client-theme] .giz-demo-news-grid .giz-demo-news-card:hover {{
            background: var(--shell-bg-elevated-2, #161a1d) !important;
            border-color: var(--shell-accent, #3f8cff) !important;
        }}

        [client-theme] .giz-demo-news-grid .giz-news-rotator-item__message {{
            display: flex !important;
            align-items: center !important;
            line-height: 1.45 !important;
            max-height: none !important;
            overflow: visible !important;
        }}

        @media (max-width: 980px) {{
            [client-theme] .giz-demo-news-grid {{
                grid-template-columns: 1fr !important;
            }}
        }}
    </style>
"""
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
    Path("_content/Gizmo.Client.UI/img/no-app-image.svg"),
    Path("_content/Gizmo.Client.UI/img/no-product-image.svg"),
    Path("_content/Gizmo.Client.UI/img/no-exe-image.svg"),
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
    if require_patched_base and f'id="{PREVIEW_STYLE_ID}"' not in index_text:
        raise RuntimeError("Generated index.html does not contain the responsive preview layout")

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

    if f'id="{PREVIEW_STYLE_ID}"' not in index_text:
        if "</head>" not in index_text:
            raise RuntimeError("Host.Web index.html does not contain a closing </head> tag")
        index_text = index_text.replace("</head>", f"{PREVIEW_STYLE}</head>", 1)
    if RUNTIME_PATH_PATCH_MARKER not in index_text:
        script_marker = '    <script src="_framework/blazor.webassembly.js"></script>'
        if script_marker not in index_text:
            raise RuntimeError("Host.Web index.html does not contain the Blazor bootstrap script")
        index_text = index_text.replace(script_marker, f"{RUNTIME_PATH_PATCH}{script_marker}", 1)
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


def remove_precompressed_assets(runtime: Path) -> None:
    """Drop publish-time duplicates unsupported by the bundled static server."""
    for pattern in ("*.br", "*.gz"):
        for asset in runtime.rglob(pattern):
            uncompressed = asset.with_suffix("")
            if uncompressed.is_file():
                asset.unlink()


def validate_boot_runtime_assets(runtime: Path) -> None:
    """Ensure every boot-manifest resource has a physical file in the runtime."""
    boot_path = runtime / "_framework" / "blazor.boot.json"
    try:
        boot = json.loads(boot_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise RuntimeError(f"Unable to read Blazor boot manifest: {boot_path}") from error

    def satellite_resource_names(value):
        if isinstance(value, dict):
            for name, nested in value.items():
                if isinstance(nested, dict):
                    yield from satellite_resource_names(nested)
                else:
                    yield str(name)

    missing = []
    resources = boot.get("resources", {})
    for group in ("coreAssembly", "assembly", "lazyAssembly", "pdb", "runtime"):
        values = resources.get(group, {})
        names = values.keys() if isinstance(values, dict) else values or ()
        for resource in names:
            candidate = runtime / "_framework" / str(resource)
            if not candidate.is_file():
                missing.append(str(resource))
    for resource in satellite_resource_names(resources.get("satelliteResources", {})):
        candidate = runtime / "_framework" / str(resource)
        if not candidate.is_file():
            missing.append(str(resource))
    runtime_assets = resources.get("runtimeAssets", {})
    for resource in runtime_assets.keys() if isinstance(runtime_assets, dict) else ():
        candidate = runtime / "_framework" / str(resource)
        if not candidate.is_file():
            missing.append(str(resource))
    if missing:
        raise RuntimeError(
            "Blazor boot manifest references missing runtime assets: "
            + ", ".join(sorted(set(missing)))
        )


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
        remove_precompressed_assets(staged)
        validate_boot_runtime_assets(staged)
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
            validate_boot_runtime_assets(destination)
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
