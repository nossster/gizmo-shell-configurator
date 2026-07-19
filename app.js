const DEFAULT_THEME = {
  shellBg: '#0f1117',
  shellBgElevated: '#171b24',
  shellBgElevated2: '#1d2330',
  shellBgGlass: '#1a2130',
  shellBgSoft: '#2a3345',
  shellBorder: '#3a455c',
  shellBorderStrong: '#55627c',
  shellText: '#f4f7fb',
  shellTextSoft: '#b8c2d6',
  shellTextGhost: '#7f8aa0',
  shellAccent: '#7c9cff',
  shellAccentHover: '#9ab2ff',
  shellAccentDeep: '#4f72e9',
  shellSuccess: '#2fcb8f',
  shellWarning: '#ffcb57',
  shellDanger: '#ff667a',
  appCardBg: '#22272b',
  productCardBg: '#22272b',
  popupBg: '#20262f',
  buttonInactiveBg: '#323536',
  uiFontFamily: "'Inter', system-ui, sans-serif",
  displayFontFamily: "'Inter', system-ui, sans-serif",
  baseFontSize: 16,
  headingFontWeight: 700,
  shellShadowOpacity: 0.30,
  shellShadowStrongOpacity: 0.42,
  shellBlur: 10,
  shellRadiusS: 8,
  shellRadiusM: 12,
  shellRadiusL: 16,
  shellRadiusXL: 24,
  headerHeight: 64,
  panelBorderWidth: 1,
};

const PRESETS = {
  'dark-blue': {
    label: 'Dark · Default Blue',
    values: { ...DEFAULT_THEME },
  },
  'dark-pink': {
    label: 'Dark · Pink Neon',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#120812',
      shellBgElevated: '#1d0e1b',
      shellBgElevated2: '#31162a',
      shellBgGlass: '#291527',
      shellBgSoft: '#824572',
      shellBorder: '#5e2752',
      shellBorderStrong: '#7d336d',
      shellText: '#fff1fb',
      shellTextSoft: '#d79ac1',
      shellTextGhost: '#9a6284',
      shellAccent: '#ff4fb3',
      shellAccentHover: '#ff79c8',
      shellAccentDeep: '#cf2f8f',
      shellWarning: '#ffd36f',
      shellDanger: '#ff5d7c',
      appCardBg: '#2a1625',
      productCardBg: '#301928',
      popupBg: '#341b2d',
      buttonInactiveBg: '#4d2a43',
    },
  },
  'dark-ember': {
    label: 'Dark · Ember Red',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#0d0d10',
      shellBgElevated: '#17171c',
      shellBgElevated2: '#1f1b22',
      shellBgGlass: '#1a191f',
      shellBgSoft: '#2e252a',
      shellBorder: '#4a3339',
      shellBorderStrong: '#70424d',
      shellAccent: '#ff475f',
      shellAccentHover: '#ff7b8b',
      shellAccentDeep: '#d52f42',
      shellTextSoft: '#cdbac0',
      shellTextGhost: '#8e767d',
      shellWarning: '#ffc14d',
      shellDanger: '#ff475f',
      appCardBg: '#1d171a',
      productCardBg: '#23191d',
      popupBg: '#261b20',
      buttonInactiveBg: '#3b2b31',
    },
  },
  'dark-emerald': {
    label: 'Dark · Emerald Glass',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#081311',
      shellBgElevated: '#0f1d1a',
      shellBgElevated2: '#132823',
      shellBgGlass: '#11211f',
      shellBgSoft: '#213c38',
      shellBorder: '#2f554f',
      shellBorderStrong: '#42736b',
      shellAccent: '#39d7ae',
      shellAccentHover: '#70edd0',
      shellAccentDeep: '#1ea27f',
      shellTextSoft: '#b9d8d0',
      shellTextGhost: '#6f938b',
      shellSuccess: '#42e2a7',
      shellWarning: '#ffe072',
      shellDanger: '#ff7f91',
      appCardBg: '#15211f',
      productCardBg: '#182723',
      popupBg: '#1a2d28',
      buttonInactiveBg: '#244038',
    },
  },
  'dark-violet': {
    label: 'Dark · Violet Pulse',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#0d1020',
      shellBgElevated: '#151a31',
      shellBgElevated2: '#1d2445',
      shellBgGlass: '#171f3a',
      shellBgSoft: '#2c3561',
      shellBorder: '#394780',
      shellBorderStrong: '#5866a6',
      shellText: '#eef1ff',
      shellTextSoft: '#bac2e9',
      shellTextGhost: '#7f89b5',
      shellAccent: '#8a7dff',
      shellAccentHover: '#aca3ff',
      shellAccentDeep: '#6657ea',
      shellSuccess: '#3dd7a4',
      shellWarning: '#f8cb58',
      shellDanger: '#ff6b8d',
      appCardBg: '#1b2140',
      productCardBg: '#20274b',
      popupBg: '#20284d',
      buttonInactiveBg: '#303a68',
    },
  },
  'light-sky': {
    label: 'Light · Sky Glass',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#eef3fa',
      shellBgElevated: '#ffffff',
      shellBgElevated2: '#dfe7f3',
      shellBgGlass: '#f8fbff',
      shellBgSoft: '#d6e2f4',
      shellBorder: '#c2d2e8',
      shellBorderStrong: '#9bb3d5',
      shellText: '#1b2638',
      shellTextSoft: '#51627f',
      shellTextGhost: '#7b8ba4',
      shellAccent: '#4f7cff',
      shellAccentHover: '#7297ff',
      shellAccentDeep: '#335fe0',
      shellSuccess: '#1ca67a',
      shellWarning: '#d2911f',
      shellDanger: '#d55371',
      appCardBg: '#f7faff',
      productCardBg: '#ffffff',
      popupBg: '#ffffff',
      buttonInactiveBg: '#d7deea',
    },
  },
  'light-mint': {
    label: 'Light · Mint Studio',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#eef8f6',
      shellBgElevated: '#ffffff',
      shellBgElevated2: '#d9eee7',
      shellBgGlass: '#f8fffd',
      shellBgSoft: '#d4efe7',
      shellBorder: '#b6d8cf',
      shellBorderStrong: '#85b8ad',
      shellText: '#18342d',
      shellTextSoft: '#4d6f67',
      shellTextGhost: '#7a9992',
      shellAccent: '#1fb78b',
      shellAccentHover: '#48d3a8',
      shellAccentDeep: '#15926d',
      shellSuccess: '#169f78',
      shellWarning: '#c7951f',
      shellDanger: '#d45b77',
      appCardBg: '#f7fffc',
      productCardBg: '#ffffff',
      popupBg: '#ffffff',
      buttonInactiveBg: '#d5e8e1',
    },
  },
  'light-rose': {
    label: 'Light · Rose Quartz',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#fcf1f6',
      shellBgElevated: '#ffffff',
      shellBgElevated2: '#f7dfe9',
      shellBgGlass: '#fff9fc',
      shellBgSoft: '#f2d4e1',
      shellBorder: '#dfbfd0',
      shellBorderStrong: '#c79cb4',
      shellText: '#3b2230',
      shellTextSoft: '#7d5568',
      shellTextGhost: '#ab8194',
      shellAccent: '#de5f97',
      shellAccentHover: '#ea7eae',
      shellAccentDeep: '#bb4479',
      shellSuccess: '#299971',
      shellWarning: '#ce9830',
      shellDanger: '#d64b63',
      appCardBg: '#fff8fb',
      productCardBg: '#ffffff',
      popupBg: '#ffffff',
      buttonInactiveBg: '#f0d6e2',
    },
  },
  'light-sand': {
    label: 'Light · Sand Gold',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#f7f2e8',
      shellBgElevated: '#fffdf8',
      shellBgElevated2: '#efe3c9',
      shellBgGlass: '#fffaf0',
      shellBgSoft: '#eadbb9',
      shellBorder: '#d3c09a',
      shellBorderStrong: '#b59b68',
      shellText: '#372b18',
      shellTextSoft: '#705b37',
      shellTextGhost: '#9a825c',
      shellAccent: '#c88b2d',
      shellAccentHover: '#ddaa55',
      shellAccentDeep: '#a56f1f',
      shellSuccess: '#3f9b5b',
      shellWarning: '#c98414',
      shellDanger: '#cc5b4b',
      appCardBg: '#fffdf8',
      productCardBg: '#ffffff',
      popupBg: '#ffffff',
      buttonInactiveBg: '#e6d7b8',
    },
  },
  'light-lilac': {
    label: 'Light · Lilac Frost',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#f3f1ff',
      shellBgElevated: '#ffffff',
      shellBgElevated2: '#e4ddfb',
      shellBgGlass: '#faf9ff',
      shellBgSoft: '#dcd6f6',
      shellBorder: '#c1b9e7',
      shellBorderStrong: '#9c92cf',
      shellText: '#2f2948',
      shellTextSoft: '#645d87',
      shellTextGhost: '#8f87b1',
      shellAccent: '#7a68df',
      shellAccentHover: '#9a8cf0',
      shellAccentDeep: '#5d49bf',
      shellSuccess: '#2f9b7d',
      shellWarning: '#c99326',
      shellDanger: '#cf5879',
      appCardBg: '#fbfaff',
      productCardBg: '#ffffff',
      popupBg: '#ffffff',
      buttonInactiveBg: '#ddd7f4',
    },
  },
};

