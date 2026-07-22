#!/usr/bin/env python3
"""Build and validate a standalone release archive with the embedded Host.Web runtime."""

from __future__ import annotations

import argparse
import json
import os
import stat
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path, PurePosixPath

PROJECT_ROOT = Path(__file__).resolve().parents[1]
PACKAGE_PREFIX = "gizmo-shell-configurator"
ROOT_FILES = (
    Path(".gitattributes"),
    Path(".gitignore"),
    Path("README.md"),
    Path("app.js"),
    Path("index.html"),
    Path("package-lock.json"),
    Path("package.json"),
    Path("playwright.config.js"),
    Path("start-configurator.bat"),
    Path("styles.css"),
)
TREE_DIRECTORIES = (
    Path("_framework"),
    Path("real-client"),
    Path("scripts"),
    Path("tests"),
)
EXCLUDED_PARTS = {
    ".git",
    "__pycache__",
    "artifacts",
    "node_modules",
    "playwright-report",
    "test-results",
}
EXCLUDED_SUFFIXES = {".br", ".gz", ".pyc"}
REQUIRED_RUNTIME_FILES = (
    Path("real-client/configurator-runtime.json"),
    Path("real-client/index.html"),
    Path("real-client/_framework/blazor.webassembly.js"),
    Path("real-client/_framework/blazor.boot.json"),
    Path("real-client/_content/Gizmo.Client.UI/client_internal_style.js"),
    Path("real-client/_content/Gizmo.Client.UI/client_external_style.js"),
    Path("real-client/_content/Gizmo.Client.UI/webcomponents_style.js"),
    Path("real-client/_content/Gizmo.Client.UI/client_internal_code.js"),
    Path("real-client/_content/Gizmo.Client.UI/client_external_code.js"),
    Path("real-client/_content/Gizmo.Client.UI/client_api_code.js"),
    Path("real-client/_content/Gizmo.Client.UI/webcomponents_code.js"),
    Path("real-client/_framework/Gizmo.Client.UI.dll"),
    Path("real-client/_framework/Gizmo.Web.Components.dll"),
    Path("real-client/_content/Gizmo.Client.UI/img/background.jpg"),
    Path("real-client/appsettings.json"),
    Path("_framework/Gizmo.Client.UI.dll"),
    Path("_framework/Gizmo.Web.Components.dll"),
)
REQUIRED_RELEASE_FILES = (*ROOT_FILES, *REQUIRED_RUNTIME_FILES)


def package_version() -> str:
    package_data = json.loads((PROJECT_ROOT / "package.json").read_text(encoding="utf-8"))
    version = package_data.get("version")
    if not isinstance(version, str) or not version.strip():
        raise RuntimeError("package.json does not contain a valid version")
    return version


def should_include(relative_path: Path) -> bool:
    return not (EXCLUDED_PARTS.intersection(relative_path.parts) or relative_path.suffix in EXCLUDED_SUFFIXES)


def collect_release_files() -> list[Path]:
    files: list[Path] = []
    for relative_path in ROOT_FILES:
        source_path = PROJECT_ROOT / relative_path
        if source_path.is_symlink():
            raise RuntimeError(f"Release file must not be a symlink: {relative_path}")
        if not source_path.is_file():
            raise RuntimeError(f"Missing release file: {relative_path}")
        files.append(relative_path)

    for relative_directory in TREE_DIRECTORIES:
        directory = PROJECT_ROOT / relative_directory
        if not directory.is_dir():
            raise RuntimeError(f"Missing release directory: {relative_directory}")
        for path in sorted(directory.rglob("*")):
            relative_path = path.relative_to(PROJECT_ROOT)
            if path.is_symlink():
                raise RuntimeError(f"Release tree must not contain symlinks: {relative_path}")
            if path.is_file() and should_include(relative_path):
                files.append(relative_path)

    invalid_required_files = [
        str(path)
        for path in REQUIRED_RELEASE_FILES
        if path not in files or (PROJECT_ROOT / path).stat().st_size == 0
    ]
    if invalid_required_files:
        raise RuntimeError(
            f"Missing or empty required release files: {', '.join(invalid_required_files)}"
        )

    marker = json.loads((PROJECT_ROOT / "real-client/configurator-runtime.json").read_text(encoding="utf-8"))
    if marker.get("demoLogin") is not True:
        raise RuntimeError("real-client runtime marker does not declare demoLogin: true")

    return sorted(set(files))


def archive_name(relative_path: Path) -> str:
    return (Path(PACKAGE_PREFIX) / relative_path).as_posix()


