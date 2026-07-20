const DEFAULT_THEME = {
  shellBg: '#0C0F11',
  shellBgElevated: '#22272B',
  shellBgElevated2: '#1A1D21',
  shellBgGlass: 'rgba(255, 255, 255, 0.01)',
  shellBgSoft: 'rgba(250, 250, 250, 0.16)',
  shellBorder: 'rgba(246, 251, 253, 0.06)',
  shellBorderStrong: 'rgba(255, 255, 255, 0.12)',
  shellText: '#FAFAFA',
  shellTextSoft: 'rgba(255, 255, 255, 0.60)',
  shellTextGhost: 'rgba(255, 255, 255, 0.32)',
  shellAccent: '#3F8CFF',
  shellAccentHover: '#57BCFF',
  shellAccentDeep: '#0078D2',
  shellSuccess: '#10AE79',
  shellWarning: '#E68200',
  shellDanger: '#F73B3B',
  appCardBg: '#22272B',
  productCardBg: '#22272B',
  popupBg: '#22272B',
  buttonInactiveBg: '#373839',
  uiFontFamily: "'Noto Sans', 'Segoe UI', sans-serif",
  displayFontFamily: "'Rubik', 'Segoe UI', sans-serif",
  baseFontSize: 16,
  headingFontWeight: 700,
  shellShadowOpacity: 0.30,
  shellShadowStrongOpacity: 0.37,
  shellBlur: 6,
  shellRadiusS: 8,
  shellRadiusM: 8,
  shellRadiusL: 16,
  shellRadiusXL: 16,
  headerHeight: 64,
  panelBorderWidth: 1,
};

