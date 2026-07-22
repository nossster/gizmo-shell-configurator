#!/usr/bin/env python3
"""Build the embedded Host.Web fixture with demo login and subpath-safe routes."""

from __future__ import annotations

import argparse
import subprocess
import sys
import tempfile
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE_ROOT = PROJECT_ROOT.parent / "Gizmo.Client.UI"

PATCHES = (
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        """            return Task.FromResult<NextHostReservationModel?>(new NextHostReservationModel()
            {
                NextReservationId = 1,
                NextReservationTime = DateTime.Now
            });""",
        """            return Task.FromResult<NextHostReservationModel?>(null);""",
    ),
    (
        Path("Submodules/Gizmo.UI/Gizmo.UI/Services/NavigationService.cs"),
        """        public void NavigateTo(string uri, NavigationOptions options = default)
        {
            _navigationManager?.NavigateTo(uri, options);
        }""",
        """        public void NavigateTo(string uri, NavigationOptions options = default)
        {
            _navigationManager?.NavigateTo(NormalizeInternalUri(uri), options);
        }

        private static string NormalizeInternalUri(string uri)
        {
            if (string.IsNullOrWhiteSpace(uri) || !uri.StartsWith('/') || uri.StartsWith("//"))
                return uri;

            return $".{uri}";
        }""",
    ),
    (
        Path("Submodules/Gizmo.Client.Shared/Gizmo.Client.Shared/Code/ClientRoutes.cs"),
        """    public class ClientRoutes
    {
        public const string LoginRoute = "/";""",
        """    public class ClientRoutes
    {
        public static string ToHref(string route)
        {
            return route == "/" ? "./" : route.TrimStart('/');
        }

        public const string LoginRoute = "/";""",
    ),
    (
        Path("Gizmo.Client.UI/Shared/HeaderModulesMenuItem.razor"),
        '<NavLink href="@MetaData.DefaultRoute"',
        '<NavLink href="@ClientRoutes.ToHref(MetaData.DefaultRoute)"',
    ),
    (
        Path("Gizmo.Client.UI/Components/Profile/ProfileNavigation.razor"),
        '<NavLink href="@ClientRoutes.UserProfileRoute" Match="NavLinkMatch.All">',
        '<NavLink href="@ClientRoutes.ToHref(ClientRoutes.UserProfileRoute)" Match="NavLinkMatch.All">',
    ),
    (
        Path("Gizmo.Client.UI/Components/Profile/ProfileNavigation.razor"),
        '<NavLink href="@ClientRoutes.UserProductsRoute" Match="NavLinkMatch.All">',
        '<NavLink href="@ClientRoutes.ToHref(ClientRoutes.UserProductsRoute)" Match="NavLinkMatch.All">',
    ),
    (
        Path("Gizmo.Client.UI/Components/Profile/ProfileNavigation.razor"),
        '<NavLink href="@ClientRoutes.UserPurchasesRoute" Match="NavLinkMatch.All">',
        '<NavLink href="@ClientRoutes.ToHref(ClientRoutes.UserPurchasesRoute)" Match="NavLinkMatch.All">',
    ),
    (
        Path("Gizmo.Client.UI/Components/Profile/ProfileNavigation.razor"),
        '<NavLink href="@ClientRoutes.UserDepositsRoute" Match="NavLinkMatch.All">',
        '<NavLink href="@ClientRoutes.ToHref(ClientRoutes.UserDepositsRoute)" Match="NavLinkMatch.All">',
    ),
    (
        Path("Gizmo.Client.UI/Pages/Profile/Purchases.razor"),
        '<a class="order-line-details-product-name" href="@($"{ClientRoutes.ProductDetailsRoute}?ProductId={orderLine.ProductId.Value}")">',
        '<a class="order-line-details-product-name" href="@(ClientRoutes.ToHref($"{ClientRoutes.ProductDetailsRoute}?ProductId={orderLine.ProductId.Value}"))">',
    ),
    (
        Path("Gizmo.Client.UI/Pages/Login/Login.razor"),
        '<a tabindex="-1" href="@ClientRoutes.PasswordRecoveryRoute">',
        '<a tabindex="-1" href="@ClientRoutes.ToHref(ClientRoutes.PasswordRecoveryRoute)">',
    ),
    (
        Path("Gizmo.Client.UI/Shared/MenuUserLinks.razor"),
        '<a href="@ClientRoutes.UserProfileRoute" class="giz-user-links-item"',
        '<a href="@ClientRoutes.ToHref(ClientRoutes.UserProfileRoute)" class="giz-user-links-item"',
    ),
    *(
        (
            Path(f"Gizmo.Client.UI/Pages/Login/{file_name}"),
            '<a href="@ClientRoutes.LoginRoute">',
            '<a href="@ClientRoutes.ToHref(ClientRoutes.LoginRoute)">',
        )
        for file_name in (
            "RegistrationAdditionalFields.razor",
            "RegistrationBasicFields.razor",
            "RegistrationConfirmation.razor",
            "RegistrationConfirmationMethod.razor",
        )
    ),
)


