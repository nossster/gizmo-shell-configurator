#!/usr/bin/env python3
"""Build the embedded Host.Web fixture with demo login and subpath-safe routes."""

from __future__ import annotations

import argparse
import os
import shutil
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
        Path("Gizmo.Client.UI/Pages/Home.razor.cs"),
        """        protected override void OnInitialized()
        {
            this.SubscribeChange(ViewState);

            base.OnInitialized();
        }""",
        """        protected override async Task OnInitializedAsync()
        {
            this.SubscribeChange(ViewState);
            this.SubscribeChange(NewsViewState);

            await NewsViewService.ConfigureDemoFeedsAsync();
            await HomePageService.RefilterAsync(default);
            await base.OnInitializedAsync();
        }""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Home.razor.cs"),
        """        [Inject]
        HomePageViewState ViewState { get; set; }

        [Inject]
        AdvertisementsViewService AdvertisementsViewStateService { get; set; }""",
        """        [Inject]
        HomePageViewState ViewState { get; set; }

        [Inject]
        FeedsViewState NewsViewState { get; set; }

        [Inject]
        Gizmo.Client.View.Services.FeedsViewService NewsViewService { get; set; }

        [Inject]
        AdvertisementsViewService AdvertisementsViewStateService { get; set; }""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/View/Services/FeedsViewService.cs"),
        """        private int GetRotateMills()
        {""",
        """        public Task ConfigureDemoFeedsAsync()
        {
            if (ViewState.Items.Any())
                return Task.CompletedTask;

            var channel = ServiceProvider.GetRequiredService<FeedChannelViewState>();
            channel.Description = "Gizmo Demo News";

            var items = new List<FeedViewState>();

            var launchNews = ServiceProvider.GetRequiredService<FeedViewState>();
            launchNews.Title = "Native demo catalog";
            launchNews.Summary = "<strong>Native demo catalog</strong><br/>Applications and products use real Razor cards and deterministic view states.";
            launchNews.PublishDate = new DateTime(2026, 8, 5, 9, 0, 0);
            items.Add(launchNews);

            var themeNews = ServiceProvider.GetRequiredService<FeedViewState>();
            themeNews.Title = "Live theme preview";
            themeNews.Summary = "<strong>Live theme preview</strong><br/>Text-only news cards make every background and hover-color change immediately visible.";
            themeNews.PublishDate = new DateTime(2026, 8, 5, 10, 0, 0);
            items.Add(themeNews);

            var detailsNews = ServiceProvider.GetRequiredService<FeedViewState>();
            detailsNews.Title = "Application details ready";
            detailsNews.Summary = "<strong>Application details ready</strong><br/>Open any application card to inspect its description, publisher, dates, links and executable.";
            detailsNews.PublishDate = new DateTime(2026, 8, 5, 11, 0, 0);
            items.Add(detailsNews);

            foreach (var item in items)
                _feedLookup.Add(item, channel);

            ViewState.Items = items;
            ViewState.CurrentFeedChannel = channel;
            ViewState.CurrentFeed = items[0];
            ViewState.IsInitialized = true;
            DebounceViewStateChanged();
            return Task.CompletedTask;
        }

        private int GetRotateMills()
        {""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/View/Services/AppDetailsPageViewService.cs"),
        """        #region OVERRIDES

        protected override Task OnInitializing(CancellationToken ct)""",
        """        public async Task LoadAsync(int applicationId, CancellationToken cancellationToken = default)
        {
            ViewState.Application = await _appLookupService.GetStateAsync(applicationId, false, cancellationToken);
            ViewState.Executables = await _appExeLookupService.GetFilteredStatesAsync(applicationId, cancellationToken);
            DebounceViewStateChanged();
        }

        #region OVERRIDES

        protected override Task OnInitializing(CancellationToken ct)""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/View/Services/AppDetailsPageViewService.cs"),
        """                        ViewState.Application = await _appLookupService.GetStateAsync(id, false, cancellationToken);
                        ViewState.Executables = await _appExeLookupService.GetFilteredStatesAsync(id, cancellationToken);
                        DebounceViewStateChanged();""",
        "                        await LoadAsync(id, cancellationToken);",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Apps/AppDetails.razor.cs"),
        """            this.SubscribeChange(ViewState);

            try""",
        """            this.SubscribeChange(ViewState);
            await AppDetailsPageService.LoadAsync(ApplicationId);

            try""",
    ),
    (
        Path("Gizmo.Client.UI/Components/Apps/ApplicationCard.razor"),
        "<div class=\"giz-app-card\">",
        "<div class=\"giz-app-card\" @onclick=\"OpenDetails\">",
    ),
    (
        Path("Gizmo.Client.UI/Components/Apps/ApplicationCard.razor"),
        """                <IconButton Variant=\"ButtonVariants.Text\" SVGIcon=\"Icons.Open_Client\" Size=\"ButtonSizes.Small\" @onclick=\"OpenDetails\" />""",
        """                <div style=\"display: contents;\" @onclick:stopPropagation=\"true\">
                    <IconButton Variant=\"ButtonVariants.Text\" SVGIcon=\"Icons.Open_Client\" Size=\"ButtonSizes.Small\" @onclick=\"OpenDetails\" />
                </div>""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Home.razor.cs"),
        """        public override void Dispose()
        {
            this.UnsubscribeChange(ViewState);

            base.Dispose();
        }""",
        """        public override void Dispose()
        {
            this.UnsubscribeChange(ViewState);
            this.UnsubscribeChange(NewsViewState);

            base.Dispose();
        }""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/View/Services/ClientLocalizationViewService.cs"),
        "            ViewState.CurrentCulture = GetViewStatesCulture(\"el\");",
        "            ViewState.CurrentCulture = GetViewStatesCulture(\"en\");",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/View/States/FeedsViewState.cs"),
        """        public FeedChannelViewState? CurrentFeedChannel
        {
            get;internal set;
        }""",
        """        public FeedChannelViewState? CurrentFeedChannel
        {
            get;internal set;
        }

        /// <summary>
        /// Gets the deterministic text-only items used by the standalone demo news section.
        /// </summary>
        public IEnumerable<FeedViewState> Items { get; internal set; } = Enumerable.Empty<FeedViewState>();""",
    ),
    (
        Path("Gizmo.Client.UI/Components/Common/NewsRotatorItem.razor"),
        """    <div class=\"giz-news-rotator-item__image\">
        <div class=\"giz-news-rotator-item__image__feed\">
            @if (!string.IsNullOrEmpty(_image))
            {
                <img src=\"@_image\" />
            }
            else
            {
                <img src=\"_content/Gizmo.Client.UI/img/no-image.svg\" alt='loading' class=\"giz-no-image\" />
            }
        </div>
    </div>""",
        """    @if (!string.IsNullOrEmpty(_image))
    {
        <div class=\"giz-news-rotator-item__image\">
            <div class=\"giz-news-rotator-item__image__feed\">
                <img src=\"@_image\" />
            </div>
        </div>
    }""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Apps/AppDetails.razor"),
        "<div class=\"giz-app-details\">",
        """@if (ViewState.Application != null)
{
<div class=\"giz-app-details\">""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Apps/AppDetails.razor"),
        """    </div>
</div>""",
        """    </div>
</div>
}""",
    ),
    (
        Path("Gizmo.Client.UI/Pages/Home.razor"),
        "            <div class=\"giz-home__body__popular\">\n"
        + "                \n"
        + "                @if (ViewState.PopularProducts.Any())",
        """            <div class=\"giz-home__body__popular\">

                @if (NewsViewState.Items.Any())
                {
                    <div class=\"giz-section giz-demo-news-section\">
                        <div class=\"giz-section__header\">Latest news</div>
                        <div class=\"giz-section__body giz-demo-news-grid\">
                            @foreach (var newsItem in NewsViewState.Items)
                            {
                                <NewsRotatorItem @key=\"newsItem\"
                                                 Class=\"giz-demo-news-card\"
                                                 Title=\"@newsItem.Title\"
                                                 Summary=\"@newsItem.Summary\" />
                            }
                        </div>
                    </div>
                }

                @if (ViewState.PopularProducts.Any())""",
    ),
    (
        Path("Gizmo.Client.UI/Components/Common/QuickLauncherQuickLaunch.razor.cs"),
        "using Gizmo.Client.UI.View.States;",
        "using Gizmo.Client.UI.View.Services;\nusing Gizmo.Client.UI.View.States;",
    ),
    (
        Path("Gizmo.Client.UI/Components/Common/QuickLauncherQuickLaunch.razor.cs"),
        """        [Inject]
        QuickLaunchViewState ViewState { get; set; }

        protected override void OnInitialized()
        {
            this.SubscribeChange(ViewState);

            base.OnInitialized();
        }""",
        """        [Inject]
        QuickLaunchViewState ViewState { get; set; }

        [Inject]
        QuickLaunchViewService ViewService { get; set; }

        protected override async System.Threading.Tasks.Task OnInitializedAsync()
        {
            this.SubscribeChange(ViewState);

            await ViewService.RefilterAsync(default);
            await base.OnInitializedAsync();
        }""",
    ),
    (
        Path("Gizmo.Client.UI/Components/Common/QuickLauncherFavorites.razor.cs"),
        """        [Inject]
        FavoritesViewState ViewState { get; set; }

        protected override void OnInitialized()
        {
            this.SubscribeChange(ViewState);

\t\t\tbase.OnInitialized();
        }""",
        """        [Inject]
        FavoritesViewState ViewState { get; set; }

        [Inject]
        FavoritesViewService ViewService { get; set; }

        protected override async System.Threading.Tasks.Task OnInitializedAsync()
        {
            this.SubscribeChange(ViewState);

            await ViewService.RefilterAsync(default);
            await base.OnInitializedAsync();
        }""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/View/Services/FeedsViewService.cs"),
        """        protected override async Task OnNavigatedIn(NavigationParameters navigationParameters, CancellationToken cancellationToken = default)
        {
            await InitializeIfRequired(cancellationToken);
            await base.OnNavigatedIn(navigationParameters, cancellationToken);
        }""",
        """        protected override async Task OnNavigatedIn(NavigationParameters navigationParameters, CancellationToken cancellationToken = default)
        {
            await ConfigureDemoFeedsAsync();
            await base.OnNavigatedIn(navigationParameters, cancellationToken);
        }""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/ImageService.cs"),
        """        public async ValueTask<string> ImageSourceGetAsync(ImageType imageType, int imageId, CancellationToken cToken)
        {
            var imageData = await ImageCachedDataGetAsync(imageType, imageId, cToken);

            return imageData is null
                ? string.Empty
                : $"data:image/png;base64,{Convert.ToBase64String(imageData)}";
        }""",
        """        public ValueTask<string> ImageSourceGetAsync(ImageType imageType, int imageId, CancellationToken cToken) =>
            ValueTask.FromResult(string.Empty);""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/ImageService.cs"),
        """                var isCached = TryAddImageToCache(hash, data);

                if (!isCached)
                {
                    _logger.LogError("Failed adding image to cache.");
                }""",
        """                // A concurrent request may have cached the same image while this request was loading.
                // ConcurrentDictionary.TryAdd returning false is therefore an expected cache race, not an error.
                TryAddImageToCache(hash, data);""",
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
        Path("Gizmo.Client.UI/Components/Common/NewsRotator.razor"),
        "        @if (ViewState.IsInitializing)",
        "    </div>\n</div>",
        """        @if (ViewState.IsInitialized == true && ViewState.CurrentFeed != null)
        {
            <NewsRotatorItem Image="@ViewState.CurrentFeed.Image.Url" Title="@ViewState.CurrentFeed.Title" Summary="@ViewState.CurrentFeed.Summary" Url="@ViewState.CurrentFeed.Link?.Url" ChannelImage="@ViewState.CurrentFeedChannel?.Image?.Url" />
        }
        else
        {
            <NewsRotatorItem Title="Gizmo Shell Demo"
                             Summary="Native news, applications, products and launch controls are ready for live theme preview." />
        }""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "            _applicationEnterprises = Enumerable.Range(1, 5).Select(i => new UserApplicationEnterpriseModel()",
        "            _userApplicationCategories = Enumerable.Range(1, 5).Select(i => new UserApplicationCategoryModel()",
        """            _applicationEnterprises = new List<UserApplicationEnterpriseModel>()
            {
                new() { Id = 1, Name = "Valve" },
                new() { Id = 2, Name = "Valve Corporation" },
                new() { Id = 3, Name = "Epic Games" },
                new() { Id = 4, Name = "Riot Games" }
            };""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "            _userApplicationLinks = new List<UserApplicationLinkModel>()",
        "            List<string> executableNames = new List<string>()",
        """            _userApplicationLinks = new List<UserApplicationLinkModel>()
            {
                new() { Id = 1, ApplicationId = 1, Caption = "Official information", Description = "Product overview and release notes", Url = "https://example.invalid/apps/cs2", DisplayOrder = 1 },
                new() { Id = 2, ApplicationId = 1, Caption = "Player support", Description = "Help and account information", Url = "https://example.invalid/apps/cs2/support", DisplayOrder = 2 },
                new() { Id = 3, ApplicationId = 2, Caption = "Official information", Description = "Product overview and release notes", Url = "https://example.invalid/apps/dota-2", DisplayOrder = 1 },
                new() { Id = 4, ApplicationId = 2, Caption = "Player support", Description = "Help and account information", Url = "https://example.invalid/apps/dota-2/support", DisplayOrder = 2 },
                new() { Id = 5, ApplicationId = 3, Caption = "Official information", Description = "Product overview and release notes", Url = "https://example.invalid/apps/fortnite", DisplayOrder = 1 },
                new() { Id = 6, ApplicationId = 3, Caption = "Player support", Description = "Help and account information", Url = "https://example.invalid/apps/fortnite/support", DisplayOrder = 2 },
                new() { Id = 7, ApplicationId = 4, Caption = "Official information", Description = "Product overview and release notes", Url = "https://example.invalid/apps/valorant", DisplayOrder = 1 },
                new() { Id = 8, ApplicationId = 4, Caption = "Player support", Description = "Help and account information", Url = "https://example.invalid/apps/valorant/support", DisplayOrder = 2 }
            };""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "            List<string> executableNames = new List<string>()",
        "            #region PRODUCT GROUPS",
        """            _userExecutables = new List<UserExecutableModel>()
            {
                new()
                {
                    Id = 1,
                    ApplicationId = 1,
                    Caption = "CS2",
                    Description = "Launch Counter-Strike 2",
                    PersonalFiles = Enumerable.Empty<UserExecutablePersonalFileModel>(),
                    ImageId = 1,
                    Accessible = true,
                    Options = ExecutableOptionType.QuickLaunch
                },
                new()
                {
                    Id = 2,
                    ApplicationId = 2,
                    Caption = "Dota 2",
                    Description = "Launch Dota 2",
                    PersonalFiles = Enumerable.Empty<UserExecutablePersonalFileModel>(),
                    ImageId = 2,
                    Accessible = true,
                    Options = ExecutableOptionType.QuickLaunch
                },
                new()
                {
                    Id = 3,
                    ApplicationId = 3,
                    Caption = "Fortnite",
                    Description = "Launch Fortnite",
                    PersonalFiles = Enumerable.Empty<UserExecutablePersonalFileModel>(),
                    ImageId = 3,
                    Accessible = true,
                    Options = ExecutableOptionType.QuickLaunch
                },
                new()
                {
                    Id = 4,
                    ApplicationId = 4,
                    Caption = "Valorant",
                    Description = "Launch Valorant",
                    PersonalFiles = Enumerable.Empty<UserExecutablePersonalFileModel>(),
                    ImageId = 4,
                    Accessible = true,
                    Options = ExecutableOptionType.QuickLaunch
                }
            };""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "        public Task<IEnumerable<PopularApplicationModel>> UserPopularApplicationsGetAsync(UserPopularApplicationsFilter filters, CancellationToken cancellationToken = default)",
        "        public Task<IEnumerable<PopularExecutableModel>> UserPopularExecutablesGetAsync(UserPopularExecutablesFilter filters, CancellationToken cancellationToken = default)",
        """        public Task<IEnumerable<PopularApplicationModel>> UserPopularApplicationsGetAsync(UserPopularApplicationsFilter filters, CancellationToken cancellationToken = default)
        {
            var popular = Enumerable.Range(1, 4).Select(i => new PopularApplicationModel()
            {
                Id = i,
                TotalExecutionTime = 500 - (i * 50)
            }).AsEnumerable();

            return Task.FromResult(popular);
        }

""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "        public Task<IEnumerable<PopularExecutableModel>> UserPopularExecutablesGetAsync(UserPopularExecutablesFilter filters, CancellationToken cancellationToken = default)",
        "        public Task<IEnumerable<PopularProductModel>> UserPopularProductsGetAsync(UserPopularProductsFilter filters, CancellationToken cancellationToken = default)",
        """        public Task<IEnumerable<PopularExecutableModel>> UserPopularExecutablesGetAsync(UserPopularExecutablesFilter filters, CancellationToken cancellationToken = default)
        {
            var popular = Enumerable.Range(1, 4).Select(i => new PopularExecutableModel()
            {
                Id = i,
                TotalExecutionTime = 400 - (i * 40)
            }).AsEnumerable();

            return Task.FromResult(popular);
        }

""",
    ),
    (
        Path("Submodules/Gizmo.Client.UI.Services/Gizmo.Client.UI.Services/Client/TestClient.cs"),
        "        public Task<IEnumerable<PopularProductModel>> UserPopularProductsGetAsync(UserPopularProductsFilter filters, CancellationToken cancellationToken = default)",
        "        public Task<HostQRCodeResult> HostQRCodeGeneratAsync(CancellationToken cancellationToken = default)",
        """        public Task<IEnumerable<PopularProductModel>> UserPopularProductsGetAsync(UserPopularProductsFilter filters, CancellationToken cancellationToken = default)
        {
            var popular = Enumerable.Range(101, 4).Select(i => new PopularProductModel()
            {
                Id = i,
                TotalPurchases = 500 - ((i - 100) * 50)
            }).AsEnumerable();

            return Task.FromResult(popular);
        }

""",
    ),
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
                    ImageId = 1,
                    AddDate = new DateTime(2023, 9, 28),
                    ReleaseDate = new DateTime(2023, 9, 27)
                },
                new()
                {
                    Id = 2,
                    ApplicationCategoryId = 2,
                    Title = "Dota 2",
                    Description = "Team strategy title rendered by the real Gizmo application card.",
                    PublisherId = 2,
                    ImageId = 2,
                    AddDate = new DateTime(2013, 7, 10),
                    ReleaseDate = new DateTime(2013, 7, 9)
                },
                new()
                {
                    Id = 3,
                    ApplicationCategoryId = 3,
                    Title = "Fortnite",
                    Description = "Battle royale demo entry with the native hover and category UI.",
                    PublisherId = 3,
                    ImageId = 3,
                    AddDate = new DateTime(2017, 7, 22),
                    ReleaseDate = new DateTime(2017, 7, 21)
                },
                new()
                {
                    Id = 4,
                    ApplicationCategoryId = 4,
                    Title = "Valorant",
                    Description = "Tactical team shooter used for deterministic theme preview coverage.",
                    PublisherId = 4,
                    ImageId = 4,
                    AddDate = new DateTime(2020, 6, 3),
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
                    DefaultImageId = 101,
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
                    DefaultImageId = 102,
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
                    DefaultImageId = 103,
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
                    DefaultImageId = 104,
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
    if os.name == "nt" and command[0].lower() == "npm":
        command = ["npm.cmd", *command[1:]]
    print("+", " ".join(command), flush=True)
    subprocess.run(command, cwd=cwd, check=True)


def copy_source_tree(source_root: Path, worktree: Path) -> None:
    print(f"+ copy {source_root} {worktree}", flush=True)
    shutil.copytree(
        source_root,
        worktree,
        ignore=shutil.ignore_patterns(
            "bin",
            "obj",
            "node_modules",
            ".vs",
            ".vscode/.ropeproject",
        ),
    )


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
            if (source_root / ".git").exists():
                try:
                    run(["git", "worktree", "prune"], cwd=source_root)
                    run(["git", "worktree", "add", "--detach", str(worktree), "HEAD"], cwd=source_root)
                    worktree_registered = True
                    run(["git", "submodule", "update", "--init", "--recursive"], cwd=worktree)
                except subprocess.CalledProcessError:
                    if worktree_registered:
                        subprocess.run(
                            ["git", "worktree", "remove", "--force", "--force", str(worktree)],
                            cwd=source_root,
                            check=False,
                        )
                        worktree_registered = False
                    if worktree.exists():
                        shutil.rmtree(worktree)
                    print("build-real-client: git worktree is unavailable; falling back to source copy.")
                    copy_source_tree(source_root, worktree)
            else:
                copy_source_tree(source_root, worktree)

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
