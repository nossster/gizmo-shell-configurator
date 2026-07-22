from __future__ import annotations

import importlib.util
import stat
import tempfile
import unittest
import warnings
import zipfile
from pathlib import Path
from subprocess import CompletedProcess
from unittest.mock import patch

MODULE_PATH = Path(__file__).resolve().parents[1] / "scripts" / "package_release.py"
SPEC = importlib.util.spec_from_file_location("package_release", MODULE_PATH)
if SPEC is None or SPEC.loader is None:
    raise RuntimeError(f"Unable to load {MODULE_PATH}")
package_release = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(package_release)


class PackageReleaseTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp_directory.cleanup)
        self.temp_path = Path(self.temp_directory.name)

    def write_archive(self, name: str, members: list[str]) -> Path:
        archive_path = self.temp_path / name
        with zipfile.ZipFile(archive_path, "w") as archive:
            for member in members:
                archive.writestr(member, "fixture")
        return archive_path

    def required_members(self) -> list[str]:
        return sorted(
            package_release.archive_name(path)
            for path in (*package_release.ROOT_FILES, *package_release.REQUIRED_RUNTIME_FILES)
        )

    def test_validate_accepts_archive_with_all_required_members(self) -> None:
        archive_path = self.write_archive("valid.zip", self.required_members())

        self.assertEqual(
            package_release.validate_archive(archive_path),
            len(self.required_members()),
        )

    def test_validate_rejects_missing_critical_runtime_files(self) -> None:
        critical_files = (
            Path("real-client/_content/Gizmo.Client.UI/client_api_code.js"),
            Path("real-client/_framework/blazor.boot.json"),
            Path("real-client/appsettings.json"),
        )
        for critical_file in critical_files:
            with self.subTest(critical_file=critical_file):
                members = self.required_members()
                members.remove(package_release.archive_name(critical_file))
                archive_path = self.write_archive(
                    f"missing-{critical_file.name}.zip",
                    members,
                )

                with self.assertRaisesRegex(RuntimeError, "missing required files"):
                    package_release.validate_archive(archive_path)

    def test_validate_rejects_path_traversal(self) -> None:
        archive_path = self.write_archive("traversal.zip", ["../escape.txt"])

        with self.assertRaisesRegex(RuntimeError, "unsafe member paths"):
            package_release.validate_archive(archive_path)

    def test_validate_rejects_windows_path_traversal(self) -> None:
        archive_path = self.write_archive(
            "windows-traversal.zip",
            ["gizmo-shell-configurator\\..\\escape.txt"],
        )

        with self.assertRaisesRegex(RuntimeError, "unsafe member paths"):
            package_release.validate_archive(archive_path)

    def test_validate_rejects_duplicate_members(self) -> None:
        archive_path = self.temp_path / "duplicate.zip"
        with warnings.catch_warnings():
            warnings.simplefilter("ignore", UserWarning)
            with zipfile.ZipFile(archive_path, "w") as archive:
                archive.writestr("gizmo-shell-configurator/app.js", "first")
                archive.writestr("gizmo-shell-configurator/app.js", "second")

        with self.assertRaisesRegex(RuntimeError, "duplicate member names"):
            package_release.validate_archive(archive_path)

    def test_validate_rejects_symlink_members(self) -> None:
        archive_path = self.temp_path / "symlink.zip"
        with zipfile.ZipFile(archive_path, "w") as archive:
            info = zipfile.ZipInfo("gizmo-shell-configurator/link")
            info.create_system = 3
            info.external_attr = (stat.S_IFLNK | 0o777) << 16
            archive.writestr(info, "/etc/passwd")

        with self.assertRaisesRegex(RuntimeError, "symlink members"):
            package_release.validate_archive(archive_path)

    def test_validate_rejects_empty_required_file(self) -> None:
        archive_path = self.temp_path / "empty-required.zip"
        empty_member = package_release.archive_name(Path("app.js"))
        with zipfile.ZipFile(archive_path, "w") as archive:
            for member in self.required_members():
                archive.writestr(member, "" if member == empty_member else "fixture")

        with self.assertRaisesRegex(RuntimeError, "empty required files"):
            package_release.validate_archive(archive_path)

    def test_build_refuses_to_overwrite_project_source(self) -> None:
        with self.assertRaisesRegex(RuntimeError, "must be placed under dist"):
            package_release.build_archive(package_release.PROJECT_ROOT / "README.md")

    def test_local_runtime_validation_propagates_failure(self) -> None:
        failed_check = CompletedProcess(
            args=["sync-real-client.py", "--check"],
            returncode=1,
            stdout="",
            stderr="sync-real-client: missing bridge",
        )
        with patch.object(package_release.subprocess, "run", return_value=failed_check):
            with self.assertRaisesRegex(RuntimeError, "missing bridge"):
                package_release.validate_local_runtime()


if __name__ == "__main__":
    unittest.main()