def apply_fixture_patches(source_root: Path) -> None:
    for relative_path, old, new in PATCHES:
        path = source_root / relative_path
        text = path.read_text(encoding="utf-8")
        if new in text:
            continue
        if text.count(old) != 1:
            raise RuntimeError(f"Unsupported source shape in {path}: expected one fixture patch target")
        path.write_text(text.replace(old, new, 1), encoding="utf-8")


def run(command: list[str], *, cwd: Path) -> None:
    print("+", " ".join(command), flush=True)
    subprocess.run(command, cwd=cwd, check=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-root", type=Path, default=DEFAULT_SOURCE_ROOT)
    parser.add_argument("--configuration", default="Release")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    source_root = args.source_root.expanduser().resolve()
    source_project = source_root / "Gizmo.Client.UI.Host.Web/Gizmo.Client.UI.Host.Web.csproj"
    if not source_project.is_file():
        print(f"build-real-client: Host.Web project not found: {source_project}", file=sys.stderr)
        return 1

    with tempfile.TemporaryDirectory(prefix="gizmo-client-ui-preview-") as temp_dir:
        worktree = Path(temp_dir) / "source"
        worktree_registered = False
        try:
            run(["git", "worktree", "prune"], cwd=source_root)
            run(["git", "worktree", "add", "--detach", str(worktree), "HEAD"], cwd=source_root)
            worktree_registered = True
            run(["git", "submodule", "update", "--init", "--recursive"], cwd=worktree)

            apply_fixture_patches(worktree)
            client_project = worktree / "Gizmo.Client.UI"
            run(["npm", "install"], cwd=client_project)
            run(["npm", "run", "build_prod"], cwd=client_project)
            project = worktree / "Gizmo.Client.UI.Host.Web/Gizmo.Client.UI.Host.Web.csproj"
            publish_root = (
                worktree
                / "Gizmo.Client.UI.Host.Web/bin"
                / args.configuration
                / "net6.0/publish/wwwroot"
            )
            run(["dotnet", "publish", str(project), "-c", args.configuration], cwd=worktree)
            run(
                [
                    sys.executable,
                    str(PROJECT_ROOT / "scripts/sync-real-client.py"),
                    "--source",
                    str(publish_root),
                    "--demo-login",
                ],
                cwd=PROJECT_ROOT,
            )
            run(
                [
                    sys.executable,
                    str(PROJECT_ROOT / "scripts/sync-real-client.py"),
                    "--check",
                    "--require-demo-login",
                ],
                cwd=PROJECT_ROOT,
            )
        except (OSError, RuntimeError, subprocess.CalledProcessError) as error:
            print(f"build-real-client: {error}", file=sys.stderr)
            return 1
        finally:
            if worktree_registered:
                subprocess.run(
                    ["git", "worktree", "remove", "--force", "--force", str(worktree)],
                    cwd=source_root,
                    check=False,
                )

    print("Built demo-login Real Host.Web runtime from an isolated temporary worktree.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