def validate_local_runtime() -> None:
    result = subprocess.run(
        [
            sys.executable,
            str(PROJECT_ROOT / "scripts" / "sync-real-client.py"),
            "--check",
            "--require-demo-login",
        ],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        reason = result.stderr.strip() or result.stdout.strip() or "unknown validation error"
        raise RuntimeError(f"Host.Web runtime validation failed: {reason}")


def validate_archive(archive_path: Path) -> int:
    if not archive_path.is_file():
        raise RuntimeError(f"Archive does not exist: {archive_path}")

    with zipfile.ZipFile(archive_path) as archive:
        corrupt_file = archive.testzip()
        if corrupt_file:
            raise RuntimeError(f"Corrupt file in release archive: {corrupt_file}")
        member_infos = archive.infolist()

    member_names = [info.filename for info in member_infos]
    members = set(member_names)
    if len(member_names) != len(members):
        raise RuntimeError("Archive contains duplicate member names")

    unsafe_members = []
    symlink_members = []
    for info in member_infos:
        member_path = PurePosixPath(info.filename)
        if (
            member_path.is_absolute()
            or "\\" in info.filename
            or ".." in member_path.parts
            or not member_path.parts
            or member_path.parts[0] != PACKAGE_PREFIX
        ):
            unsafe_members.append(info.filename)
        unix_file_type = (info.external_attr >> 16) & 0o170000
        if unix_file_type == stat.S_IFLNK:
            symlink_members.append(info.filename)

    if unsafe_members:
        raise RuntimeError(f"Archive contains unsafe member paths: {', '.join(sorted(unsafe_members))}")
    if symlink_members:
        raise RuntimeError(f"Archive contains symlink members: {', '.join(sorted(symlink_members))}")

    required_members = {archive_name(path) for path in REQUIRED_RELEASE_FILES}
    missing_members = sorted(required_members - members)
    if missing_members:
        raise RuntimeError(f"Archive is missing required files: {', '.join(missing_members)}")

    member_info_by_name = {info.filename: info for info in member_infos}
    empty_required_members = sorted(
        member for member in required_members if member_info_by_name[member].file_size == 0
    )
    if empty_required_members:
        raise RuntimeError(
            f"Archive contains empty required files: {', '.join(empty_required_members)}"
        )

    forbidden_members = [
        member
        for member in members
        if Path(member).name.startswith(".env")
        or EXCLUDED_PARTS.intersection(Path(member).parts)
        or Path(member).suffix in EXCLUDED_SUFFIXES
    ]
    if forbidden_members:
        raise RuntimeError(f"Archive contains excluded files: {', '.join(sorted(forbidden_members))}")

    return len(members)


def build_archive(output_path: Path) -> int:
    if output_path.exists() and output_path.is_dir():
        raise RuntimeError(f"Release output is a directory: {output_path}")

    try:
        project_relative_output = output_path.relative_to(PROJECT_ROOT)
    except ValueError:
        project_relative_output = None
    if project_relative_output is not None and (
        not project_relative_output.parts or project_relative_output.parts[0] != "dist"
    ):
        raise RuntimeError("Release output inside the project must be placed under dist/")

    validate_local_runtime()
    release_files = collect_release_files()
    output_path.parent.mkdir(parents=True, exist_ok=True)

    temporary_fd, temporary_name = tempfile.mkstemp(
        prefix=f".{output_path.name}.", suffix=".tmp", dir=output_path.parent
    )
    os.close(temporary_fd)
    temporary_path = Path(temporary_name)
    try:
        with zipfile.ZipFile(
            temporary_path,
            mode="w",
            compression=zipfile.ZIP_DEFLATED,
            compresslevel=9,
        ) as archive:
            for relative_path in release_files:
                archive.write(PROJECT_ROOT / relative_path, archive_name(relative_path))
        member_count = validate_archive(temporary_path)
        os.replace(temporary_path, output_path)
    finally:
        temporary_path.unlink(missing_ok=True)

    return member_count


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        help="Archive destination (default: dist/gizmo-shell-configurator-v<version>.zip).",
    )
    parser.add_argument(
        "--check",
        type=Path,
        help="Validate an existing archive instead of building a new one.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        if args.check:
            archive_path = args.check.expanduser().resolve()
            member_count = validate_archive(archive_path)
            print(f"Release archive is valid: {archive_path} ({member_count} files)")
            return 0

        output_path = (
            args.output.expanduser().resolve()
            if args.output
            else PROJECT_ROOT / "dist" / f"gizmo-shell-configurator-v{package_version()}.zip"
        )
        member_count = build_archive(output_path)
        print(f"Created release archive: {output_path} ({member_count} files, {output_path.stat().st_size} bytes)")
        return 0
    except (OSError, RuntimeError, json.JSONDecodeError, zipfile.BadZipFile) as error:
        print(f"package-release: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