const COLOR_FIELDS = [
  ['shellBg', 'Основной фон'],
  ['shellBgElevated', 'Фон панелей'],
  ['shellBgElevated2', 'Фон header / акцентных панелей'],
  ['shellBgGlass', 'Glass'],
  ['shellBgSoft', 'Мягкий фон кнопок / чипов'],
  ['shellBorder', 'Border'],
  ['shellBorderStrong', 'Border strong'],
  ['shellText', 'Text'],
  ['shellTextSoft', 'Text soft'],
  ['shellTextGhost', 'Text ghost'],
  ['shellAccent', 'Заливка выбранного / Quick Launch'],
  ['shellAccentHover', 'Hover / текст выбранного'],
  ['shellAccentDeep', 'Градиент выбранного (deep)'],
  ['shellSuccess', 'Success'],
  ['shellWarning', 'Warning'],
  ['shellDanger', 'Danger'],
  ['appCardBg', 'Фон карточек приложений'],
  ['productCardBg', 'Фон карточек продуктов'],
  ['popupBg', 'Фон popup / modal'],
  ['buttonInactiveBg', 'Фон неактивных / disabled кнопок'],
];

const COLOR_FIELD_KEYS = new Set(COLOR_FIELDS.map(([key]) => key));

const RANGE_FIELDS = [
  ['shellRadiusS', 'Radius S', 0, 24, 1, 'px'],
  ['shellRadiusM', 'Radius M', 0, 32, 1, 'px'],
  ['shellRadiusL', 'Radius L', 0, 40, 1, 'px'],
  ['shellRadiusXL', 'Radius XL', 0, 56, 1, 'px'],
  ['headerHeight', 'Header height', 48, 92, 1, 'px'],
  ['shellBlur', 'Glass blur', 0, 24, 1, 'px'],
  ['panelBorderWidth', 'Border width', 0, 3, 1, 'px'],
  ['shellShadowOpacity', 'Shadow opacity', 0, 0.6, 0.01, ''],
  ['shellShadowStrongOpacity', 'Strong shadow', 0, 0.8, 0.01, ''],
];

