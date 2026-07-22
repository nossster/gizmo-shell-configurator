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
  userLinksHoverColor: '#0f7cfe',
  timelineItemColor: '#ffc700',
  timeProductExpirationTextColor: '#ffffff',
  timeProductExpirationBg: 'rgba(255, 199, 0, 0.32)',
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

function deriveThemeColors(themeValues) {
  const resolved = { ...themeValues };
  const textSoftAlpha = getColorAlpha(resolved.shellTextSoft);

  resolved.shellBgGlass = setColorAlpha(resolved.shellBgElevated2, 0.82) ?? resolved.shellBgElevated2;
  resolved.shellBgSoft = mixColorTokens(resolved.shellBgElevated2, resolved.shellAccent, 0.18) ?? resolved.shellBgElevated2;
  resolved.shellBorderStrong = mixColorTokens(resolved.shellBorder, resolved.shellAccentHover, 0.35) ?? resolved.shellBorder;
  resolved.shellTextGhost = setColorAlpha(resolved.shellTextSoft, textSoftAlpha * 0.54) ?? resolved.shellTextSoft;
  resolved.userLinksHoverColor = resolved.shellAccentHover;
  resolved.appCardBg = resolved.shellBgElevated;
  resolved.productCardBg = resolved.shellBgElevated2;
  resolved.buttonInactiveBg = mixColorTokens(resolved.shellBgElevated2, resolved.shellAccent, 0.24) ?? resolved.shellBgElevated2;

  return resolved;
}

Object.assign(DEFAULT_THEME, deriveThemeColors(DEFAULT_THEME));
Object.values(PRESETS).forEach((preset) => {
  preset.values = deriveThemeColors(preset.values);
});

const COLOR_FIELD_GROUPS = [
  {
    id: 'backgrounds',
    title: 'Основа интерфейса',
    description: 'Четыре уровня поверхностей. Карточки, glass и мягкие состояния рассчитываются автоматически.',
    fields: [
      ['shellBg', 'Основной фон'],
      ['shellBgElevated', 'Панели и карточки'],
      ['shellBgElevated2', 'Header и поднятые поверхности'],
      ['popupBg', 'Popup и модальные окна'],
    ],
  },
  {
    id: 'text',
    title: 'Текст',
    description: 'Два уровня контраста. Placeholder и ghost-текст выводятся из вторичного цвета.',
    fields: [
      ['shellText', 'Основной текст'],
      ['shellTextSoft', 'Вторичный текст'],
    ],
  },
  {
    id: 'accents',
    title: 'Акцент',
    description: 'Ручной градиент и контрастный цвет для активных иконок, ссылок и hover-состояний.',
    fields: [
      ['shellAccent', 'Начало градиента'],
      ['shellAccentDeep', 'Глубокий цвет градиента'],
      ['shellAccentHover', 'Контрастный акцент'],
    ],
  },
  {
    id: 'borders',
    title: 'Границы',
    description: 'Один базовый контур; усиленный вариант автоматически смешивается с акцентом.',
    fields: [
      ['shellBorder', 'Основная граница'],
    ],
  },
  {
    id: 'warning',
    title: 'Предупреждение',
    description: 'Отдельный warning-цвет. Его изменение не влияет на Timeline, Expiration и другие состояния.',
    fields: [
      ['shellWarning', 'Предупреждение'],
    ],
  },
  {
    id: 'timeline-expiration',
    title: 'Timeline и Expiration',
    description: 'Отдельные цвета компонентов, не связанные с Warning и другими статусами.',
    fields: [
      ['timelineItemColor', '.giz-timeline-item'],
      ['timeProductExpirationTextColor', '.giz-time-product-expiration · текст'],
      ['timeProductExpirationBg', '.giz-time-product-expiration · фон'],
    ],
  },
  {
    id: 'states',
    title: 'Остальные статусы',
    description: 'Success и Danger настраиваются независимо от предупреждения.',
    fields: [
      ['shellSuccess', 'Успешное состояние'],
      ['shellDanger', 'Ошибка или опасность'],
    ],
  },
];

const COLOR_FIELDS = COLOR_FIELD_GROUPS.flatMap(({ fields }) => fields);

const COLOR_FIELD_KEYS = new Set(COLOR_FIELDS.map(([key]) => key));
const ALL_COLOR_FIELD_KEYS = new Set([
  'shellBg', 'shellBgElevated', 'shellBgElevated2', 'shellBgGlass', 'shellBgSoft',
  'shellBorder', 'shellBorderStrong', 'shellText', 'shellTextSoft', 'shellTextGhost',
  'shellAccent', 'shellAccentHover', 'shellAccentDeep', 'shellSuccess', 'shellWarning',
  'shellDanger', 'userLinksHoverColor', 'timelineItemColor', 'timeProductExpirationTextColor',
  'timeProductExpirationBg', 'appCardBg', 'productCardBg', 'popupBg', 'buttonInactiveBg',
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
const ALLOWED_PREVIEW_MODES = new Set([
  'home',
  'apps',
  'shop',
  'product',
  'profile',
  'profile-products',
  'profile-purchases',
  'login',
  'password-recovery',
  'registration',
]);
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
  product: {
    label: 'Product',
    description: 'Карточка товара, описание, похожие товары и общий sidebar заказа.',
  },
  profile: {
    label: 'Profile',
    description: 'Профиль, навигация разделов, списки покупок и карточки деталей пользователя.',
  },
  'profile-products': {
    label: 'Available time',
    description: 'Профиль пользователя: вкладка доступных пакетов времени и empty/loading state.',
  },
  'profile-purchases': {
    label: 'Purchases',
    description: 'История покупок, статусы заказа и оплаты, таблица и пагинация.',
  },
  login: {
    label: 'Login',
    description: 'Логин-экран, hero-панель, поля ввода и QR/helper-блоки.',
  },
  'password-recovery': {
    label: 'Password recovery',
    description: 'Восстановление пароля по номеру телефона с возвратом к авторизации.',
  },
  registration: {
    label: 'Registration',
    description: 'Соглашение, чекбокс принятия условий и форма регистрации клуба.',
  },
};
let activeSettingsTab = 'colors';
let hasPendingChanges = false;
let liveApplyFrame = null;
let activePresetKey = 'original-gizmo';
let isCssOutputCollapsed = true;
let activePreviewSurface = 'mock';
let realPreviewState = 'idle';
let realPreviewResizeObserver = null;
const REAL_PREVIEW_VIEWPORT = Object.freeze({ width: 1280, height: 760 });
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
const previewSurfaceTabs = document.getElementById('previewSurfaceTabs');
const previewSurfaceTitle = document.getElementById('previewSurfaceTitle');
const previewSurfaceDescription = document.getElementById('previewSurfaceDescription');
const realPreviewShell = document.getElementById('realPreviewShell');
const realPreviewFrame = document.getElementById('realPreviewFrame');
const realPreviewLoading = document.getElementById('realPreviewLoading');

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
  ['.preview-screen--product .product-details-preview__hero', 'Product detail / product hero'],
  ['.preview-screen--product .reference-order-sidebar', 'Product order / .giz-order'],
  ['.preview-screen--profile-products .time-package-card', 'Доступное время / time package'],
  ['.preview-screen--profile-purchases .purchases-table', 'Покупки / .giz-data-grid'],
  ['.preview-screen--password-recovery .live-login-panel', 'Восстановление пароля / auth panel'],
  ['.preview-screen--registration .agreement-preview', 'Регистрация / agreement panel'],
];

