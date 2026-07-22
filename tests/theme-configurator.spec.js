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

test('compact palette derives legacy tokens and Windows taskbar color', async ({ page }) => {
  await expect(page.locator('[data-color-text]')).toHaveCount(16);
  await expect(page.locator('.color-settings-group')).toHaveCount(7);
  await expect(page.locator('#applyThemeBtn')).toHaveCount(0);

  const renderedKeys = await page.locator('[data-color-text]').evaluateAll((inputs) => inputs.map((input) => input.dataset.colorText));
  expect(renderedKeys).toEqual(visibleColorKeys);

  await page.locator('[data-color-text="shellBg"]').fill('#112233');
  await page.locator('[data-color-text="shellAccentHover"]').fill('#AABBCC');
  await page.locator('[data-color-text="shellWarning"]').fill('#FEDCBA');
  await page.locator('[data-color-text="timelineItemColor"]').fill('#123456');
  await page.locator('[data-color-text="timeProductExpirationTextColor"]').fill('#ABCDEF');
  await page.locator('[data-color-text="timeProductExpirationBg"]').fill('rgba(10, 20, 30, 0.4)');
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
  await page.locator('[data-color-text="shellBg"]').fill('#264057');
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
  await page.locator('[data-color-text="shellBg"]').fill('#');
  await expect(page.locator('[data-color-text="shellBg"]')).toHaveValue('#');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-bg: #264057;/);
  await expect(page.locator('#previewRoot')).toHaveAttribute('style', /--shell-bg: #264057;/);
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
  await page.locator('[data-color-text="shellBg"]').fill('#152637');
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

test('all preview routes activate exactly one screen', async ({ page }) => {
  const routeButtons = page.locator('.preview-mode-tab');
  await expect(routeButtons).toHaveCount(10);

  for (let index = 0; index < await routeButtons.count(); index += 1) {
    const button = routeButtons.nth(index);
    const mode = await button.getAttribute('data-mode');
    await button.click();
    await expect(page.locator('.preview-screen.active')).toHaveCount(1);
    await expect(page.locator(`.preview-screen[data-screen="${mode}"]`)).toHaveClass(/active/);
  }
});

test('real Host.Web receives live CSS and exports the same theme without Gizmo Server', async ({ page }) => {
  test.skip(!hasRealHostRuntime, 'Run npm run sync:real-client to enable the real Host.Web integration test.');
  test.setTimeout(90_000);

  const browserErrors = [];
  page.on('pageerror', (error) => browserErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') browserErrors.push(message.text());
  });

  await page.locator('[data-preview-surface="real"]').click();
  const realPreview = page.frameLocator('#realPreviewFrame');
  if (hasDemoLoginRuntime) {
    await expect(page.locator('#realPreviewCredentials')).toBeVisible();
    await expect(page.locator('#realPreviewCredentials')).toContainText('demo');
  } else {
    await expect(page.locator('#realPreviewCredentials')).toBeHidden();
  }
  await expect(realPreview.locator('[client-theme]').first()).toBeAttached({ timeout: 40_000 });
  await expect(page.locator('#realPreviewShell')).toHaveClass(/is-ready/);
  await expect(page.locator('#previewStatusText')).toHaveText('Real Host.Web синхронизирован');
  await expect.poll(async () => realPreview.locator('body').evaluate(() => window.innerWidth)).toBe(1280);
  await expect(realPreview.locator('.giz-login__adv__background > img[src=""]')).toBeHidden();
  await expect.poll(async () => realPreview.locator('#gizmoConfiguratorTheme').first().evaluate((style) => style.textContent)).toContain('--shell-accent: #3F8CFF;');

  await page.locator('[data-color-text="shellAccent"]').fill('#FF00AA');
  await expect(page.locator('#cssOutput')).toHaveValue(/--shell-accent: #FF00AA;/);
  await expect.poll(async () => realPreview.locator('#gizmoConfiguratorTheme').first().evaluate((style) => style.textContent)).toContain('--shell-accent: #FF00AA;');
  await expect(realPreview.locator('#gizmoConfiguratorTheme')).toHaveCount(1);
  await expect.poll(async () => realPreview.locator('[client-theme]').first().evaluate((element) => (
    getComputedStyle(element).getPropertyValue('--shell-accent').trim()
  ))).toBe('#FF00AA');

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

  await realPreview.locator('input[type="text"]').pressSequentially('demo', { delay: 50 });
  await realPreview.locator('input[type="password"]').pressSequentially('demo', { delay: 50 });
  await realPreview.getByRole('button', { name: 'Continue' }).click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/home');
  await expect(realPreview.locator('a[href="home"]')).toHaveClass(/active/);
  await expect.poll(async () => realPreview.locator('html').evaluate((element) => (
    getComputedStyle(element).backgroundImage
  ))).toContain('background.jpg');
  await expect(realPreview.locator('#gizmoConfiguratorPreviewBackdrop')).toHaveCount(1);

  for (const route of ['apps', 'shop']) {
    await realPreview.locator(`a[href="${route}"]`).click();
    await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe(`/real-client/${route}`);
    await expect(realPreview.locator(`a[href="${route}"]`)).toHaveClass(/active/);
    await expect.poll(async () => realPreview.locator('[client-theme]').first().evaluate((element) => (
      getComputedStyle(element).getPropertyValue('--shell-accent').trim()
    ))).toBe('#FF00AA');
  }

  await realPreview.getByRole('button', { name: 'PC 100', exact: true }).click();
  await realPreview.locator('a[href="profile"]').click();
  await expect.poll(async () => realPreview.locator('body').evaluate(() => location.pathname)).toBe('/real-client/profile');
  await expect(realPreview.locator('a[href="profile"].active')).toHaveCount(1);
  await expect(realPreview.locator('body')).toContainText('User details');
  expect(browserErrors).toEqual([]);
});