const FONT_SELECT_FIELDS = [
  ['uiFontFamily', 'Шрифт интерфейса', [
    ["'Inter', system-ui, sans-serif", 'Inter'],
    ["'Roboto', 'Segoe UI', sans-serif", 'Roboto'],
    ["'Montserrat', 'Segoe UI', sans-serif", 'Montserrat'],
    ["'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 'Segoe UI'],
  ]],
  ['displayFontFamily', 'Шрифт заголовков', [
    ["'Inter', system-ui, sans-serif", 'Inter'],
    ["'Montserrat', 'Segoe UI', sans-serif", 'Montserrat'],
    ["'Roboto', 'Segoe UI', sans-serif", 'Roboto'],
    ["'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 'Segoe UI'],
  ]],
];

const FONT_RANGE_FIELDS = [
  ['baseFontSize', 'Базовый размер текста', 14, 20, 1, 'px'],
  ['headingFontWeight', 'Вес заголовков', 600, 800, 50, ''],
];

let draftTheme = structuredClone(DEFAULT_THEME);
let appliedTheme = structuredClone(DEFAULT_THEME);
let activePreviewMode = 'home';
const ALLOWED_PREVIEW_MODES = new Set(['home', 'login']);
let activeSettingsTab = 'colors';
let hasPendingChanges = false;

const previewRoot = document.getElementById('previewRoot');
const cssOutput = document.getElementById('cssOutput');
const fileNameInput = document.getElementById('fileNameInput');
const presetGrid = document.getElementById('presetGrid');
const colorControls = document.getElementById('colorControls');
const fontControls = document.getElementById('fontControls');
const rangeControls = document.getElementById('rangeControls');
const settingsTabs = document.getElementById('settingsTabs');
const previewModeTabs = document.getElementById('previewModeTabs');
const resetThemeBtn = document.getElementById('resetThemeBtn');
const applyThemeBtn = document.getElementById('applyThemeBtn');
const applyState = document.getElementById('applyState');
const previewStatusText = document.getElementById('previewStatusText');
const copyCssBtn = document.getElementById('copyCssBtn');
const downloadCssBtn = document.getElementById('downloadCssBtn');
const importCssBtn = document.getElementById('importCssBtn');
const clearImportedCssBtn = document.getElementById('clearImportedCssBtn');
const importCssInput = document.getElementById('importCssInput');
const importCssStatus = document.getElementById('importCssStatus');

const importedPreviewStyle = document.createElement('style');
importedPreviewStyle.id = 'importedPreviewCss';
document.head.appendChild(importedPreviewStyle);

const PREVIEW_STYLE_HINTS = [
  ['.preview-screen--home .live-shell-header', 'Header panel / .giz-app__header'],
  ['.preview-screen--home .live-top-nav', 'Навигация / .giz-header__modules-menu'],
  ['.preview-screen--home .reference-header-search', 'Глобальный поиск / .giz-global-search'],
  ['.preview-screen--home .live-header-pill', 'Статусная панель / header pill'],
  ['.preview-screen--home .live-user-anchor .giz-user-menu-button', 'Кнопка профиля / .giz-user-menu-button'],
  ['.preview-screen--home .live-user-menu-panel', 'Dropdown профиля / .giz-dropdown-menu'],
  ['.preview-screen--home .live-launch-strip', 'Quick Launch panel / .giz-home__header__quick-launch'],
  ['.preview-screen--home .live-launch-toggle', 'Переключатель избранного / .quick-launcher-switch'],
  ['.preview-screen--home .live-news-pill', 'News panel / .giz-home__header__ads'],
  ['.preview-screen--home .live-ad-card--left', 'Левый баннер / ads card'],
  ['.preview-screen--home .live-ad-card--monster', 'Главный баннер / ads focus card'],
  ['.preview-screen--home .live-store-card', 'Карточка товара / .giz-product-card'],
  ['.preview-screen--home .live-app-card', 'Карточка приложения / .giz-app-card'],
  ['.preview-screen--login .live-login-hero', 'Login hero / .giz-login__adv'],
  ['.preview-screen--login .live-login-panel', 'Login panel / .giz-login__login'],
  ['.preview-screen--login .live-login-switch', 'Переключатель способа входа / .giz-login-method'],
  ['.preview-screen--login .live-login-input', 'Поле ввода / .giz-input-root'],
  ['.preview-screen--login .live-login-submit', 'Primary button / .giz-button--fill'],
  ['.preview-screen--login .live-qr-block', 'QR card / login helper block'],
];

let importedCssFileName = '';
let draftThemeBeforeImport = null;
let appliedThemeBeforeImport = null;

const IMPORTED_THEME_VARIABLE_MAP = {
  '--shell-bg': 'shellBg',
  '--shell-bg-elevated': 'shellBgElevated',
  '--shell-bg-elevated-2': 'shellBgElevated2',
  '--shell-bg-glass': 'shellBgGlass',
  '--shell-bg-soft': 'shellBgSoft',
  '--shell-border': 'shellBorder',
  '--shell-border-strong': 'shellBorderStrong',
  '--shell-text': 'shellText',
  '--shell-text-soft': 'shellTextSoft',
  '--shell-text-ghost': 'shellTextGhost',
  '--shell-accent': 'shellAccent',
  '--shell-accent-hover': 'shellAccentHover',
  '--shell-accent-deep': 'shellAccentDeep',
  '--shell-success': 'shellSuccess',
  '--shell-warning': 'shellWarning',
  '--shell-danger': 'shellDanger',
  '--shell-app-card-bg': 'appCardBg',
  '--shell-product-card-bg': 'productCardBg',
  '--shell-popup-bg': 'popupBg',
  '--shell-button-inactive-bg': 'buttonInactiveBg',
  '--shell-font-ui': 'uiFontFamily',
  '--shell-font-display': 'displayFontFamily',
  '--shell-font-size-base': 'baseFontSize',
  '--shell-font-weight-heading': 'headingFontWeight',
  '--shell-radius-s': 'shellRadiusS',
  '--shell-radius-m': 'shellRadiusM',
  '--shell-radius-l': 'shellRadiusL',
  '--shell-radius-xl': 'shellRadiusXL',
  '--shell-header-height': 'headerHeight',
  '--shell-panel-border-width': 'panelBorderWidth',
  '--shell-blur': 'shellBlur',
};

function createPresetButtons() {
  Object.entries(PRESETS).forEach(([key, preset]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'preset-card';
    button.dataset.preset = key;
    const tone = preset.label.startsWith('Light') ? 'Light' : 'Dark';
    const presetName = preset.label.replace(/^Dark ·\s*|^Light ·\s*/, '');
    button.innerHTML = `
      <span class="preset-card__swatch" style="background: linear-gradient(135deg, ${preset.values.shellAccent}, ${preset.values.shellAccentDeep});"></span>
      <span class="preset-card__text">
        <span class="preset-card__label">${presetName}</span>
        <span class="preset-card__meta">${tone} preset</span>
      </span>
    `;
    button.addEventListener('click', () => {
      draftTheme = structuredClone(preset.values);
      renderAll(true, true);
    });
    presetGrid.appendChild(button);
  });
}

function createColorControls() {
  COLOR_FIELDS.forEach(([key, label]) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'control-field';
    wrapper.innerHTML = `
      <span>${label}</span>
      <div class="color-input-row">
        <input data-color-picker="${key}" type="color" />
        <input data-color-text="${key}" type="text" spellcheck="false" autocapitalize="characters" />
      </div>
    `;
    colorControls.appendChild(wrapper);
  });

  colorControls.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const pickerKey = target.dataset.colorPicker;
    const textKey = target.dataset.colorText;

    if (pickerKey) {
      const normalized = normalizeColorToken(target.value) ?? target.value;
      draftTheme[pickerKey] = normalized;
      syncColorText(pickerKey, normalized);
      markPendingChanges();
    }

    if (textKey) {
      const normalized = normalizeThemeColorValue(textKey, target.value);
      if (!normalized) return;
      draftTheme[textKey] = normalized;
      syncColorText(textKey, normalized);
      syncColorPicker(textKey, normalized);
      markPendingChanges();
    }
  });
}

function createRangeControls() {
  RANGE_FIELDS.forEach(([key, label, min, max, step, suffix]) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'range-field';
    wrapper.innerHTML = `
      <div class="range-field__header">
        <span>${label}</span>
        <strong data-range-value="${key}"></strong>
      </div>
      <input data-range-input="${key}" type="range" min="${min}" max="${max}" step="${step}" />
    `;
    wrapper.dataset.suffix = suffix;
    rangeControls.appendChild(wrapper);
  });

  rangeControls.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const key = target.dataset.rangeInput;
    if (!key) return;
    draftTheme[key] = Number(target.value);
    syncRangeValueDisplay(key);
    markPendingChanges();
  });
}

function createFontControls() {
  FONT_SELECT_FIELDS.forEach(([key, label, options]) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'control-field';
    wrapper.innerHTML = `
      <span>${label}</span>
      <select data-font-select="${key}">
        ${options.map(([value, text]) => `<option value="${value}">${text}</option>`).join('')}
      </select>
    `;
    fontControls.appendChild(wrapper);
  });

  FONT_RANGE_FIELDS.forEach(([key, label, min, max, step, suffix]) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'range-field';
    wrapper.innerHTML = `
      <div class="range-field__header">
        <span>${label}</span>
        <strong data-font-range-value="${key}"></strong>
      </div>
      <input data-font-range="${key}" type="range" min="${min}" max="${max}" step="${step}" />
    `;
    wrapper.dataset.suffix = suffix;
    fontControls.appendChild(wrapper);
  });

  const updateFontDraft = (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target instanceof HTMLSelectElement && target.dataset.fontSelect) {
      draftTheme[target.dataset.fontSelect] = target.value;
      markPendingChanges();
      return;
    }

    if (target instanceof HTMLInputElement && target.dataset.fontRange) {
      draftTheme[target.dataset.fontRange] = Number(target.value);
      syncFontRangeValueDisplay(target.dataset.fontRange);
      markPendingChanges();
    }
  };

  fontControls.addEventListener('input', updateFontDraft);
  fontControls.addEventListener('change', updateFontDraft);
}

