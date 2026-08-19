const { test, expect } = require('playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const realHostRuntimeMarkerPath = path.join(__dirname, '..', 'real-client', 'configurator-runtime.json');
let realHostRuntimeMarker = null;
try {
  realHostRuntimeMarker = JSON.parse(fs.readFileSync(realHostRuntimeMarkerPath, 'utf8'));
} catch {
  realHostRuntimeMarker = null;
}
const hasRealHostRuntime = realHostRuntimeMarker?.host === 'Gizmo.Client.UI.Host.Web';
const hasDemoLoginRuntime = hasRealHostRuntime && realHostRuntimeMarker.demoLogin === true;

const visibleColorKeys = [
  'shellBg',
  'shellBgElevated',
  'shellBgElevated2',
  'shellBgGlass',
  'shellBgSoft',
  'popupBg',
  'popupTextColor',
  'filterUtilityBg',
  'buttonInactiveBg',
  'shellText',
  'shellTextSoft',
  'shellTextGhost',
  'bodyTextColor',
  'headingColor',
  'headingTextSoft',
  'linkColor',
  'linkHoverColor',
  'iconColor',
  'iconMutedColor',
  'iconActiveColor',
  'iconSuccessColor',
  'iconWarningColor',
  'iconDangerColor',
  'shellAccent',
  'shellAccentDeep',
  'shellAccentHover',
  'shellWarning',
  'shellSuccess',
  'shellDanger',
  'shellBorder',
  'shellBorderStrong',
  'borderColor',
  'borderStrongColor',
  'borderHoverColor',
  'borderFocusColor',
  'shadowColor',
  'loginPanelBg',
  'loginHeroBg',
  'loginCardBg',
  'loginOverlayBg',
  'loginSeparatorColor',
  'loginQrTitleColor',
  'loginQrTextColor',
  'timelineItemColor',
  'timelineItemBg',
  'timeProductExpirationTextColor',
  'timeProductExpirationBg',
  'userLinksHoverColor',
  'selectedStateBg',
  'selectedStateTextColor',
];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('color picker swatches use a 1px outline', async ({ page }) => {
  await expect(page.locator('.color-picker-shell').first()).toHaveCSS('border-top-width', '1px');
});

async function fillColor(page, key, value) {
  const mode = page.locator('[data-settings-mode="advanced"]');
  if (await mode.getAttribute('aria-pressed') !== 'true') await mode.click();
  const input = page.locator(`[data-color-text="${key}"]`);
  await input.evaluate((element) => {
    const group = element.closest('details.color-settings-group');
    const section = element.closest('details.settings-section');
    if (group) group.open = true;
    if (section) section.open = true;
  });
  await input.fill(value);
}

async function revealField(page, selector) {
  const mode = page.locator('[data-settings-mode="advanced"]');
  if (await mode.getAttribute('aria-pressed') !== 'true') await mode.click();
  const field = page.locator(selector);
  await field.evaluate((element) => {
    const group = element.closest('details.color-settings-group');
    const section = element.closest('details.settings-section');
    if (group) group.open = true;
    if (section) section.open = true;
  });
  return field;
}

test('compact palette derives legacy tokens and Windows taskbar color', async ({ page }) => {
  await expect(page.locator('[data-color-text]')).toHaveCount(visibleColorKeys.length);
  await expect(page.locator('.color-settings-group')).toHaveCount(10);
  await expect(page.locator('#applyThemeBtn')).toHaveCount(0);

  const renderedKeys = await page.locator('[data-color-text]').evaluateAll((inputs) => inputs.map((input) => input.dataset.colorText));
  expect(renderedKeys).toEqual(visibleColorKeys);

  await fillColor(page, 'shellBg', '#112233');
  await fillColor(page, 'shellBgElevated2', '#123987');
  await fillColor(page, 'popupBg', '#334455');
  await fillColor(page, 'popupTextColor', '#BADA55');
  await fillColor(page, 'shellAccentHover', '#AABBCC');
  await fillColor(page, 'filterUtilityBg', '#224466');
  await fillColor(page, 'userLinksHoverColor', '#AABBCC');
  await fillColor(page, 'borderFocusColor', '#00FF11');
  await fillColor(page, 'shellWarning', '#FEDCBA');
  await fillColor(page, 'timelineItemColor', '#123456');
  await fillColor(page, 'timelineItemBg', 'rgba(11, 22, 33, 0.5)');
  await fillColor(page, 'timeProductExpirationTextColor', '#ABCDEF');
  await fillColor(page, 'timeProductExpirationBg', 'rgba(10, 20, 30, 0.4)');
  await fillColor(page, 'selectedStateBg', '#445566');
  await fillColor(page, 'selectedStateTextColor', '#F1E2D3');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-time-product-expiration-bg: rgba\(10, 20, 30, 0\.4\);/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-selected-bg: #445566;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-selected-text: #F1E2D3;/);

  const css = await page.locator('#cssOutput').inputValue();
  expect(css).toContain('--shell-bg: #112233;');
  expect(css).toContain('--shell-bg-elevated-2: #123987;');
  expect(css).toContain('--shell-popup-bg: #334455;');
  expect(css).toContain('--shell-popup-text: #BADA55;');
  expect(css).toContain('--shell-filter-utility-bg: #224466;');
  expect(css).toContain('--shell-user-links-hover: #AABBCC;');
  expect(css).toContain('--shell-border-focus: #00FF11;');
  expect(css).toContain('--shell-warning: #FEDCBA;');
  expect(css).toContain('--shell-timeline-item: #123456;');
  expect(css).toContain('--shell-timeline-item-bg: rgba(11, 22, 33, 0.5);');
  expect(css).toContain('--shell-time-product-expiration-text: #ABCDEF;');
  expect(css).toContain('--shell-time-product-expiration-bg: rgba(10, 20, 30, 0.4);');
  expect(css).toContain('--shell-selected-bg: #445566;');
  expect(css).toContain('--shell-selected-text: #F1E2D3;');
  expect(css).toContain('--shell-icon-active:');
  expect(css).toContain('--shell-heading:');
  expect(css).toContain('--shell-border-hover:');
  expect(css).toContain('--shell-shadow-color:');
  expect(css).toContain('--shell-focus-inset: inset 0 0 0');
  expect(css).toContain('--shell-button-radius-outer:');
  expect(css).toContain('--shell-button-radius-inner:');
  expect(css).toContain('--shell-input-radius-outer:');
  expect(css).toContain('--shell-input-radius-inner:');
  expect(css).toContain('--shell-login-panel-bg:');
  expect(css).toContain('--shell-login-overlay-bg:');
  expect(css).toContain('.giz-login__login');
  expect(css).toContain('.giz-icon [fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-dropdown-menu {');
  expect(css).toContain('background: transparent !important;');
  expect(css).toContain('[client-theme] .giz-dropdown-menu__content.giz-active-apps {');
  expect(css).toContain('max-height: min(38rem, calc(100vh - var(--shell-header-height) - 2rem)) !important;');
  expect(css).toContain('[client-theme] .giz-menu-notifications__footer');
  expect(css).toContain('[client-theme] .giz-menu-notifications__footer__action');
  expect(css).toContain('[client-theme] .giz-app-details-card-brand-info');
  expect(css).toContain('[client-theme] .giz-user-online-deposit__submitted__qr__label');
  expect(css).toContain('[client-theme] .giz-user-online-deposit__submitted__action__label');
  expect(css).toContain('background: var(--shell-popup-bg) !important;');
  expect(css).toContain('background-color: var(--shell-popup-bg) !important;');
  expect(css).toContain('color: var(--shell-popup-text) !important;');
  expect(css).toContain('[client-theme] .giz-header__modules-menu-item > a svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-app-card svg');
  expect(css).toContain('[client-theme] .giz-app-card svg *:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-app-card svg path:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-app-card svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-app-card__content__image svg path[stroke]:not([stroke="none"])');
  expect(css).toContain('[client-theme] .giz-app-details-card svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-profile-section-item__icon svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-header__user-menu-item svg path[stroke]:not([stroke="none"])');
  expect(css).toContain('[client-theme] svg [fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] svg [stroke]:not([stroke="none"])');
  expect(css).toContain('[client-theme] .giz-product-card__content__image svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-product-details__product__info__image svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-product-time-image-wrapper svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-timeline svg path[stroke]:not([stroke="none"])');
  expect(css).toContain('[client-theme] .giz-product-card__content__image .giz-default-image img');
  expect(css).toContain('drop-shadow(400px 0 0 var(--shell-icon)) !important;');
  expect(css).toContain('[client-theme] .giz-global-search:focus-within');
  expect(css).toContain('[client-theme] .giz-header__global-search:focus-within');
  expect(css).toContain('[client-theme] .giz-input-root--outline:focus-within');
  expect(css).toContain('box-shadow: var(--shell-focus-inset) !important;');
  expect(css).toContain('[client-theme] .giz-input-label {');
  expect(css).toMatch(/\[client-theme\] \.giz-input-label \{[\s\S]*?border-radius: var\(--shell-input-radius-outer\) !important;/);
  expect(css).toContain('padding-inline: 0.25rem !important;');
  expect(css).toContain('[client-theme] .giz-dialog .giz-input-label');
  expect(css).toContain('[client-theme] .giz-login-card .giz-input-label');
  expect(css).toContain('[client-theme] .giz-main-container .giz-login__login .giz-input-label');
  expect(css).toContain('border: 0 !important;');
  expect(css).toContain('box-shadow: none !important;');
  expect(css).toContain('border-color: var(--shell-border-focus) !important;');
  expect(css).toContain('[client-theme] .giz-user-links-item:hover {');
  expect(css).toContain('color: var(--shell-user-links-hover) !important;');
  expect(css).toContain('background: transparent !important;');
  expect(css).toContain('background-color: transparent !important;');
  expect(css).toContain('[client-theme] .giz-user-links-item:hover .giz-user-links-item__icon {');
  expect(css).toContain('[client-theme] .giz-section__header__filters .giz-button-group');
  expect(css).toContain('background: var(--shell-filter-utility-bg) !important;');
  expect(css).toContain('[client-theme] .giz-section__header__filters__title');
  expect(css).toContain('[client-theme] .giz-section__header__filters label');
  expect(css).toContain('[client-theme] .giz-apps-filters label');
  expect(css).toContain('[client-theme] .giz-chip {');
  expect(css).toContain('border-radius: var(--shell-input-radius-outer) !important;');
  expect(css).toContain('[client-theme] .giz-button {');
  expect(css).toContain('border-radius: var(--shell-button-radius-outer) !important;');
  expect(css).toContain('[client-theme] .quick-launcher-switch .giz-button');
  expect(css).toContain('[client-theme] .quick-select .giz-button');
  expect(css).toContain('[client-theme] .giz-user-online-deposit-dialog .quick-select button');
  expect(css).toContain('overflow: hidden !important;');
  expect(css).toContain('[client-theme] .giz-chip .giz-chip__label');
  expect(css).toContain('[client-theme] .giz-chip .giz-icon');
  expect(css).toContain('[client-theme] .giz-chip.active');
  expect(css).toContain('[client-theme] .giz-chip.active *');
  expect(css).toContain('[client-theme] .giz-filters-icon');
  expect(css).toContain('[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear .giz-icon');
  expect(css).toContain('[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg path {');
  expect(css).toContain('[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg path[fill]:not([fill="none"])');
  expect(css).toContain('[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg path[stroke]:not([stroke="none"])');
  expect(css).toContain('[client-theme] .giz-select__dropdown .giz-list-item.selected');
  expect(css).toContain('[client-theme] .giz-select__dropdown .giz-list-item.active');
  expect(css).toContain('[client-theme] .giz-user-online-deposit .giz-button-group .giz-button.selected');
  expect(css).toContain('[client-theme] .giz-user-online-deposit-dialog .quick-select .giz-button.active');
  expect(css).toContain('background: var(--shell-selected-bg) !important;');
  expect(css).toContain('color: var(--shell-selected-text) !important;');
  expect(css).toContain('[client-theme] .giz-data-grid > thead th');
  expect(css).toContain('background: var(--shell-bg-elevated) !important;');
  expect(css).toContain('[client-theme] .giz-home__header__ads');
  expect(css).toContain('[client-theme] .live-ad-card--monster');
  expect(css).toContain('background: var(--shell-product-card-bg) !important;');
  expect(css).toContain('[client-theme] .giz-app-card__content--hovered');
  expect(css).toContain('border-radius: var(--shell-card-radius-inner) !important;');
  expect(css).toContain('[client-theme] .giz-app-card__content__image img');
  expect(css).toContain('[client-theme] .giz-app-card__content__image picture img');
  expect(css).toContain('clip-path: inset(0 round var(--shell-card-radius-inner)) !important;');
  expect(css).not.toMatch(/\.giz-product-card__content__image,\s*\n\[client-theme\] \.giz-product-card__content__image img\s*{\s*border-radius: var\(--shell-card-radius-inner\) !important;\s*overflow: hidden !important;\s*clip-path:/);
  expect(css).toContain('[client-theme] .giz-timeline-item {');
  expect(css).toContain('background: var(--shell-timeline-item-bg) !important;');
  expect(css).toMatch(/\[client-theme\] \.giz-timeline-item \{[\s\S]*?border-radius: var\(--shell-input-radius-outer\) !important;/);
  expect(css).toContain('[client-theme] .giz-time-product-expiration,');
  expect(css).toContain('[client-theme] .giz-product-details__product__info__additional__availability');
  expect(css).toContain('[client-theme] .giz-product-details__product__info__additional__expirations__body .giz-product-expiration');
  expect(css).toContain('background: var(--shell-time-product-expiration-bg) !important;');
  expect(css).toContain('background-color: var(--shell-time-product-expiration-bg) !important;');
  expect(css).toMatch(/\[client-theme\] \.giz-time-product-expiration,[\s\S]*?border-radius: var\(--shell-input-radius-outer\) !important;/);
  expect(css).toMatch(/\[client-theme\] \.giz-password-tooltip \{[\s\S]*?border-radius: var\(--shell-panel-radius-outer\) !important;/);
  expect(css).toMatch(/\[client-theme\] \.giz-dropdown-menu__content \{[\s\S]*?border-radius: var\(--shell-panel-radius-outer\);/);
  expect(css).toMatch(/\[client-theme\] \.giz-dialog > \.giz-card,[\s\S]*?border-radius: var\(--shell-modal-radius-outer\);/);
  expect(css).toContain('[client-theme] .giz-shop__body::before');
  expect(css).toContain('[client-theme] .giz-shop__products__body::before');
  expect(css).toContain('[client-theme] .giz-product-details__body::before');
  expect(css).toContain('[client-theme] .giz-background::after');
  expect(css).toContain('[client-theme] .giz-login__adv__background::after');
  expect(css).toContain('[client-theme] .giz-app__body::before');
  expect(css).toContain('[client-theme] .giz-apps__body::before');
  expect(css).toContain('[client-theme] .giz-home__body::before');
  expect(css).toContain('[client-theme] .giz-profile::before');
  expect(css).toContain('[client-theme] .giz-home__header__quick-launch');
  expect(css).toContain('[client-theme] .giz-home__header__quick-launch > *');
  expect(css).toContain('z-index: 30 !important;');
  expect(css).toContain('isolation: isolate !important;');
  expect(css).toContain('[client-theme] .giz-dock-item-tooltip');
  expect(css).toContain('z-index: 2147483647 !important;');
  expect(css).toContain('backdrop-filter: blur(var(--shell-wallpaper-blur)) !important;');
  expect(css).toContain('-webkit-backdrop-filter: blur(var(--shell-blur)) !important;');
  expect(css).toContain('backdrop-filter: blur(var(--shell-blur)) !important;');
  expect(css).toContain('"AccentColor"=dword:ff332211');
  expect(css).toContain('[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Accent]');
  expect(css).toContain('"AccentColorMenu"=dword:ff332211');
  expect(css).toContain('"AccentPalette"=hex:11,22,33,00,11,22,33,00');
  expect(css).toContain('Windows Registry Editor Version 5.00');

  const ruleCount = await page.evaluate((generatedCss) => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(generatedCss);
    return sheet.cssRules.length;
  }, css);
  expect(ruleCount).toBeGreaterThan(100);
});

test('color, font and effect controls update preview and CSS automatically', async ({ page }) => {
  await fillColor(page, 'shellBg', '#264057');
  await (await revealField(page, '[data-font-select="uiFontFamily"]')).selectOption("'Inter', system-ui, sans-serif");
  await (await revealField(page, '[data-range-input="cardRadiusOuter"]')).fill('20');
  const buttonRadius = await revealField(page, '[data-range-number="buttonRadiusOuter"]');
  await buttonRadius.fill('22');
  await buttonRadius.blur();
  const inputRadius = await revealField(page, '[data-range-number="inputRadiusOuter"]');
  await inputRadius.fill('18');
  await inputRadius.blur();

  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-bg: #264057;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-font-ui: 'Inter', system-ui, sans-serif;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-card-radius-outer: 20px;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-button-radius-outer: 22px;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-input-radius-outer: 18px;/);
  await expect(page.locator('[data-range-input="buttonRadiusOuter"]')).toHaveValue('22');
  await expect(page.locator('[data-range-input="inputRadiusOuter"]')).toHaveValue('18');
  await expect(page.locator('#previewRoot')).toHaveAttribute('style', /--shell-bg: #264057;/);
  await expect(page.locator('#applyState')).toHaveText('Preview синхронизирован');

  await fillColor(page, 'shellBg', '#');
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue('#');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-bg: #264057;/);
  await expect(page.locator('#previewRoot')).toHaveAttribute('style', /--shell-bg: #264057;/);
});

test('preset dropdown applies every theme, exposes Custom and Reset selects Original Gizmo', async ({ page }) => {
  const presetSelect = page.locator('#presetSelect');
  const presetValues = await presetSelect.locator('option').evaluateAll((options) => options.map((option) => option.value));
  expect(presetValues).toHaveLength(11);

  for (const value of presetValues) {
    await presetSelect.selectOption(value);
    await expect(presetSelect).toHaveValue(value);
    await expect(page.locator('[data-color-text]')).toHaveCount(visibleColorKeys.length);
    await expect(page.locator('[data-range-number="buttonRadiusOuter"]')).toHaveValue('16');
    await expect(page.locator('[data-range-number="inputRadiusOuter"]')).toHaveValue('16');
    await expect(page.locator('#cssOutput')).toHaveValue(/--shell-button-radius-outer: 16px;/);
    await expect(page.locator('#cssOutput')).toHaveValue(/--shell-input-radius-outer: 16px;/);
    await expect(page.locator('#cssOutput')).toHaveValue(/--shell-timeline-item-bg: rgba\(\d+, \d+, \d+, 0\);/);
    if (value !== 'original-gizmo') {
      const css = await page.locator('#cssOutput').inputValue();
      const accentHover = css.match(/--shell-accent-hover:\s*([^;]+);/)?.[1];
      const userLinksHover = css.match(/--shell-user-links-hover:\s*([^;]+);/)?.[1];
      expect(userLinksHover).toBe(accentHover);
    }
  }

  await fillColor(page, 'shellBg', '#123456');
  await expect(presetSelect).toHaveValue('custom');
  await expect(presetSelect.locator('option[value="custom"]')).toHaveText('Custom — Текущие изменения');

  await page.locator('#resetThemeBtn').click();
  await expect(presetSelect).toHaveValue('original-gizmo');
});

test('generated CSS round-trips through Import without expanding the palette', async ({ page }) => {
  await fillColor(page, 'shellBg', '#152637');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-bg: #152637;/);
  const exportedCss = await page.locator('#cssOutput').inputValue();

  await page.locator('#importCssInput').setInputFiles({
    name: 'roundtrip.css',
    mimeType: 'text/css',
    buffer: Buffer.from(exportedCss),
  });

  await expect(page.locator('#importCssStatus')).toContainText('roundtrip.css');
  await expect(page.locator('[data-color-text]')).toHaveCount(visibleColorKeys.length);
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue('#152637');
});

test('legacy card-surface imports map to the shared panels and cards color', async ({ page }) => {
  await page.locator('#importCssInput').setInputFiles({
    name: 'legacy-card-surface.css',
    mimeType: 'text/css',
    buffer: Buffer.from(':root { --shell-product-card-bg: #102030; }'),
  });

  await expect(page.locator('[data-color-text="shellBgElevated"]')).toHaveValue('#102030');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-app-card-bg: #102030;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-product-card-bg: #102030;/);
});

test('Real Host.Web is the only preview and auxiliary header blocks are omitted', async ({ page }) => {
  await expect(page.locator('[data-preview-surface]')).toHaveCount(0);
  await expect(page.locator('#previewModeTabs')).toHaveCount(0);
  await expect(page.locator('.preview-panel > .panel__header')).toHaveCount(0);
  await expect(page.locator('.export-panel > .panel__header')).toHaveCount(0);
  await expect(page.locator('.export-summary-group')).toHaveCount(0);
  await expect(page.locator('details.settings-section')).toHaveCount(11);
  await expect(page.locator('details.color-settings-group')).toHaveCount(10);
  await expect(page.locator('.preview-coverage, [data-preview-coverage], [data-highlight-control]')).toHaveCount(0);
  await expect(page.locator('#previewRoot')).toBeHidden();
  await expect(page.locator('#realPreviewShell')).toBeVisible();
  await expect(page.locator('#realPreviewFrame')).toHaveAttribute('data-src', './real-client/');
  if (hasRealHostRuntime) {
    await expect(page.locator('#realPreviewFrame')).toHaveAttribute('src', './real-client/');
  }
  await expect(page.locator('#styleMapLegend, #previewInspectBtn, [data-style-binding], [data-control-binding-card]')).toHaveCount(0);
});

test('desktop layout keeps the real preview visible beside the settings', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.reload();

  const previewPanel = page.locator('.preview-panel');
  const previewBox = await previewPanel.boundingBox();
  const topbarBox = await page.locator('.editor-topbar').boundingBox();
  const controlsBox = await page.locator('.controls-panel').boundingBox();
  expect(previewBox).not.toBeNull();
  expect(topbarBox).not.toBeNull();
  expect(controlsBox).not.toBeNull();
  expect(previewBox.y).toBeLessThan(100);
  expect(previewBox.width).toBeGreaterThanOrEqual(800);
  expect(controlsBox.x).toBe(0);
  expect(previewBox.x).toBeGreaterThanOrEqual(controlsBox.width);
  expect(topbarBox.width).toBe(1280);
  expect(controlsBox.height).toBeLessThanOrEqual(900 - topbarBox.height);
  expect(await page.locator('.controls-panel').evaluate((panel) => panel.scrollHeight > panel.clientHeight)).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('all control sections stay discoverable in advanced mode and CSS opens in a dialog', async ({ page }) => {
  await page.locator('[data-settings-mode="advanced"]').click();
  const expectedSectionHosts = [
    '#surfaceColorControls',
    '#fontControls',
    '#typographyColorControls',
    '#iconColorControls',
    '#accentColorControls',
    '#borderColorControls',
    '#borderRangeControls',
    '#radiusRangeControls',
    '#shadowColorControls',
    '#shadowRangeControls',
    '#loginColorControls',
    '#componentColorControls',
    '#layoutRangeControls',
  ];
  for (const selector of expectedSectionHosts) {
    await expect(page.locator(selector)).toBeAttached();
  }

  const groups = page.locator('details.color-settings-group');
  await expect(groups).toHaveCount(10);
  await expect(page.locator('[data-font-select]')).toHaveCount(2);
  await expect(page.locator('[data-font-range]')).toHaveCount(2);
  await expect(page.locator('[data-font-range-number]')).toHaveCount(2);
  await expect(page.locator('[data-range-input]')).toHaveCount(19);
  await expect(page.locator('[data-range-number]')).toHaveCount(19);
  await expect(page.locator('#loginColorControls [data-color-text]')).toHaveCount(7);
  await expect(page.locator('#surfaceColorControls [data-color-text]')).toHaveCount(9);
  await expect(page.locator('#iconColorControls [data-color-text]')).toHaveCount(6);
  await expect(page.locator('#borderColorControls [data-color-text]')).toHaveCount(6);
  await expect(page.locator('#borderRangeControls [data-range-input]')).toHaveCount(3);
  await expect(page.locator('#radiusRangeControls [data-range-input]')).toHaveCount(6);
  await expect(page.locator('#shadowColorControls [data-color-text]')).toHaveCount(1);
  await expect(page.locator('#shadowRangeControls [data-range-input]')).toHaveCount(8);
  await expect(page.locator('#componentColorControls [data-color-text]')).toHaveCount(7);
  await expect(page.locator('#layoutRangeControls [data-range-input]')).toHaveCount(2);
  expect(await groups.evaluateAll((items) => items.every((item) => !item.hidden))).toBe(true);
  expect(await groups.evaluateAll((items) => items.every((item) => item.scrollWidth <= item.clientWidth))).toBe(true);
  expect(await page.locator('.controls-panel').evaluate((panel) => panel.scrollWidth <= panel.clientWidth)).toBe(true);
  await fillColor(page, 'shellText', '#EAEAEA');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-text: #EAEAEA;/);

  await page.locator('#toggleCssOutputBtn').click();
  await expect(page.locator('#cssDialog')).toBeVisible();
  await expect(page.locator('#fileNameInput')).toHaveValue('gizmo-shell-custom.css');
  await expect(page.locator('#copyCssBtn')).toBeVisible();
  await page.locator('#closeCssDialogBtn').click();
  await expect(page.locator('#cssDialog')).not.toBeVisible();
});

test('quick settings, search and section accordions reduce the control wall', async ({ page }) => {
  await expect(page.locator('[data-settings-mode="quick"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-color-text="selectedStateBg"]')).not.toBeVisible();
  await expect(page.locator('details.settings-section[open]')).toHaveCount(2);

  await page.locator('[data-settings-mode="advanced"]').click();
  await expect(page.locator('[data-color-text="selectedStateBg"]')).toBeAttached();

  await page.locator('#controlSearchInput').fill('таймлайн');
  await expect(page.locator('#controlSearchStatus')).toContainText('Найдено настроек:');
  await expect(page.locator('[data-color-text="timelineItemColor"]')).toBeVisible();
  await expect(page.locator('[data-color-text="shellBg"]')).not.toBeVisible();
});

test('theme history and per-control reset recover live changes', async ({ page }) => {
  const defaultBackground = await page.locator('[data-color-text="shellBg"]').inputValue();
  await fillColor(page, 'shellBg', '#123456');
  await expect(page.locator('#undoThemeBtn')).toBeEnabled();
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-bg: #123456;/);

  await page.keyboard.press('Control+z');
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue(defaultBackground);
  await expect(page.locator('#redoThemeBtn')).toBeEnabled();

  await page.keyboard.press('Control+Shift+z');
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue('#123456');
  await page.locator('.theme-control-card[data-control-keys~="shellBg"] [data-reset-control]').click();
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue(defaultBackground);
});

test('mobile layout keeps controls in the document scroll and actions under an explicit menu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();

  const mobileLayout = await page.locator('.controls-panel').evaluate((panel) => ({
    panelScrolls: panel.scrollHeight > panel.clientHeight,
    pageScrolls: document.documentElement.scrollHeight > document.documentElement.clientHeight,
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth,
  }));
  expect(mobileLayout.panelScrolls).toBe(false);
  expect(mobileLayout.pageScrolls).toBe(true);
  expect(mobileLayout.documentWidth).toBe(mobileLayout.viewportWidth);

  await expect(page.locator('#toggleEditorActionsBtn')).toBeVisible();
  await expect(page.locator('#importCssBtn')).not.toBeVisible();
  await page.locator('#toggleEditorActionsBtn').click();
  await expect(page.locator('#importCssBtn')).toBeVisible();
});

test('wallpaper controls can create a theme palette from the uploaded image', async ({ page }) => {
  const wallpaperPngDataUrl = await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 4;
    canvas.height = 4;
    const context = canvas.getContext('2d');
    context.fillStyle = '#051018';
    context.fillRect(0, 0, 4, 4);
    context.fillStyle = '#F97316';
    context.fillRect(2, 0, 2, 4);
    return canvas.toDataURL('image/png');
  });
  const wallpaperPng = Buffer.from(wallpaperPngDataUrl.split(',')[1], 'base64');

  await expect(page.locator('#createThemeFromWallpaperBtn')).toBeVisible();
  await expect(page.locator('#createThemeFromWallpaperBtn')).toBeDisabled();
  await expect(page.locator('#wallpaperActionHint')).toContainText('Сначала загрузите обои');

  await page.locator('#wallpaperInput').setInputFiles({
    name: 'palette-source.png',
    mimeType: 'image/png',
    buffer: wallpaperPng,
  });

  await expect(page.locator('#createThemeFromWallpaperBtn')).toBeEnabled();
  await expect(page.locator('#wallpaperActionHint')).toContainText('Обои готовы');
  await page.locator('#createThemeFromWallpaperBtn').click();
  await expect(page.locator('#wallpaperStatus')).toContainText('Тема создана из обоев: palette-source.png');
  await expect(page.locator('[data-color-text="shellAccent"]')).not.toHaveValue('#3F8CFF');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-wallpaper-image: none;/);
  await expect(page.locator('#cssOutput')).not.toHaveValue(/data:image\/png;base64,/);
  await expect(page.locator('#cssOutput')).not.toHaveValue(/\.giz-background > img\s*{\s*display: none !important;/);
  await expect(page.locator('#cssOutput')).not.toHaveValue(/--shell-accent: #3F8CFF;/);

  await page.locator('#resetWallpaperBtn').click();
  await expect(page.locator('#createThemeFromWallpaperBtn')).toBeDisabled();
});

test('wallpaper upload applies to real Host.Web preview without embedding in exported CSS', async ({ page }) => {
  test.skip(!hasRealHostRuntime, 'Run npm run sync:real-client to verify wallpaper integration.');
  test.setTimeout(90_000);

  const wallpaperPng = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl2nH0AAAAASUVORK5CYII=',
    'base64',
  );
  const wallpaperFileName = 'wallpaper-";html{display:none}.png';
  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });

  await page.locator('#wallpaperInput').setInputFiles({
    name: wallpaperFileName,
    mimeType: 'image/png',
    buffer: wallpaperPng,
  });

  await expect(page.locator('#wallpaperStatus')).toContainText(wallpaperFileName);
  await expect(page.locator('#resetWallpaperBtn')).toBeEnabled();
  await expect(page.locator('#presetSelect')).toHaveValue('original-gizmo');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-wallpaper-image: none;/);
  await expect(page.locator('#cssOutput')).not.toHaveValue(/data:image\/png;base64,/);
  await expect(page.locator('#cssOutput')).not.toHaveValue(/\.giz-background > img\s*{\s*display: none !important;/);
  await expect(page.locator('#cssOutput')).not.toHaveValue(/\.giz-login__adv__background > img\s*{\s*opacity: 0 !important;/);
  await expect.poll(async () => realPreview.locator('html').evaluate((element) => getComputedStyle(element).backgroundImage)).toContain('data:image/png;base64');

  await page.locator('#presetSelect').selectOption('dark-blue');
  await expect(page.locator('#presetSelect')).toHaveValue('dark-blue');
  await expect(page.locator('#wallpaperStatus')).toContainText(wallpaperFileName);
  await expect(page.locator('#resetWallpaperBtn')).toBeEnabled();
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-wallpaper-image: none;/);
  await expect(page.locator('#cssOutput')).not.toHaveValue(/data:image\/png;base64,/);
  await expect.poll(async () => realPreview.locator('html').evaluate((element) => getComputedStyle(element).backgroundImage)).toContain('data:image/png;base64');

  await realPreview.getByRole('button', { name: 'Continue' }).click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/home');

  const nativeTopBackground = await realPreview.locator('.giz-background').evaluate((element) => {
    const image = element.querySelector(':scope > img');
    const overlayStyle = getComputedStyle(element, '::after');
    return {
      imageDisplay: image ? getComputedStyle(image).display : null,
      overlayBackdropFilter: overlayStyle.backdropFilter,
    };
  });
  expect(nativeTopBackground).toEqual({
    imageDisplay: 'none',
    overlayBackdropFilter: 'blur(12px)',
  });

  const wallpaperOverlay = await realPreview.locator('html').evaluate((element) => {
    const style = getComputedStyle(element, '::before');
    return {
      position: style.position,
      top: style.top,
      right: style.right,
      bottom: style.bottom,
      left: style.left,
      backdropFilter: style.backdropFilter,
    };
  });
  expect(wallpaperOverlay).toEqual({
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    backdropFilter: 'blur(12px)',
  });

  const exportedCss = await page.locator('#cssOutput').inputValue();
  await page.locator('#resetWallpaperBtn').click();
  await expect(page.locator('#wallpaperStatus')).toContainText('Стандартные обои Gizmo');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-wallpaper-image: none;/);

  await page.locator('#importCssInput').setInputFiles({
    name: 'wallpaper-roundtrip.css',
    mimeType: 'text/css',
    buffer: Buffer.from(exportedCss),
  });
  await expect(page.locator('#wallpaperStatus')).toContainText('Стандартные обои Gizmo');
  await expect(page.locator('#cssOutput')).not.toHaveValue(/data:image\/png;base64,/);
});

test('real Host.Web home uses the native news rotator without a configurator overlay', async ({ page }) => {
  test.skip(!hasDemoLoginRuntime, 'Run npm run sync:real-client with demoLogin=true to verify native Host.Web content.');
  test.setTimeout(90_000);

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/home');

  await expect(realPreview.locator('#gizmoConfiguratorDemoLayer')).toHaveCount(0);
  await expect(realPreview.locator('.gizmo-configurator-demo-main')).toHaveCount(0);
  await expect(realPreview.locator('.giz-news-rotator')).toHaveCount(1);
});

test('Home quick launch and news panels share the main panels and cards color', async ({ page }) => {
  test.skip(!hasDemoLoginRuntime, 'Run npm run sync:real-client with demoLogin=true to verify Home panel theming.');
  test.setTimeout(90_000);

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();
  const quickLaunch = realPreview.locator('.giz-home-apps__header__quick-launch');
  const newsPanel = realPreview.locator('.giz-home-apps__header__ads');
  await expect(quickLaunch).toBeVisible();
  await expect(newsPanel).toBeVisible();

  await fillColor(page, 'shellBgElevated', '#123456');
  await expect(page.locator('#cssOutput')).toHaveValue(/\.giz-home-apps__header__quick-launch,[\s\S]*?\.giz-home-apps__header__ads \{[\s\S]*?background: var\(--shell-bg-elevated\) !important;/);
  await expect.poll(async () => quickLaunch.evaluate((element) => getComputedStyle(element).backgroundColor)).toBe('rgb(18, 52, 86)');
  await expect.poll(async () => newsPanel.evaluate((element) => getComputedStyle(element).backgroundColor)).toBe('rgb(18, 52, 86)');
});

test('Quick Launch keeps the launcher glyph clean and the hover tooltip opaque', async ({ page }) => {
  test.skip(!hasDemoLoginRuntime, 'Run npm run sync:real-client with demoLogin=true to verify Quick Launch theming.');
  test.setTimeout(90_000);

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();
  const dockItem = realPreview.locator('.giz-dock-item').first();
  const launcherIcon = dockItem.locator('.giz-universal-executable__icon .giz-default-image');
  await expect(dockItem).toBeVisible();
  await expect.poll(async () => launcherIcon.evaluate((element) => getComputedStyle(element).backgroundColor)).toBe('rgba(0, 0, 0, 0)');

  await dockItem.hover();
  const hoverSurface = dockItem.locator('.giz-universal-executable');
  const tooltip = dockItem.locator('.giz-dock-item-tooltip');
  await expect(tooltip).toBeVisible();
  await expect.poll(async () => hoverSurface.evaluate((element) => getComputedStyle(element, '::before').opacity)).toBe('0');
  await expect.poll(async () => tooltip.evaluate((element) => getComputedStyle(element).backgroundColor !== 'rgba(0, 0, 0, 0)')).toBe(true);
});

test('Product and time offer hover details keep their text background transparent', async ({ page }) => {
  test.skip(!hasDemoLoginRuntime, 'Run npm run sync:real-client with demoLogin=true to verify product hover theming.');
  test.setTimeout(90_000);

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();

  const product = realPreview.locator('.giz-product-card.product').first();
  await product.hover();
  await expect.poll(async () => product.locator('.giz-product-card__content--hovered').evaluate((element) => getComputedStyle(element).backgroundImage)).toBe('none');

  await realPreview.locator('a[href="shop"]').click();
  const timeOffer = realPreview.locator('.giz-product-card.time').first();
  await timeOffer.scrollIntoViewIfNeeded();
  await timeOffer.hover();
  await expect.poll(async () => timeOffer.locator('.giz-product-card__content--hovered').evaluate((element) => getComputedStyle(element).backgroundImage)).toBe('none');
});

test('text color controls recolor real Host.Web typography instead of only nearby icons', async ({ page }) => {
  test.skip(!hasDemoLoginRuntime, 'Run npm run sync:real-client with demoLogin=true to verify live Host.Web text bindings.');
  test.setTimeout(90_000);

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/home');

  await fillColor(page, 'shellText', '#FF3366');
  await fillColor(page, 'shellTextSoft', '#00CC88');

  await realPreview.locator('a[href="apps"]').click();
  await expect.poll(async () => realPreview.locator('.giz-app-card__title').first().evaluate((element) => getComputedStyle(element).color)).toBe('rgb(255, 51, 102)');
  await expect.poll(async () => realPreview.locator('.giz-app-card__content__footer-category').first().evaluate((element) => getComputedStyle(element).color)).toBe('rgb(0, 204, 136)');

  await realPreview.locator('a[href="shop"]').click();
  await expect.poll(async () => realPreview.locator('.giz-product-card__price').first().evaluate((element) => getComputedStyle(element).color)).toBe('rgb(255, 51, 102)');
  await expect.poll(async () => realPreview.locator('.giz-product-card__title').first().evaluate((element) => getComputedStyle(element).color)).toBe('rgb(0, 204, 136)');

  await realPreview.getByRole('button', { name: 'PC 100', exact: true }).click();
  await realPreview.locator('a[href="profile"]').click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/profile');
  await expect.poll(async () => realPreview.locator('.giz-profile-section__header').first().evaluate((element) => getComputedStyle(element).color)).toBe('rgb(255, 51, 102)');
  await expect.poll(async () => realPreview.locator('.giz-profile-section-item__info__title').first().evaluate((element) => getComputedStyle(element).color)).toBe('rgb(0, 204, 136)');
  await expect.poll(async () => realPreview.locator('.giz-header__user-menu-item__icon').first().evaluate((element) => getComputedStyle(element).color)).toBe('rgb(63, 140, 255)');
});

test('native app placeholders and app-card hover use the active theme colors', async ({ page }) => {
  test.skip(!hasDemoLoginRuntime, 'Run npm run sync:real-client with demoLogin=true to verify native app-card theming.');
  test.setTimeout(90_000);

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();
  await realPreview.locator('a[href="apps"]').click();

  await fillColor(page, 'shellAccent', '#FF00AA');
  await fillColor(page, 'iconColor', '#FF00AA');
  await fillColor(page, 'shellBgElevated', '#102030');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-app-card-bg: #102030;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-product-card-bg: #102030;/);

  const card = realPreview.locator('.giz-app-card').first();
  const placeholder = card.locator('.giz-app-card__content__image > .giz-default-image > img');
  await expect(placeholder).toBeVisible();
  await expect.poll(async () => placeholder.evaluate((element) => getComputedStyle(element).opacity)).toBe('0');
  await expect.poll(async () => placeholder.evaluate((element) => getComputedStyle(element.parentElement, '::after').webkitMaskImage)).toContain('data:image/svg+xml;base64');
  await expect.poll(async () => placeholder.evaluate((element) => getComputedStyle(element.parentElement, '::after').backgroundColor)).toBe('rgb(255, 0, 170)');

  await card.hover();
  const hoverLauncherPlaceholder = card.locator('.giz-exe-popup .giz-universal-executable__icon .giz-default-image').first();
  await expect.poll(async () => card.locator('.giz-app-card__content__image__hovered').evaluate((element) => getComputedStyle(element).backgroundImage)).toContain('linear-gradient');
  await expect.poll(async () => card.locator('.giz-app-card__content__image__hovered').evaluate((element) => getComputedStyle(element).backgroundImage)).toContain('255, 0, 170');
  await expect.poll(async () => card.evaluate((element) => getComputedStyle(element).boxShadow)).toContain('255, 0, 170');
  await expect(hoverLauncherPlaceholder.locator('img')).toHaveCSS('opacity', '0');
  await expect.poll(async () => hoverLauncherPlaceholder.evaluate((element) => getComputedStyle(element, '::after').backgroundColor)).toBe('rgb(255, 0, 170)');
});

test('App Details uses the active panel and icon colors for its placeholder and launcher', async ({ page }) => {
  test.skip(!hasDemoLoginRuntime, 'Run npm run sync:real-client with demoLogin=true to verify App Details theming.');
  test.setTimeout(90_000);

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();
  await realPreview.locator('a[href="apps"]').click();

  await fillColor(page, 'shellBgElevated', '#123456');
  await fillColor(page, 'iconColor', '#FF00AA');
  const valorantCard = realPreview.locator('.giz-app-card', { hasText: 'Valorant' });
  await valorantCard.locator('button').click();
  const appDetails = realPreview.locator('.giz-app-details');
  await expect(appDetails).toBeVisible();

  const appPlaceholder = appDetails.locator('.giz-app-details__app__info__image .giz-default-image > img');
  const launcherPlaceholder = appDetails.locator('.giz-universal-executable__icon .giz-default-image > img').first();
  await expect.poll(async () => appDetails.locator('.giz-app-details__app__info__image').evaluate((element) => getComputedStyle(element).backgroundColor)).toBe('rgb(18, 52, 86)');
  await expect(appPlaceholder).toHaveCSS('opacity', '0');
  await expect.poll(async () => appPlaceholder.evaluate((element) => getComputedStyle(element.parentElement, '::after').backgroundColor)).toBe('rgb(255, 0, 170)');
  await expect(launcherPlaceholder).toHaveCSS('opacity', '0');
  await expect.poll(async () => launcherPlaceholder.evaluate((element) => getComputedStyle(element.parentElement, '::after').backgroundColor)).toBe('rgb(255, 0, 170)');
});

test('real Host.Web receives live CSS and exports the same theme without Gizmo Server', async ({ page }) => {
  test.skip(!hasRealHostRuntime, 'Run npm run sync:real-client to enable the real Host.Web integration test.');
  test.setTimeout(90_000);

  const browserErrors = [];
  page.on('pageerror', (error) => browserErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') browserErrors.push(message.text());
  });

  const realPreview = page.frameLocator('#realPreviewFrame');
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  if (hasDemoLoginRuntime) {
    await expect(realPreview.locator('input[type="text"]')).toHaveValue('demo');
    await expect(realPreview.locator('input[type="password"]')).toHaveValue('demo');
  }
  await expect(page.locator('#realPreviewShell')).toHaveClass(/is-ready/);
  await expect.poll(async () => realPreview.locator('body').evaluate(() => window.innerWidth)).toBe(1280);
  await expect(realPreview.locator('.giz-login__adv__background > img[src=""]')).toBeHidden();
  await expect.poll(async () => realPreview.locator('#gizmoConfiguratorTheme').first().evaluate((style) => style.textContent)).toContain('--shell-accent: #3F8CFF;');

  await fillColor(page, 'shellAccent', '#FF00AA');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-accent: #FF00AA;/);
  await expect.poll(async () => realPreview.locator('#gizmoConfiguratorTheme').first().evaluate((style) => style.textContent)).toContain('--shell-accent: #FF00AA;');
  await expect(realPreview.locator('#gizmoConfiguratorTheme')).toHaveCount(1);
  await expect.poll(async () => realPreview.locator('[client-theme]').first().evaluate((element) => (
    getComputedStyle(element).getPropertyValue('--shell-accent').trim()
  ))).toBe('#FF00AA');

  await expect(realPreview.locator('#gizmoConfiguratorStyleMap, .gizmo-style-map-highlight')).toHaveCount(0);

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#downloadCssBtn').click();
  const download = await downloadPromise;
  const downloadedPath = await download.path();
  expect(download.suggestedFilename()).toBe('gizmo-shell-custom.css');
  expect(fs.readFileSync(downloadedPath, 'utf8')).toContain('--shell-accent: #FF00AA;');

  if (!hasDemoLoginRuntime) {
    expect(browserErrors).toEqual([]);
    return;
  }

  await realPreview.getByRole('button', { name: 'Continue' }).click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/home');
  await expect(realPreview.locator('a[href="home"]')).toHaveClass(/active/);
  await expect(realPreview.getByText('02:37:00', { exact: true })).toBeVisible();
  await expect(realPreview.getByText('725', { exact: true })).toBeVisible();
  await expect.poll(async () => realPreview.locator('html').evaluate((element) => (
    getComputedStyle(element).backgroundImage
  ))).toContain('background.jpg');
  await expect(realPreview.locator('#gizmoConfiguratorPreviewBackdrop')).toHaveCount(1);

  await realPreview.locator('a[href="apps"]').click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/apps');
  await expect(realPreview.locator('a[href="apps"]')).toHaveClass(/active/);
  await expect(realPreview.locator('.giz-app-card')).toHaveCount(4);
  for (const title of ['CS2', 'Dota 2', 'Fortnite', 'Valorant']) {
    await expect(realPreview.locator('.giz-app-card__title', { hasText: title })).toHaveCount(1);
  }

  await realPreview.locator('a[href="shop"]').click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/shop');
  await expect(realPreview.locator('a[href="shop"]')).toHaveClass(/active/);
  await expect(realPreview.locator('.giz-product-card')).toHaveCount(5);
  for (const title of ['Cola', 'Energy', 'Sandwich', 'Snack', '3 Hour Gaming Pass']) {
    await expect(realPreview.locator('.giz-product-card__title', { hasText: title })).toHaveCount(1);
  }
  const timeProductCard = realPreview.locator('.giz-product-card', { hasText: '3 Hour Gaming Pass' });
  await timeProductCard.hover();
  expect((await timeProductCard.boundingBox()).width).toBeGreaterThan(150);
  await expect(timeProductCard.locator('.giz-timeline')).toBeVisible();
  await expect(timeProductCard.locator('.giz-timeline')).toContainText('180');
  await expect.poll(async () => realPreview.locator('[client-theme]').first().evaluate((element) => (
    getComputedStyle(element).getPropertyValue('--shell-accent').trim()
  ))).toBe('#FF00AA');

  await realPreview.getByRole('button', { name: 'PC 100', exact: true }).click();
  await realPreview.locator('a[href="profile"]').click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/profile');
  await expect(realPreview.locator('a[href="profile"].active')).toHaveCount(1);
  await expect(realPreview.locator('body')).toContainText('User details');

  await realPreview.locator('a[href="profile/purchases"]').click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/profile/purchases');
  await expect(realPreview.locator('.giz-profile-user-purchases')).toBeVisible();
  await expect(realPreview.locator('.giz-profile-user-purchases')).toContainText('3 Hour Gaming Pass');
  await expect(realPreview.locator('.giz-profile-user-purchases')).toContainText('Cola, Sandwich');
  await expect(realPreview.locator('.giz-profile-user-purchases')).toContainText('Energy');
  const purchasesSurfaceColors = await realPreview.locator('.giz-profile__body').evaluate((profile) => {
    const navigation = profile.querySelector('.giz-profile-navigation');
    const grid = profile.querySelector('.giz-data-grid');
    const header = grid?.querySelector('thead th');
    if (!navigation || !grid || !header) throw new Error('Profile purchases surface is incomplete');
    return {
      navigation: getComputedStyle(navigation).backgroundColor,
      grid: getComputedStyle(grid).backgroundColor,
      header: getComputedStyle(header).backgroundColor,
    };
  });
  expect(purchasesSurfaceColors.grid).toBe(purchasesSurfaceColors.navigation);
  expect(purchasesSurfaceColors.header).toBe(purchasesSurfaceColors.navigation);
  expect(browserErrors).toEqual([]);
});