let importedCssFileName = '';
let importedRawCss = '';
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
  '--shell-user-links-hover': 'userLinksHoverColor',
  '--shell-timeline-item': 'timelineItemColor',
  '--shell-time-product-expiration-text': 'timeProductExpirationTextColor',
  '--shell-time-product-expiration-bg': 'timeProductExpirationBg',
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
  COLOR_FIELD_GROUPS.forEach(({ id, title, description, fields }) => {
    const section = document.createElement('section');
    section.className = 'color-settings-group';
    section.setAttribute('aria-labelledby', `color-group-${id}`);
    section.innerHTML = `
      <div class="color-settings-group__header">
        <div>
          <h3 id="color-group-${id}">${title}</h3>
          <p>${description}</p>
        </div>
        <span class="color-settings-group__count" aria-label="${fields.length} настроек">${fields.length}</span>
      </div>
      <div class="color-settings-group__fields"></div>
    `;

    const fieldGrid = section.querySelector('.color-settings-group__fields');
    fields.forEach(([key, label]) => {
      if (key === 'shellAccentDeep') return;

      if (key === 'shellAccent') {
        const wrapper = document.createElement('div');
        wrapper.className = 'control-field gradient-color-control';
        wrapper.innerHTML = `
          <div class="gradient-color-control__header">
            <span>Акцентный градиент</span>
            <small>2 цветовые точки</small>
          </div>
          <div class="gradient-color-control__preview" data-gradient-preview role="img" aria-label="Предпросмотр акцентного градиента"></div>
          <div class="gradient-color-control__stops">
            <div>${createColorInputMarkup('shellAccent', 'Начальный цвет')}</div>
            <div>${createColorInputMarkup('shellAccentDeep', 'Конечный цвет')}</div>
          </div>
        `;
        fieldGrid.appendChild(wrapper);
        return;
      }

      const wrapper = document.createElement('label');
      wrapper.className = 'control-field';
      wrapper.innerHTML = createColorInputMarkup(key, label);
      fieldGrid.appendChild(wrapper);
    });

    colorControls.appendChild(section);
  });

  colorControls.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const pickerKey = target.dataset.colorPicker;
    const textKey = target.dataset.colorText;
    const alphaKey = target.dataset.colorAlpha;

    if (pickerKey) {
      const currentAlpha = getColorAlpha(draftTheme[pickerKey]);
      const normalized = setColorAlpha(target.value, currentAlpha) ?? target.value;
      draftTheme[pickerKey] = normalized;
      draftTheme = deriveThemeColors(draftTheme);
      syncColorText(pickerKey, normalized);
      syncColorAlpha(pickerKey, normalized);
      syncGradientPreview();
      markPendingChanges();
    }

    if (textKey) {
      const normalized = normalizeThemeColorValue(textKey, target.value);
      if (!normalized) return;
      draftTheme[textKey] = normalized;
      draftTheme = deriveThemeColors(draftTheme);
      syncColorText(textKey, normalized);
      syncColorPicker(textKey, normalized);
      syncColorAlpha(textKey, normalized);
      syncGradientPreview();
      markPendingChanges();
    }

    if (alphaKey) {
      const normalized = setColorAlpha(draftTheme[alphaKey], Number(target.value) / 100);
      if (!normalized) return;
      draftTheme[alphaKey] = normalized;
      draftTheme = deriveThemeColors(draftTheme);
      syncColorText(alphaKey, normalized);
      syncColorPicker(alphaKey, normalized);
      syncColorAlpha(alphaKey, normalized);
      syncGradientPreview();
      markPendingChanges();
    }
  });
}

function createColorInputMarkup(key, label) {
  return `
    <span>${label}</span>
    <div class="color-input-row">
      <span class="color-picker-shell">
        <input data-color-picker="${key}" type="color" aria-label="${label}: выбор цвета" />
      </span>
      <input data-color-text="${key}" type="text" spellcheck="false" autocapitalize="characters" aria-label="${label}: значение цвета" />
    </div>
    <div class="color-alpha-row">
      <span>Прозрачность</span>
      <input id="color-alpha-${key}" data-color-alpha="${key}" type="range" min="0" max="100" step="1" aria-label="${label}: прозрачность" />
      <output data-color-alpha-value="${key}" for="color-alpha-${key}">100%</output>
    </div>
  `;
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

function parseColorToken(value) {
  const normalized = normalizeColorToken(value, { allowAlpha: true });
  if (!normalized) return null;

  if (isHexColor(normalized)) {
    return {
      r: parseInt(normalized.slice(1, 3), 16),
      g: parseInt(normalized.slice(3, 5), 16),
      b: parseInt(normalized.slice(5, 7), 16),
      alpha: 1,
    };
  }

  const match = normalized.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/i);
  if (!match) return null;
  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    alpha: Number(match[4]),
  };
}

