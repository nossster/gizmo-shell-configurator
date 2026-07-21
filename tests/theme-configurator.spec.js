const { test, expect } = require('playwright/test');

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
  'shellSuccess',
  'shellWarning',
  'shellDanger',
];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('compact palette derives legacy tokens and Windows taskbar color', async ({ page }) => {
  await expect(page.locator('[data-color-text]')).toHaveCount(13);
  await expect(page.locator('.color-settings-group')).toHaveCount(5);

  const renderedKeys = await page.locator('[data-color-text]').evaluateAll((inputs) => inputs.map((input) => input.dataset.colorText));
  expect(renderedKeys).toEqual(visibleColorKeys);

  await page.locator('[data-color-text="shellBg"]').fill('#112233');
  await page.locator('[data-color-text="shellAccentHover"]').fill('#AABBCC');
  await page.locator('[data-color-text="shellWarning"]').fill('#FEDCBA');
  await page.locator('#applyThemeBtn').click();

  const css = await page.locator('#cssOutput').inputValue();
  expect(css).toContain('--shell-bg: #112233;');
  expect(css).toContain('--shell-user-links-hover: #AABBCC;');
  expect(css).toContain('--shell-timeline-item: #FEDCBA;');
  expect(css).toContain('--shell-time-product-expiration-bg: rgba(254, 220, 186, 0.32);');
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

test('all presets use the compact model and Reset selects Original Gizmo', async ({ page }) => {
  const presetButtons = page.locator('.preset-card');
  await expect(presetButtons).toHaveCount(11);

  for (let index = 0; index < await presetButtons.count(); index += 1) {
    const button = presetButtons.nth(index);
    await button.click();
    await expect(button).toHaveClass(/active/);
    await expect(page.locator('[data-color-text]')).toHaveCount(13);
  }

  await page.locator('#resetThemeBtn').click();
  await expect(presetButtons.first()).toHaveClass(/active/);
});

test('generated CSS round-trips through Import without expanding the palette', async ({ page }) => {
  await page.locator('[data-color-text="shellBg"]').fill('#152637');
  await page.locator('#applyThemeBtn').click();
  const exportedCss = await page.locator('#cssOutput').inputValue();

  await page.locator('#importCssInput').setInputFiles({
    name: 'roundtrip.css',
    mimeType: 'text/css',
    buffer: Buffer.from(exportedCss),
  });

  await expect(page.locator('#importCssStatus')).toContainText('roundtrip.css');
  await expect(page.locator('[data-color-text]')).toHaveCount(13);
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