function normalizeColorToken(value) {
  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) return trimmed.toUpperCase();

  if (/^#[0-9a-fA-F]{3}$/.test(trimmed)) {
    return `#${trimmed.slice(1).split('').map((char) => char + char).join('')}`.toUpperCase();
  }

  const rgbMatch = trimmed.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*[\d.]+\s*)?\)$/i);
  if (!rgbMatch) return null;

  const channels = rgbMatch.slice(1, 4).map((part) => Math.max(0, Math.min(255, Math.round(Number(part)))));
  if (channels.some((channel) => Number.isNaN(channel))) return null;

  return `#${channels.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
}

function normalizeThemeColorValue(key, value) {
  if (!COLOR_FIELD_KEYS.has(key)) return String(value).trim();
  return normalizeColorToken(value);
}

function syncColorPicker(key, value) {
  const picker = document.querySelector(`[data-color-picker="${key}"]`);
  if (!(picker instanceof HTMLInputElement)) return;
  const normalized = normalizeColorToken(value);
  if (normalized && isHexColor(normalized)) picker.value = normalized;
}

function syncColorText(key, value) {
  const input = document.querySelector(`[data-color-text="${key}"]`);
  if (!(input instanceof HTMLInputElement)) return;
  input.value = COLOR_FIELD_KEYS.has(key)
    ? normalizeColorToken(value) ?? String(value)
    : String(value);
}

function syncControlValues() {
  COLOR_FIELDS.forEach(([key]) => {
    syncColorText(key, draftTheme[key]);
    syncColorPicker(key, draftTheme[key]);
  });

  FONT_SELECT_FIELDS.forEach(([key]) => {
    const select = document.querySelector(`[data-font-select="${key}"]`);
    if (select instanceof HTMLSelectElement) select.value = draftTheme[key];
  });

  FONT_RANGE_FIELDS.forEach(([key, , , , , suffix]) => {
    const input = document.querySelector(`[data-font-range="${key}"]`);
    const value = document.querySelector(`[data-font-range-value="${key}"]`);
    if (input instanceof HTMLInputElement) input.value = String(draftTheme[key]);
    if (value) value.textContent = `${draftTheme[key]}${suffix}`;
  });

  RANGE_FIELDS.forEach(([key, , , , , suffix]) => {
    const input = document.querySelector(`[data-range-input="${key}"]`);
    const value = document.querySelector(`[data-range-value="${key}"]`);
    if (input instanceof HTMLInputElement) input.value = String(draftTheme[key]);
    if (value) value.textContent = `${draftTheme[key]}${suffix}`;
  });
}

function syncRangeValueDisplay(key) {
  const field = RANGE_FIELDS.find(([fieldKey]) => fieldKey === key);
  if (!field) return;
  const suffix = field[5];
  const value = document.querySelector(`[data-range-value="${key}"]`);
  if (value) value.textContent = `${draftTheme[key]}${suffix}`;
}

function syncFontRangeValueDisplay(key) {
  const field = FONT_RANGE_FIELDS.find(([fieldKey]) => fieldKey === key);
  if (!field) return;
  const suffix = field[5];
  const value = document.querySelector(`[data-font-range-value="${key}"]`);
  if (value) value.textContent = `${draftTheme[key]}${suffix}`;
}

function setSettingsTab(tab) {
  activeSettingsTab = tab;
  document.querySelectorAll('.settings-tab').forEach((button) => {
    button.classList.toggle('active', button.dataset.settingsTab === tab);
  });
  document.querySelectorAll('.settings-tab-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.settingsPanel === tab);
  });
}

function setPreviewMode(mode) {
  if (!ALLOWED_PREVIEW_MODES.has(mode)) {
    mode = 'home';
  }

  activePreviewMode = mode;
  previewRoot.dataset.activeMode = mode;
  document.querySelectorAll('.preview-mode-tab').forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === mode);
  });
  document.querySelectorAll('.preview-screen').forEach((screen) => {
    screen.classList.toggle('active', screen.dataset.screen === mode);
  });
}

function applyPreviewStyleHints() {
  PREVIEW_STYLE_HINTS.forEach(([selector, label]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('preview-style-hint');
      element.dataset.styleName = label;
      element.title = label;
    });
  });
}

function previewVars(themeValues) {
  return `
    --shell-bg: ${themeValues.shellBg};
    --shell-bg-elevated: ${themeValues.shellBgElevated};
    --shell-bg-elevated-2: ${themeValues.shellBgElevated2};
    --shell-bg-glass: ${themeValues.shellBgGlass};
    --shell-bg-soft: ${themeValues.shellBgSoft};
    --shell-border: ${themeValues.shellBorder};
    --shell-border-strong: ${themeValues.shellBorderStrong};
    --shell-text: ${themeValues.shellText};
    --shell-text-soft: ${themeValues.shellTextSoft};
    --shell-text-ghost: ${themeValues.shellTextGhost};
    --shell-accent: ${themeValues.shellAccent};
    --shell-accent-hover: ${themeValues.shellAccentHover};
    --shell-accent-deep: ${themeValues.shellAccentDeep};
    --shell-success: ${themeValues.shellSuccess};
    --shell-warning: ${themeValues.shellWarning};
    --shell-danger: ${themeValues.shellDanger};
    --shell-app-card-bg: ${themeValues.appCardBg};
    --shell-product-card-bg: ${themeValues.productCardBg};
    --shell-popup-bg: ${themeValues.popupBg};
    --shell-button-inactive-bg: ${themeValues.buttonInactiveBg};
    --shell-font-ui: ${themeValues.uiFontFamily};
    --shell-font-display: ${themeValues.displayFontFamily};
    --shell-font-size-base: ${themeValues.baseFontSize}px;
    --shell-font-weight-heading: ${themeValues.headingFontWeight};
    --shell-bg-overlay-top: ${hexToRgba(themeValues.shellBg, 0.16)};
    --shell-bg-overlay-bottom: ${hexToRgba(themeValues.shellBg, 0.86)};
    --shell-bg-accent-glow: ${hexToRgba(themeValues.shellAccent, 0.14)};
    --shell-bg-accent-deep-glow: ${hexToRgba(themeValues.shellAccentDeep, 0.10)};
    --shell-shadow: 0 10px 30px rgba(0, 0, 0, ${themeValues.shellShadowOpacity});
    --shell-shadow-strong: 0 18px 48px rgba(0, 0, 0, ${themeValues.shellShadowStrongOpacity});
    --shell-focus: 0 0 0 0.3rem ${hexToRgba(themeValues.shellAccent, 0.24)};
    --shell-radius-s: ${themeValues.shellRadiusS}px;
    --shell-radius-m: ${themeValues.shellRadiusM}px;
    --shell-radius-l: ${themeValues.shellRadiusL}px;
    --shell-radius-xl: ${themeValues.shellRadiusXL}px;
    --shell-header-height: ${themeValues.headerHeight}px;
    --shell-panel-border-width: ${themeValues.panelBorderWidth}px;
    --shell-blur: ${themeValues.shellBlur}px;
  `;
}

function generateCss(themeValues) {
  return `/*
  Generated by Gizmo Shell Configurator
  Target: Gizmo.Client.UI custom CSS shell override
*/