function colorChannelsToHex({ r, g, b }) {
  return `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
}

function mixColorTokens(startColor, endColor, endWeight) {
  const start = parseColorToken(startColor);
  const end = parseColorToken(endColor);
  if (!start || !end) return null;

  const weight = Math.max(0, Math.min(1, Number(endWeight)));
  if (Number.isNaN(weight)) return null;
  const mixChannel = (startValue, endValue) => Math.round(startValue * (1 - weight) + endValue * weight);
  const mixed = {
    r: mixChannel(start.r, end.r),
    g: mixChannel(start.g, end.g),
    b: mixChannel(start.b, end.b),
  };
  const alpha = start.alpha * (1 - weight) + end.alpha * weight;

  return setColorAlpha(colorChannelsToHex(mixed), alpha);
}

function getColorAlpha(value) {
  return parseColorToken(value)?.alpha ?? 1;
}

function setColorAlpha(value, alpha) {
  const parsed = parseColorToken(value);
  if (!parsed) return null;
  const normalizedAlpha = Math.max(0, Math.min(1, Number(alpha)));
  if (Number.isNaN(normalizedAlpha)) return null;
  if (normalizedAlpha >= 1) return colorChannelsToHex(parsed);
  return `rgba(${parsed.r}, ${parsed.g}, ${parsed.b}, ${formatAlphaValue(normalizedAlpha)})`;
}

function normalizeThemeColorValue(key, value) {
  if (!ALL_COLOR_FIELD_KEYS.has(key)) return String(value).trim();
  return normalizeColorToken(value, { allowAlpha: true });
}

function syncColorPicker(key, value) {
  const picker = document.querySelector(`[data-color-picker="${key}"]`);
  if (!(picker instanceof HTMLInputElement)) return;
  const parsed = parseColorToken(value);
  if (parsed) picker.value = colorChannelsToHex(parsed);
}

function syncColorAlpha(key, value) {
  const alpha = getColorAlpha(value);
  const percentage = Math.round(alpha * 100);
  const input = document.querySelector(`[data-color-alpha="${key}"]`);
  const output = document.querySelector(`[data-color-alpha-value="${key}"]`);
  const picker = document.querySelector(`[data-color-picker="${key}"]`);
  if (input instanceof HTMLInputElement) input.value = String(percentage);
  if (output instanceof HTMLOutputElement) output.value = `${percentage}%`;
  if (picker instanceof HTMLInputElement) picker.style.opacity = String(alpha);
}

function syncGradientPreview() {
  const preview = document.querySelector('[data-gradient-preview]');
  if (!(preview instanceof HTMLElement)) return;
  preview.style.setProperty('--gradient-start', draftTheme.shellAccent);
  preview.style.setProperty('--gradient-end', draftTheme.shellAccentDeep);
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
    syncColorAlpha(key, draftTheme[key]);
  });
  syncGradientPreview();

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

function setRealPreviewMessage(title, detail) {
  if (!realPreviewLoading) return;
  const heading = realPreviewLoading.querySelector('strong');
  const description = realPreviewLoading.querySelector('span');
  if (heading) heading.textContent = title;
  if (description) description.textContent = detail;
}

function fitRealPreview() {
  if (!(realPreviewFrame instanceof HTMLIFrameElement) || !(realPreviewShell instanceof HTMLElement)) return;
  const availableWidth = realPreviewShell.clientWidth;
  if (!availableWidth) return;

  const scale = Math.min(1, availableWidth / REAL_PREVIEW_VIEWPORT.width);
  realPreviewFrame.style.width = `${REAL_PREVIEW_VIEWPORT.width}px`;
  realPreviewFrame.style.height = `${REAL_PREVIEW_VIEWPORT.height}px`;
  realPreviewFrame.style.transform = `scale(${scale})`;
  realPreviewShell.style.height = `${Math.round(REAL_PREVIEW_VIEWPORT.height * scale)}px`;
}

function applyCssToRealPreview() {
  if (!(realPreviewFrame instanceof HTMLIFrameElement)) return false;
  if (!realPreviewFrame.getAttribute('src')) return false;

  let frameDocument;
  try {
    if (realPreviewFrame.contentWindow?.location.href === 'about:blank') return false;
    frameDocument = realPreviewFrame.contentDocument;
  } catch {
    return false;
  }
  if (!frameDocument?.head) return false;

  const themeStyles = Array.from(frameDocument.querySelectorAll('style#gizmoConfiguratorTheme'));
  let themeStyle = themeStyles.shift();
  themeStyles.forEach((style) => style.remove());
  if (themeStyle?.tagName !== 'STYLE') {
    themeStyle = frameDocument.createElement('style');
    themeStyle.id = 'gizmoConfiguratorTheme';
    frameDocument.head.appendChild(themeStyle);
  }
  themeStyle.textContent = generateCss(appliedTheme);

  const importedStyles = Array.from(frameDocument.querySelectorAll('style#gizmoConfiguratorImportedCss'));
  let importedStyle = importedStyles.shift();
  importedStyles.forEach((style) => style.remove());
  if (importedStyle?.tagName !== 'STYLE') {
    importedStyle = frameDocument.createElement('style');
    importedStyle.id = 'gizmoConfiguratorImportedCss';
    frameDocument.head.appendChild(importedStyle);
  }
  importedStyle.textContent = importedRawCss;
  return true;
}

async function loadRealPreview() {
  if (!(realPreviewFrame instanceof HTMLIFrameElement) || realPreviewState === 'loading' || realPreviewState === 'ready') return;

  const source = realPreviewFrame.dataset.src || './real-client/';
  realPreviewState = 'loading';
  realPreviewShell?.classList.remove('is-ready', 'is-error');
  setRealPreviewMessage(
    'Загрузка настоящего Gizmo.Client.UI.Host.Web…',
    'Blazor WebAssembly запускается локально с TestClient, без Gizmo Server.',
  );
  updateApplyState();

  try {
    const markerUrl = new URL('configurator-runtime.json', new URL(source, window.location.href));
    const response = await fetch(markerUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Host.Web runtime marker returned ${response.status}`);
    const marker = await response.json();
    if (marker?.host !== 'Gizmo.Client.UI.Host.Web' || marker?.client !== 'TestClient') {
      throw new Error('Unexpected Host.Web runtime marker');
    }
    realPreviewFrame.src = source;
  } catch (error) {
    realPreviewState = 'error';
    realPreviewShell?.classList.add('is-error');
    setRealPreviewMessage(
      'Real Host.Web не найден',
      'Сначала выполните npm run sync:real-client, затем перезагрузите страницу. Demo preview продолжает работать.',
    );
    updateApplyState();
    console.warn('Real Host.Web preview is unavailable:', error);
  }
}

