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
        Path("Gizmo.Client.UI/Pages/Login/Login.razor.cs"),
        """            this.SubscribeChange(ViewState);
            this.SubscribeChange(HostQRCodeViewState);

            //await InvokeVoidAsync("navigationBlock");""",
        """            this.SubscribeChange(ViewState);
            this.SubscribeChange(HostQRCodeViewState);

            UserLoginService.SetLoginName("demo");
            UserLoginService.SetPassword("demo");

            //await InvokeVoidAsync("navigationBlock");""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        """            return Task.FromResult(new UserBalanceModel()
            {

            });""",
        """            return Task.FromResult(new UserBalanceModel()
            {
                AvailableCreditedTime = 9420,
                AvailableTime = 9420,
                Deposits = 48.50m,
                Points = 725,
                TimeProduct = 9420
            });""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/View/Services/AppsPageViewService.cs"),
        """        public Task SetSelectedSortingOption(ApplicationSortingOption value)
        {""",
        """        public Task RefreshAsync(CancellationToken cancellationToken = default) =>
            RefilterRequest(cancellationToken);

        public Task SetSelectedSortingOption(ApplicationSortingOption value)
        {""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Apps/AppsIndex.razor.cs"),
        """        protected override void OnInitialized()
        {
            this.SubscribeChange(ViewState);

            base.OnInitialized();
        }""",
        """        protected override async Task OnInitializedAsync()
        {
            this.SubscribeChange(ViewState);

            await AppsPageService.RefreshAsync();
            await base.OnInitializedAsync();
        }""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Shop/ProductsIndex.razor.cs"),
        """            _userProductGroups = productGroups.ToDictionary(key => key.ProductGroupId, value => value);

            await base.OnInitializedAsync();""",
        """            _userProductGroups = productGroups.ToDictionary(key => key.ProductGroupId, value => value);

            await ShopService.UpdateUserProductGroupsAsync();
            await ShopService.UpdateUserGroupedProductsAsync(null);
            await base.OnInitializedAsync();""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Profile/Purchases.razor.cs"),
        """        protected override void OnInitialized()
        {
            this.SubscribeChange(ViewState);

            base.OnInitialized();
        }""",
        """        protected override async System.Threading.Tasks.Task OnInitializedAsync()
        {
            this.SubscribeChange(ViewState);

            await PurchasesService.LoadAsync();
            await base.OnInitializedAsync();
        }""",
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

RANGE_PATCHES = (
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "            _userApplicationCategories = Enumerable.Range(1, 5).Select(i => new UserApplicationCategoryModel()",
        "            _userApplications = Enumerable.Range(1, 100).Select(i => new UserApplicationModel()",
        """            _userApplicationCategories = new List<UserApplicationCategoryModel>()
            {
                new() { Id = 1, Name = "FPS" },
                new() { Id = 2, Name = "MOBA" },
                new() { Id = 3, Name = "Action" },
                new() { Id = 4, Name = "Shooter" }
            };""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "            _userApplications = Enumerable.Range(1, 100).Select(i => new UserApplicationModel()",
        "            _userApplicationLinks = new List<UserApplicationLinkModel>()",
        """            _userApplications = new List<UserApplicationModel>()
            {
                new()
                {
                    Id = 1,
                    ApplicationCategoryId = 1,
                    Title = "CS2",
                    Description = "Competitive tactical action for the demo application catalog.",
                    PublisherId = 1,
                    AddDate = DateTime.Now.AddDays(-4),
                    ReleaseDate = new DateTime(2023, 9, 27)
                },
                new()
                {
                    Id = 2,
                    ApplicationCategoryId = 2,
                    Title = "Dota 2",
                    Description = "Team strategy title rendered by the real Gizmo application card.",
                    PublisherId = 2,
                    AddDate = DateTime.Now.AddDays(-3),
                    ReleaseDate = new DateTime(2013, 7, 9)
                },
                new()
                {
                    Id = 3,
                    ApplicationCategoryId = 3,
                    Title = "Fortnite",
                    Description = "Battle royale demo entry with the native hover and category UI.",
                    PublisherId = 3,
                    AddDate = DateTime.Now.AddDays(-2),
                    ReleaseDate = new DateTime(2017, 7, 21)
                },
                new()
                {
                    Id = 4,
                    ApplicationCategoryId = 4,
                    Title = "Valorant",
                    Description = "Tactical team shooter used for deterministic theme preview coverage.",
                    PublisherId = 4,
                    AddDate = DateTime.Now.AddDays(-1),
                    ReleaseDate = new DateTime(2020, 6, 2)
                }
            };""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "            _userProducts = new List<UserProductModel>();",
        "            #endregion\n\n            #region PAYMENT METHODS",
        """            _userProducts = new List<UserProductModel>()
            {
                new()
                {
                    Id = 101,
                    ProductGroupId = 1,
                    ProductType = ProductType.Product,
                    Name = "Cola",
                    Description = "Chilled soft drink rendered by the native Gizmo product card.",
                    Price = 3.50m,
                    PurchaseOptions = PurchaseOptionType.And,
                    OrderOptions = OrderOptionType.None,
                    DisplayOrder = 1,
                    CreatedTime = DateTime.Now.AddDays(-4)
                },
                new()
                {
                    Id = 102,
                    ProductGroupId = 1,
                    ProductType = ProductType.Product,
                    Name = "Energy",
                    Description = "Demo beverage with live price, hover and quantity controls.",
                    Price = 4.90m,
                    PurchaseOptions = PurchaseOptionType.And,
                    OrderOptions = OrderOptionType.None,
                    DisplayOrder = 2,
                    CreatedTime = DateTime.Now.AddDays(-3)
                },
                new()
                {
                    Id = 103,
                    ProductGroupId = 1,
                    ProductType = ProductType.Product,
                    Name = "Sandwich",
                    Description = "Fresh sandwich entry for native shop-card theme coverage.",
                    Price = 8.50m,
                    PurchaseOptions = PurchaseOptionType.And,
                    OrderOptions = OrderOptionType.None,
                    DisplayOrder = 3,
                    CreatedTime = DateTime.Now.AddDays(-2)
                },
                new()
                {
                    Id = 104,
                    ProductGroupId = 1,
                    ProductType = ProductType.Product,
                    Name = "Snack",
                    Description = "Compact snack product used to complete the four-card demo row.",
                    Price = 2.90m,
                    PurchaseOptions = PurchaseOptionType.And,
                    OrderOptions = OrderOptionType.None,
                    DisplayOrder = 4,
                    CreatedTime = DateTime.Now.AddDays(-1)
                },
                new()
                {
                    Id = 105,
                    ProductGroupId = 5,
                    ProductType = ProductType.ProductTime,
                    Name = "3 Hour Gaming Pass",
                    Description = "Demo time product with native availability and expiration tooltip details.",
                    Price = 12.00m,
                    PurchaseOptions = PurchaseOptionType.And,
                    OrderOptions = OrderOptionType.None,
                    DisplayOrder = 5,
                    CreatedTime = DateTime.Now,
                    TimeProduct = new UserProductTimeModel()
                    {
                        Minutes = 180,
                        ExpiresAfter = 24,
                        ExpirationOptions = ProductTimeExpirationOptionType.ExpireAfterTime | ProductTimeExpirationOptionType.ExpiresAtLogout,
                        ExpireFromOptions = ExpireFromOptionType.Use,
                        ExpireAfterType = ExpireAfterType.Hour,
                        DisallowedHostGroups = new List<int>() { 2, 3 }
                    }
                }
            };""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "        public Task<PagedList<UserOrderModel>> UserOrdersGetAsync(UserOrdersFilter filters, CancellationToken cancellationToken = default)",
        "        public Task<UserProductAvailabilityCheckResult> UserProductAvailabilityCheckAsync(UserOrderLineModelCreate userOrderLineModelCreate, CancellationToken cancellationToken = default)",
        """        public Task<PagedList<UserOrderModel>> UserOrdersGetAsync(UserOrdersFilter filters, CancellationToken cancellationToken = default)
        {
            var orders = new List<UserOrderModel>()
            {
                new()
                {
                    Id = 3003,
                    Date = DateTime.Now.AddHours(-2),
                    Status = OrderStatus.Completed,
                    Total = 12.00m,
                    PointsAwardTotal = 120,
                    UserNote = "Gaming pass activated for the current demo session.",
                    Invoice = new UserOrderInvoiceModel()
                    {
                        Id = 4003,
                        Status = InvoiceStatus.Paid,
                        InvoicePayments = new List<UserOrderInvoicePaymentModel>()
                        {
                            new() { Id = 5003, PaymentMethodId = -3 }
                        }
                    },
                    OrderLines = new List<UserOrderLineModel>()
                    {
                        new()
                        {
                            Id = 6003,
                            LineType = LineType.TimeProduct,
                            PayType = OrderLinePayType.Cash,
                            ProductName = "3 Hour Gaming Pass",
                            ProductId = 105,
                            Quantity = 1,
                            Total = 12.00m
                        }
                    }
                },
                new()
                {
                    Id = 3002,
                    Date = DateTime.Now.AddDays(-1),
                    Status = OrderStatus.Completed,
                    Total = 12.00m,
                    PointsAwardTotal = 60,
                    UserNote = "Delivered to PC 100.",
                    Invoice = new UserOrderInvoiceModel()
                    {
                        Id = 4002,
                        Status = InvoiceStatus.Paid,
                        InvoicePayments = new List<UserOrderInvoicePaymentModel>()
                        {
                            new() { Id = 5002, PaymentMethodId = -2 }
                        }
                    },
                    OrderLines = new List<UserOrderLineModel>()
                    {
                        new()
                        {
                            Id = 6002,
                            LineType = LineType.Product,
                            PayType = OrderLinePayType.Cash,
                            ProductName = "Cola",
                            ProductId = 101,
                            Quantity = 1,
                            Total = 3.50m
                        },
                        new()
                        {
                            Id = 6001,
                            LineType = LineType.Product,
                            PayType = OrderLinePayType.Cash,
                            ProductName = "Sandwich",
                            ProductId = 103,
                            Quantity = 1,
                            Total = 8.50m
                        }
                    }
                },
                new()
                {
                    Id = 3001,
                    Date = DateTime.Now.AddDays(-3),
                    Status = OrderStatus.Completed,
                    PointsTotal = 140,
                    PointsAwardTotal = 15,
                    UserNote = "Redeemed with loyalty points.",
                    Invoice = new UserOrderInvoiceModel()
                    {
                        Id = 4001,
                        Status = InvoiceStatus.Paid,
                        InvoicePayments = Array.Empty<UserOrderInvoicePaymentModel>()
                    },
                    OrderLines = new List<UserOrderLineModel>()
                    {
                        new()
                        {
                            Id = 6000,
                            LineType = LineType.Product,
                            PayType = OrderLinePayType.Points,
                            ProductName = "Energy",
                            ProductId = 102,
                            Quantity = 1,
                            PointsTotal = 140
                        }
                    }
                }
            };

            return Task.FromResult(new PagedList<UserOrderModel>(orders));
        }

""",
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

    for relative_path, start, end, replacement in RANGE_PATCHES:
        path = source_root / relative_path
        text = path.read_text(encoding="utf-8")
        if replacement in text:
            continue
        if text.count(start) != 1:
            raise RuntimeError(f"Unsupported source shape in {path}: expected one fixture range start")
        start_index = text.index(start)
        end_index = text.find(end, start_index)
        if end_index < 0:
            raise RuntimeError(f"Unsupported source shape in {path}: fixture range end not found")
        path.write_text(text[:start_index] + replacement + "\n\n" + text[end_index:], encoding="utf-8")


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