[client-theme] {
  --shell-bg: ${themeValues.shellBg};
  --shell-bg-elevated: ${themeValues.shellBgElevated};
  --shell-bg-elevated-2: ${themeValues.shellBgElevated2};
  --shell-bg-glass: ${themeValues.shellBgGlass};
  --shell-bg-soft: ${themeValues.shellBgSoft};
  --shell-border: ${themeValues.shellBorder};
  --shell-border-strong: ${themeValues.shellBorderStrong};
  --shell-text: ${themeValues.shellText};
  --shell-text-soft: ${themeValues.shellTextSoft};
  --shell-text-ghost: ${themeValues.shellTextGhost};
  --shell-accent: ${themeValues.shellAccent};
  --shell-accent-hover: ${themeValues.shellAccentHover};
  --shell-accent-deep: ${themeValues.shellAccentDeep};
  --shell-success: ${themeValues.shellSuccess};
  --shell-warning: ${themeValues.shellWarning};
  --shell-danger: ${themeValues.shellDanger};
  --shell-app-card-bg: ${themeValues.appCardBg};
  --shell-product-card-bg: ${themeValues.productCardBg};
  --shell-popup-bg: ${themeValues.popupBg};
  --shell-button-inactive-bg: ${themeValues.buttonInactiveBg};
  --shell-font-ui: ${themeValues.uiFontFamily};
  --shell-font-display: ${themeValues.displayFontFamily};
  --shell-font-size-base: ${themeValues.baseFontSize}px;
  --shell-font-weight-heading: ${themeValues.headingFontWeight};
  --shell-shadow: 0 10px 30px rgba(0, 0, 0, ${themeValues.shellShadowOpacity});
  --shell-shadow-strong: 0 18px 48px rgba(0, 0, 0, ${themeValues.shellShadowStrongOpacity});
  --shell-focus: 0 0 0 0.3rem ${hexToRgba(themeValues.shellAccent, 0.24)};
  --shell-radius-s: ${themeValues.shellRadiusS}px;
  --shell-radius-m: ${themeValues.shellRadiusM}px;
  --shell-radius-l: ${themeValues.shellRadiusL}px;
  --shell-radius-xl: ${themeValues.shellRadiusXL}px;
}

body {
  background-color: var(--shell-bg);
  color: var(--shell-text);
}

[client-theme],
[client-theme] input,
[client-theme] button,
[client-theme] textarea {
  font-family: var(--shell-font-ui);
  font-size: var(--shell-font-size-base);
}

[client-theme] .giz-login-title,
[client-theme] .giz-nav-title,
[client-theme] .giz-section__header,
[client-theme] .giz-order__items__header,
[client-theme] .giz-profile-user-details__header,
[client-theme] .giz-profile-user-purchases__header {
  font-family: var(--shell-font-display);
  font-weight: var(--shell-font-weight-heading);
}

[client-theme] .giz-background::after {
  background:
    linear-gradient(180deg, ${hexToRgba(themeValues.shellBg, 0.18)} 0%, ${hexToRgba(themeValues.shellBg, 0.84)} 58%, ${hexToRgba(themeValues.shellBg, 0.98)} 100%),
    radial-gradient(circle at top left, ${hexToRgba(themeValues.shellAccent, 0.16)}, transparent 35%),
    radial-gradient(circle at top right, ${hexToRgba(themeValues.shellAccentDeep, 0.14)}, transparent 32%) !important;
  backdrop-filter: blur(${themeValues.shellBlur / 16}rem);
}

[client-theme] .giz-container .giz-app__header {
  background: ${themeValues.popupBg};
  background-color: ${themeValues.popupBg};
  border-bottom: ${themeValues.panelBorderWidth}px solid var(--shell-border);
  box-shadow: var(--shell-shadow);
  backdrop-filter: blur(${themeValues.shellBlur}px);
  height: ${themeValues.headerHeight}px;
}

[client-theme] .giz-home-apps,
[client-theme] .giz-shop,
[client-theme] .giz-profile,
[client-theme] .giz-main-container,
[client-theme] .giz-apps__body,
[client-theme] .giz-home__body,
[client-theme] .giz-shop__products__body {
  background-color: var(--shell-bg);
}

[client-theme] .giz-header,
[client-theme] .giz-login-title,
[client-theme] .giz-nav-title,
[client-theme] .giz-version__version,
[client-theme] .giz-section__header,
[client-theme] .giz-order__items__header,
[client-theme] .giz-profile-user-details__header,
[client-theme] .giz-profile-user-purchases__header {
  color: var(--shell-text);
}

[client-theme] .giz-header__modules-menu-item > a,
[client-theme] .giz-client-tab-item,
[client-theme] .giz-profile-navigation-item > a,
[client-theme] .giz-login-subtitle,
[client-theme] .giz-login-subtitle--sign-up,
[client-theme] .giz-empty-state__text,
[client-theme] .giz-order-summary-text,
[client-theme] .giz-header__user-menu-item,
[client-theme] .giz-profile-section-item__info__title,
[client-theme] .giz-profile-section-item__info__text--name {
  color: var(--shell-text-soft);
}

[client-theme] .giz-header__modules-menu-item > a .giz-icon--large,
[client-theme] .giz-client-tab-item.active svg,
[client-theme] .giz-profile-navigation-item > a.active svg {
  color: var(--shell-text-soft);
}

[client-theme] .giz-header__modules-menu-item > a.active,
[client-theme] .giz-client-tab-item.active,
[client-theme] .giz-profile-navigation-item > a.active,
[client-theme] .giz-login-forgot-password > a,
[client-theme] .giz-login-card__header .giz-login-new-user > a {
  color: var(--shell-accent-hover);
}

[client-theme] .giz-header__modules-menu-item > a.active .giz-icon--large,
[client-theme] .giz-client-tab-item.active svg,
[client-theme] .giz-profile-navigation-item > a.active svg {
  color: var(--shell-accent);
}

[client-theme] .giz-header__modules-menu-item > a.active::before,
[client-theme] .giz-client-tab-item.active::before,
[client-theme] .giz-profile-navigation-item > a.active::before {
  background-color: var(--shell-accent);
  box-shadow: 0 0 12px ${hexToRgba(themeValues.shellAccent, 0.40)};
}

[client-theme] .giz-input-root {
  background-color: var(--shell-bg-soft);
  color: var(--shell-text);
}