function setPreviewSurface(surface) {
  activePreviewSurface = surface === 'real' ? 'real' : 'mock';
  const isReal = activePreviewSurface === 'real';

  previewRoot.hidden = isReal;
  if (realPreviewShell instanceof HTMLElement) realPreviewShell.hidden = !isReal;
  document.querySelectorAll('.preview-surface-tab').forEach((button) => {
    const isActive = button.dataset.previewSurface === activePreviewSurface;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  if (previewSurfaceTitle) {
    previewSurfaceTitle.textContent = isReal
      ? 'Настоящий Gizmo.Client.UI.Host.Web'
      : 'Макет оболочки Gizmo.Client.UI';
  }
  if (previewSurfaceDescription) {
    previewSurfaceDescription.textContent = isReal
      ? 'Реальные Razor-компоненты работают локально через TestClient; Generated CSS применяется внутри Blazor preview на лету.'
      : 'Preview максимально приближен к структуре header / quick launch / ads / shop / profile / login shell.';
  }

  if (isReal) {
    fitRealPreview();
    loadRealPreview();
    applyCssToRealPreview();
  }
  updateApplyState();
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
    --shell-user-links-hover: ${themeValues.userLinksHoverColor};
    --shell-timeline-item: ${themeValues.timelineItemColor};
    --shell-time-product-expiration-text: ${themeValues.timeProductExpirationTextColor};
    --shell-time-product-expiration-bg: ${themeValues.timeProductExpirationBg};
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

function colorTokenToWindowsAbgrDword(color) {
  const parsed = parseColorToken(color);
  if (!parsed) return 'ff000000';
  const toHexByte = (channel) => channel.toString(16).padStart(2, '0');
  return `ff${toHexByte(parsed.b)}${toHexByte(parsed.g)}${toHexByte(parsed.r)}`;
}

function colorTokenToWindowsAccentPalette(color) {
  const parsed = parseColorToken(color) ?? { r: 0, g: 0, b: 0 };
  const toHexByte = (channel) => channel.toString(16).padStart(2, '0');
  const slot = `${toHexByte(parsed.r)},${toHexByte(parsed.g)},${toHexByte(parsed.b)},00`;
  return Array.from({ length: 8 }, () => slot).join(',');
}

function generateWindowsTaskbarRegistryComment(themeValues) {
  const parsed = parseColorToken(themeValues.shellBg);
  const sourceColor = parsed ? colorChannelsToHex(parsed) : String(themeValues.shellBg);
  const windowsColor = colorTokenToWindowsAbgrDword(themeValues.shellBg);
  const windowsPalette = colorTokenToWindowsAccentPalette(themeValues.shellBg);

  return `/*
WINDOWS TASKBAR COLOR REGISTRY SCRIPT
Color source: --shell-bg (${sourceColor})

Copy the lines between BEGIN and END into gizmo-taskbar-color.reg,
then run the file for the current Windows user.

--- BEGIN gizmo-taskbar-color.reg ---
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Accent]
"AccentColorMenu"=dword:${windowsColor}
"StartColorMenu"=dword:${windowsColor}
"AccentPalette"=hex:${windowsPalette}

[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\DWM]
"AccentColor"=dword:${windowsColor}
"ColorPrevalence"=dword:00000001

[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize]
"ColorPrevalence"=dword:00000001
--- END gizmo-taskbar-color.reg ---

Apply by signing out or restarting Windows Explorer from Task Manager.
Windows 11: taskbar accent requires Dark mode and
"Show accent color on Start and taskbar" enabled.
This script also aligns Windows accent surfaces with --shell-bg.
*/`;
}

function generateCss(themeValues) {
  themeValues = deriveThemeColors(themeValues);
  return `/*
  Generated by Gizmo Shell Configurator
  Target: Gizmo.Client.UI custom CSS shell override
*/

${generateWindowsTaskbarRegistryComment(themeValues)}

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
  --shell-user-links-hover: ${themeValues.userLinksHoverColor};
  --shell-timeline-item: ${themeValues.timelineItemColor};
  --shell-time-product-expiration-text: ${themeValues.timeProductExpirationTextColor};
  --shell-time-product-expiration-bg: ${themeValues.timeProductExpirationBg};
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
    linear-gradient(180deg, ${hexToRgba(themeValues.shellBg, 0.08)} 0%, ${hexToRgba(themeValues.shellBg, 0.42)} 58%, ${hexToRgba(themeValues.shellBg, 0.72)} 100%),
    radial-gradient(circle at top left, ${hexToRgba(themeValues.shellAccent, 0.12)}, transparent 35%),
    radial-gradient(circle at top right, ${hexToRgba(themeValues.shellAccentDeep, 0.10)}, transparent 32%) !important;
  backdrop-filter: blur(var(--shell-blur));
}

[client-theme] .giz-container .giz-app__header {
  background: ${themeValues.shellBgElevated2};
  background-color: ${themeValues.shellBgElevated2};
  border-bottom: var(--shell-panel-border-width) solid var(--shell-border);
  box-shadow: var(--shell-shadow);
  backdrop-filter: blur(var(--shell-blur));
  height: var(--shell-header-height);
}

[client-theme] .giz-home-apps,
[client-theme] .giz-shop,
[client-theme] .giz-profile,
[client-theme] .giz-main-container,
[client-theme] .giz-app__body,
[client-theme] .giz-apps__body,
[client-theme] .giz-home__body,
[client-theme] .giz-shop__products__body {
  background: transparent !important;
  background-color: transparent !important;
}

[client-theme] .giz-data-grid,
[client-theme] .giz-data-grid > thead td,
[client-theme] .giz-data-grid > thead th {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%) !important;
  background-color: var(--shell-accent) !important;
  color: #ffffff !important;
}

[client-theme] .giz-data-grid,
[client-theme] .giz-data-grid th,
[client-theme] .giz-data-grid td {
  color: #ffffff !important;
}

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

[client-theme] .giz-header__modules-menu-item > a {
  background: transparent !important;
  border: 0 !important;
  border-radius: 0;
  box-shadow: none !important;
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

[client-theme] .giz-header__modules-menu-item > a.active {
  background: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
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
  background: ${themeValues.shellBgElevated2};
  background-color: ${themeValues.shellBgElevated2};
  border-bottom: ${themeValues.panelBorderWidth}px solid var(--shell-border);
}

[client-theme] .giz-app__header:has(+ .giz-home__body),
[client-theme] .giz-container .giz-app__header:has(+ .giz-home__body) {
  background-color: ${themeValues.shellBgElevated2};
  background-image: none;
}

[client-theme] .giz-app__header:has(+ .giz-apps__body),
[client-theme] .giz-container .giz-app__header:has(+ .giz-apps__body) {
  background-color: ${themeValues.shellBgElevated2};
  background-image: none;
}

[client-theme] .giz-app__header:has(+ .giz-shop__products__body),
[client-theme] .giz-container .giz-app__header:has(+ .giz-shop__products__body) {
  background-color: ${themeValues.shellBgElevated2};
  background-image: none;
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

[client-theme] .giz-user-links-item:hover .giz-user-links-item__icon svg {
  color: var(--shell-user-links-hover);
}

[client-theme] .giz-user-links-item:hover {
  color: var(--shell-user-links-hover);
}

[client-theme] .giz-product-details__product__info__image .giz-default-image {
  overflow: hidden;
}

[client-theme] .giz-product-details__product__info__image .giz-default-image img {
  filter: brightness(0) saturate(100%) drop-shadow(400px 0 0 var(--shell-accent));
  transform: translateX(-400px);
}

[client-theme] .giz-product-time-image__time__number {
  color: var(--shell-accent);
}

[client-theme] .giz-profile-section-item__icon,
[client-theme] .giz-profile-section-item__icon svg {
  color: var(--shell-accent);
}

[client-theme] .giz-profile-section-item__icon svg [fill]:not([fill="none"]) {
  fill: currentColor !important;
}

[client-theme] .giz-profile-section-item__icon svg [stroke]:not([stroke="none"]) {
  stroke: currentColor !important;
}

[client-theme] .giz-profile-section-item__info__text {
  color: var(--shell-text);
}

[client-theme] .giz-profile-section__header {
  color: var(--shell-text);
}

[client-theme] .giz-timeline-item {
  color: var(--shell-timeline-item);
}

[client-theme] .giz-timeline-item::before {
  background-color: var(--shell-timeline-item);
  border-color: var(--shell-timeline-item);
}

[client-theme] .giz-timeline-item::after {
  border-left-color: var(--shell-timeline-item);
}

[client-theme] .giz-time-product-expiration {
  padding: 0.1rem 0.4rem;
  color: var(--shell-time-product-expiration-text);
  background: var(--shell-time-product-expiration-bg);
  border-radius: 0.4rem;
  margin-bottom: 0.8rem;
  text-align: right;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: initial;
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

[client-theme] .giz-data-grid > tbody > tr:not(.giz-data-grid-row-detail),
[client-theme] .giz-data-grid > tbody > tr:not(.giz-data-grid-row-detail):hover {
  background:
    radial-gradient(circle at top, ${hexToRgba(themeValues.shellAccent, 0.12)}, transparent 34%),
    linear-gradient(180deg, ${themeValues.popupBg} 0%, ${themeValues.shellBgElevated} 100%) !important;
  background-color: ${themeValues.popupBg} !important;
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
    linear-gradient(180deg, ${themeValues.shellBgElevated} 0%, ${themeValues.shellBg} 100%) !important;
  background-color: ${themeValues.shellBg} !important;
  color: var(--shell-text);
}

[client-theme] .giz-login__adv,
[client-theme] .giz-login__adv__background {
  background:
    radial-gradient(circle at 30% 20%, ${hexToRgba(themeValues.shellAccent, 0.16)}, transparent 34%),
    linear-gradient(145deg, ${themeValues.shellBgElevated2} 0%, ${themeValues.shellBg} 100%);
}

[client-theme] .giz-login__adv__background > img[src=""] {
  display: none;
}

[client-theme] .giz-login__login .giz-login-card,
[client-theme] .giz-login__login .giz-login-card__header,
[client-theme] .giz-login__login .giz-login-card__body,
[client-theme] .giz-login__login .giz-login-card__footer {
  color: var(--shell-text);
}

[client-theme] .giz-login__login .giz-alternative-login__separator,
[client-theme] .giz-login__login .giz-alternative-login__separator > span {
  background: var(--shell-bg) !important;
  background-color: var(--shell-bg) !important;
  color: var(--shell-text-soft);
}

[client-theme] .giz-login__login .giz-login-new-user,
[client-theme] .giz-login__login .giz-alternative-login__qr-description__subtitle {
  color: var(--shell-text-soft);
}

[client-theme] .giz-login__login .giz-login-new-user > a,
[client-theme] .giz-login__login .giz-login-forgot-password > a {
  color: var(--shell-accent-hover);
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
  if (applyState) {
    applyState.textContent = hasPendingChanges
      ? 'Preview обновляется автоматически…'
      : 'Preview синхронизирован';
  }

  if (previewStatusText) {
    if (activePreviewSurface === 'real') {
      const realStatus = {
        idle: 'Real Host.Web ещё не загружен',
        loading: 'Real Host.Web загружается…',
        ready: hasPendingChanges ? 'Real Host.Web обновляется…' : 'Real Host.Web синхронизирован',
        error: 'Real Host.Web недоступен',
      };
      previewStatusText.textContent = realStatus[realPreviewState] ?? realStatus.idle;
    } else {
      previewStatusText.textContent = hasPendingChanges
        ? 'Preview обновляется…'
        : 'Preview синхронизирован';
    }
  }
}

function markPendingChanges() {
  hasPendingChanges = true;
  updateApplyState();
  if (liveApplyFrame !== null) return;

  liveApplyFrame = requestAnimationFrame(() => {
    liveApplyFrame = null;
    applyDraftTheme();
  });
}

function renderPreview() {
  previewRoot.style.cssText = previewVars(appliedTheme);
  applyCssToRealPreview();
}

function renderCssOutput() {
  cssOutput.value = generateCss(appliedTheme);
}

function applyDraftTheme() {
  if (liveApplyFrame !== null) {
    cancelAnimationFrame(liveApplyFrame);
    liveApplyFrame = null;
  }
  draftTheme = deriveThemeColors(draftTheme);
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
  const parsed = parseColorToken(color);
  if (!parsed) return color;
  const combinedAlpha = Math.max(0, Math.min(1, parsed.alpha * Number(alpha)));
  return `rgba(${parsed.r}, ${parsed.g}, ${parsed.b}, ${formatAlphaValue(combinedAlpha)})`;
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
  if (ALL_COLOR_FIELD_KEYS.has(key)) {
    return normalizeThemeColorValue(key, value) ?? String(value).trim();
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
  importedRawCss = rawCss;

  if (!draftThemeBeforeImport || !appliedThemeBeforeImport) {
    draftThemeBeforeImport = structuredClone(draftTheme);
    appliedThemeBeforeImport = structuredClone(appliedTheme);
  }

  if (Object.keys(importedThemeOverrides).length > 0) {
    draftTheme = deriveThemeColors({ ...draftTheme, ...importedThemeOverrides });
    appliedTheme = deriveThemeColors({ ...appliedTheme, ...importedThemeOverrides });
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
  applyCssToRealPreview();
  updateImportedCssState();
  updateExportSummary();
}

function clearImportedPreviewCss() {
  importedRawCss = '';
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
  applyCssToRealPreview();
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

function previewIcon(icon, className = 'giz-preview-icon') {
  return `<svg class="${className}" aria-hidden="true"><use href="#icon-${icon}"></use></svg>`;
}

function renderPreviewShellHeader(activeNav) {
  const navItems = [
    ['home', 'home', 'HOME'],
    ['apps', 'gamepad', 'APPS'],
    ['shop', 'cart', 'SHOP'],
  ];

  return `
    <div class="giz-app__header preview-header-compact reference-shell-header live-shell-header">
      <div class="giz-header">
        <nav class="giz-header__modules-menu reference-shell-nav live-top-nav" aria-label="Основная навигация">
          ${navItems.map(([mode, icon, label]) => `<button class="module-link preview-shared-module-link${activeNav === mode ? ' active' : ''}" type="button" data-preview-target="${mode}">${previewIcon(icon, 'module-icon giz-preview-icon')}<span class="module-link__label">${label}</span></button>`).join('')}
          <button class="reference-header-search user-menu-item-button--box" type="button" aria-label="Поиск">${previewIcon('search')}</button>
        </nav>
        <div class="giz-header__user-menu reference-header-userbar live-header-userbar">
          <div class="giz-header__user-menu-item reference-status-pill reference-status-pill--tariff live-header-pill">${previewIcon('stopwatch')}<span>Тариф</span></div>
          <div class="giz-header__user-menu-item reference-status-pill">${previewIcon('clock')}<span>25:01</span></div>
          <div class="giz-header__user-menu-item reference-status-pill">${previewIcon('coin')}<span>100</span></div>
          <div class="giz-header__user-menu-item reference-status-pill"><span>₽100.00</span></div>
          <button class="reference-action-button user-menu-item-button--box" type="button" aria-label="Скрыть баланс">${previewIcon('eye-off')}</button>
          <button class="reference-action-button user-menu-item-button--box" type="button" aria-label="Приложения">${previewIcon('grid')}</button>
          <button class="reference-action-button user-menu-item-button--box" type="button" aria-label="Уведомления">${previewIcon('bell')}</button>
          <button class="reference-action-button user-menu-item-button--box" type="button" aria-label="Помощь">${previewIcon('help')}</button>
          <div class="giz-user-dropdown reference-user-dropdown-anchor live-user-anchor">
            <button class="giz-user-menu-button" type="button" data-preview-action="toggle-user-menu">${previewIcon('user')}<span>PC 100</span>${previewIcon('chevron')}</button>
            <div class="reference-user-menu-panel giz-dropdown-menu live-user-menu-panel">
              <button class="reference-user-menu-item" type="button" data-preview-target="profile">${previewIcon('user')}<span>Мой профиль</span></button>
              <button class="reference-user-menu-item" type="button">${previewIcon('lock')}<span>Заблокировать ПК</span></button>
              <button class="reference-user-menu-item" type="button" data-preview-target="login">${previewIcon('exit')}<span>Выход</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderPreviewProfileSummary() {
  return `
    <section class="giz-profile-header preview-profile-header">
      <div class="avatar avatar--large">${previewIcon('user', 'giz-preview-icon avatar-icon')}</div>
      <div class="giz-profile-header__info">
        <h2 class="giz-profile-header__info__username">Username</h2>
        <div class="giz-profile-header__info__stats">
          <div class="giz-profile-header__info__stats-item">${previewIcon('package')}<div><span class="giz-title">Баланс</span><strong class="giz-numbers">₽100.00</strong></div></div>
          <div class="giz-profile-header__info__stats-item">${previewIcon('cart')}<div><span class="giz-title">Кредит</span><strong class="giz-numbers">₽4.00</strong></div></div>
          <div class="giz-profile-header__info__stats-item">${previewIcon('coin')}<div><span class="giz-title">Баллы</span><strong class="giz-numbers">100</strong></div></div>
          <div class="giz-profile-header__info__stats-item">${previewIcon('clock')}<div><span class="giz-title">Время</span><strong class="giz-numbers">25:01</strong></div></div>
        </div>
      </div>
    </section>`;
}

function renderPreviewProfileNav(activeProfile) {
  const items = [
    ['profile', 'user', 'Данные о пользователе'],
    ['profile-products', 'clock', 'Доступное время'],
    ['profile-purchases', 'cart', 'Покупки'],
  ];
  return `<nav class="giz-profile-navigation" aria-label="Разделы профиля">${items.map(([mode, icon, label]) => `<button class="giz-profile-navigation-item${mode === activeProfile ? ' active' : ''}" type="button" data-preview-target="${mode}">${previewIcon(icon)}<span>${label}</span></button>`).join('')}</nav>`;
}

function renderPreviewOrderSidebar() {
  return `
    <aside class="reference-order-sidebar giz-order">
      <div class="reference-order-card reference-order-card--empty giz-order__items">
        <div class="reference-order-title giz-order__items__header">Мой заказ <span class="preview-cart-badge">0</span></div>
        <div class="giz-order__items__body"><div class="giz-empty-state"><strong class="giz-empty-state__title reference-order-empty">Корзина пуста</strong><span class="giz-empty-state__text reference-order-subtitle">Добавьте товары</span></div></div>
        <button class="reference-order-clear" type="button" data-preview-action="clear-cart">${previewIcon('trash')}<span>Очистить</span></button>
      </div>
      <div class="reference-order-card giz-order__notes"><div class="reference-order-title reference-order-title--small">Комментарий к заказу</div><textarea class="reference-input-placeholder" placeholder="Добавьте свой комментарий..."></textarea></div>
      <div class="reference-order-card reference-order-card--summary giz-order__totals"><div class="reference-total-row"><span>Общая сумма</span><strong class="preview-order-total">₽0.00</strong></div><div class="reference-total-subrow"><span>Полученные баллы</span><span>0 ${previewIcon('coin', 'giz-preview-icon inline-icon')}</span></div><button class="giz-button giz-button--fill accent full reference-checkout-button" type="button" disabled>Заказать</button></div>
    </aside>`;
}

function hydratePreviewPartials() {
  [
    ['home', 'home'],
    ['apps', 'apps'],
    ['shop', 'shop'],
  ].forEach(([screenName, activeNav]) => {
    const header = document.querySelector(`.preview-screen--${screenName} > .giz-app__header`);
    if (header) header.outerHTML = renderPreviewShellHeader(activeNav);
  });

  const profileScreen = document.querySelector('.preview-screen--profile');
  if (profileScreen) {
    profileScreen.innerHTML = `
      ${renderPreviewShellHeader('profile')}
      <div class="giz-profile giz-scrollbar--v profile-route-preview">
        ${renderPreviewProfileSummary()}
        ${renderPreviewProfileNav('profile')}
        <section class="profile-route-panel profile-details-preview">
          <h2>Основная информация</h2>
          <div class="profile-info-line">${previewIcon('user')}<div><strong>Username</strong><span>First Name</span></div></div>
          <h2>Контактная информация</h2>
          <div class="profile-info-line">${previewIcon('mail')}<div><span>E-mail адрес</span><strong>test@test.test</strong></div></div>
          <div class="profile-info-line">${previewIcon('phone')}<div><span>Телефон</span><strong>1234567890</strong></div></div>
          <h2>Безопасность</h2>
          <button class="profile-info-line profile-info-line--button" type="button">${previewIcon('lock')}<span>Обновить пароль</span>${previewIcon('edit')}</button>
        </section>
      </div>`;
  }

  document.querySelectorAll('[data-preview-shell-header]').forEach((element) => {
    element.innerHTML = renderPreviewShellHeader(element.dataset.activeNav || 'home');
  });
  document.querySelectorAll('[data-preview-profile-summary]').forEach((element) => {
    element.innerHTML = renderPreviewProfileSummary();
  });
  document.querySelectorAll('[data-preview-profile-nav]').forEach((element) => {
    element.innerHTML = renderPreviewProfileNav(element.dataset.activeProfile || 'profile');
  });
  document.querySelectorAll('[data-preview-order-sidebar]').forEach((element) => {
    element.outerHTML = renderPreviewOrderSidebar();
  });

  document.querySelectorAll('.giz-user-dropdown.open').forEach((element) => element.classList.remove('open'));
  document.querySelectorAll('.live-product-media, .preview-card-media').forEach((element) => {
    if (!element.querySelector('svg')) element.insertAdjacentHTML('afterbegin', previewIcon('package', 'preview-placeholder-icon'));
  });
  document.querySelectorAll('.live-app-card').forEach((element) => {
    if (!element.querySelector('svg')) element.insertAdjacentHTML('afterbegin', previewIcon('gamepad', 'preview-placeholder-icon preview-placeholder-icon--app'));
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    element.setAttribute('aria-expanded', 'false');
    element.setAttribute('data-preview-action', 'toggle-app-details');
    const title = element.querySelector('.live-app-card__title')?.textContent.trim() || 'Приложение';
    if (!element.querySelector('.app-card-details')) {
      element.insertAdjacentHTML('beforeend', `
        <div class="app-card-details" aria-hidden="true">
          <div class="app-card-details__eyebrow">Комплект приложения</div>
          <strong>${title}</strong>
          <div class="app-card-details__timeline">
            <span>${previewIcon('clock')}<b>1 час</b><small>Доступное время</small></span>
            <span>${previewIcon('coin')}<b>₽100.00</b><small>Стоимость пакета</small></span>
          </div>
          <button class="giz-button giz-button--fill accent" type="button" data-preview-action="launch-app">Запустить</button>
        </div>`);
    }
  });
  document.querySelectorAll('.live-ad-card').forEach((element, index) => {
    if (!element.textContent.trim()) element.innerHTML = `<div class="no-image-placeholder">${previewIcon('bell', 'preview-placeholder-icon')}<span>Объявление клуба</span></div>`;
    else if (index > 0 && !element.querySelector('svg')) element.insertAdjacentHTML('afterbegin', `<div class="no-image-placeholder no-image-placeholder--compact">${previewIcon('bell', 'preview-placeholder-icon')}</div>`);
  });
  const loginHero = document.querySelector('.preview-screen--login .live-login-hero');
  if (loginHero && !loginHero.querySelector('.auth-hero-mark')) loginHero.insertAdjacentHTML('beforeend', previewIcon('lock', 'auth-hero-mark'));

  document.querySelectorAll('.preview-screen--login .module-link').forEach((element) => element.setAttribute('type', 'button'));
  document.querySelector('.preview-screen--login .helper-link')?.setAttribute('data-preview-target', 'password-recovery');
  document.querySelector('.preview-screen--login .live-login-register-link span')?.setAttribute('data-preview-target', 'registration');
  document.querySelector('.preview-screen--login .live-login-submit')?.setAttribute('data-preview-target', 'home');
  document.querySelectorAll('.preview-screen--shop .preview-product-card').forEach((element) => element.setAttribute('data-preview-target', 'product'));
  document.querySelectorAll('.preview-screen--home .live-store-card .giz-button, .preview-screen--shop .giz-button--fill').forEach((element) => element.setAttribute('data-preview-action', 'add-cart'));
  document.querySelectorAll('.preview-screen--home .module-link, .preview-screen--apps .module-link, .preview-screen--shop .module-link').forEach((element) => {
    const label = element.textContent.trim().toLowerCase();
    if (label.includes('home')) element.setAttribute('data-preview-target', 'home');
    if (label.includes('apps')) element.setAttribute('data-preview-target', 'apps');
    if (label.includes('shop')) element.setAttribute('data-preview-target', 'shop');
  });
  document.querySelectorAll('.live-user-anchor .giz-user-menu-button').forEach((element) => element.setAttribute('data-preview-action', 'toggle-user-menu'));
}

function replacePreviewGlyphsWithSvg() {
  const glyphMap = new Map([
    ['🏠', 'home'], ['🎮', 'gamepad'], ['🕹️', 'gamepad'], ['🛒', 'cart'], ['⌕', 'search'],
    ['⏱', 'stopwatch'], ['🕒', 'clock'], ['🕘', 'history'], ['🪙', 'coin'], ['◆', 'coin'],
    ['🙈', 'eye-off'], ['👁', 'eye-off'], ['⎋', 'exit'], ['↪', 'exit'], ['🚪', 'exit'],
    ['▦', 'grid'], ['🔔', 'bell'], ['❔', 'help'], ['👤', 'user'], ['🪪', 'user'],
    ['🔒', 'lock'], ['🚀', 'rocket'], ['🗑', 'trash'], ['🌐', 'grid'], ['⚙️', 'help'],
  ]);
  const walker = document.createTreeWalker(previewRoot, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    if ([...glyphMap.keys()].some((glyph) => walker.currentNode.nodeValue?.includes(glyph))) nodes.push(walker.currentNode);
  }
  nodes.forEach((textNode) => {
    const parts = [textNode.nodeValue || ''];
    glyphMap.forEach((icon, glyph) => {
      for (let index = parts.length - 1; index >= 0; index -= 1) {
        if (typeof parts[index] !== 'string' || !parts[index].includes(glyph)) continue;
        const segments = parts[index].split(glyph);
        const replacement = [];
        segments.forEach((segment, segmentIndex) => {
          if (segment) replacement.push(segment);
          if (segmentIndex < segments.length - 1) replacement.push({ icon });
        });
        parts.splice(index, 1, ...replacement);
      }
    });
    const fragment = document.createDocumentFragment();
    parts.forEach((part) => {
      if (typeof part === 'string') fragment.appendChild(document.createTextNode(part));
      else {
        const wrapper = document.createElement('span');
        wrapper.innerHTML = previewIcon(part.icon, 'giz-preview-icon inline-icon');
        fragment.appendChild(wrapper.firstElementChild);
      }
    });
    textNode.replaceWith(fragment);
  });
}

function updatePreviewCart(count) {
  document.querySelectorAll('.preview-cart-badge').forEach((element) => { element.textContent = String(count); });
  document.querySelectorAll('.preview-order-total').forEach((element) => { element.textContent = count ? `₽${(count * 129).toFixed(2)}` : '₽0.00'; });
  document.querySelectorAll('.reference-checkout-button').forEach((button) => { button.disabled = count === 0; });
  document.querySelectorAll('.reference-order-empty').forEach((element) => { element.textContent = count ? `${count} товар(а) в корзине` : 'Корзина пуста'; });
}

let previewCartCount = 0;

previewRoot.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const navigation = target.closest('[data-preview-target]');
  if (navigation) {
    setPreviewMode(navigation.dataset.previewTarget);
    return;
  }
  const action = target.closest('[data-preview-action]')?.dataset.previewAction;
  if (action === 'toggle-user-menu') target.closest('.giz-user-dropdown')?.classList.toggle('is-open');
  if (action === 'add-cart') { previewCartCount += 1; updatePreviewCart(previewCartCount); }
  if (action === 'clear-cart') { previewCartCount = 0; updatePreviewCart(previewCartCount); }
  if (action === 'recovery-submit') target.closest('.giz-login-card__body')?.classList.add('preview-action-success');
  if (action === 'registration-continue') setPreviewMode('login');
  if (action === 'toggle-app-details') {
    const card = target.closest('.live-app-card');
    const expanded = !card?.classList.contains('is-details-visible');
    document.querySelectorAll('.live-app-card.is-details-visible').forEach((element) => {
      element.classList.remove('is-details-visible');
      element.setAttribute('aria-expanded', 'false');
      element.querySelector('.app-card-details')?.setAttribute('aria-hidden', 'true');
    });
    if (card && expanded) {
      card.classList.add('is-details-visible');
      card.setAttribute('aria-expanded', 'true');
      card.querySelector('.app-card-details')?.setAttribute('aria-hidden', 'false');
    }
  }
  if (action === 'launch-app') {
    const button = target.closest('[data-preview-action="launch-app"]');
    if (button) button.textContent = 'Запущено';
  }
});

previewRoot.addEventListener('change', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || !target.matches('[data-preview-agreement]')) return;
  const button = target.closest('.agreement-preview')?.querySelector('[data-preview-action="registration-continue"]');
  if (button instanceof HTMLButtonElement) button.disabled = !target.checked;
});