const PRESETS = {
  'original-gizmo': {
    label: 'Reference · Original Gizmo',
    description: 'Базовый тёмный shell в духе оригинального Gizmo с более плотным gamer-контрастом.',
    values: {
      ...DEFAULT_THEME,
      shellShadowOpacity: 0.34,
      shellShadowStrongOpacity: 0.44,
      shellBlur: 8,
    },
  },
  'dark-blue': {
    label: 'Dark · Midnight Ops',
    description: 'Холодная киберспортивная тема с синим glow, тёмными панелями и ночным HUD-настроением.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#070B14',
      shellBgElevated: '#0F1625',
      shellBgElevated2: '#151F34',
      shellBgGlass: '#11192B',
      shellBgSoft: '#24365B',
      shellBorder: '#2D4674',
      shellBorderStrong: '#43649D',
      shellText: '#EEF4FF',
      shellTextSoft: '#AEB9D2',
      shellTextGhost: '#6D7C9A',
      shellAccent: '#5CA4FF',
      shellAccentHover: '#86BCFF',
      shellAccentDeep: '#2D6DFF',
      shellSuccess: '#30D79A',
      shellWarning: '#FFCA63',
      shellDanger: '#FF5F7C',
      appCardBg: '#111A2B',
      productCardBg: '#142035',
      popupBg: '#17243A',
      buttonInactiveBg: '#24344F',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.36,
      shellShadowStrongOpacity: 0.50,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'dark-pink': {
    label: 'Dark · Neon Arena',
    description: 'Неоновая клубная тема с ярким magenta-акцентом для максимально агрессивного gamer-shell.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#0E0611',
      shellBgElevated: '#1A0D1F',
      shellBgElevated2: '#26112D',
      shellBgGlass: '#221028',
      shellBgSoft: '#56264D',
      shellBorder: '#6D2F61',
      shellBorderStrong: '#94417F',
      shellText: '#FFF3FD',
      shellTextSoft: '#E3A6CA',
      shellTextGhost: '#9B6187',
      shellAccent: '#FF4FB3',
      shellAccentHover: '#FF86D0',
      shellAccentDeep: '#D92086',
      shellSuccess: '#52E0B0',
      shellWarning: '#FFD166',
      shellDanger: '#FF607E',
      appCardBg: '#211021',
      productCardBg: '#281226',
      popupBg: '#2D1429',
      buttonInactiveBg: '#47203F',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.38,
      shellShadowStrongOpacity: 0.54,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'dark-ember': {
    label: 'Dark · Inferno Raid',
    description: 'Раскалённая тема для FPS/MMO-витрин: угольно-чёрный фон, ember-поверхности и оранжевый акцент.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#0F0908',
      shellBgElevated: '#1A110F',
      shellBgElevated2: '#281612',
      shellBgGlass: '#1D1211',
      shellBgSoft: '#4A261E',
      shellBorder: '#6A3427',
      shellBorderStrong: '#9A4A34',
      shellText: '#FFF3ED',
      shellTextSoft: '#D9B2A4',
      shellTextGhost: '#966C5D',
      shellAccent: '#FF7A3D',
      shellAccentHover: '#FF9A62',
      shellAccentDeep: '#D9511D',
      shellSuccess: '#57D38F',
      shellWarning: '#FFD36B',
      shellDanger: '#FF5B5B',
      appCardBg: '#211510',
      productCardBg: '#281914',
      popupBg: '#301E18',
      buttonInactiveBg: '#4A2F25',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.36,
      shellShadowStrongOpacity: 0.52,
      shellBlur: 10,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'dark-emerald': {
    label: 'Dark · Toxic Matrix',
    description: 'Тёмная acid-green палитра с лабораторным glow для sci-fi и cyberpunk-клубов.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#06110D',
      shellBgElevated: '#0B1A15',
      shellBgElevated2: '#11251D',
      shellBgGlass: '#0F2019',
      shellBgSoft: '#1D4334',
      shellBorder: '#2A6A53',
      shellBorderStrong: '#39A17D',
      shellText: '#EAFFF9',
      shellTextSoft: '#A8D7C8',
      shellTextGhost: '#629382',
      shellAccent: '#29F0B4',
      shellAccentHover: '#63FFD1',
      shellAccentDeep: '#17B885',
      shellSuccess: '#44E6A7',
      shellWarning: '#FFE56C',
      shellDanger: '#FF6F8A',
      appCardBg: '#102019',
      productCardBg: '#13261F',
      popupBg: '#173026',
      buttonInactiveBg: '#244A3A',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.35,
      shellShadowStrongOpacity: 0.50,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'dark-violet': {
    label: 'Dark · Void Pulse',
    description: 'Фиолетово-ультрафиолетовый shell для аркадных и hero-shooter сценариев с мощным свечением.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#080913',
      shellBgElevated: '#12152A',
      shellBgElevated2: '#191F3A',
      shellBgGlass: '#131833',
      shellBgSoft: '#2C3470',
      shellBorder: '#404EA0',
      shellBorderStrong: '#6072D6',
      shellText: '#F3F4FF',
      shellTextSoft: '#BCC5F5',
      shellTextGhost: '#7985B9',
      shellAccent: '#9B7BFF',
      shellAccentHover: '#B698FF',
      shellAccentDeep: '#6F49FF',
      shellSuccess: '#4DDAB0',
      shellWarning: '#FFCF68',
      shellDanger: '#FF6F9F',
      appCardBg: '#171B34',
      productCardBg: '#1B2140',
      popupBg: '#20284D',
      buttonInactiveBg: '#303C75',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.37,
      shellShadowStrongOpacity: 0.52,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'light-sky': {
    label: 'Dark · Frostbyte Core',
    description: 'Ледяной тёмный пресет с cyan-glow, как HUD у sci-fi арены и футуристических терминалов.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#071118',
      shellBgElevated: '#0D1B25',
      shellBgElevated2: '#112635',
      shellBgGlass: '#10202D',
      shellBgSoft: '#1B4256',
      shellBorder: '#2C6078',
      shellBorderStrong: '#4290AD',
      shellText: '#EAF9FF',
      shellTextSoft: '#B2D8E8',
      shellTextGhost: '#6E9CAF',
      shellAccent: '#3ED7FF',
      shellAccentHover: '#7CE8FF',
      shellAccentDeep: '#169CC0',
      shellSuccess: '#39DCA4',
      shellWarning: '#FFD36B',
      shellDanger: '#FF698B',
      appCardBg: '#12212C',
      productCardBg: '#142735',
      popupBg: '#193042',
      buttonInactiveBg: '#24475B',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.35,
      shellShadowStrongOpacity: 0.50,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'light-mint': {
    label: 'Dark · Cyber Mint',
    description: 'Яркий digital-green пресет для клубных лаунчеров, где всё должно выглядеть как апгрейд терминала.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#08100C',
      shellBgElevated: '#0F1B15',
      shellBgElevated2: '#13271D',
      shellBgGlass: '#112117',
      shellBgSoft: '#204833',
      shellBorder: '#2D7351',
      shellBorderStrong: '#3FB978',
      shellText: '#EFFFF6',
      shellTextSoft: '#B9E7CF',
      shellTextGhost: '#719780',
      shellAccent: '#4CFF9F',
      shellAccentHover: '#87FFBF',
      shellAccentDeep: '#22C76F',
      shellSuccess: '#58FFB1',
      shellWarning: '#FFE86A',
      shellDanger: '#FF6F8D',
      appCardBg: '#12221A',
      productCardBg: '#15291F',
      popupBg: '#183126',
      buttonInactiveBg: '#25503A',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.35,
      shellShadowStrongOpacity: 0.50,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'light-rose': {
    label: 'Dark · Crimson Bloom',
    description: 'Темно-малиновая storefront-тема с дорогим neon-оттенком и сильным акцентом на CTA и цены.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#12070B',
      shellBgElevated: '#1D1015',
      shellBgElevated2: '#28111C',
      shellBgGlass: '#211019',
      shellBgSoft: '#4A2234',
      shellBorder: '#72324D',
      shellBorderStrong: '#AB4A74',
      shellText: '#FFF3F7',
      shellTextSoft: '#E1ADC0',
      shellTextGhost: '#9D687B',
      shellAccent: '#FF5F95',
      shellAccentHover: '#FF8BB2',
      shellAccentDeep: '#DA2F69',
      shellSuccess: '#4DE0A5',
      shellWarning: '#FFD46B',
      shellDanger: '#FF5A72',
      appCardBg: '#22111A',
      productCardBg: '#29131D',
      popupBg: '#311724',
      buttonInactiveBg: '#4D2637',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.37,
      shellShadowStrongOpacity: 0.52,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'light-sand': {
    label: 'Dark · Titan Gold',
    description: 'Тёмная золото-бронзовая тема с премиальным gamer-настроением и мощными CTA для магазина.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#100D08',
      shellBgElevated: '#1A1510',
      shellBgElevated2: '#261D14',
      shellBgGlass: '#1F170F',
      shellBgSoft: '#4B3721',
      shellBorder: '#72532F',
      shellBorderStrong: '#AB7A43',
      shellText: '#FFF8ED',
      shellTextSoft: '#DCC8A7',
      shellTextGhost: '#9D865E',
      shellAccent: '#FFC857',
      shellAccentHover: '#FFD983',
      shellAccentDeep: '#D69A21',
      shellSuccess: '#54D995',
      shellWarning: '#FFE174',
      shellDanger: '#FF6D5D',
      appCardBg: '#211810',
      productCardBg: '#271D13',
      popupBg: '#2F2418',
      buttonInactiveBg: '#4A3721',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.36,
      shellShadowStrongOpacity: 0.51,
      shellBlur: 10,
      shellRadiusM: 10,
      shellRadiusXL: 22,
    },
  },
  'light-lilac': {
    label: 'Dark · Arcane Storm',
    description: 'Глубокая арканная тема с лиловым glow для fantasy/caster-витрин и магического UI-ритма.',
    values: {
      ...DEFAULT_THEME,
      shellBg: '#090811',
      shellBgElevated: '#141221',
      shellBgElevated2: '#1D1830',
      shellBgGlass: '#171428',
      shellBgSoft: '#34295B',
      shellBorder: '#504087',
      shellBorderStrong: '#775DC2',
      shellText: '#F7F3FF',
      shellTextSoft: '#C9BBE8',
      shellTextGhost: '#8878AD',
      shellAccent: '#B38CFF',
      shellAccentHover: '#CEB2FF',
      shellAccentDeep: '#8556F1',
      shellSuccess: '#4FE3B2',
      shellWarning: '#FFD56F',
      shellDanger: '#FF7598',
      appCardBg: '#181426',
      productCardBg: '#1D1730',
      popupBg: '#241D3B',
      buttonInactiveBg: '#34295A',
      uiFontFamily: "'Inter', system-ui, sans-serif",
      displayFontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      shellShadowOpacity: 0.37,
      shellShadowStrongOpacity: 0.52,
      shellBlur: 12,
      shellRadiusM: 10,
      shellRadiusXL: 22,
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
const ALPHA_COLOR_KEYS = new Set([
  'shellBgGlass',
  'shellBgSoft',
  'shellBorder',
  'shellBorderStrong',
  'shellTextSoft',
  'shellTextGhost',
]);

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
    ["'Noto Sans', 'Segoe UI', sans-serif", 'Noto Sans'],
    ["'Inter', system-ui, sans-serif", 'Inter'],
    ["'Roboto', 'Segoe UI', sans-serif", 'Roboto'],
    ["'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 'Segoe UI'],
  ]],
  ['displayFontFamily', 'Шрифт заголовков', [
    ["'Rubik', 'Segoe UI', sans-serif", 'Rubik'],
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
const ALLOWED_PREVIEW_MODES = new Set(['home', 'apps', 'shop', 'profile', 'login']);
const PREVIEW_MODE_META = {
  home: {
    label: 'Home',
    description: 'Header, quick launch, баннеры, карточки и popup-паттерны главной shell-страницы.',
  },
  apps: {
    label: 'Apps',
    description: 'Сетка app cards, фильтры и пустые/активные состояния каталога приложений.',
  },
  shop: {
    label: 'Shop',
    description: 'Витрина продуктов, tabs, sidebar заказа и плотность shop-layout.',
  },
  profile: {
    label: 'Profile',
    description: 'Профиль, навигация разделов, списки покупок и карточки деталей пользователя.',
  },
  login: {
    label: 'Login',
    description: 'Логин-экран, hero-панель, поля ввода и QR/helper-блоки.',
  },
};
let activeSettingsTab = 'colors';
let hasPendingChanges = false;
let activePresetKey = 'original-gizmo';
let isCssOutputCollapsed = true;
const THEME_KEYS = Object.keys(DEFAULT_THEME);

const previewRoot = document.getElementById('previewRoot');
const cssOutput = document.getElementById('cssOutput');
const cssOutputContainer = document.getElementById('cssOutputContainer');
const fileNameInput = document.getElementById('fileNameInput');
const presetGrid = document.getElementById('presetGrid');
const colorControls = document.getElementById('colorControls');
const fontControls = document.getElementById('fontControls');
const rangeControls = document.getElementById('rangeControls');
const settingsTabs = document.getElementById('settingsTabs');
const previewModeTabs = document.getElementById('previewModeTabs');
const previewModeHint = document.getElementById('previewModeHint');
const resetThemeBtn = document.getElementById('resetThemeBtn');
const applyThemeBtn = document.getElementById('applyThemeBtn');
const applyState = document.getElementById('applyState');
const previewStatusText = document.getElementById('previewStatusText');
const copyCssBtn = document.getElementById('copyCssBtn');
const downloadCssBtn = document.getElementById('downloadCssBtn');
const toggleCssOutputBtn = document.getElementById('toggleCssOutputBtn');
const importCssBtn = document.getElementById('importCssBtn');
const clearImportedCssBtn = document.getElementById('clearImportedCssBtn');
const importCssInput = document.getElementById('importCssInput');
const importCssStatus = document.getElementById('importCssStatus');
const themeSignature = document.getElementById('themeSignature');
const fontSignature = document.getElementById('fontSignature');
const previewModeLabel = document.getElementById('previewModeLabel');

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
  ['.preview-screen--apps .preview-shell-search', 'App search / global search variant'],
  ['.preview-screen--apps .reference-filter-tabs', 'Tabs / .giz-client-tab-item'],
  ['.preview-screen--apps .reference-app-row', 'Apps row / .giz-app-card'],
  ['.preview-screen--shop .reference-shop-tabs', 'Shop tabs / .giz-client-tab-item'],
  ['.preview-screen--shop .reference-shop-banner', 'Hero offer / product highlight'],
  ['.preview-screen--shop .reference-order-sidebar.giz-order', 'Order sidebar / .giz-order'],
  ['.preview-screen--shop .giz-order__items', 'Order items / .giz-order__items'],
  ['.preview-screen--shop .giz-order__notes', 'Order notes / .giz-order__notes'],
  ['.preview-screen--shop .giz-order__totals', 'Order totals / .giz-order__totals'],
  ['.preview-screen--profile .preview-profile-header', 'Profile header / summary'],
  ['.preview-screen--profile .giz-profile-navigation', 'Profile navigation / .giz-profile-navigation'],
  ['.preview-screen--profile .profile-sections-grid', 'Profile cards / profile details grid'],
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

function getPresetDisplayName(key) {
  const preset = PRESETS[key];
  if (!preset) return 'Custom override';
  return preset.label.replace(/^Reference ·\s*|^Dark ·\s*|^Light ·\s*/, '');
}

function getPresetToneLabel(key) {
  const preset = PRESETS[key];
  if (!preset) return 'Custom';
  if (preset.label.startsWith('Reference')) return 'Reference';
  return preset.label.startsWith('Light') ? 'Light' : 'Dark';
}

function formatFontFamilyLabel(value) {
  return String(value)
    .split(',')[0]
    .replace(/^['"]|['"]$/g, '')
    .trim();
}

function themesMatch(left, right) {
  return THEME_KEYS.every((key) => String(left[key]) === String(right[key]));
}

function findMatchingPresetKey(themeValues) {
  for (const [key, preset] of Object.entries(PRESETS)) {
    if (themesMatch(themeValues, preset.values)) return key;
  }

  return null;
}

function syncPresetButtons() {
  activePresetKey = findMatchingPresetKey(appliedTheme) ?? 'custom';
  document.querySelectorAll('.preset-card').forEach((button) => {
    button.classList.toggle('active', button.dataset.preset === activePresetKey);
  });
}

function updatePreviewModeHint() {
  const meta = PREVIEW_MODE_META[activePreviewMode] ?? PREVIEW_MODE_META.home;
  if (previewModeHint) {
    previewModeHint.textContent = `${meta.label}: ${meta.description}`;
  }
  if (previewModeLabel) {
    previewModeLabel.textContent = meta.label;
  }
}

function updateExportSummary() {
  if (themeSignature) {
    const matchedPreset = findMatchingPresetKey(appliedTheme);
    themeSignature.textContent = matchedPreset
      ? getPresetDisplayName(matchedPreset)
      : importedPreviewStyle.textContent.trim().length > 0
        ? 'Imported CSS + custom'
        : 'Custom override';
  }

  if (fontSignature) {
    fontSignature.textContent = `${formatFontFamilyLabel(appliedTheme.displayFontFamily)} / ${formatFontFamilyLabel(appliedTheme.uiFontFamily)}`;
  }

  updatePreviewModeHint();
}

function updateCssOutputVisibility() {
  if (cssOutputContainer) {
    cssOutputContainer.classList.toggle('is-collapsed', isCssOutputCollapsed);
  }
  if (toggleCssOutputBtn) {
    toggleCssOutputBtn.textContent = isCssOutputCollapsed ? 'Показать код' : 'Скрыть код';
  }
}

function createPresetButtons() {
  Object.entries(PRESETS).forEach(([key, preset]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `preset-card${key === 'original-gizmo' ? ' preset-card--featured' : ''}`;
    button.dataset.preset = key;
    const tone = getPresetToneLabel(key);
    const presetName = getPresetDisplayName(key);
    button.innerHTML = `
      <span class="preset-card__swatch" style="background: linear-gradient(135deg, ${preset.values.shellAccent}, ${preset.values.shellAccentDeep});"></span>
      <span class="preset-card__text">
        <span class="preset-card__label">${presetName}</span>
        <span class="preset-card__meta">${tone} preset</span>
        <span class="preset-card__description">${preset.description ?? ''}</span>
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

function formatAlphaValue(value) {
  return Number(value.toFixed(3)).toString();
}

function normalizeColorToken(value, { allowAlpha = false } = {}) {
  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) return trimmed.toUpperCase();

  if (/^#[0-9a-fA-F]{3}$/.test(trimmed)) {
    return `#${trimmed.slice(1).split('').map((char) => char + char).join('')}`.toUpperCase();
  }

  const rgbMatch = trimmed.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+)\s*)?\)$/i);
  if (!rgbMatch) return null;

  const channels = rgbMatch.slice(1, 4).map((part) => Math.max(0, Math.min(255, Math.round(Number(part)))));
  if (channels.some((channel) => Number.isNaN(channel))) return null;

  const alphaRaw = rgbMatch[4];
  if (allowAlpha && alphaRaw !== undefined) {
    const alpha = Math.max(0, Math.min(1, Number(alphaRaw)));
    if (Number.isNaN(alpha)) return null;
    return `rgba(${channels.join(', ')}, ${formatAlphaValue(alpha)})`;
  }

  return `#${channels.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
}

function normalizeThemeColorValue(key, value) {
  if (!COLOR_FIELD_KEYS.has(key)) return String(value).trim();
  return normalizeColorToken(value, { allowAlpha: ALPHA_COLOR_KEYS.has(key) });
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
    ? normalizeThemeColorValue(key, value) ?? String(value)
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
  updatePreviewModeHint();
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
  --shell-header-height: ${themeValues.headerHeight}px;
  --shell-panel-border-width: ${themeValues.panelBorderWidth}px;
  --shell-blur: ${themeValues.shellBlur}px;
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
  backdrop-filter: blur(var(--shell-blur));
}

[client-theme] .giz-container .giz-app__header {
  background: ${themeValues.popupBg};
  background-color: ${themeValues.popupBg};
  border-bottom: var(--shell-panel-border-width) solid var(--shell-border);
  box-shadow: var(--shell-shadow);
  backdrop-filter: blur(var(--shell-blur));
  height: var(--shell-header-height);
}

[client-theme] .giz-home-apps,
[client-theme] .giz-shop,
[client-theme] .giz-profile,
[client-theme] .giz-main-container,
[client-theme] .giz-apps__body,
[client-theme] .giz-home__body,
[client-theme] .giz-shop__products__body,
[client-theme] .giz-user-history__body .giz-data-grid,
[client-theme] .giz-data-grid > thead th {
  background: var(--shell-bg) !important;
  background-color: var(--shell-bg) !important;
  background-image: none !important;
}

[client-theme] .giz-data-grid,
[client-theme] .giz-data-grid th,
[client-theme] .giz-data-grid td,
[client-theme] .giz-icon--medium {
  color: var(--shell-accent) !important;
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
[client-theme] .giz-home-apps__header__quick-launch,
[client-theme] .giz-home-apps__header__ads,
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

[client-theme] .giz-home-apps__header__quick-launch,
[client-theme] .giz-home-apps__header__ads,
[client-theme] .giz-shop__products__header__tab,
[client-theme] .giz-profile-navigation,
[client-theme] .giz-order__items,
[client-theme] .giz-order__notes,
[client-theme] .giz-order__totals,
[client-theme] .giz-login-card,
[client-theme] .giz-drawer-content {
  position: relative;
  z-index: 1;
}

/* Keep popup hosts above surrounding content: backdrop-filter creates a new
   stacking context, so header/shop filter containers need an explicit layer. */
[client-theme] .giz-container .giz-app__body {
  position: relative;
  z-index: 1;
}

[client-theme] .giz-container .giz-app__header,
[client-theme] .giz-shop__products__header,
[client-theme] .giz-shop__products__header__tab,
[client-theme] .giz-header__global-search,
[client-theme] .giz-header__user-menu,
[client-theme] .giz-user-dropdown,
[client-theme] .giz-notifications-dropdown,
[client-theme] .giz-active-apps-dropdown,
[client-theme] .giz-user-online-deposit-dropdown,
[client-theme] .giz-global-search {
  position: relative;
}

[client-theme] .giz-container .giz-app__header,
[client-theme] .giz-shop__products__header,
[client-theme] .giz-shop__products__header__tab {
  isolation: isolate;
  z-index: 40;
}

[client-theme] .giz-header__global-search,
[client-theme] .giz-header__user-menu,
[client-theme] .giz-user-dropdown,
[client-theme] .giz-notifications-dropdown,
[client-theme] .giz-active-apps-dropdown,
[client-theme] .giz-user-online-deposit-dropdown,
[client-theme] .giz-global-search {
  z-index: 50;
}

[client-theme] .giz-dropdown-menu,
[client-theme] .giz-user-dropdown .giz-dropdown-menu,
[client-theme] .giz-multi-select__dropdown,
[client-theme] .giz-select__dropdown,
[client-theme] .giz-combo-button__dropdown,
[client-theme] .giz-global-search-dropdown {
  z-index: 1000;
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

[client-theme] .giz-user-time-products-order--current,
[client-theme] .giz-header-user-balance,
[client-theme] .giz-header__user-menu-item.giz-header-user-balance {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  background-color: var(--shell-accent);
  border: ${themeValues.panelBorderWidth}px solid ${hexToRgba(themeValues.shellAccentHover, 0.44)};
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

[client-theme] .giz-user-time-products-order--current .giz-icon,
[client-theme] .giz-user-time-products-order--current .giz-header__user-menu-item__icon,
[client-theme] .giz-header-user-balance .giz-icon,
[client-theme] .giz-header-user-balance .giz-header__user-menu-item__icon,
[client-theme] .giz-header__user-menu-item.giz-header-user-balance .giz-icon,
[client-theme] .giz-header__user-menu-item.giz-header-user-balance .giz-header__user-menu-item__icon {
  color: #ffffff;
}

[client-theme] .giz-login-method.giz-button-group .giz-button.selected,
[client-theme] .giz-login-method.giz-button-group .giz-button.active,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.selected,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.active {
  background: linear-gradient(135deg, ${themeValues.shellAccent} 0%, ${themeValues.shellAccentDeep} 100%);
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

.giz-user-time-products-order--current,
.giz-header-user-balance,
.giz-header__user-menu-item.giz-header-user-balance {
  background: linear-gradient(135deg, ${themeValues.shellAccent} 0%, ${themeValues.shellAccentDeep} 100%);
  background-color: ${themeValues.shellAccent};
  border: ${themeValues.panelBorderWidth}px solid ${hexToRgba(themeValues.shellAccentHover, 0.44)};
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

.giz-user-time-products-order--current .giz-icon,
.giz-user-time-products-order--current .giz-header__user-menu-item__icon,
.giz-header-user-balance .giz-icon,
.giz-header-user-balance .giz-header__user-menu-item__icon,
.giz-header__user-menu-item.giz-header-user-balance .giz-icon,
.giz-header__user-menu-item.giz-header-user-balance .giz-header__user-menu-item__icon {
  color: #ffffff;
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

[client-theme] .giz-multi-select__dropdown,
[client-theme] .giz-select__dropdown,
[client-theme] .giz-global-search-dropdown,
[client-theme] .giz-dropdown-menu__content,
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

[client-theme] .giz-dropdown-menu__content,
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

[client-theme] .giz-header__user-menu-item {
  background: transparent;
  background-color: transparent;
  border: ${themeValues.panelBorderWidth}px solid transparent;
  color: var(--shell-text-soft);
  box-shadow: none;
}

[client-theme] .giz-header__user-menu-item .giz-user-menu-button,
[client-theme] .giz-header__user-menu-item .user-menu-item-button,
[client-theme] .giz-header__user-menu-item .user-menu-item-button--box {
  background: transparent;
  background-color: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
}

[client-theme] .giz-header__user-menu-item .giz-icon,
[client-theme] .giz-header__user-menu-item__icon {
  color: var(--shell-accent);
}

[client-theme] .giz-badge.giz-badge--small .giz-badge__wrapper .giz-badge__badge,
[client-theme] .giz-badge.giz-badge--corner > .giz-badge__wrapper > .giz-badge__badge,
[client-theme] .giz-badge .giz-badge__badge,
[client-theme] .giz-badge__badge {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  background-color: var(--shell-accent);
  color: #ffffff;
  border-color: ${hexToRgba(themeValues.shellAccentHover, 0.44)};
}

[client-theme] .giz-badge.giz-badge--small .giz-badge__wrapper .giz-badge__badge,
[client-theme] .giz-badge.giz-badge--corner > .giz-badge__wrapper > .giz-badge__badge {
  box-shadow: 0 0 0.5rem 0.2rem ${hexToRgba(themeValues.shellAccent, 0.32)};
}

.giz-badge.giz-badge--small .giz-badge__wrapper .giz-badge__badge,
.giz-badge.giz-badge--corner > .giz-badge__wrapper > .giz-badge__badge,
.giz-badge .giz-badge__badge,
.giz-badge__badge {
  background: linear-gradient(135deg, ${themeValues.shellAccent} 0%, ${themeValues.shellAccentDeep} 100%);
  background-color: ${themeValues.shellAccent};
  color: #ffffff;
  border-color: ${hexToRgba(themeValues.shellAccentHover, 0.44)};
}

.giz-badge.giz-badge--small .giz-badge__wrapper .giz-badge__badge,
.giz-badge.giz-badge--corner > .giz-badge__wrapper > .giz-badge__badge {
  box-shadow: 0 0 0.5rem 0.2rem ${hexToRgba(themeValues.shellAccent, 0.32)};
}

[client-theme] .giz-alert--info,
[client-theme] .giz-dialog .giz-alert--info,
[client-theme] .giz-user-online-deposit .giz-button-group .giz-button:not(.selected):not(.active),
[client-theme] .giz-user-online-deposit-dialog .giz-button-group .giz-button:not(.selected):not(.active) {
  background: var(--shell-bg-soft);
  background-color: var(--shell-bg-soft);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border);
  color: var(--shell-text);
  box-shadow: inset 0 0 0 1px ${hexToRgba(themeValues.shellAccentDeep, 0.08)};
}

.giz-alert--info,
.giz-dialog .giz-alert--info,
.giz-user-online-deposit .giz-button-group .giz-button:not(.selected):not(.active),
.giz-user-online-deposit-dialog .giz-button-group .giz-button:not(.selected):not(.active) {
  background: ${themeValues.shellBgSoft};
  background-color: ${themeValues.shellBgSoft};
  border: ${themeValues.panelBorderWidth}px solid ${themeValues.shellBorder};
  color: ${themeValues.shellText};
  box-shadow: inset 0 0 0 1px ${hexToRgba(themeValues.shellAccentDeep, 0.08)};
}

[client-theme] .giz-alert--info .giz-alert__icon,
[client-theme] .giz-alert--info .giz-icon {
  color: var(--shell-accent);
}

.giz-alert--info .giz-alert__icon,
.giz-alert--info .giz-icon {
  color: ${themeValues.shellAccent};
}

.giz-client-tooltip,
.giz-tooltip,
.giz-dock-item-tooltip,
.giz-user-balance-tooltip {
  background: ${themeValues.popupBg};
  background-color: ${themeValues.popupBg};
  color: ${themeValues.shellText};
  border: ${themeValues.panelBorderWidth}px solid ${themeValues.shellBorderStrong};
  box-shadow: 0 18px 48px rgba(0, 0, 0, ${Math.min(themeValues.shellShadowStrongOpacity + 0.08, 0.88)});
  backdrop-filter: blur(${themeValues.shellBlur}px);
}

.giz-client-tooltip,
.giz-tooltip,
.giz-user-balance-tooltip {
  border-radius: ${themeValues.shellRadiusM / 10}rem;
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

.giz-dialog > .giz-card,
.giz-dialog .giz-card {
  border-radius: ${themeValues.shellRadiusXL / 10}rem;
}

[client-theme] .giz-dialog > .giz-card::before,
[client-theme] .giz-dialog .giz-card::before {
  background:
    radial-gradient(circle at top, ${hexToRgba(themeValues.shellAccent, 0.12)}, transparent 34%),
    linear-gradient(180deg, ${themeValues.popupBg} 0%, ${themeValues.shellBgElevated} 100%);
}

.giz-dialog > .giz-card::before,
.giz-dialog .giz-card::before {
  background:
    radial-gradient(circle at top, ${hexToRgba(themeValues.shellAccent, 0.12)}, transparent 34%),
    linear-gradient(180deg, ${themeValues.popupBg} 0%, ${themeValues.shellBgElevated} 100%);
}

[client-theme] .giz-dropdown-menu__content {
  border-radius: ${themeValues.shellRadiusL / 10}rem;
}

[client-theme] .giz-password-tooltip::before {
  border-color: ${themeValues.popupBg};
}

[client-theme] .giz-client-tooltip--top .giz-client-tooltip-pin {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

[client-theme] .giz-user-balance-tooltip--top .giz-client-tooltip-pin,
[client-theme] .giz-user-balance-tooltip--top .giz-user-balance-tooltip-pin {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

.giz-client-tooltip--top .giz-client-tooltip-pin {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

.giz-user-balance-tooltip--top .giz-client-tooltip-pin,
.giz-user-balance-tooltip--top .giz-user-balance-tooltip-pin,
.giz-user-balance-tooltip--top::after {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

[client-theme] .giz-client-tooltip--bottom .giz-client-tooltip-pin {
  border-color: transparent transparent ${themeValues.popupBg} transparent;
}

[client-theme] .giz-user-balance-tooltip--bottom .giz-client-tooltip-pin,
[client-theme] .giz-user-balance-tooltip--bottom .giz-user-balance-tooltip-pin {
  border-color: transparent transparent ${themeValues.popupBg} transparent;
}

.giz-client-tooltip--bottom .giz-client-tooltip-pin {
  border-color: transparent transparent ${themeValues.popupBg} transparent;
}

.giz-user-balance-tooltip--bottom .giz-client-tooltip-pin,
.giz-user-balance-tooltip--bottom .giz-user-balance-tooltip-pin,
.giz-user-balance-tooltip--bottom::after {
  border-color: transparent transparent ${themeValues.popupBg} transparent;
}

[client-theme] .giz-client-tooltip--left .giz-client-tooltip-pin {
  border-color: transparent transparent transparent ${themeValues.popupBg};
}

[client-theme] .giz-user-balance-tooltip--left .giz-client-tooltip-pin,
[client-theme] .giz-user-balance-tooltip--left .giz-user-balance-tooltip-pin {
  border-color: transparent transparent transparent ${themeValues.popupBg};
}

.giz-client-tooltip--left .giz-client-tooltip-pin {
  border-color: transparent transparent transparent ${themeValues.popupBg};
}

.giz-user-balance-tooltip--left .giz-client-tooltip-pin,
.giz-user-balance-tooltip--left .giz-user-balance-tooltip-pin,
.giz-user-balance-tooltip--left::after {
  border-color: transparent transparent transparent ${themeValues.popupBg};
}

[client-theme] .giz-client-tooltip--right .giz-client-tooltip-pin {
  border-color: transparent ${themeValues.popupBg} transparent transparent;
}

[client-theme] .giz-user-balance-tooltip--right .giz-client-tooltip-pin,
[client-theme] .giz-user-balance-tooltip--right .giz-user-balance-tooltip-pin {
  border-color: transparent ${themeValues.popupBg} transparent transparent;
}

.giz-client-tooltip--right .giz-client-tooltip-pin {
  border-color: transparent ${themeValues.popupBg} transparent transparent;
}

.giz-user-balance-tooltip--right .giz-client-tooltip-pin,
.giz-user-balance-tooltip--right .giz-user-balance-tooltip-pin,
.giz-user-balance-tooltip--right::after {
  border-color: transparent ${themeValues.popupBg} transparent transparent;
}

[client-theme] .giz-tooltip--top::after {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

.giz-tooltip--top::after {
  border-color: ${themeValues.popupBg} transparent transparent transparent;
}

[client-theme] .giz-tooltip--bottom::after {
  border-color: transparent transparent ${themeValues.popupBg} transparent;
}

.giz-tooltip--bottom::after {
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

.giz-dialog {
  background: linear-gradient(180deg, ${hexToRgba(themeValues.shellBg, 0.82)} 0%, ${hexToRgba(themeValues.shellBg, 0.60)} 100%);
}

[client-theme] .giz-dialog > .giz-card,
[client-theme] .giz-dialog .giz-card {
  border-color: var(--shell-border-strong);
}

.giz-dialog > .giz-card,
.giz-dialog .giz-card {
  border-color: ${themeValues.shellBorderStrong};
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
  syncPresetButtons();
  updateExportSummary();
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
    syncPresetButtons();
    updateExportSummary();
    updateApplyState();
  }

  importedCssFileName = file.name;
  importedPreviewStyle.textContent = scopeImportedCss(rawCss);
  updateImportedCssState();
  updateExportSummary();
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
    syncPresetButtons();
    updateExportSummary();
    updateApplyState();
  }

  importedCssFileName = '';
  importedPreviewStyle.textContent = '';
  if (importCssInput instanceof HTMLInputElement) importCssInput.value = '';
  updateImportedCssState();
  updateExportSummary();
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
  if (importedPreviewStyle.textContent.trim().length > 0) {
    importedCssFileName = '';
    importedPreviewStyle.textContent = '';
    draftThemeBeforeImport = null;
    appliedThemeBeforeImport = null;
    if (importCssInput instanceof HTMLInputElement) importCssInput.value = '';
    updateImportedCssState();
  }
  draftTheme = structuredClone(DEFAULT_THEME);
  renderAll(true, true);
});

applyThemeBtn.addEventListener('click', applyDraftTheme);

copyCssBtn.addEventListener('click', copyCss);
downloadCssBtn.addEventListener('click', downloadCss);
toggleCssOutputBtn?.addEventListener('click', () => {
  isCssOutputCollapsed = !isCssOutputCollapsed;
  updateCssOutputVisibility();
});

createPresetButtons();
createColorControls();
createFontControls();
createRangeControls();
applyPreviewStyleHints();
setSettingsTab(activeSettingsTab);
setPreviewMode(activePreviewMode);
updateImportedCssState();
updateCssOutputVisibility();
renderAll(true, true);