[client-theme] .giz-input-control .giz-input-root,
[client-theme] .giz-main-container .giz-login__login .giz-input-root {
  background-color: var(--shell-popup-bg);
  color: var(--shell-text);
}

[client-theme] .giz-input-root input,
[client-theme] .giz-input-root svg,
[client-theme] .giz-input-label {
  color: var(--shell-text-soft);
}

[client-theme] .giz-input-control .giz-input-root input,
[client-theme] .giz-input-control .giz-input-root svg,
[client-theme] .giz-main-container .giz-login__login .giz-input-root input,
[client-theme] .giz-main-container .giz-login__login .giz-input-root svg,
[client-theme] .giz-main-container .giz-login__login .giz-input-root .giz-icon,
[client-theme] .giz-main-container .giz-login__login .giz-input-root .giz-input__icon-right,
[client-theme] .giz-main-container .giz-login__login .helper-link,
[client-theme] .giz-main-container .giz-login__login .giz-login-forgot-password > a {
  color: var(--shell-text-soft);
}

[client-theme] .giz-input-control .giz-input-root input::placeholder,
[client-theme] .giz-main-container .giz-login__login .giz-input-root input::placeholder {
  color: var(--shell-text-ghost);
}

[client-theme] .giz-input-root--outline {
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  border-radius: ${themeValues.shellRadiusS / 10}rem;
  background-color: var(--shell-bg-soft);
}

[client-theme] .giz-input-control .giz-input-root--outline,
[client-theme] .giz-main-container .giz-login__login .giz-input-root--outline {
  background-color: var(--shell-popup-bg);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  box-shadow: inset 0 0 0 1px ${hexToRgba(themeValues.shellAccentDeep, 0.06)};
}

[client-theme] .giz-input-root--outline:hover {
  border-color: ${hexToRgba(themeValues.shellAccentHover, 0.45)};
}

[client-theme] .giz-input-root--outline:focus-within {
  border-color: var(--shell-accent);
  box-shadow: var(--shell-focus);
}

[client-theme] .giz-user-menu-button,
[client-theme] .user-menu-item-button--box,
[client-theme] .giz-app__header,
[client-theme] .giz-container .giz-app__header,
[client-theme] .giz-home__header__quick-launch,
[client-theme] .giz-home__header__ads,
[client-theme] .giz-shop__products__header__tab,
[client-theme] .giz-profile-navigation,
[client-theme] .giz-order__items,
[client-theme] .giz-order__notes,
[client-theme] .giz-order__totals,
[client-theme] .giz-login-card,
[client-theme] .giz-drawer-content {
  background: var(--shell-bg-elevated);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border);
  border-radius: ${themeValues.shellRadiusL / 10}rem;
  box-shadow: var(--shell-shadow);
  backdrop-filter: blur(${themeValues.shellBlur}px);
}

[client-theme] .giz-app__header,
[client-theme] .giz-container .giz-app__header {
  background: ${themeValues.popupBg};
  background-color: ${themeValues.popupBg};
  border-bottom: ${themeValues.panelBorderWidth}px solid var(--shell-border);
}

[client-theme] .quick-launcher-switch {
  background: var(--shell-bg-soft);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border);
  border-radius: ${themeValues.shellRadiusM / 10}rem;
  padding: 0.125rem;
}

[client-theme] .giz-login-method.giz-button-group,
[client-theme] .giz-recovery-method.giz-button-group {
  background: var(--shell-popup-bg);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  border-radius: ${themeValues.shellRadiusM / 10}rem;
  padding: 0.125rem;
  box-shadow: inset 0 0 0 1px ${hexToRgba(themeValues.shellAccentDeep, 0.08)};
}

[client-theme] .giz-main-container .giz-login__login .quick-launcher-switch,
[client-theme] .giz-main-container .giz-login__login .quick-launcher-switch.giz-button-group,
[client-theme] .giz-login-card__body .quick-launcher-switch,
[client-theme] .giz-login-card__body .quick-launcher-switch.giz-button-group {
  background: var(--shell-popup-bg);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  box-shadow: inset 0 0 0 1px ${hexToRgba(themeValues.shellAccentDeep, 0.08)};
}

[client-theme] .quick-launcher-switch .giz-button {
  background: var(--shell-button-inactive-bg);
  color: var(--shell-text-soft);
  border-radius: ${themeValues.shellRadiusM / 10}rem;
}

[client-theme] .giz-login-method.giz-button-group .giz-button,
[client-theme] .giz-recovery-method.giz-button-group .giz-button {
  background: var(--shell-button-inactive-bg);
  color: var(--shell-text-soft);
  border-radius: ${themeValues.shellRadiusM / 10}rem;
}

[client-theme] .giz-main-container .giz-login__login .quick-launcher-switch.giz-button-group .giz-button,
[client-theme] .giz-login-card__body .quick-launcher-switch.giz-button-group .giz-button {
  background: var(--shell-button-inactive-bg);
  color: var(--shell-text-soft);
}

