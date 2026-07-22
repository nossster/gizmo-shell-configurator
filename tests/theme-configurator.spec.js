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
  'popupBg',
  'shellText',
  'shellTextSoft',
  'shellAccent',
  'shellAccentDeep',
  'shellAccentHover',
  'shellBorder',
  'shellWarning',
  'timelineItemColor',
  'timeProductExpirationTextColor',
  'timeProductExpirationBg',
  'shellSuccess',
  'shellDanger',
];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

async function fillColor(page, key, value) {
  const input = page.locator(`[data-color-text="${key}"]`);
  const group = input.locator('xpath=ancestor::details[1]');
  if ((await group.getAttribute('open')) === null) {
    await group.locator(':scope > summary').click();
  }
  await input.fill(value);
}

test('compact palette derives legacy tokens and Windows taskbar color', async ({ page }) => {
  await expect(page.locator('[data-color-text]')).toHaveCount(16);
  await expect(page.locator('.color-settings-group')).toHaveCount(7);
  await expect(page.locator('#applyThemeBtn')).toHaveCount(0);

  const renderedKeys = await page.locator('[data-color-text]').evaluateAll((inputs) => inputs.map((input) => input.dataset.colorText));
  expect(renderedKeys).toEqual(visibleColorKeys);

  await fillColor(page, 'shellBg', '#112233');
  await fillColor(page, 'shellAccentHover', '#AABBCC');
  await fillColor(page, 'shellWarning', '#FEDCBA');
  await fillColor(page, 'timelineItemColor', '#123456');
  await fillColor(page, 'timeProductExpirationTextColor', '#ABCDEF');
  await fillColor(page, 'timeProductExpirationBg', 'rgba(10, 20, 30, 0.4)');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-time-product-expiration-bg: rgba\(10, 20, 30, 0\.4\);/);

  const css = await page.locator('#cssOutput').inputValue();
  expect(css).toContain('--shell-bg: #112233;');
  expect(css).toContain('--shell-user-links-hover: #AABBCC;');
  expect(css).toContain('--shell-warning: #FEDCBA;');
  expect(css).toContain('--shell-timeline-item: #123456;');
  expect(css).toContain('--shell-time-product-expiration-text: #ABCDEF;');
  expect(css).toContain('--shell-time-product-expiration-bg: rgba(10, 20, 30, 0.4);');
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
  await page.locator('[data-settings-tab="fonts"]').click();
  await page.locator('[data-font-select="uiFontFamily"]').selectOption("'Inter', system-ui, sans-serif");
  await page.locator('[data-settings-tab="effects"]').click();
  await page.locator('[data-range-input="shellRadiusM"]').fill('20');

  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-bg: #264057;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-font-ui: 'Inter', system-ui, sans-serif;/);
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-radius-m: 20px;/);
  await expect(page.locator('#previewRoot')).toHaveAttribute('style', /--shell-bg: #264057;/);
  await expect(page.locator('#applyState')).toHaveText('Preview синхронизирован');

  await page.locator('[data-settings-tab="colors"]').click();
  await fillColor(page, 'shellBg', '#');
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue('#');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-bg: #264057;/);
  await expect(page.locator('#previewRoot')).toHaveAttribute('style', /--shell-bg: #264057;/);
});

test('style binding map mirrors all visible colors and updates its swatches', async ({ page }) => {
  const styleItems = page.locator('[data-style-binding]');
  await expect(styleItems).toHaveCount(visibleColorKeys.length);
  const bindingKeys = await styleItems.evaluateAll((items) => items.map((item) => item.dataset.styleBinding));
  expect(bindingKeys).toEqual(visibleColorKeys);

  const backgroundBinding = page.locator('[data-style-binding="shellBg"]');
  await expect(backgroundBinding).toContainText('Основной фон');
  await expect(backgroundBinding).toContainText('--shell-bg');
  await fillColor(page, 'shellBg', '#345678');
  await expect(backgroundBinding).toHaveCSS('--style-map-swatch', '#345678');

  const semanticBinding = page.locator('[data-style-binding="shellWarning"]');
  await expect(semanticBinding).toContainText('прямая связь не подтверждена');
  await expect(semanticBinding).toContainText('нет прямой связи');
});

test('all presets use the compact model and Reset selects Original Gizmo', async ({ page }) => {
  const presetButtons = page.locator('.preset-card');
  await expect(presetButtons).toHaveCount(11);

  for (let index = 0; index < await presetButtons.count(); index += 1) {
    const button = presetButtons.nth(index);
    await button.click();
    await expect(button).toHaveClass(/active/);
    await expect(page.locator('[data-color-text]')).toHaveCount(16);
  }

  await page.locator('#resetThemeBtn').click();
  await expect(presetButtons.first()).toHaveClass(/active/);
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
  await expect(page.locator('[data-color-text]')).toHaveCount(16);
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue('#152637');
});

test('Real Host.Web is the only preview and auxiliary header blocks are omitted', async ({ page }) => {
  await expect(page.locator('[data-preview-surface]')).toHaveCount(0);
  await expect(page.locator('#previewModeTabs')).toHaveCount(0);
  await expect(page.locator('.preview-panel > .panel__header')).toHaveCount(0);
  await expect(page.locator('.export-panel > .panel__header')).toHaveCount(0);
  await expect(page.locator('.export-summary-group')).toHaveCount(0);
  await expect(page.locator('#previewRoot')).toBeHidden();
  await expect(page.locator('#realPreviewShell')).toBeVisible();
  await expect(page.locator('#realPreviewFrame')).toHaveAttribute('src', './real-client/');
});

test('desktop layout keeps the real preview visible beside the settings', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.reload();

  const previewPanel = page.locator('.preview-panel');
  const previewBox = await previewPanel.boundingBox();
  expect(previewBox).not.toBeNull();
  expect(previewBox.y).toBeLessThan(100);
  expect(previewBox.width).toBeGreaterThanOrEqual(800);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('color setting sections behave as a single-open accordion', async ({ page }) => {
  const groups = page.locator('details.color-settings-group');
  await expect(groups).toHaveCount(7);
  await expect(groups.first()).toHaveAttribute('open', '');
  await expect(groups.nth(1)).not.toHaveAttribute('open', '');

  const secondSummary = groups.nth(1).locator('summary');
  await secondSummary.focus();
  await secondSummary.press('Enter');
  await expect(groups.first()).not.toHaveAttribute('open', '');
  await expect(groups.nth(1)).toHaveAttribute('open', '');
  expect(await groups.evaluateAll((items) => items.every((item) => item.scrollWidth <= item.clientWidth))).toBe(true);
  expect(await page.locator('.controls-panel').evaluate((panel) => panel.scrollWidth <= panel.clientWidth)).toBe(true);
  await groups.nth(1).locator('[data-color-text="shellText"]').fill('#EAEAEA');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-text: #EAEAEA;/);
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

  const backgroundBinding = page.locator('[data-style-binding="shellBg"]');
  await backgroundBinding.click();
  await expect(backgroundBinding).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#styleMapStatus')).toContainText('Подсветка закреплена');
  await expect(realPreview.locator('#gizmoConfiguratorStyleMap')).toHaveCount(1);
  expect(await realPreview.locator('.gizmo-style-map-highlight').count()).toBeGreaterThan(0);
  await backgroundBinding.click();
  await expect(backgroundBinding).toHaveAttribute('aria-pressed', 'false');
  await expect(realPreview.locator('.gizmo-style-map-highlight')).toHaveCount(0);

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
  expect(browserErrors).toEqual([]);
});