previewSurfaceTabs?.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const surface = target.dataset.previewSurface;
  if (!surface) return;
  setPreviewSurface(surface);
});

if (realPreviewShell instanceof HTMLElement && typeof ResizeObserver === 'function') {
  realPreviewResizeObserver = new ResizeObserver(fitRealPreview);
  realPreviewResizeObserver.observe(realPreviewShell);
}
window.addEventListener('resize', fitRealPreview);

realPreviewFrame?.addEventListener('load', () => {
  if (!(realPreviewFrame instanceof HTMLIFrameElement) || !realPreviewFrame.getAttribute('src')) return;
  if (!applyCssToRealPreview()) {
    realPreviewState = 'error';
    realPreviewShell?.classList.add('is-error');
    setRealPreviewMessage(
      'Не удалось открыть Real Host.Web',
      'Preview должен загружаться с того же origin, что и конфигуратор.',
    );
    updateApplyState();
    return;
  }

  realPreviewState = 'ready';
  realPreviewShell?.classList.remove('is-error');
  realPreviewShell?.classList.add('is-ready');
  fitRealPreview();
  updateApplyState();
});

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
    importedRawCss = '';
    importedPreviewStyle.textContent = '';
    applyCssToRealPreview();
    if (importCssStatus) importCssStatus.textContent = 'Не удалось импортировать CSS';
    if (clearImportedCssBtn instanceof HTMLButtonElement) clearImportedCssBtn.disabled = true;
    console.error(error);
  }
});

resetThemeBtn.addEventListener('click', () => {
  if (importedPreviewStyle.textContent.trim().length > 0) {
    importedCssFileName = '';
    importedRawCss = '';
    importedPreviewStyle.textContent = '';
    draftThemeBeforeImport = null;
    appliedThemeBeforeImport = null;
    if (importCssInput instanceof HTMLInputElement) importCssInput.value = '';
    updateImportedCssState();
  }
  draftTheme = structuredClone(DEFAULT_THEME);
  renderAll(true, true);
});

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
hydratePreviewPartials();
replacePreviewGlyphsWithSvg();
applyPreviewStyleHints();
setSettingsTab(activeSettingsTab);
setPreviewMode(activePreviewMode);
setPreviewSurface(activePreviewSurface);
updateImportedCssState();
updateCssOutputVisibility();
renderAll(true, true);