[client-theme] .quick-launcher-switch .giz-button.selected,
[client-theme] .quick-launcher-switch .giz-button.active {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

[client-theme] .giz-login-method.giz-button-group .giz-button.selected,
[client-theme] .giz-login-method.giz-button-group .giz-button.active,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.selected,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.active {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

[client-theme] .giz-main-container .giz-login__login .quick-launcher-switch.giz-button-group .giz-button.selected,
[client-theme] .giz-main-container .giz-login__login .quick-launcher-switch.giz-button-group .giz-button.active,
[client-theme] .giz-login-card__body .quick-launcher-switch.giz-button-group .giz-button.selected,
[client-theme] .giz-login-card__body .quick-launcher-switch.giz-button-group .giz-button.active {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

[client-theme] .quick-launcher-switch .giz-button:not(.selected):not(.active):hover {
  color: var(--shell-accent-hover);
}

[client-theme] .giz-login-method.giz-button-group .giz-button:not(.selected):not(.active):hover,
[client-theme] .giz-recovery-method.giz-button-group .giz-button:not(.selected):not(.active):hover {
  color: var(--shell-accent-hover);
}

[client-theme] .giz-app-card {
  background-color: ${themeValues.appCardBg};
}

[client-theme] .giz-app-card:hover {
  background-color: ${themeValues.appCardBg};
}

[client-theme] .giz-app-card__content__image {
  background-color: ${themeValues.appCardBg};
}

[client-theme] .giz-product-card {
  background-color: ${themeValues.productCardBg};
}

[client-theme] .giz-product-card:hover {
  background-color: ${themeValues.productCardBg};
}

[client-theme] .giz-product-card__content__image,
[client-theme] .giz-product-card__content__image--time {
  background-color: ${themeValues.productCardBg};
}

[client-theme] .giz-dropdown-menu,
[client-theme] .giz-user-dropdown .giz-dropdown-menu,
[client-theme] .giz-multi-select__dropdown,
[client-theme] .giz-select__dropdown,
[client-theme] .giz-global-search-dropdown,
[client-theme] .giz-dialog > .giz-card,
[client-theme] .giz-dialog .giz-card,
[client-theme] .giz-dialog__content-wrapper > .giz-card,
[client-theme] .giz-client-dialog,
[client-theme] .giz-user-agreement-dialog,
[client-theme] .giz-menu-notifications,
[client-theme] .giz-user-links,
[client-theme] .giz-active-apps,
[client-theme] .giz-client-tooltip,
[client-theme] .giz-tooltip,
[client-theme] .giz-password-tooltip,
[client-theme] .giz-user-online-deposit,
[client-theme] .giz-notifications {
  background: ${themeValues.popupBg};
  background-color: ${themeValues.popupBg};
}

[client-theme] .giz-dropdown-menu > *,
[client-theme] .giz-user-dropdown .giz-dropdown-menu > *,
[client-theme] .giz-multi-select__dropdown,
[client-theme] .giz-select__dropdown,
[client-theme] .giz-global-search-dropdown,
[client-theme] .giz-dialog > .giz-card,
[client-theme] .giz-dialog .giz-card,
[client-theme] .giz-client-dialog,
[client-theme] .giz-menu-notifications,
[client-theme] .giz-user-links,
[client-theme] .giz-active-apps,
[client-theme] .giz-password-tooltip,
[client-theme] .giz-user-online-deposit,
[client-theme] .giz-notifications {
  background: ${themeValues.popupBg};
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  box-shadow: var(--shell-shadow-strong);
  backdrop-filter: blur(${themeValues.shellBlur}px);
}

[client-theme] .giz-select__dropdown .giz-list-item.active,
[client-theme] .giz-select__dropdown .giz-list-item.selected,
[client-theme] .giz-multi-select__dropdown .giz-multi-select-item.selected,
[client-theme] .giz-combo-button__dropdown .giz-list-item.active,
[client-theme] .giz-combo-button__dropdown .giz-list-item.selected,
[client-theme] .giz-menu-notification-item:hover,
[client-theme] .giz-user-links-item__icon,
[client-theme] .giz-active-apps .giz-combo-button > .left-button:not(.selected):not(.active),
[client-theme] .giz-active-apps .giz-combo-button > .right-button:not(.selected):not(.active),
[client-theme] .giz-button--fill.disabled,
[client-theme] .giz-button--fill[disabled],
[client-theme] .giz-product-card .giz-button--fill.accent.giz-product-card-primary-button {
  background: var(--shell-button-inactive-bg);
  background-color: var(--shell-button-inactive-bg);
  color: var(--shell-text-soft);
}

[client-theme] .giz-product-card:hover .giz-button--fill.accent.giz-product-card-primary-button {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

[client-theme] .giz-dialog > .giz-card,
[client-theme] .giz-dialog .giz-card {
  border-radius: ${themeValues.shellRadiusXL / 10}rem;
}

[client-theme] .giz-dialog > .giz-card::before,
[client-theme] .giz-dialog .giz-card::before {
  background:
    radial-gradient(circle at top, ${hexToRgba(themeValues.shellAccent, 0.12)}, transparent 34%),
    linear-gradient(180deg, ${themeValues.popupBg} 0%, ${themeValues.shellBgElevated} 100%);
}

[client-theme] .giz-dropdown-menu > *,
[client-theme] .giz-user-dropdown .giz-dropdown-menu > * {
  border-radius: ${themeValues.shellRadiusL / 10}rem;
}

[client-theme] .giz-password-tooltip::before {
  border-color: ${themeValues.popupBg};
}

[client-theme] .giz-client-tooltip--top .giz-client-tooltip-pin {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

[client-theme] .giz-client-tooltip--bottom .giz-client-tooltip-pin {
  border-color: transparent transparent ${themeValues.popupBg} transparent;
}

[client-theme] .giz-client-tooltip--left .giz-client-tooltip-pin {
  border-color: transparent transparent transparent ${themeValues.popupBg};
}

[client-theme] .giz-client-tooltip--right .giz-client-tooltip-pin {
  border-color: transparent ${themeValues.popupBg} transparent transparent;
}

[client-theme] .giz-tooltip--top::after {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

[client-theme] .giz-tooltip--bottom::after {
  border-color: transparent transparent ${themeValues.popupBg} transparent;
}

[client-theme] .giz-user-dropdown.open .giz-user-menu-button,
[client-theme] .giz-user-online-deposit-dropdown.open .user-menu-item-button--box,
[client-theme] .giz-notifications-dropdown.open .user-menu-item-button--box,
[client-theme] .giz-active-apps-dropdown.open .user-menu-item-button--box {
  background: linear-gradient(180deg, ${hexToRgba(themeValues.shellAccentDeep, 0.22)}, ${hexToRgba(themeValues.shellAccentDeep, 0.12)});
  border-color: ${hexToRgba(themeValues.shellAccent, 0.32)};
  color: var(--shell-accent-hover);
  box-shadow: var(--shell-shadow);
}

[client-theme] .giz-drawer-content {
  border-left: ${themeValues.panelBorderWidth}px solid var(--shell-border);
  box-shadow: -16px 0 40px rgba(0, 0, 0, ${Math.min(themeValues.shellShadowStrongOpacity + 0.05, 0.8)});
}

[client-theme] .giz-drawer > .giz-overlay,
[client-theme] .giz-dialog {
  background: linear-gradient(180deg, ${hexToRgba(themeValues.shellBg, 0.82)} 0%, ${hexToRgba(themeValues.shellBg, 0.60)} 100%);
}

[client-theme] .giz-dialog > .giz-card,
[client-theme] .giz-dialog .giz-card {
  border-color: var(--shell-border-strong);
}

[client-theme] .giz-login__login {
  background:
    radial-gradient(circle at top, ${hexToRgba(themeValues.shellAccent, 0.10)}, transparent 34%),
    linear-gradient(180deg, ${themeValues.shellBgElevated} 0%, ${themeValues.shellBg} 100%);
}

[client-theme] .giz-button--fill.primary:not(.disabled),
[client-theme] .giz-button--fill.accent:not(.disabled) {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

[client-theme] .giz-button--fill.primary:not(.disabled):hover,
[client-theme] .giz-button--fill.accent:not(.disabled):hover {
  background: linear-gradient(135deg, var(--shell-accent-hover) 0%, var(--shell-accent) 100%);
}

[client-theme] .giz-button--outline {
  border-color: var(--shell-border-strong);
  color: var(--shell-text);
}

[client-theme] .giz-button--outline:hover {
  border-color: var(--shell-accent);
  color: var(--shell-accent-hover);
}

[client-theme] .giz-button--text {
  color: var(--shell-text);
}

[client-theme] .giz-button--text:hover {
  color: var(--shell-accent-hover);
}

[client-theme] .giz-scrollbar--v::-webkit-scrollbar-track,
[client-theme] .giz-scrollbar-slim--v::-webkit-scrollbar-track,
[client-theme] .giz-scrollbar--h::-webkit-scrollbar-track {
  background: ${hexToRgba(themeValues.shellText, 0.05)};
}

[client-theme] .giz-scrollbar--v::-webkit-scrollbar-thumb,
[client-theme] .giz-scrollbar-slim--v::-webkit-scrollbar-thumb,
[client-theme] .giz-scrollbar--h::-webkit-scrollbar-thumb {
  background: ${hexToRgba(themeValues.shellAccent, 0.42)};
  border-radius: 999px;
}
`;
}

function updateApplyState() {
  if (applyThemeBtn instanceof HTMLButtonElement) {
    applyThemeBtn.disabled = !hasPendingChanges;
  }

  if (applyState) {
    applyState.textContent = hasPendingChanges
      ? 'Есть неприменённые изменения'
      : 'Preview синхронизирован';
  }

  if (previewStatusText) {
    previewStatusText.textContent = hasPendingChanges
      ? 'Есть неприменённые изменения'
      : 'Preview синхронизирован';
  }
}

function markPendingChanges() {
  hasPendingChanges = true;
  updateApplyState();
}

function renderPreview() {
  previewRoot.style.cssText = previewVars(appliedTheme);
}

function renderCssOutput() {
  cssOutput.value = generateCss(appliedTheme);
}

function applyDraftTheme() {
  appliedTheme = structuredClone(draftTheme);
  hasPendingChanges = false;
  renderPreview();
  renderCssOutput();
  updateApplyState();
}

function renderAll(syncControls = true, applyDraft = true) {
  if (syncControls) syncControlValues();
  if (applyDraft) {
    applyDraftTheme();
  } else {
    updateApplyState();
  }
}

function isHexColor(value) {
  return /^#[0-9a-fA-F]{6}$/.test(value);
}

function hexToRgba(color, alpha) {
  if (!isHexColor(color)) return color;
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function updateImportedCssState() {
  const hasImportedCss = importedPreviewStyle.textContent.trim().length > 0;
  if (clearImportedCssBtn instanceof HTMLButtonElement) {
    clearImportedCssBtn.disabled = !hasImportedCss;
  }
  if (importCssStatus) {
    importCssStatus.textContent = hasImportedCss
      ? `Импортирован: ${importedCssFileName}`
      : 'CSS не импортирован';
  }
}

function scopeImportedCss(cssText) {
  return cssText
    .replace(/\[client-theme(?:=(?:"true"|'true'))?\]/g, '#previewRoot')
    .replace(/(^|}|,)\s*body(?=\s*[{,])/gm, '$1 #previewRoot')
    .replace(/#previewRoot\s+\.giz-container\s+/g, '#previewRoot ');
}

function normalizeImportedThemeValue(key, value) {
  if (COLOR_FIELD_KEYS.has(key)) {
    return normalizeColorToken(value) ?? String(value).trim();
  }

  if (['baseFontSize', 'headingFontWeight', 'shellRadiusS', 'shellRadiusM', 'shellRadiusL', 'shellRadiusXL', 'headerHeight', 'panelBorderWidth', 'shellBlur'].includes(key)) {
    const match = String(value).trim().match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : null;
  }

  return String(value).trim();
}

function extractThemeOverridesFromCss(cssText) {
  const overrides = {};

  for (const [cssVar, themeKey] of Object.entries(IMPORTED_THEME_VARIABLE_MAP)) {
    const pattern = new RegExp(`${cssVar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:\\s*([^;]+);`, 'i');
    const match = cssText.match(pattern);
    if (!match) continue;

    const normalized = normalizeImportedThemeValue(themeKey, match[1]);
    if (normalized !== null && normalized !== '') {
      overrides[themeKey] = normalized;
    }
  }

  return overrides;
}

async function importPreviewCss(file) {
  const rawCss = await file.text();
  const importedThemeOverrides = extractThemeOverridesFromCss(rawCss);

  if (!draftThemeBeforeImport || !appliedThemeBeforeImport) {
    draftThemeBeforeImport = structuredClone(draftTheme);
    appliedThemeBeforeImport = structuredClone(appliedTheme);
  }

  if (Object.keys(importedThemeOverrides).length > 0) {
    draftTheme = { ...draftTheme, ...importedThemeOverrides };
    appliedTheme = { ...appliedTheme, ...importedThemeOverrides };
    hasPendingChanges = false;
    syncControlValues();
    renderPreview();
    renderCssOutput();
    updateApplyState();
  }

  importedCssFileName = file.name;
  importedPreviewStyle.textContent = scopeImportedCss(rawCss);
  updateImportedCssState();
}

function clearImportedPreviewCss() {
  if (draftThemeBeforeImport && appliedThemeBeforeImport) {
    draftTheme = structuredClone(draftThemeBeforeImport);
    appliedTheme = structuredClone(appliedThemeBeforeImport);
    draftThemeBeforeImport = null;
    appliedThemeBeforeImport = null;
    hasPendingChanges = false;
    syncControlValues();
    renderPreview();
    renderCssOutput();
    updateApplyState();
  }

  importedCssFileName = '';
  importedPreviewStyle.textContent = '';
  if (importCssInput instanceof HTMLInputElement) importCssInput.value = '';
  updateImportedCssState();
}

function downloadCss() {
  if (hasPendingChanges) applyDraftTheme();
  const blob = new Blob([cssOutput.value], { type: 'text/css;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileNameInput.value.trim() || 'gizmo-shell-custom.css';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function copyCss() {
  try {
    if (hasPendingChanges) applyDraftTheme();
    await navigator.clipboard.writeText(cssOutput.value);
    copyCssBtn.textContent = 'Скопировано';
    setTimeout(() => {
      copyCssBtn.textContent = 'Копировать CSS';
    }, 1500);
  } catch (error) {
    copyCssBtn.textContent = 'Не удалось';
    setTimeout(() => {
      copyCssBtn.textContent = 'Копировать CSS';
    }, 1500);
    console.error(error);
  }
}

previewModeTabs.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const mode = target.dataset.mode;
  if (!mode) return;
  setPreviewMode(mode);
});

settingsTabs.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const tab = target.dataset.settingsTab;
  if (!tab) return;
  setSettingsTab(tab);
});

importCssBtn.addEventListener('click', () => {
  importCssInput.click();
});

clearImportedCssBtn.addEventListener('click', clearImportedPreviewCss);

importCssInput.addEventListener('change', async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  const [file] = Array.from(target.files || []);
  if (!file) return;

  try {
    await importPreviewCss(file);
  } catch (error) {
    importedCssFileName = '';
    importedPreviewStyle.textContent = '';
    if (importCssStatus) importCssStatus.textContent = 'Не удалось импортировать CSS';
    if (clearImportedCssBtn instanceof HTMLButtonElement) clearImportedCssBtn.disabled = true;
    console.error(error);
  }
});

resetThemeBtn.addEventListener('click', () => {
  draftTheme = structuredClone(DEFAULT_THEME);
  renderAll(true, true);
});

applyThemeBtn.addEventListener('click', applyDraftTheme);

copyCssBtn.addEventListener('click', copyCss);
downloadCssBtn.addEventListener('click', downloadCss);

createPresetButtons();
createColorControls();
createFontControls();
createRangeControls();
applyPreviewStyleHints();
setSettingsTab(activeSettingsTab);
setPreviewMode(activePreviewMode);
updateImportedCssState();
renderAll(true, true);