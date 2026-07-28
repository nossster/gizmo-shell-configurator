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
  iconColor: '#FAFAFA',
  iconMutedColor: 'rgba(255, 255, 255, 0.60)',
  iconActiveColor: '#3F8CFF',
  iconSuccessColor: '#10AE79',
  iconWarningColor: '#E68200',
  iconDangerColor: '#F73B3B',
  headingColor: '#FAFAFA',
  headingTextSoft: 'rgba(255, 255, 255, 0.72)',
  bodyTextColor: '#FAFAFA',
  linkColor: '#57BCFF',
  linkHoverColor: '#6FA5C8',
  borderColor: 'rgba(246, 251, 253, 0.06)',
  borderStrongColor: 'rgba(255, 255, 255, 0.12)',
  borderHoverColor: 'rgba(87, 188, 255, 0.45)',
  borderFocusColor: '#3F8CFF',
  shadowColor: '#000000',
  loginPanelBg: '#0C0F11',
  loginHeroBg: '#1A1D21',
  loginCardBg: '#22272B',
  loginOverlayBg: 'rgba(35, 35, 45, 0.90)',
  loginSeparatorColor: 'rgba(246, 251, 253, 0.06)',
  loginQrTitleColor: '#FAFAFA',
  loginQrTextColor: 'rgba(255, 255, 255, 0.60)',
  userLinksHoverColor: '#0f7cfe',
  timelineItemColor: '#ffc700',
  timelineItemBg: 'rgba(255, 199, 0, 0)',
  timeProductExpirationTextColor: '#ffffff',
  timeProductExpirationBg: 'rgba(255, 199, 0, 0.32)',
  appCardBg: '#22272B',
  productCardBg: '#22272B',
  popupBg: '#22272B',
  popupTextColor: 'rgba(255, 255, 255, 0.60)',
  filterUtilityBg: '#101820',
  buttonInactiveBg: '#373839',
  selectedStateBg: '#3F8CFF',
  selectedStateTextColor: '#ffffff',
  uiFontFamily: "'Noto Sans', 'Segoe UI', sans-serif",
  displayFontFamily: "'Rubik', 'Segoe UI', sans-serif",
  baseFontSize: 16,
  headingFontWeight: 700,
  shellShadowOpacity: 0.30,
  shellShadowStrongOpacity: 0.37,
  shellBlur: 6,
  wallpaperImage: '',
  wallpaperName: '',
  shellRadiusS: 16,
  shellRadiusM: 8,
  shellRadiusL: 16,
  shellRadiusXL: 16,
  panelRadiusOuter: 16,
  panelRadiusInner: 8,
  cardRadiusOuter: 12,
  cardRadiusInner: 8,
  controlRadiusOuter: 16,
  controlRadiusInner: 8,
  buttonRadiusOuter: 16,
  buttonRadiusInner: 8,
  inputRadiusOuter: 16,
  inputRadiusInner: 8,
  modalRadiusOuter: 16,
  modalRadiusInner: 10,
  radiusInset: 8,
  headerHeight: 64,
  panelBorderWidth: 1,
  controlBorderWidth: 1,
  focusRingWidth: 3,
  shadowOffsetY: 10,
  shadowBlur: 30,
  shadowSpread: 0,
  shadowStrongOffsetY: 18,
  shadowStrongBlur: 48,
  shadowStrongSpread: 0,
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
  const setDefault = (key, value) => {
    if (resolved[key] === undefined || resolved[key] === null || resolved[key] === '') {
      resolved[key] = value;
    }
  };
  const setDerivedDefault = (key, value, sourceKey) => {
    setDefault(key, value);
    if (
      DEFAULT_THEME?.[key] !== undefined
      && resolved[key] === DEFAULT_THEME[key]
      && sourceKey
      && resolved[sourceKey] !== DEFAULT_THEME[sourceKey]
    ) {
      resolved[key] = value;
    }
  };

  setDefault('shellBgGlass', setColorAlpha(resolved.shellBgElevated2, 0.82) ?? resolved.shellBgElevated2);
  setDefault('shellBgSoft', mixColorTokens(resolved.shellBgElevated2, resolved.shellAccent, 0.18) ?? resolved.shellBgElevated2);
  setDefault('shellBorderStrong', mixColorTokens(resolved.shellBorder, resolved.shellAccentHover, 0.35) ?? resolved.shellBorder);
  setDefault('shellTextGhost', setColorAlpha(resolved.shellTextSoft, textSoftAlpha * 0.54) ?? resolved.shellTextSoft);
  setDerivedDefault('iconColor', resolved.shellText, 'shellText');
  setDerivedDefault('iconMutedColor', resolved.shellTextSoft, 'shellTextSoft');
  setDerivedDefault('iconActiveColor', resolved.shellAccent, 'shellAccent');
  setDerivedDefault('iconSuccessColor', resolved.shellSuccess, 'shellSuccess');
  setDerivedDefault('iconWarningColor', resolved.shellWarning, 'shellWarning');
  setDerivedDefault('iconDangerColor', resolved.shellDanger, 'shellDanger');
  setDerivedDefault('headingColor', resolved.shellText, 'shellText');
  setDerivedDefault('headingTextSoft', resolved.shellTextSoft, 'shellTextSoft');
  setDerivedDefault('bodyTextColor', resolved.shellText, 'shellText');
  setDerivedDefault('linkColor', resolved.shellAccentHover, 'shellAccentHover');
  setDerivedDefault('linkHoverColor', resolved.shellAccent, 'shellAccent');
  setDerivedDefault('borderColor', resolved.shellBorder, 'shellBorder');
  setDerivedDefault('borderStrongColor', resolved.shellBorderStrong, 'shellBorderStrong');
  setDerivedDefault('borderHoverColor', setColorAlpha(resolved.shellAccentHover, 0.45) ?? resolved.shellAccentHover, 'shellAccentHover');
  setDerivedDefault('borderFocusColor', resolved.shellAccent, 'shellAccent');
  setDefault('shadowColor', '#000000');
  setDerivedDefault('loginPanelBg', resolved.shellBg, 'shellBg');
  setDerivedDefault('loginHeroBg', resolved.shellBgElevated2, 'shellBgElevated2');
  setDerivedDefault('loginCardBg', resolved.shellBgElevated, 'shellBgElevated');
  setDerivedDefault('loginOverlayBg', resolved.shellBgGlass, 'shellBgGlass');
  setDerivedDefault('loginSeparatorColor', resolved.borderColor, 'borderColor');
  setDerivedDefault('loginQrTitleColor', resolved.headingColor, 'headingColor');
  setDerivedDefault('loginQrTextColor', resolved.headingTextSoft, 'headingTextSoft');
  setDerivedDefault('userLinksHoverColor', resolved.shellAccentHover, 'shellAccentHover');
  setDerivedDefault('timelineItemColor', resolved.shellAccentHover, 'shellAccentHover');
  setDerivedDefault('timelineItemBg', setColorAlpha(resolved.shellAccent, 0) ?? 'rgba(0, 0, 0, 0)', 'shellAccent');
  setDerivedDefault('timeProductExpirationTextColor', resolved.shellText, 'shellText');
  setDerivedDefault('timeProductExpirationBg', setColorAlpha(resolved.shellAccent, 0.32) ?? resolved.shellAccent, 'shellAccent');
  setDefault('appCardBg', resolved.shellBgElevated);
  setDefault('productCardBg', resolved.shellBgElevated2);
  setDerivedDefault('popupTextColor', resolved.shellTextSoft, 'shellTextSoft');
  setDerivedDefault('filterUtilityBg', resolved.shellBgElevated2, 'shellBgElevated2');
  setDefault('buttonInactiveBg', mixColorTokens(resolved.shellBgElevated2, resolved.shellAccent, 0.24) ?? resolved.shellBgElevated2);
  setDerivedDefault('selectedStateBg', resolved.shellAccent, 'shellAccent');
  setDerivedDefault('selectedStateTextColor', resolved.shellText, 'shellText');

  const radiusInset = Number(resolved.radiusInset ?? 8);
  const innerRadius = (outer) => Math.max(0, Number(outer) - radiusInset);
  const legacyControlRadiusOuter = Number(resolved.controlRadiusOuter ?? resolved.shellRadiusS ?? 16);
  const legacyControlRadiusChanged = (
    resolved.controlRadiusOuter !== undefined
    && DEFAULT_THEME?.controlRadiusOuter !== undefined
    && Number(resolved.controlRadiusOuter) !== Number(DEFAULT_THEME.controlRadiusOuter)
  );
  if (
    resolved.buttonRadiusOuter === undefined
    || resolved.buttonRadiusOuter === null
    || (legacyControlRadiusChanged && Number(resolved.buttonRadiusOuter) === Number(DEFAULT_THEME.buttonRadiusOuter))
  ) {
    resolved.buttonRadiusOuter = legacyControlRadiusOuter;
  }
  if (
    resolved.inputRadiusOuter === undefined
    || resolved.inputRadiusOuter === null
    || (legacyControlRadiusChanged && Number(resolved.inputRadiusOuter) === Number(DEFAULT_THEME.inputRadiusOuter))
  ) {
    resolved.inputRadiusOuter = legacyControlRadiusOuter;
  }
  resolved.panelRadiusInner = innerRadius(resolved.panelRadiusOuter ?? resolved.shellRadiusL);
  resolved.cardRadiusInner = innerRadius(resolved.cardRadiusOuter ?? resolved.shellRadiusM);
  resolved.buttonRadiusInner = innerRadius(resolved.buttonRadiusOuter ?? resolved.controlRadiusOuter ?? resolved.shellRadiusS);
  resolved.inputRadiusInner = innerRadius(resolved.inputRadiusOuter ?? resolved.controlRadiusOuter ?? resolved.shellRadiusS);
  resolved.controlRadiusOuter = Number(resolved.inputRadiusOuter ?? resolved.controlRadiusOuter ?? resolved.shellRadiusS);
  resolved.controlRadiusInner = innerRadius(resolved.controlRadiusOuter);
  resolved.modalRadiusInner = innerRadius(resolved.modalRadiusOuter ?? resolved.shellRadiusXL);
  resolved.shellRadiusS = Number(resolved.inputRadiusOuter ?? resolved.controlRadiusOuter ?? resolved.shellRadiusS);
  resolved.shellRadiusM = Number(resolved.cardRadiusOuter ?? resolved.shellRadiusM);
  resolved.shellRadiusL = Number(resolved.panelRadiusOuter ?? resolved.shellRadiusL);
  resolved.shellRadiusXL = Number(resolved.modalRadiusOuter ?? resolved.shellRadiusXL);

  return resolved;
}

Object.assign(DEFAULT_THEME, deriveThemeColors(DEFAULT_THEME));
Object.values(PRESETS).forEach((preset) => {
  preset.values = deriveThemeColors(preset.values);
});

const COLOR_FIELD_GROUPS = [
  {
    id: 'backgrounds',
    target: 'surfaceColorControls',
    title: 'Основа интерфейса',
    description: 'Основной фон, панели, карточки, popup и мягкие поверхности.',
    fields: [
      ['shellBg', 'Основной фон'],
      ['shellBgElevated', 'Панели и карточки'],
      ['shellBgElevated2', 'Header и поднятые поверхности'],
      ['shellBgGlass', 'Glass-поверхность'],
      ['shellBgSoft', 'Мягкая поверхность'],
      ['popupBg', 'Popup и модальные окна'],
      ['popupTextColor', 'Popup/модальные окна · текст'],
      ['appCardBg', 'Карточки приложений'],
      ['productCardBg', 'Карточки товаров'],
      ['filterUtilityBg', 'Sort/filter utility блок'],
      ['buttonInactiveBg', 'Неактивные кнопки'],
    ],
  },
  {
    id: 'text',
    target: 'typographyColorControls',
    title: 'Текст и заголовки',
    description: 'Основной текст, вторичный текст, ghost, заголовки и ссылки.',
    fields: [
      ['shellText', 'Основной текст'],
      ['shellTextSoft', 'Вторичный текст'],
      ['shellTextGhost', 'Placeholder и ghost-текст'],
      ['bodyTextColor', 'Текст интерфейса'],
      ['headingColor', 'Заголовки'],
      ['headingTextSoft', 'Подзаголовки'],
      ['linkColor', 'Ссылки'],
      ['linkHoverColor', 'Ссылки при hover'],
    ],
  },
  {
    id: 'accents',
    target: 'accentColorControls',
    title: 'Акцент',
    description: 'Ручной градиент, hover и отдельный цвет пользовательских ссылок.',
    fields: [
      ['shellAccent', 'Начало градиента'],
      ['shellAccentDeep', 'Глубокий цвет градиента'],
      ['shellAccentHover', 'Контрастный акцент'],
    ],
  },
  {
    id: 'icons',
    target: 'iconColorControls',
    title: 'Иконки',
    description: 'Цвет и прозрачность обычных, приглушённых, активных и статусных иконок.',
    fields: [
      ['iconColor', 'Иконки'],
      ['iconMutedColor', 'Приглушённые иконки'],
      ['iconActiveColor', 'Активные иконки'],
      ['iconSuccessColor', 'Success иконки'],
      ['iconWarningColor', 'Warning иконки'],
      ['iconDangerColor', 'Danger иконки'],
    ],
  },
  {
    id: 'borders',
    target: 'borderColorControls',
    title: 'Границы',
    description: 'Основная, усиленная, hover и focus обводка.',
    fields: [
      ['shellBorder', 'Основная граница'],
      ['shellBorderStrong', 'Усиленная граница'],
      ['borderColor', 'Цвет обводки'],
      ['borderStrongColor', 'Сильная обводка'],
      ['borderHoverColor', 'Hover обводка'],
      ['borderFocusColor', 'Focus обводка'],
    ],
  },
  {
    id: 'shadows',
    target: 'shadowColorControls',
    title: 'Тени',
    description: 'Цвет тени используется вместе с размерами и прозрачностью из блока эффектов.',
    fields: [
      ['shadowColor', 'Цвет тени'],
    ],
  },
  {
    id: 'warning',
    target: 'accentColorControls',
    title: 'Предупреждение',
    description: 'Отдельный warning-цвет. Его изменение не влияет на Timeline, Expiration и другие состояния.',
    fields: [
      ['shellWarning', 'Предупреждение'],
    ],
  },
  {
    id: 'timeline-expiration',
    target: 'componentColorControls',
    title: 'Timeline и Expiration',
    description: 'Отдельные цвета компонентов, не связанные с Warning и другими статусами.',
    fields: [
      ['timelineItemColor', '.giz-timeline-item'],
      ['timelineItemBg', '.giz-timeline-item · фон'],
      ['timeProductExpirationTextColor', '.giz-time-product-expiration · текст'],
      ['timeProductExpirationBg', '.giz-time-product-expiration · фон'],
      ['userLinksHoverColor', '.giz-user-links hover'],
      ['selectedStateBg', 'Selected/active · фон'],
      ['selectedStateTextColor', 'Selected/active · текст'],
    ],
  },
  {
    id: 'states',
    target: 'accentColorControls',
    title: 'Остальные статусы',
    description: 'Success и Danger настраиваются независимо от предупреждения.',
    fields: [
      ['shellSuccess', 'Успешное состояние'],
      ['shellDanger', 'Ошибка или опасность'],
    ],
  },
  {
    id: 'login',
    target: 'loginColorControls',
    title: 'Login layout',
    description: 'Отдельные цвета экрана входа: hero, panel, card, overlay, QR и separator.',
    fields: [
      ['loginPanelBg', 'Login panel'],
      ['loginHeroBg', 'Login hero'],
      ['loginCardBg', 'Login card'],
      ['loginOverlayBg', 'Lock overlay'],
      ['loginSeparatorColor', 'Separator'],
      ['loginQrTitleColor', 'QR заголовок'],
      ['loginQrTextColor', 'QR текст'],
    ],
  },
];

const COLOR_FIELDS = COLOR_FIELD_GROUPS.flatMap(({ fields }) => fields);

const COLOR_FIELD_KEYS = new Set(COLOR_FIELDS.map(([key]) => key));
const ALL_COLOR_FIELD_KEYS = new Set([
  'shellBg', 'shellBgElevated', 'shellBgElevated2', 'shellBgGlass', 'shellBgSoft',
  'shellBorder', 'shellBorderStrong', 'shellText', 'shellTextSoft', 'shellTextGhost',
  'shellAccent', 'shellAccentHover', 'shellAccentDeep', 'shellSuccess', 'shellWarning',
  'shellDanger', 'userLinksHoverColor', 'timelineItemColor', 'timelineItemBg', 'timeProductExpirationTextColor',
  'timeProductExpirationBg', 'appCardBg', 'productCardBg', 'popupBg', 'popupTextColor', 'filterUtilityBg',
  'buttonInactiveBg', 'selectedStateBg', 'selectedStateTextColor',
  'iconColor', 'iconMutedColor', 'iconActiveColor', 'iconSuccessColor', 'iconWarningColor',
  'iconDangerColor', 'headingColor', 'headingTextSoft', 'bodyTextColor', 'linkColor',
  'linkHoverColor', 'borderColor', 'borderStrongColor', 'borderHoverColor', 'borderFocusColor',
  'shadowColor', 'loginPanelBg', 'loginHeroBg', 'loginCardBg', 'loginOverlayBg',
  'loginSeparatorColor', 'loginQrTitleColor', 'loginQrTextColor',
]);

const RANGE_FIELDS = [
  ['panelRadiusOuter', 'Внешний радиус панелей', 0, 56, 1, 'px', 'radiusRangeControls'],
  ['cardRadiusOuter', 'Внешний радиус карточек', 0, 48, 1, 'px', 'radiusRangeControls'],
  ['buttonRadiusOuter', 'Внешний радиус кнопок', 0, 32, 1, 'px', 'radiusRangeControls'],
  ['inputRadiusOuter', 'Внешний радиус input', 0, 32, 1, 'px', 'radiusRangeControls'],
  ['modalRadiusOuter', 'Внешний радиус окон', 0, 64, 1, 'px', 'radiusRangeControls'],
  ['radiusInset', 'Авто-разница внутреннего радиуса', 0, 24, 1, 'px', 'radiusRangeControls'],
  ['headerHeight', 'Высота верхней панели', 48, 92, 1, 'px', 'layoutRangeControls'],
  ['shellBlur', 'Размытие фона и glass-панелей', 0, 24, 1, 'px', 'layoutRangeControls'],
  ['panelBorderWidth', 'Толщина контуров элементов', 0, 3, 1, 'px', 'borderRangeControls'],
  ['controlBorderWidth', 'Толщина контуров controls', 0, 3, 1, 'px', 'borderRangeControls'],
  ['focusRingWidth', 'Ширина focus-ring', 0, 8, 1, 'px', 'borderRangeControls'],
  ['shellShadowOpacity', 'Непрозрачность обычной тени', 0, 0.6, 0.01, '', 'shadowRangeControls'],
  ['shellShadowStrongOpacity', 'Непрозрачность popup/window тени', 0, 0.8, 0.01, '', 'shadowRangeControls'],
  ['shadowOffsetY', 'Смещение обычной тени', 0, 40, 1, 'px', 'shadowRangeControls'],
  ['shadowBlur', 'Размер обычной тени', 0, 90, 1, 'px', 'shadowRangeControls'],
  ['shadowSpread', 'Spread обычной тени', -20, 30, 1, 'px', 'shadowRangeControls'],
  ['shadowStrongOffsetY', 'Смещение сильной тени', 0, 60, 1, 'px', 'shadowRangeControls'],
  ['shadowStrongBlur', 'Размер сильной тени', 0, 120, 1, 'px', 'shadowRangeControls'],
  ['shadowStrongSpread', 'Spread сильной тени', -20, 40, 1, 'px', 'shadowRangeControls'],
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
let hasPendingChanges = false;
let liveApplyFrame = null;
let activePresetKey = 'original-gizmo';
const activePreviewSurface = 'real';
let realPreviewState = 'idle';
let realPreviewResizeObserver = null;
const REAL_PREVIEW_VIEWPORT = Object.freeze({ width: 1280, height: 760 });
const THEME_KEYS = Object.keys(DEFAULT_THEME);
const PRESET_THEME_KEYS = THEME_KEYS.filter((key) => key !== 'wallpaperImage' && key !== 'wallpaperName');
const MAX_WALLPAPER_SIZE_BYTES = 8388608;
const ALLOWED_WALLPAPER_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const WALLPAPER_DATA_URL_PATTERN = /^data:image\/(?:jpeg|png|webp);base64,[a-z0-9+/=]+$/i;

const previewRoot = document.getElementById('previewRoot');
const cssOutput = document.getElementById('cssOutput');
const cssOutputContainer = document.getElementById('cssOutputContainer');
const fileNameInput = document.getElementById('fileNameInput');
const presetSelect = document.getElementById('presetSelect');
const colorControls = document.getElementById('colorControls');
const fontControls = document.getElementById('fontControls');
const rangeControls = document.getElementById('rangeControls');
const previewModeTabs = document.getElementById('previewModeTabs');
const previewModeHint = document.getElementById('previewModeHint');
const resetThemeBtn = document.getElementById('resetThemeBtn');
const applyState = document.getElementById('applyState');
const copyCssBtn = document.getElementById('copyCssBtn');
const downloadCssBtn = document.getElementById('downloadCssBtn');
const toggleCssOutputBtn = document.getElementById('toggleCssOutputBtn');
const importCssBtn = document.getElementById('importCssBtn');
const clearImportedCssBtn = document.getElementById('clearImportedCssBtn');
const importCssInput = document.getElementById('importCssInput');
const importCssStatus = document.getElementById('importCssStatus');
const realPreviewShell = document.getElementById('realPreviewShell');
const realPreviewFrame = document.getElementById('realPreviewFrame');
const realPreviewLoading = document.getElementById('realPreviewLoading');
const cssDialog = document.getElementById('cssDialog');
const closeCssDialogBtn = document.getElementById('closeCssDialogBtn');
const wallpaperInput = document.getElementById('wallpaperInput');
const uploadWallpaperBtn = document.getElementById('uploadWallpaperBtn');
const createThemeFromWallpaperBtn = document.getElementById('createThemeFromWallpaperBtn');
const resetWallpaperBtn = document.getElementById('resetWallpaperBtn');
const wallpaperPreview = document.getElementById('wallpaperPreview');
const wallpaperStatus = document.getElementById('wallpaperStatus');

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
  '--shell-icon': 'iconColor',
  '--shell-icon-muted': 'iconMutedColor',
  '--shell-icon-active': 'iconActiveColor',
  '--shell-icon-success': 'iconSuccessColor',
  '--shell-icon-warning': 'iconWarningColor',
  '--shell-icon-danger': 'iconDangerColor',
  '--shell-heading': 'headingColor',
  '--shell-heading-soft': 'headingTextSoft',
  '--shell-body-text': 'bodyTextColor',
  '--shell-link': 'linkColor',
  '--shell-link-hover': 'linkHoverColor',
  '--shell-border-color': 'borderColor',
  '--shell-border-strong-color': 'borderStrongColor',
  '--shell-border-hover': 'borderHoverColor',
  '--shell-border-focus': 'borderFocusColor',
  '--shell-shadow-color': 'shadowColor',
  '--shell-shadow-opacity': 'shellShadowOpacity',
  '--shell-shadow-strong-opacity': 'shellShadowStrongOpacity',
  '--shell-shadow-offset-y': 'shadowOffsetY',
  '--shell-shadow-blur': 'shadowBlur',
  '--shell-shadow-spread': 'shadowSpread',
  '--shell-shadow-strong-offset-y': 'shadowStrongOffsetY',
  '--shell-shadow-strong-blur': 'shadowStrongBlur',
  '--shell-shadow-strong-spread': 'shadowStrongSpread',
  '--shell-login-panel-bg': 'loginPanelBg',
  '--shell-login-hero-bg': 'loginHeroBg',
  '--shell-login-card-bg': 'loginCardBg',
  '--shell-login-overlay-bg': 'loginOverlayBg',
  '--shell-login-separator': 'loginSeparatorColor',
  '--shell-login-qr-title': 'loginQrTitleColor',
  '--shell-login-qr-text': 'loginQrTextColor',
  '--shell-user-links-hover': 'userLinksHoverColor',
  '--shell-timeline-item': 'timelineItemColor',
  '--shell-timeline-item-bg': 'timelineItemBg',
  '--shell-time-product-expiration-text': 'timeProductExpirationTextColor',
  '--shell-time-product-expiration-bg': 'timeProductExpirationBg',
  '--shell-app-card-bg': 'appCardBg',
  '--shell-product-card-bg': 'productCardBg',
  '--shell-popup-bg': 'popupBg',
  '--shell-popup-text': 'popupTextColor',
  '--shell-filter-utility-bg': 'filterUtilityBg',
  '--shell-button-inactive-bg': 'buttonInactiveBg',
  '--shell-selected-bg': 'selectedStateBg',
  '--shell-selected-text': 'selectedStateTextColor',
  '--shell-font-ui': 'uiFontFamily',
  '--shell-font-display': 'displayFontFamily',
  '--shell-font-size-base': 'baseFontSize',
  '--shell-font-weight-heading': 'headingFontWeight',
  '--shell-radius-s': 'shellRadiusS',
  '--shell-radius-m': 'shellRadiusM',
  '--shell-radius-l': 'shellRadiusL',
  '--shell-radius-xl': 'shellRadiusXL',
  '--shell-panel-radius-outer': 'panelRadiusOuter',
  '--shell-card-radius-outer': 'cardRadiusOuter',
  '--shell-control-radius-outer': 'controlRadiusOuter',
  '--shell-button-radius-outer': 'buttonRadiusOuter',
  '--shell-input-radius-outer': 'inputRadiusOuter',
  '--shell-modal-radius-outer': 'modalRadiusOuter',
  '--shell-radius-inset': 'radiusInset',
  '--shell-header-height': 'headerHeight',
  '--shell-panel-border-width': 'panelBorderWidth',
  '--shell-control-border-width': 'controlBorderWidth',
  '--shell-focus-ring-width': 'focusRingWidth',
  '--shell-blur': 'shellBlur',
};

const NUMERIC_THEME_KEYS = new Set([
  'baseFontSize', 'headingFontWeight',
  'shellRadiusS', 'shellRadiusM', 'shellRadiusL', 'shellRadiusXL',
  'panelRadiusOuter', 'panelRadiusInner', 'cardRadiusOuter', 'cardRadiusInner',
  'controlRadiusOuter', 'controlRadiusInner', 'buttonRadiusOuter', 'buttonRadiusInner',
  'inputRadiusOuter', 'inputRadiusInner', 'modalRadiusOuter', 'modalRadiusInner',
  'radiusInset', 'headerHeight', 'panelBorderWidth', 'controlBorderWidth',
  'focusRingWidth', 'shellBlur', 'shellShadowOpacity', 'shellShadowStrongOpacity',
  'shadowOffsetY', 'shadowBlur', 'shadowSpread', 'shadowStrongOffsetY',
  'shadowStrongBlur', 'shadowStrongSpread',
]);

function normalizeWallpaperDataUrl(value) {
  const dataUrl = String(value || '').trim();
  return WALLPAPER_DATA_URL_PATTERN.test(dataUrl) ? dataUrl : '';
}

function wallpaperCssImage(themeValues) {
  const dataUrl = normalizeWallpaperDataUrl(themeValues.wallpaperImage);
  return dataUrl ? `url("${dataUrl}")` : 'none';
}

function wallpaperCssName(themeValues) {
  return JSON.stringify(normalizeWallpaperDataUrl(themeValues.wallpaperImage)
    ? String(themeValues.wallpaperName || 'Пользовательские обои')
    : '');
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(String(reader.result || '')));
    reader.addEventListener('error', () => reject(new Error('Не удалось прочитать изображение.')));
    reader.readAsDataURL(file);
  });
}

function verifyImageDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve());
    image.addEventListener('error', () => reject(new Error('Выбранный файл не удалось декодировать как изображение.')));
    image.src = dataUrl;
  });
}

function loadWallpaperImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', () => reject(new Error('Не удалось создать тему: изображение не декодируется.')));
    image.src = dataUrl;
  });
}

function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: lightness };

  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue = 0;
  if (max === red) hue = (green - blue) / delta + (green < blue ? 6 : 0);
  if (max === green) hue = (blue - red) / delta + 2;
  if (max === blue) hue = (red - green) / delta + 4;
  return { h: hue / 6, s: saturation, l: lightness };
}

function colorLuminance({ r, g, b }) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function clampChannel(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function colorToHex(color) {
  return colorChannelsToHex({
    r: clampChannel(color.r),
    g: clampChannel(color.g),
    b: clampChannel(color.b),
  });
}

function mixRgb(start, end, endWeight) {
  const weight = Math.max(0, Math.min(1, Number(endWeight)));
  return {
    r: start.r * (1 - weight) + end.r * weight,
    g: start.g * (1 - weight) + end.g * weight,
    b: start.b * (1 - weight) + end.b * weight,
  };
}

function scaleRgb(color, multiplier) {
  return {
    r: color.r * multiplier,
    g: color.g * multiplier,
    b: color.b * multiplier,
  };
}

function alphaRgb(color, alpha) {
  return `rgba(${clampChannel(color.r)}, ${clampChannel(color.g)}, ${clampChannel(color.b)}, ${formatAlphaValue(alpha)})`;
}

function averageColors(colors, fallback) {
  if (!colors.length) return fallback;
  const total = colors.reduce((acc, color) => ({
    r: acc.r + color.r,
    g: acc.g + color.g,
    b: acc.b + color.b,
  }), { r: 0, g: 0, b: 0 });
  return {
    r: total.r / colors.length,
    g: total.g / colors.length,
    b: total.b / colors.length,
  };
}

async function createWallpaperPalette(dataUrl) {
  const image = await loadWallpaperImage(dataUrl);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) throw new Error('Не удалось создать тему: canvas недоступен.');

  const maxSide = 96;
  const ratio = Math.min(1, maxSide / Math.max(image.naturalWidth || image.width, image.naturalHeight || image.height));
  canvas.width = Math.max(1, Math.round((image.naturalWidth || image.width) * ratio));
  canvas.height = Math.max(1, Math.round((image.naturalHeight || image.height) * ratio));
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const raw = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const colors = [];
  for (let index = 0; index < raw.length; index += 4) {
    if (raw[index + 3] < 96) continue;
    const color = { r: raw[index], g: raw[index + 1], b: raw[index + 2] };
    const hsl = rgbToHsl(color);
    colors.push({
      ...color,
      luminance: colorLuminance(color),
      saturation: hsl.s,
    });
  }
  if (!colors.length) throw new Error('Не удалось создать тему: в изображении нет непрозрачных пикселей.');

  const sortedByLuminance = [...colors].sort((left, right) => left.luminance - right.luminance);
  const darkest = sortedByLuminance.slice(0, Math.max(1, Math.floor(sortedByLuminance.length * 0.38)));
  const base = averageColors(darkest, colors[0]);
  const accent = [...colors]
    .filter((color) => color.luminance > 0.16 && color.luminance < 0.86)
    .sort((left, right) => (
      (right.saturation * 1.6 + right.luminance * 0.4)
      - (left.saturation * 1.6 + left.luminance * 0.4)
    ))[0] || sortedByLuminance[Math.floor(sortedByLuminance.length * 0.7)] || colors[0];

  const bg = mixRgb(scaleRgb(base, 0.42), { r: 6, g: 9, b: 12 }, 0.48);
  const elevated = mixRgb(bg, accent, 0.18);
  const elevated2 = mixRgb(bg, accent, 0.28);
  const accentSoft = mixRgb(accent, { r: 255, g: 255, b: 255 }, 0.18);
  const accentDeep = mixRgb(accent, { r: 0, g: 0, b: 0 }, 0.28);
  const text = colorLuminance(bg) > 0.45 ? '#111827' : '#FAFAFA';
  const textRgb = parseColorToken(text);

  return {
    shellBg: colorToHex(bg),
    shellBgElevated: colorToHex(elevated),
    shellBgElevated2: colorToHex(elevated2),
    shellBgGlass: alphaRgb(elevated2, 0.86),
    shellBgSoft: alphaRgb(mixRgb(elevated2, accent, 0.28), 0.28),
    shellAccent: colorToHex(accent),
    shellAccentHover: colorToHex(accentSoft),
    shellAccentDeep: colorToHex(accentDeep),
    shellBorder: alphaRgb(accentSoft, 0.22),
    shellBorderStrong: alphaRgb(accentSoft, 0.42),
    shellText: text,
    shellTextSoft: textRgb ? alphaRgb(textRgb, 0.68) : DEFAULT_THEME.shellTextSoft,
    shellTextGhost: textRgb ? alphaRgb(textRgb, 0.36) : DEFAULT_THEME.shellTextGhost,
    bodyTextColor: text,
    headingColor: text,
    headingTextSoft: textRgb ? alphaRgb(textRgb, 0.76) : DEFAULT_THEME.headingTextSoft,
    linkColor: colorToHex(accentSoft),
    linkHoverColor: colorToHex(accent),
    iconColor: text,
    iconMutedColor: textRgb ? alphaRgb(textRgb, 0.68) : DEFAULT_THEME.iconMutedColor,
    iconActiveColor: colorToHex(accent),
    timelineItemColor: colorToHex(accentSoft),
    timelineItemBg: alphaRgb(accent, 0),
    timeProductExpirationTextColor: text,
    timeProductExpirationBg: alphaRgb(accent, 0.32),
    borderColor: alphaRgb(accentSoft, 0.22),
    borderStrongColor: alphaRgb(accentSoft, 0.42),
    borderHoverColor: alphaRgb(accentSoft, 0.52),
    borderFocusColor: colorToHex(accent),
    loginPanelBg: colorToHex(bg),
    loginHeroBg: colorToHex(elevated2),
    loginCardBg: colorToHex(elevated),
    loginOverlayBg: alphaRgb(elevated, 0.9),
    loginSeparatorColor: alphaRgb(accentSoft, 0.24),
    loginQrTitleColor: text,
    loginQrTextColor: textRgb ? alphaRgb(textRgb, 0.68) : DEFAULT_THEME.loginQrTextColor,
    appCardBg: colorToHex(elevated),
    productCardBg: colorToHex(elevated2),
    popupBg: colorToHex(mixRgb(elevated2, bg, 0.18)),
    popupTextColor: textRgb ? alphaRgb(textRgb, 0.68) : DEFAULT_THEME.popupTextColor,
    filterUtilityBg: colorToHex(mixRgb(elevated2, bg, 0.32)),
    buttonInactiveBg: colorToHex(mixRgb(elevated2, accent, 0.18)),
    selectedStateBg: colorToHex(accent),
    selectedStateTextColor: text,
    userLinksHoverColor: colorToHex(accent),
    shadowColor: '#000000',
  };
}

function setWallpaperStatus(message, isError = false) {
  if (!wallpaperStatus) return;
  wallpaperStatus.textContent = message;
  wallpaperStatus.classList.toggle('is-error', isError);
}

function syncWallpaperControls() {
  const dataUrl = normalizeWallpaperDataUrl(draftTheme.wallpaperImage);
  const fileName = dataUrl ? String(draftTheme.wallpaperName || 'Пользовательские обои') : '';

  if (wallpaperPreview instanceof HTMLElement) {
    wallpaperPreview.style.backgroundImage = dataUrl
      ? `linear-gradient(rgba(4, 12, 19, 0.18), rgba(4, 12, 19, 0.32)), url("${dataUrl}")`
      : '';
    wallpaperPreview.setAttribute(
      'aria-label',
      dataUrl ? `Предпросмотр пользовательских обоев: ${fileName}` : 'Предпросмотр стандартных обоев Gizmo',
    );
  }

  if (resetWallpaperBtn instanceof HTMLButtonElement) resetWallpaperBtn.disabled = !dataUrl;
  if (createThemeFromWallpaperBtn instanceof HTMLButtonElement) createThemeFromWallpaperBtn.disabled = !dataUrl;
  setWallpaperStatus(dataUrl ? `Пользовательские обои: ${fileName}` : 'Стандартные обои Gizmo');
}

async function setWallpaperFromFile(file) {
  if (!ALLOWED_WALLPAPER_TYPES.has(file.type)) {
    throw new Error('Поддерживаются только JPG, PNG и WebP.');
  }
  if (file.size > MAX_WALLPAPER_SIZE_BYTES) {
    throw new Error('Изображение больше 8 МБ. Выберите файл меньшего размера.');
  }

  const dataUrl = await readFileAsDataUrl(file);
  if (!normalizeWallpaperDataUrl(dataUrl)) {
    throw new Error('Формат изображения не соответствует JPG, PNG или WebP.');
  }
  await verifyImageDataUrl(dataUrl);

  draftTheme.wallpaperImage = dataUrl;
  draftTheme.wallpaperName = file.name;
  syncWallpaperControls();
  markPendingChanges();
}

function getPresetDisplayName(key) {
  const preset = PRESETS[key];
  if (!preset) return 'Custom override';
  return preset.label.replace(/^Reference ·\s*|^Dark ·\s*|^Light ·\s*/, '');
}

function formatFontFamilyLabel(value) {
  return String(value)
    .split(',')[0]
    .replace(/^['"]|['"]$/g, '')
    .trim();
}

function themesMatch(left, right) {
  return PRESET_THEME_KEYS.every((key) => String(left[key]) === String(right[key]));
}

function findMatchingPresetKey(themeValues) {
  for (const [key, preset] of Object.entries(PRESETS)) {
    if (themesMatch(themeValues, preset.values)) return key;
  }

  return null;
}

function syncPresetSelect() {
  activePresetKey = findMatchingPresetKey(appliedTheme) ?? 'custom';
  if (!(presetSelect instanceof HTMLSelectElement)) return;

  let customOption = presetSelect.querySelector('option[value="custom"]');
  if (activePresetKey === 'custom' && !customOption) {
    customOption = document.createElement('option');
    customOption.value = 'custom';
    customOption.textContent = 'Custom — Текущие изменения';
    presetSelect.appendChild(customOption);
  } else if (activePresetKey !== 'custom') {
    customOption?.remove();
  }
  presetSelect.value = activePresetKey;
}

function updatePreviewModeHint() {
  const meta = PREVIEW_MODE_META[activePreviewMode] ?? PREVIEW_MODE_META.home;
  if (previewModeHint) {
    previewModeHint.textContent = `${meta.label}: ${meta.description}`;
  }
}

function updateExportSummary() {
  updatePreviewModeHint();
}

function createPresetOptions() {
  if (!(presetSelect instanceof HTMLSelectElement)) return;
  Object.entries(PRESETS).forEach(([key, preset], index) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = `${String(index + 1).padStart(2, '0')} — ${getPresetDisplayName(key)}`;
    presetSelect.appendChild(option);
  });
  presetSelect.addEventListener('change', () => {
    const preset = PRESETS[presetSelect.value];
    if (!preset) return;
    const wallpaperImage = normalizeWallpaperDataUrl(draftTheme.wallpaperImage);
    const wallpaperName = wallpaperImage ? String(draftTheme.wallpaperName || 'Пользовательские обои') : '';
    draftTheme = {
      ...structuredClone(preset.values),
      wallpaperImage,
      wallpaperName,
    };
    renderAll(true, true);
  });
}

function createControlCard({ title, bodyMarkup, extraClass = '' }) {
  const wrapper = document.createElement('div');
  wrapper.className = `theme-control-card${extraClass ? ` ${extraClass}` : ''}`;
  wrapper.innerHTML = `
    <div class="theme-control-card__header">
      <div class="theme-control-card__summary">
        <strong>${title}</strong>
      </div>
    </div>
    <div class="theme-control-card__body">${bodyMarkup}</div>
  `;
  return wrapper;
}

function findControlHost(targetId, fallbackElement) {
  const target = targetId ? document.getElementById(targetId) : null;
  return target instanceof HTMLElement ? target : fallbackElement;
}

function createColorControls() {
  const hosts = new Set();
  COLOR_FIELD_GROUPS.forEach(({ id, target, title, description, fields }) => {
    const host = findControlHost(target, colorControls);
    if (!(host instanceof HTMLElement)) return;
    hosts.add(host);
    const section = document.createElement('section');
    section.className = 'color-settings-group';
    section.dataset.colorSettingsGroup = id;
    section.setAttribute('aria-labelledby', `color-group-${id}`);
    section.innerHTML = `
      <header class="color-settings-group__header">
        <div>
          <h3 id="color-group-${id}">${title}</h3>
          <p>${description}</p>
        </div>
        <span class="color-settings-group__count" aria-label="${fields.length} настроек">${fields.length}</span>
      </header>
      <div class="color-settings-group__fields"></div>
    `;

    const fieldGrid = section.querySelector('.color-settings-group__fields');
    fields.forEach(([key, label]) => {
      if (key === 'shellAccentDeep') return;

      if (key === 'shellAccent') {
        const wrapper = createControlCard({
          key: 'shellAccent',
          title: 'Акцентный градиент',
          extraClass: 'gradient-color-control',
          bodyMarkup: `
            <div class="gradient-color-control__header">
              <span>CTA, active states и glow</span>
              <small>2 цветовые точки</small>
            </div>
            <div class="gradient-color-control__preview" data-gradient-preview role="img" aria-label="Предпросмотр акцентного градиента"></div>
            <div class="gradient-color-control__stops">
              <div class="gradient-color-control__stop">
                <span class="gradient-color-control__stop-label">Начальный цвет</span>
                ${createColorInputMarkup('shellAccent', 'Начальный цвет')}
              </div>
              <div class="gradient-color-control__stop">
                <span class="gradient-color-control__stop-label">Конечный цвет</span>
                ${createColorInputMarkup('shellAccentDeep', 'Конечный цвет')}
              </div>
            </div>
          `,
        });
        fieldGrid.appendChild(wrapper);
        return;
      }

      const wrapper = createControlCard({
        key,
        title: label,
        bodyMarkup: createColorInputMarkup(key, label),
      });
      fieldGrid.appendChild(wrapper);
    });

    host.appendChild(section);
  });

  hosts.forEach((host) => host.addEventListener('input', handleColorControlInput));
}

function handleColorControlInput(event) {
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
}

function createColorInputMarkup(key, label) {
  return `
    <div class="color-input-row">
      <span class="color-picker-shell">
        <input data-color-picker="${key}" type="color" aria-label="${label}: выбор цвета" />
      </span>
      <input data-color-text="${key}" type="text" spellcheck="false" autocapitalize="characters" aria-label="${label}: значение цвета" />
    </div>
    <div class="color-alpha-row">
      <span>Непрозрачность</span>
      <input id="color-alpha-${key}" data-color-alpha="${key}" type="range" min="0" max="100" step="1" aria-label="${label}: непрозрачность" />
      <output data-color-alpha-value="${key}" for="color-alpha-${key}">100%</output>
    </div>
  `;
}

function createRangeControls() {
  const hosts = new Set();
  RANGE_FIELDS.forEach(([key, label, min, max, step, suffix, target]) => {
    const host = findControlHost(target, rangeControls);
    if (!(host instanceof HTMLElement)) return;
    hosts.add(host);
    const wrapper = createControlCard({
      key,
      title: label,
      bodyMarkup: `
        <div class="range-field__header">
          <span>Текущее значение</span>
          <strong data-range-value="${key}"></strong>
        </div>
        <div class="range-field__inputs">
          <input data-range-input="${key}" type="range" min="${min}" max="${max}" step="${step}" />
          <label class="range-number-field">
            <input data-range-number="${key}" type="number" min="${min}" max="${max}" step="${step}" aria-label="${label}: значение" />
            <span>${suffix}</span>
          </label>
        </div>
      `,
    });
    wrapper.dataset.suffix = suffix;
    host.appendChild(wrapper);
  });

  hosts.forEach((host) => {
    host.addEventListener('input', handleRangeControlInput);
    host.addEventListener('change', handleRangeControlInput);
  });
}

function handleRangeControlInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  const key = target.dataset.rangeInput || target.dataset.rangeNumber;
  if (!key) return;
  const field = RANGE_FIELDS.find(([fieldKey]) => fieldKey === key);
  if (!field) return;
  const [, , min, max] = field;
  if (target.value.trim() === '') {
    if (event.type === 'change') syncRangeInput(key);
    return;
  }
  const value = Math.max(min, Math.min(max, Number(target.value)));
  if (Number.isNaN(value)) return;
  draftTheme[key] = value;
  syncRangeInput(key);
  syncRangeValueDisplay(key);
  markPendingChanges();
}

function createFontControls() {
  FONT_SELECT_FIELDS.forEach(([key, label, options]) => {
    const wrapper = createControlCard({
      key,
      title: label,
      bodyMarkup: `
        <select data-font-select="${key}">
          ${options.map(([value, text]) => `<option value="${value}">${text}</option>`).join('')}
        </select>
      `,
    });
    fontControls.appendChild(wrapper);
  });

  FONT_RANGE_FIELDS.forEach(([key, label, min, max, step, suffix]) => {
    const wrapper = createControlCard({
      key,
      title: label,
      bodyMarkup: `
        <div class="range-field__header">
          <span>Текущее значение</span>
          <strong data-font-range-value="${key}"></strong>
        </div>
        <div class="range-field__inputs">
          <input data-font-range="${key}" type="range" min="${min}" max="${max}" step="${step}" />
          <label class="range-number-field">
            <input data-font-range-number="${key}" type="number" min="${min}" max="${max}" step="${step}" aria-label="${label}: значение" />
            <span>${suffix}</span>
          </label>
        </div>
      `,
    });
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

    const fontRangeKey = target instanceof HTMLInputElement
      ? target.dataset.fontRange || target.dataset.fontRangeNumber
      : '';
    if (fontRangeKey) {
      const field = FONT_RANGE_FIELDS.find(([fieldKey]) => fieldKey === fontRangeKey);
      if (!field) return;
      const [, , min, max] = field;
      if (target.value.trim() === '') {
        if (event.type === 'change') syncFontRangeInput(fontRangeKey);
        return;
      }
      const value = Math.max(min, Math.min(max, Number(target.value)));
      if (Number.isNaN(value)) return;
      draftTheme[fontRangeKey] = value;
      syncFontRangeInput(fontRangeKey);
      syncFontRangeValueDisplay(fontRangeKey);
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
  syncWallpaperControls();
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
    const value = document.querySelector(`[data-font-range-value="${key}"]`);
    syncFontRangeInput(key);
    if (value) value.textContent = `${draftTheme[key]}${suffix}`;
  });

  RANGE_FIELDS.forEach(([key, , , , , suffix]) => {
    const value = document.querySelector(`[data-range-value="${key}"]`);
    syncRangeInput(key);
    if (value) value.textContent = `${draftTheme[key]}${suffix}`;
  });
}

function syncRangeInput(key) {
  const slider = document.querySelector(`[data-range-input="${key}"]`);
  const number = document.querySelector(`[data-range-number="${key}"]`);
  if (slider instanceof HTMLInputElement) slider.value = String(draftTheme[key]);
  if (number instanceof HTMLInputElement) number.value = String(draftTheme[key]);
}

function syncRangeValueDisplay(key) {
  const field = RANGE_FIELDS.find(([fieldKey]) => fieldKey === key);
  if (!field) return;
  const suffix = field[5];
  const value = document.querySelector(`[data-range-value="${key}"]`);
  if (value) value.textContent = `${draftTheme[key]}${suffix}`;
}

function syncFontRangeInput(key) {
  const slider = document.querySelector(`[data-font-range="${key}"]`);
  const number = document.querySelector(`[data-font-range-number="${key}"]`);
  if (slider instanceof HTMLInputElement) slider.value = String(draftTheme[key]);
  if (number instanceof HTMLInputElement) number.value = String(draftTheme[key]);
}

function syncFontRangeValueDisplay(key) {
  const field = FONT_RANGE_FIELDS.find(([fieldKey]) => fieldKey === key);
  if (!field) return;
  const suffix = field[5];
  const value = document.querySelector(`[data-font-range-value="${key}"]`);
  if (value) value.textContent = `${draftTheme[key]}${suffix}`;
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
  const renderedWidth = REAL_PREVIEW_VIEWPORT.width * scale;
  realPreviewFrame.style.width = `${REAL_PREVIEW_VIEWPORT.width}px`;
  realPreviewFrame.style.height = `${REAL_PREVIEW_VIEWPORT.height}px`;
  realPreviewFrame.style.marginLeft = `${Math.max(0, Math.round((availableWidth - renderedWidth) / 2))}px`;
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

  const backdropStyles = Array.from(frameDocument.querySelectorAll('style#gizmoConfiguratorPreviewBackdrop'));
  let backdropStyle = backdropStyles.shift();
  backdropStyles.forEach((style) => style.remove());
  if (backdropStyle?.tagName !== 'STYLE') {
    backdropStyle = frameDocument.createElement('style');
    backdropStyle.id = 'gizmoConfiguratorPreviewBackdrop';
    frameDocument.head.appendChild(backdropStyle);
  }
  const backdropColor = CSS.supports('color', appliedTheme.shellBg)
    ? appliedTheme.shellBg
    : DEFAULT_THEME.shellBg;
  const customWallpaper = normalizeWallpaperDataUrl(appliedTheme.wallpaperImage);
  const backdropImage = customWallpaper || '_content/Gizmo.Client.UI/img/background.jpg';
  backdropStyle.textContent = `
html {
  min-height: 100%;
  background-color: ${backdropColor};
  background-image: linear-gradient(rgba(4, 12, 19, 0.18), rgba(4, 12, 19, 0.32)), url("${backdropImage}") !important;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

body,
#app,
#app > main {
  min-height: 100%;
  background: transparent !important;
}

${customWallpaper ? `[client-theme] .giz-background > img {
  display: none !important;
}

[client-theme] .giz-login__adv__background > img {
  opacity: 0 !important;
}` : ''}
`;
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
      'Сначала выполните npm run build:real-client из полного git clone с submodules, затем перезагрузите страницу.',
    );
    updateApplyState();
    console.warn('Real Host.Web preview is unavailable:', error);
  }
}

function setPreviewSurface() {
  previewRoot.hidden = true;
  if (realPreviewShell instanceof HTMLElement) realPreviewShell.hidden = false;
  fitRealPreview();
  loadRealPreview();
  applyCssToRealPreview();
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

function themeCssVariables(themeValues, indent = '    ') {
  const shadow = `0 ${themeValues.shadowOffsetY}px ${themeValues.shadowBlur}px ${themeValues.shadowSpread}px ${hexToRgba(themeValues.shadowColor, themeValues.shellShadowOpacity)}`;
  const shadowStrong = `0 ${themeValues.shadowStrongOffsetY}px ${themeValues.shadowStrongBlur}px ${themeValues.shadowStrongSpread}px ${hexToRgba(themeValues.shadowColor, themeValues.shellShadowStrongOpacity)}`;
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
    --shell-icon: ${themeValues.iconColor};
    --shell-icon-muted: ${themeValues.iconMutedColor};
    --shell-icon-active: ${themeValues.iconActiveColor};
    --shell-icon-success: ${themeValues.iconSuccessColor};
    --shell-icon-warning: ${themeValues.iconWarningColor};
    --shell-icon-danger: ${themeValues.iconDangerColor};
    --shell-heading: ${themeValues.headingColor};
    --shell-heading-soft: ${themeValues.headingTextSoft};
    --shell-body-text: ${themeValues.bodyTextColor};
    --shell-link: ${themeValues.linkColor};
    --shell-link-hover: ${themeValues.linkHoverColor};
    --shell-border-color: ${themeValues.borderColor};
    --shell-border-strong-color: ${themeValues.borderStrongColor};
    --shell-border-hover: ${themeValues.borderHoverColor};
    --shell-border-focus: ${themeValues.borderFocusColor};
    --shell-shadow-color: ${themeValues.shadowColor};
    --shell-shadow-opacity: ${themeValues.shellShadowOpacity};
    --shell-shadow-strong-opacity: ${themeValues.shellShadowStrongOpacity};
    --shell-shadow-offset-y: ${themeValues.shadowOffsetY}px;
    --shell-shadow-blur: ${themeValues.shadowBlur}px;
    --shell-shadow-spread: ${themeValues.shadowSpread}px;
    --shell-shadow-strong-offset-y: ${themeValues.shadowStrongOffsetY}px;
    --shell-shadow-strong-blur: ${themeValues.shadowStrongBlur}px;
    --shell-shadow-strong-spread: ${themeValues.shadowStrongSpread}px;
    --shell-login-panel-bg: ${themeValues.loginPanelBg};
    --shell-login-hero-bg: ${themeValues.loginHeroBg};
    --shell-login-card-bg: ${themeValues.loginCardBg};
    --shell-login-overlay-bg: ${themeValues.loginOverlayBg};
    --shell-login-separator: ${themeValues.loginSeparatorColor};
    --shell-login-qr-title: ${themeValues.loginQrTitleColor};
    --shell-login-qr-text: ${themeValues.loginQrTextColor};
    --shell-user-links-hover: ${themeValues.userLinksHoverColor};
    --shell-timeline-item: ${themeValues.timelineItemColor};
    --shell-timeline-item-bg: ${themeValues.timelineItemBg};
    --shell-time-product-expiration-text: ${themeValues.timeProductExpirationTextColor};
    --shell-time-product-expiration-bg: ${themeValues.timeProductExpirationBg};
    --shell-app-card-bg: ${themeValues.appCardBg};
    --shell-product-card-bg: ${themeValues.productCardBg};
    --shell-popup-bg: ${themeValues.popupBg};
    --shell-popup-text: ${themeValues.popupTextColor};
    --shell-filter-utility-bg: ${themeValues.filterUtilityBg};
    --shell-button-inactive-bg: ${themeValues.buttonInactiveBg};
    --shell-selected-bg: ${themeValues.selectedStateBg};
    --shell-selected-text: ${themeValues.selectedStateTextColor};
    --shell-font-ui: ${themeValues.uiFontFamily};
    --shell-font-display: ${themeValues.displayFontFamily};
    --shell-font-size-base: ${themeValues.baseFontSize}px;
    --shell-font-weight-heading: ${themeValues.headingFontWeight};
    --shell-bg-overlay-top: ${hexToRgba(themeValues.shellBg, 0.16)};
    --shell-bg-overlay-bottom: ${hexToRgba(themeValues.shellBg, 0.86)};
    --shell-bg-accent-glow: ${hexToRgba(themeValues.shellAccent, 0.14)};
    --shell-bg-accent-deep-glow: ${hexToRgba(themeValues.shellAccentDeep, 0.10)};
    --shell-shadow: ${shadow};
    --shell-shadow-strong: ${shadowStrong};
    --shell-focus: 0 0 0 ${themeValues.focusRingWidth}px ${hexToRgba(themeValues.borderFocusColor, 0.24)};
    --shell-focus-inset: inset 0 0 0 ${themeValues.focusRingWidth}px ${hexToRgba(themeValues.borderFocusColor, 0.24)};
    --shell-radius-s: ${themeValues.shellRadiusS}px;
    --shell-radius-m: ${themeValues.shellRadiusM}px;
    --shell-radius-l: ${themeValues.shellRadiusL}px;
    --shell-radius-xl: ${themeValues.shellRadiusXL}px;
    --shell-panel-radius-outer: ${themeValues.panelRadiusOuter}px;
    --shell-panel-radius-inner: ${themeValues.panelRadiusInner}px;
    --shell-card-radius-outer: ${themeValues.cardRadiusOuter}px;
    --shell-card-radius-inner: ${themeValues.cardRadiusInner}px;
    --shell-control-radius-outer: ${themeValues.controlRadiusOuter}px;
    --shell-control-radius-inner: ${themeValues.controlRadiusInner}px;
    --shell-button-radius-outer: ${themeValues.buttonRadiusOuter}px;
    --shell-button-radius-inner: ${themeValues.buttonRadiusInner}px;
    --shell-input-radius-outer: ${themeValues.inputRadiusOuter}px;
    --shell-input-radius-inner: ${themeValues.inputRadiusInner}px;
    --shell-modal-radius-outer: ${themeValues.modalRadiusOuter}px;
    --shell-modal-radius-inner: ${themeValues.modalRadiusInner}px;
    --shell-radius-inset: ${themeValues.radiusInset}px;
    --shell-header-height: ${themeValues.headerHeight}px;
    --shell-panel-border-width: ${themeValues.panelBorderWidth}px;
    --shell-control-border-width: ${themeValues.controlBorderWidth}px;
    --shell-focus-ring-width: ${themeValues.focusRingWidth}px;
    --shell-blur: ${themeValues.shellBlur}px;
  `.split('\n').map((line) => (line.trim() ? line.replace(/^    /, indent) : line)).join('\n');
}

function previewVars(themeValues) {
  return themeCssVariables(themeValues);
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

function buildComprehensiveOverrideCss() {
  return `
/* Comprehensive token coverage for Gizmo.Client.UI shell, login and popups. */
[client-theme] {
  color: var(--shell-body-text) !important;
}

[client-theme] a,
[client-theme] .giz-login-new-user > a,
[client-theme] .giz-login-forgot-password > a,
[client-theme] .giz-user-links-item:hover,
[client-theme] .giz-button--text:hover {
  color: var(--shell-link) !important;
}

[client-theme] a:hover,
[client-theme] .giz-login-new-user > a:hover,
[client-theme] .giz-login-forgot-password > a:hover,
[client-theme] .giz-button--outline:hover,
[client-theme] .giz-header__modules-menu-item > a.active {
  color: var(--shell-link-hover) !important;
}

[client-theme] h1,
[client-theme] h2,
[client-theme] h3,
[client-theme] .giz-login-title,
[client-theme] .giz-nav-title,
[client-theme] .giz-section__header,
[client-theme] .giz-order__items__header,
[client-theme] .giz-profile-user-details__header,
[client-theme] .giz-profile-user-purchases__header,
[client-theme] .giz-profile-section__header,
[client-theme] .giz-app-card__title,
[client-theme] .giz-product-card__price,
[client-theme] .giz-alternative-login__qr-description__title {
  color: var(--shell-heading) !important;
  font-family: var(--shell-font-display) !important;
  font-weight: var(--shell-font-weight-heading) !important;
}

[client-theme],
[client-theme] p,
[client-theme] span,
[client-theme] input,
[client-theme] textarea,
[client-theme] button,
[client-theme] .giz-header,
[client-theme] .giz-app-card,
[client-theme] .giz-product-card,
[client-theme] .giz-login-card,
[client-theme] .giz-order,
[client-theme] .giz-profile {
  color: var(--shell-body-text);
}

[client-theme] .giz-login-subtitle,
[client-theme] .giz-login-subtitle--sign-up,
[client-theme] .giz-input-label,
[client-theme] .giz-empty-state__text,
[client-theme] .giz-order-summary-text,
[client-theme] .giz-product-card__title,
[client-theme] .giz-app-card__content__footer-category,
[client-theme] .giz-profile-section-item__info__title,
[client-theme] .giz-version__title,
[client-theme] .giz-alternative-login__qr-description__subtitle,
[client-theme] .giz-login-adv__text {
  color: var(--shell-heading-soft) !important;
}

[client-theme] .giz-menu-notifications__footer,
[client-theme] .giz-menu-notifications__footer__action,
[client-theme] .giz-app-details-card-brand-info {
  color: var(--shell-text-soft) !important;
}

[client-theme] .giz-icon,
[client-theme] [class^="giz-icon"],
[client-theme] [class*=" giz-icon"],
[client-theme] .giz-preview-icon,
[client-theme] svg.giz-icon,
[client-theme] svg,
[client-theme] .giz-filters-icon,
[client-theme] .giz-button__icon-left,
[client-theme] .giz-button__icon-right,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear .giz-icon,
[client-theme] .giz-header__user-menu-item__icon,
[client-theme] .giz-profile-section-item__icon,
[client-theme] .giz-input__icon-left,
[client-theme] .giz-input__icon-right {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-icon [fill]:not([fill="none"]),
[client-theme] [class^="giz-icon"] [fill]:not([fill="none"]),
[client-theme] [class*=" giz-icon"] [fill]:not([fill="none"]),
[client-theme] .giz-preview-icon [fill]:not([fill="none"]),
[client-theme] svg.giz-icon [fill]:not([fill="none"]),
[client-theme] svg [fill]:not([fill="none"]),
[client-theme] .giz-button svg [fill]:not([fill="none"]),
[client-theme] .giz-input-root svg [fill]:not([fill="none"]),
[client-theme] .giz-profile-section-item__icon svg [fill]:not([fill="none"]) {
  fill: currentColor !important;
}

[client-theme] .giz-icon [stroke]:not([stroke="none"]),
[client-theme] [class^="giz-icon"] [stroke]:not([stroke="none"]),
[client-theme] [class*=" giz-icon"] [stroke]:not([stroke="none"]),
[client-theme] .giz-preview-icon [stroke]:not([stroke="none"]),
[client-theme] svg.giz-icon [stroke]:not([stroke="none"]),
[client-theme] svg [stroke]:not([stroke="none"]),
[client-theme] .giz-button svg [stroke]:not([stroke="none"]),
[client-theme] .giz-input-root svg [stroke]:not([stroke="none"]),
[client-theme] .giz-profile-section-item__icon svg [stroke]:not([stroke="none"]) {
  stroke: currentColor !important;
}

[client-theme] .giz-header__modules-menu-item > a .giz-icon,
[client-theme] .giz-header__modules-menu-item > a [class^="giz-icon"],
[client-theme] .giz-header__modules-menu-item > a [class*=" giz-icon"],
[client-theme] .giz-client-tab-item svg,
[client-theme] .giz-profile-navigation-item > a svg,
[client-theme] .giz-input-root svg,
[client-theme] .giz-login__login .giz-input-root .giz-icon,
[client-theme] .giz-login__login .giz-input-root svg {
  color: var(--shell-icon-muted) !important;
}

[client-theme] .giz-header__modules-menu-item > a.active .giz-icon,
[client-theme] .giz-header__modules-menu-item > a.active [class^="giz-icon"],
[client-theme] .giz-header__modules-menu-item > a.active [class*=" giz-icon"],
[client-theme] .giz-client-tab-item.active svg,
[client-theme] .giz-profile-navigation-item > a.active svg,
[client-theme] .giz-header__user-menu-item .giz-icon,
[client-theme] .giz-user-links-item:hover .giz-icon,
[client-theme] .giz-user-links-item:hover svg {
  color: var(--shell-icon-active) !important;
}

[client-theme] .success .giz-icon,
[client-theme] .success [class^="giz-icon"],
[client-theme] .success [class*=" giz-icon"],
[client-theme] .passed,
[client-theme] .giz-alert--success .giz-icon {
  color: var(--shell-icon-success) !important;
}

[client-theme] .warning .giz-icon,
[client-theme] .warning [class^="giz-icon"],
[client-theme] .warning [class*=" giz-icon"],
[client-theme] .giz-alert--warning .giz-icon {
  color: var(--shell-icon-warning) !important;
}

[client-theme] .danger .giz-icon,
[client-theme] .danger [class^="giz-icon"],
[client-theme] .danger [class*=" giz-icon"],
[client-theme] .disconnected,
[client-theme] .giz-alert--danger .giz-icon {
  color: var(--shell-icon-danger) !important;
}

[client-theme] .giz-input-root,
[client-theme] .giz-input-root--outline,
[client-theme] .giz-global-search,
[client-theme] .giz-select__root,
[client-theme] .giz-multi-select__root,
[client-theme] .giz-button--outline,
[client-theme] .giz-back-button,
[client-theme] .giz-login-method.giz-button-group,
[client-theme] .giz-recovery-method.giz-button-group,
[client-theme] .quick-launcher-switch {
  border-color: var(--shell-border-color) !important;
  border-width: var(--shell-control-border-width) !important;
  border-style: solid !important;
}

[client-theme] .giz-input-root,
[client-theme] .giz-input-root--outline,
[client-theme] .giz-global-search,
[client-theme] .giz-select__root,
[client-theme] .giz-multi-select__root {
  border-radius: var(--shell-input-radius-outer) !important;
}

[client-theme] .giz-button--outline,
[client-theme] .giz-back-button,
[client-theme] .giz-button-group,
[client-theme] .giz-combo-button,
[client-theme] .giz-login-method.giz-button-group,
[client-theme] .giz-recovery-method.giz-button-group,
[client-theme] .quick-launcher-switch {
  border-radius: var(--shell-button-radius-outer) !important;
}

[client-theme] .giz-button-group .giz-button,
[client-theme] .giz-combo-button > button {
  border-radius: var(--shell-button-radius-inner) !important;
}

[client-theme] .giz-input-root:hover,
[client-theme] .giz-input-root--outline:hover,
[client-theme] .giz-global-search:hover,
[client-theme] .giz-button--outline:hover,
[client-theme] .giz-back-button:hover,
[client-theme] .giz-input-language-menu .giz-input-root:hover,
[client-theme] .giz-client-language-menu .giz-input-root:hover {
  border-color: var(--shell-border-hover) !important;
}

[client-theme] .giz-input-root:focus-within,
[client-theme] .giz-input-root--outline:focus-within,
[client-theme] .giz-input-root.active,
[client-theme] .giz-input-root--outline.active,
[client-theme] .giz-input-root.giz-active,
[client-theme] .giz-input-root--outline.giz-active,
[client-theme] .giz-global-search:focus-within,
[client-theme] .giz-global-search.active,
[client-theme] .giz-global-search.giz-active,
[client-theme] .giz-button:focus-visible,
[client-theme] .giz-back-button:focus-visible {
  border-color: var(--shell-border-focus) !important;
  box-shadow: var(--shell-focus) !important;
}

[client-theme] .giz-header__global-search,
[client-theme] .giz-header__global-search:hover,
[client-theme] .giz-header__global-search:focus-within,
[client-theme] .giz-header__global-search.active,
[client-theme] .giz-header__global-search.giz-active {
  border: 0 !important;
  box-shadow: none !important;
  background: transparent !important;
}

[client-theme] .giz-input-root:focus-within,
[client-theme] .giz-input-root--outline:focus-within,
[client-theme] .giz-input-root.active,
[client-theme] .giz-input-root--outline.active,
[client-theme] .giz-input-root.giz-active,
[client-theme] .giz-input-root--outline.giz-active {
  box-shadow: var(--shell-focus-inset) !important;
  outline: 0 !important;
}

[client-theme] .giz-input-label {
  background: var(--shell-bg-elevated) !important;
  background-color: var(--shell-bg-elevated) !important;
  border-radius: var(--shell-input-radius-inner) !important;
  padding-inline: 0.25rem !important;
  position: relative;
  z-index: 1;
}

[client-theme] .giz-dialog .giz-input-label,
[client-theme] .giz-user-online-deposit .giz-input-label,
[client-theme] .giz-login__login .giz-input-label {
  background: var(--shell-popup-bg) !important;
  background-color: var(--shell-popup-bg) !important;
}

[client-theme] .giz-container .giz-app__header,
[client-theme] .giz-home-apps__header__quick-launch,
[client-theme] .giz-home-apps__header__ads,
[client-theme] .giz-profile-navigation,
[client-theme] .giz-order__items,
[client-theme] .giz-order__notes,
[client-theme] .giz-order__totals,
[client-theme] .giz-login-card,
[client-theme] .giz-drawer-content,
[client-theme] .giz-user-menu-button,
[client-theme] .user-menu-item-button--box {
  border-color: var(--shell-border-color) !important;
  border-width: var(--shell-panel-border-width) !important;
  border-style: solid !important;
  border-radius: var(--shell-panel-radius-outer) !important;
  box-shadow: var(--shell-shadow) !important;
}

[client-theme] .giz-app-card,
[client-theme] .giz-product-card,
[client-theme] .giz-home__header__ads,
[client-theme] .giz-home-apps__header__ads,
[client-theme] .live-news-pill,
[client-theme] .live-ad-card,
[client-theme] .giz-profile-section,
[client-theme] .giz-profile-section-item,
[client-theme] .giz-data-grid,
[client-theme] .giz-alert {
  border-color: var(--shell-border-color) !important;
  border-radius: var(--shell-card-radius-outer) !important;
  box-shadow: var(--shell-shadow) !important;
}

[client-theme] .giz-app-card__content,
[client-theme] .giz-product-card__content,
[client-theme] .giz-card-body,
[client-theme] .giz-order__items__body {
  border-radius: var(--shell-card-radius-inner) !important;
}

[client-theme] .giz-container .giz-app__header,
[client-theme] .giz-home__header__quick-launch,
[client-theme] .giz-home__header__ads,
[client-theme] .giz-home-apps__header,
[client-theme] .giz-home-apps__header__quick-launch,
[client-theme] .giz-home-apps__header__ads,
[client-theme] .giz-shop__products__header,
[client-theme] .giz-shop__products__header__tab,
[client-theme] .giz-profile-navigation,
[client-theme] .giz-order__items,
[client-theme] .giz-order__notes,
[client-theme] .giz-order__totals,
[client-theme] .giz-login-card,
[client-theme] .giz-drawer-content {
  isolation: isolate !important;
  position: relative !important;
  z-index: 30 !important;
}

[client-theme] .giz-container .giz-app__header > *,
[client-theme] .giz-home__header__quick-launch > *,
[client-theme] .giz-home__header__ads > *,
[client-theme] .giz-home-apps__header > *,
[client-theme] .giz-home-apps__header__quick-launch > *,
[client-theme] .giz-home-apps__header__ads > *,
[client-theme] .giz-shop__products__header > *,
[client-theme] .giz-shop__products__header__tab > *,
[client-theme] .giz-profile-navigation > *,
[client-theme] .giz-order__items > *,
[client-theme] .giz-order__notes > *,
[client-theme] .giz-order__totals > *,
[client-theme] .giz-login-card > *,
[client-theme] .giz-drawer-content > * {
  position: relative;
  z-index: 1;
}

[client-theme] .giz-app-card__content__image,
[client-theme] .giz-app-card__content__image__hovered,
[client-theme] .giz-app-card__content__image img,
[client-theme] .giz-app-card__content__image picture,
[client-theme] .giz-app-card__content__image picture img,
[client-theme] .giz-app-card__content__image .giz-image,
[client-theme] .giz-app-card__content__image .giz-default-image {
  border-radius: var(--shell-card-radius-inner) !important;
  overflow: hidden !important;
  clip-path: inset(0 round var(--shell-card-radius-inner)) !important;
}

[client-theme] .giz-home__header__ads,
[client-theme] .giz-home-apps__header__ads,
[client-theme] .live-news-pill,
[client-theme] .live-ad-card,
[client-theme] .live-ad-card--side,
[client-theme] .live-ad-card--left,
[client-theme] .live-ad-card--right,
[client-theme] .live-ad-card--focus,
[client-theme] .live-ad-card--monster,
[client-theme] .live-ad-card--poster,
[client-theme] .live-ad-card--cry,
[client-theme] .no-image-placeholder {
  background: var(--shell-product-card-bg) !important;
  background-color: var(--shell-product-card-bg) !important;
}

[client-theme] .giz-dropdown-menu__content,
[client-theme] .giz-select__dropdown,
[client-theme] .giz-multi-select__dropdown,
[client-theme] .giz-combo-button__dropdown,
[client-theme] .giz-global-search-dropdown,
[client-theme] .giz-client-tooltip,
[client-theme] .giz-tooltip,
[client-theme] .giz-password-tooltip,
[client-theme] .giz-user-online-deposit,
[client-theme] .giz-menu-notifications,
[client-theme] .giz-user-links,
[client-theme] .giz-active-apps,
[client-theme] .giz-notifications {
  background: var(--shell-popup-bg) !important;
  border-color: var(--shell-border-strong-color) !important;
  border-width: var(--shell-panel-border-width) !important;
  border-style: solid !important;
  border-radius: var(--shell-panel-radius-outer) !important;
  box-shadow: var(--shell-shadow-strong) !important;
}

[client-theme] .giz-user-online-deposit__submitted__qr__label,
[client-theme] .giz-user-online-deposit__submitted__action__label {
  background: var(--shell-popup-bg) !important;
  background-color: var(--shell-popup-bg) !important;
  color: var(--shell-popup-text) !important;
}

[client-theme] .giz-dialog > .giz-card,
[client-theme] .giz-dialog .giz-card,
[client-theme] .giz-client-dialog,
[client-theme] .giz-user-agreement-dialog {
  background: var(--shell-popup-bg) !important;
  border-color: var(--shell-border-strong-color) !important;
  border-width: var(--shell-panel-border-width) !important;
  border-style: solid !important;
  border-radius: var(--shell-modal-radius-outer) !important;
  box-shadow: var(--shell-shadow-strong) !important;
}

[client-theme] .giz-dialog > .giz-card .giz-card-body,
[client-theme] .giz-dialog .giz-card .giz-card-body,
[client-theme] .giz-client-dialog__body {
  border-radius: var(--shell-modal-radius-inner) !important;
}

[client-theme] .giz-button {
  border-radius: var(--shell-button-radius-outer) !important;
}

[client-theme] .giz-login-method.giz-button-group .giz-button,
[client-theme] .giz-recovery-method.giz-button-group .giz-button,
[client-theme] .quick-launcher-switch .giz-button {
  border-radius: var(--shell-button-radius-inner) !important;
}

[client-theme] .giz-main-container,
[client-theme] .giz-login__login,
[client-theme] .giz-login__adv {
  background-color: transparent !important;
}

[client-theme] .giz-login__login {
  background:
    radial-gradient(circle at top, var(--shell-bg-accent-glow), transparent 34%),
    linear-gradient(180deg, var(--shell-login-panel-bg) 0%, var(--shell-bg) 100%) !important;
  color: var(--shell-body-text) !important;
}

[client-theme] .giz-login__adv,
[client-theme] .giz-login__adv__background {
  background: transparent !important;
  background-color: transparent !important;
  position: relative;
}

[client-theme] .giz-login__adv__background img {
  object-fit: cover;
}

[client-theme] .giz-login-card {
  background: var(--shell-login-card-bg) !important;
  color: var(--shell-body-text) !important;
  border-color: var(--shell-border-color) !important;
}

[client-theme] .giz-login-card__header,
[client-theme] .giz-login-card__body,
[client-theme] .giz-login-card__footer,
[client-theme] .giz-alternative-login,
[client-theme] .giz-alternative-login__qr,
[client-theme] .giz-input-language-menu,
[client-theme] .giz-client-language-menu,
[client-theme] .giz-server {
  color: var(--shell-body-text) !important;
}

[client-theme] .giz-alternative-login__separator,
[client-theme] .giz-alternative-login__separator > span {
  background: var(--shell-bg) !important;
  color: var(--shell-login-qr-text) !important;
}

[client-theme] .giz-alternative-login__separator::before {
  border-bottom-color: var(--shell-login-separator) !important;
}

[client-theme] .giz-alternative-login__qr-description__title {
  color: var(--shell-login-qr-title) !important;
}

[client-theme] .giz-alternative-login__qr-description__subtitle {
  color: var(--shell-login-qr-text) !important;
}

[client-theme] .giz-password-tooltip {
  background: var(--shell-popup-bg) !important;
  border-color: var(--shell-border-strong-color) !important;
  border-radius: var(--shell-panel-radius-inner) !important;
  box-shadow: var(--shell-shadow-strong) !important;
}

[client-theme] .giz-password-tooltip::before {
  border-color: var(--shell-popup-bg) !important;
}

[client-theme] .giz-login-overlay,
[client-theme] .giz-drawer > .giz-overlay,
[client-theme] .giz-dialog {
  background: var(--shell-login-overlay-bg) !important;
}

[client-theme] .giz-dropdown-menu {
  background: transparent !important;
  background-color: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
}

[client-theme] .giz-dropdown-menu__content.giz-user-links {
  height: auto !important;
  min-height: 0 !important;
  max-height: max-content !important;
}

[client-theme] .giz-dropdown-menu__content.giz-active-apps {
  height: auto !important;
  max-height: min(38rem, calc(100vh - var(--shell-header-height) - 2rem)) !important;
}

[client-theme] .giz-dropdown-menu__content.giz-active-apps .giz-active-apps__body {
  min-height: 10rem !important;
  max-height: 28rem !important;
}

[client-theme] .giz-header__modules-menu-item > a,
[client-theme] .giz-header__modules-menu-item > a .giz-icon,
[client-theme] .giz-header__modules-menu-item > a [class^="giz-icon"],
[client-theme] .giz-header__modules-menu-item > a [class*=" giz-icon"],
[client-theme] .giz-header__user-menu-item,
[client-theme] .giz-header__user-menu-item .giz-icon,
[client-theme] .giz-header__user-menu-item__icon,
[client-theme] .giz-header__user-menu-item .user-menu-item-button--box,
[client-theme] .giz-header__user-menu-item .giz-user-menu-button,
[client-theme] .giz-user-links-item__icon,
[client-theme] .giz-user-links-item__icon .giz-icon,
[client-theme] .giz-profile-section-item__icon,
[client-theme] .giz-profile-section-item__icon svg,
[client-theme] .giz-profile-navigation-item > a,
[client-theme] .giz-profile-navigation-item > a .giz-icon,
[client-theme] .giz-client-tab-item,
[client-theme] .giz-client-tab-item svg {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-header__modules-menu-item > a.active,
[client-theme] .giz-header__modules-menu-item > a.active .giz-icon,
[client-theme] .giz-header__modules-menu-item > a.active [class^="giz-icon"],
[client-theme] .giz-header__modules-menu-item > a.active [class*=" giz-icon"],
[client-theme] .giz-user-dropdown.open .giz-user-menu-button,
[client-theme] .giz-user-dropdown.open .giz-user-menu-button .giz-icon,
[client-theme] .giz-user-online-deposit-dropdown.open .user-menu-item-button--box,
[client-theme] .giz-notifications-dropdown.open .user-menu-item-button--box,
[client-theme] .giz-active-apps-dropdown.open .user-menu-item-button--box,
[client-theme] .giz-profile-navigation-item > a.active,
[client-theme] .giz-profile-navigation-item > a.active .giz-icon,
[client-theme] .giz-client-tab-item.active,
[client-theme] .giz-client-tab-item.active svg {
  color: var(--shell-icon-active) !important;
}

[client-theme] .giz-user-links-item:hover,
[client-theme] .giz-user-links-item:hover .giz-user-links-item__icon,
[client-theme] .giz-user-links-item:hover .giz-icon,
[client-theme] .giz-user-links-item:hover svg {
  color: var(--shell-user-links-hover) !important;
}

[client-theme] .giz-header__modules-menu-item > a svg,
[client-theme] .giz-header__user-menu-item svg,
[client-theme] .giz-user-links-item__icon svg,
[client-theme] .giz-profile-section-item__icon svg,
[client-theme] .giz-profile-navigation-item > a svg,
[client-theme] .giz-client-tab-item svg,
[client-theme] .giz-button svg,
[client-theme] .giz-input-root svg,
[client-theme] .giz-app-card svg,
[client-theme] .giz-app-card__content__image svg,
[client-theme] .giz-app-details-card svg,
[client-theme] .preview-placeholder-icon--app {
  color: inherit !important;
}

[client-theme] .giz-app-card .giz-default-image,
[client-theme] .giz-app-card .giz-default-image svg,
[client-theme] .giz-app-card svg,
[client-theme] .giz-app-card__content__image svg,
[client-theme] .giz-app-card__content__image__hovered svg,
[client-theme] .giz-app-details-card svg,
[client-theme] .giz-app-details-card__image svg,
[client-theme] .giz-app-details-card-brand svg,
[client-theme] .preview-placeholder-icon--app {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-header__modules-menu-item > a svg [fill]:not([fill="none"]),
[client-theme] .giz-header__modules-menu-item > a svg path[fill]:not([fill="none"]),
[client-theme] .giz-header__user-menu-item svg [fill]:not([fill="none"]),
[client-theme] .giz-header__user-menu-item svg path[fill]:not([fill="none"]),
[client-theme] .giz-user-links-item__icon svg [fill]:not([fill="none"]),
[client-theme] .giz-user-links-item__icon svg path[fill]:not([fill="none"]),
[client-theme] .giz-profile-section-item__icon svg [fill]:not([fill="none"]),
[client-theme] .giz-profile-section-item__icon svg path[fill]:not([fill="none"]),
[client-theme] .giz-profile-navigation-item > a svg [fill]:not([fill="none"]),
[client-theme] .giz-profile-navigation-item > a svg path[fill]:not([fill="none"]),
[client-theme] .giz-client-tab-item svg [fill]:not([fill="none"]),
[client-theme] .giz-client-tab-item svg path[fill]:not([fill="none"]),
[client-theme] .giz-button svg [fill]:not([fill="none"]),
[client-theme] .giz-button svg path[fill]:not([fill="none"]),
[client-theme] .giz-input-root svg [fill]:not([fill="none"]),
[client-theme] .giz-input-root svg path[fill]:not([fill="none"]),
[client-theme] .giz-app-card svg *:not([fill="none"]),
[client-theme] .giz-app-card svg use,
[client-theme] .giz-app-card svg path:not([fill="none"]),
[client-theme] .giz-app-card svg [fill]:not([fill="none"]),
[client-theme] .giz-app-card svg path[fill]:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg *:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg use,
[client-theme] .giz-app-card__content__image svg path:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg [fill]:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg path[fill]:not([fill="none"]),
[client-theme] .giz-app-details-card svg *:not([fill="none"]),
[client-theme] .giz-app-details-card svg use,
[client-theme] .giz-app-details-card svg path:not([fill="none"]),
[client-theme] .giz-app-details-card svg [fill]:not([fill="none"]),
[client-theme] .giz-app-details-card svg path[fill]:not([fill="none"]) {
  fill: currentColor !important;
}

[client-theme] .giz-header__modules-menu-item > a svg [stroke]:not([stroke="none"]),
[client-theme] .giz-header__modules-menu-item > a svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-header__user-menu-item svg [stroke]:not([stroke="none"]),
[client-theme] .giz-header__user-menu-item svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-user-links-item__icon svg [stroke]:not([stroke="none"]),
[client-theme] .giz-user-links-item__icon svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-profile-section-item__icon svg [stroke]:not([stroke="none"]),
[client-theme] .giz-profile-section-item__icon svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-profile-navigation-item > a svg [stroke]:not([stroke="none"]),
[client-theme] .giz-profile-navigation-item > a svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-client-tab-item svg [stroke]:not([stroke="none"]),
[client-theme] .giz-client-tab-item svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-button svg [stroke]:not([stroke="none"]),
[client-theme] .giz-button svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-input-root svg [stroke]:not([stroke="none"]),
[client-theme] .giz-input-root svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-app-card svg [stroke]:not([stroke="none"]),
[client-theme] .giz-app-card svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-app-card__content__image svg [stroke]:not([stroke="none"]),
[client-theme] .giz-app-card__content__image svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-app-details-card svg [stroke]:not([stroke="none"]),
[client-theme] .giz-app-details-card svg path[stroke]:not([stroke="none"]) {
  stroke: currentColor !important;
}

[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear .giz-icon,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg path {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg [fill]:not([fill="none"]),
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg path[fill]:not([fill="none"]) {
  fill: currentColor !important;
}

[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg [stroke]:not([stroke="none"]),
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg path[stroke]:not([stroke="none"]) {
  stroke: currentColor !important;
}

[client-theme] .giz-chip.active,
[client-theme] .giz-chip.active *,
[client-theme] .giz-chip.selected,
[client-theme] .giz-chip.selected *,
[client-theme] .giz-chip.giz-active,
[client-theme] .giz-chip.giz-active *,
[client-theme] .giz-chip[aria-selected="true"],
[client-theme] .giz-chip[aria-selected="true"] * {
  color: var(--shell-selected-text) !important;
}

[client-theme] .giz-app-card .giz-default-image,
[client-theme] .giz-app-card .giz-default-image svg,
[client-theme] .giz-app-card svg,
[client-theme] .giz-app-card__content__image svg,
[client-theme] .giz-app-card__content__image__hovered svg,
[client-theme] .giz-app-details-card svg,
[client-theme] .giz-app-details-card__image svg,
[client-theme] .giz-app-details-card-brand svg,
[client-theme] .preview-placeholder-icon--app {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-app-card svg *:not([fill="none"]),
[client-theme] .giz-app-card svg use,
[client-theme] .giz-app-card svg path:not([fill="none"]),
[client-theme] .giz-app-card svg [fill]:not([fill="none"]),
[client-theme] .giz-app-card svg path[fill]:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg *:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg use,
[client-theme] .giz-app-card__content__image svg path:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg [fill]:not([fill="none"]),
[client-theme] .giz-app-card__content__image svg path[fill]:not([fill="none"]),
[client-theme] .giz-app-details-card svg *:not([fill="none"]),
[client-theme] .giz-app-details-card svg use,
[client-theme] .giz-app-details-card svg path:not([fill="none"]),
[client-theme] .giz-app-details-card svg [fill]:not([fill="none"]),
[client-theme] .giz-app-details-card svg path[fill]:not([fill="none"]) {
  fill: currentColor !important;
}

[client-theme] .giz-app-card svg [stroke]:not([stroke="none"]),
[client-theme] .giz-app-card svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-app-card__content__image svg [stroke]:not([stroke="none"]),
[client-theme] .giz-app-card__content__image svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-app-details-card svg [stroke]:not([stroke="none"]),
[client-theme] .giz-app-details-card svg path[stroke]:not([stroke="none"]) {
  stroke: currentColor !important;
}

[client-theme] .giz-product-card .giz-default-image,
[client-theme] .giz-product-card .giz-default-image svg,
[client-theme] .giz-product-card__content__image svg,
[client-theme] .giz-product-card__content__image--time svg,
[client-theme] .giz-product-details__product__info__image .giz-default-image,
[client-theme] .giz-product-details__product__info__image svg,
[client-theme] .giz-product-time-image-wrapper,
[client-theme] .giz-product-time-image-wrapper svg,
[client-theme] .giz-product-time-image svg,
[client-theme] .giz-time-product-details svg,
[client-theme] .giz-time-product-time svg,
[client-theme] .giz-time-product-time-availabile svg,
[client-theme] .giz-time-product-host-group svg,
[client-theme] .giz-timeline svg,
[client-theme] .giz-timeline-header svg,
[client-theme] .giz-bundle-product-details svg {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-product-card svg [fill]:not([fill="none"]),
[client-theme] .giz-product-card svg path[fill]:not([fill="none"]),
[client-theme] .giz-product-card__content__image svg [fill]:not([fill="none"]),
[client-theme] .giz-product-card__content__image svg path[fill]:not([fill="none"]),
[client-theme] .giz-product-details__product__info__image svg [fill]:not([fill="none"]),
[client-theme] .giz-product-details__product__info__image svg path[fill]:not([fill="none"]),
[client-theme] .giz-product-time-image-wrapper svg [fill]:not([fill="none"]),
[client-theme] .giz-product-time-image-wrapper svg path[fill]:not([fill="none"]),
[client-theme] .giz-time-product-details svg [fill]:not([fill="none"]),
[client-theme] .giz-time-product-details svg path[fill]:not([fill="none"]),
[client-theme] .giz-timeline svg [fill]:not([fill="none"]),
[client-theme] .giz-timeline svg path[fill]:not([fill="none"]) {
  fill: currentColor !important;
}

[client-theme] .giz-product-card svg [stroke]:not([stroke="none"]),
[client-theme] .giz-product-card svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-product-card__content__image svg [stroke]:not([stroke="none"]),
[client-theme] .giz-product-card__content__image svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-product-details__product__info__image svg [stroke]:not([stroke="none"]),
[client-theme] .giz-product-details__product__info__image svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-product-time-image-wrapper svg [stroke]:not([stroke="none"]),
[client-theme] .giz-product-time-image-wrapper svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-time-product-details svg [stroke]:not([stroke="none"]),
[client-theme] .giz-time-product-details svg path[stroke]:not([stroke="none"]),
[client-theme] .giz-timeline svg [stroke]:not([stroke="none"]),
[client-theme] .giz-timeline svg path[stroke]:not([stroke="none"]) {
  stroke: currentColor !important;
}

[client-theme] .giz-product-card__content__image .giz-default-image,
[client-theme] .giz-product-details__product__info__image .giz-default-image {
  overflow: hidden !important;
}

[client-theme] .giz-product-card__content__image .giz-default-image img,
[client-theme] .giz-product-details__product__info__image .giz-default-image img,
[client-theme] .giz-product-time-image-wrapper img {
  filter: brightness(0) saturate(100%) drop-shadow(400px 0 0 var(--shell-icon)) !important;
  transform: translateX(-400px) !important;
}

[client-theme] .giz-host-locked,
[client-theme] .giz-host-locked__message {
  color: var(--shell-heading) !important;
}
`;
}

function generateCss(themeValues) {
  themeValues = deriveThemeColors(themeValues);
  return `/*
  Generated by Gizmo Shell Configurator
  Target: Gizmo.Client.UI custom CSS shell override
*/

${generateWindowsTaskbarRegistryComment(themeValues)}

:root {
  --shell-wallpaper-image: none;
  --shell-wallpaper-name: "";
  --shell-wallpaper-blur: ${themeValues.shellBlur}px;
}

html {
  min-height: 100%;
  position: relative;
  isolation: isolate;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

html::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  -webkit-backdrop-filter: blur(var(--shell-wallpaper-blur));
  backdrop-filter: blur(var(--shell-wallpaper-blur));
}

[client-theme] {
${themeCssVariables(themeValues, '  ')}
}

body {
  min-height: 100%;
  position: relative;
  z-index: 1;
  background-color: transparent !important;
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
  -webkit-backdrop-filter: blur(var(--shell-wallpaper-blur)) !important;
  backdrop-filter: blur(var(--shell-wallpaper-blur)) !important;
}

[client-theme] .giz-login__adv__background::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  -webkit-backdrop-filter: blur(var(--shell-wallpaper-blur)) !important;
  backdrop-filter: blur(var(--shell-wallpaper-blur)) !important;
}

[client-theme] .giz-container .giz-app__header {
  background: ${themeValues.shellBgElevated2};
  background-color: ${themeValues.shellBgElevated2};
  border-bottom: var(--shell-panel-border-width) solid var(--shell-border);
  box-shadow: var(--shell-shadow);
  -webkit-backdrop-filter: blur(var(--shell-blur)) !important;
  backdrop-filter: blur(var(--shell-blur)) !important;
  height: var(--shell-header-height);
}

[client-theme],
[client-theme] .giz-app,
[client-theme] .giz-home-apps,
[client-theme] .giz-home-apps-wrapper,
[client-theme] .giz-shop,
[client-theme] .giz-shop-wrapper,
[client-theme] .giz-profile,
[client-theme] .giz-profile__body,
[client-theme] .giz-profile__body-wrapper,
[client-theme] .giz-profile-user-details,
[client-theme] .giz-profile-user-purchases,
[client-theme] .giz-order,
[client-theme] .giz-order__body,
[client-theme] .giz-main-container,
[client-theme] .giz-app__body,
[client-theme] .giz-apps,
[client-theme] .giz-apps__body,
[client-theme] .giz-apps__body__content,
[client-theme] .giz-home__body,
[client-theme] .giz-shop__body,
[client-theme] .giz-shop__products,
[client-theme] .giz-shop__products__body,
[client-theme] .giz-product-details,
[client-theme] .giz-product-details__body,
[client-theme] .giz-product-details__content,
[client-theme] .giz-product-details__product,
[client-theme] .giz-product-details__product__info,
[client-theme] .giz-product-details__product__info__additional {
  background: transparent !important;
  background-color: transparent !important;
}

[client-theme],
[client-theme] .giz-main-container,
[client-theme] .giz-app__body,
[client-theme] .giz-apps__body,
[client-theme] .giz-home__body,
[client-theme] .giz-shop__body,
[client-theme] .giz-shop__products__body,
[client-theme] .giz-profile,
[client-theme] .giz-profile__body,
[client-theme] .giz-profile__body-wrapper,
[client-theme] .giz-product-details__body {
  isolation: isolate;
  position: relative;
  z-index: 1;
}

[client-theme]::before,
[client-theme] .giz-main-container::before,
[client-theme] .giz-app__body::before,
[client-theme] .giz-apps__body::before,
[client-theme] .giz-home__body::before,
[client-theme] .giz-shop__body::before,
[client-theme] .giz-shop__products__body::before,
[client-theme] .giz-profile::before,
[client-theme] .giz-profile__body::before,
[client-theme] .giz-profile__body-wrapper::before,
[client-theme] .giz-product-details__body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  -webkit-backdrop-filter: blur(var(--shell-wallpaper-blur)) !important;
  backdrop-filter: blur(var(--shell-wallpaper-blur)) !important;
}

[client-theme] .giz-data-grid {
  background: var(--shell-bg-elevated) !important;
  background-color: var(--shell-bg-elevated) !important;
  color: var(--shell-text) !important;
}

[client-theme] .giz-data-grid > thead,
[client-theme] .giz-data-grid > thead > tr,
[client-theme] .giz-data-grid > thead td,
[client-theme] .giz-data-grid > thead th,
[client-theme] .giz-data-grid .giz-data-grid-header,
[client-theme] .giz-data-grid .giz-data-grid-header-row,
[client-theme] .giz-data-grid [class*="header"] > tr:first-child,
[client-theme] .giz-data-grid [class*="header-row"] {
  background: var(--shell-bg-elevated-2) !important;
  background-color: var(--shell-bg-elevated-2) !important;
  color: var(--shell-text) !important;
}

[client-theme] .giz-data-grid,
[client-theme] .giz-data-grid th,
[client-theme] .giz-data-grid td {
  color: var(--shell-text) !important;
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
[client-theme] .giz-profile-user-purchases__header,
[client-theme] .giz-profile-section__header,
[client-theme] .giz-profile-section-item__info__text,
[client-theme] .giz-profile-section-item__info__text--name,
[client-theme] .giz-profile-header .giz-numbers,
[client-theme] .giz-app-card,
[client-theme] .giz-app-card__content,
[client-theme] .giz-app-card__content__details,
[client-theme] .giz-app-card__title,
[client-theme] .giz-app-card-text,
[client-theme] .giz-product-card,
[client-theme] .giz-product-card__content,
[client-theme] .giz-product-card__content__details,
[client-theme] .giz-product-card__price,
[client-theme] .giz-select__content,
[client-theme] .giz-multi-select__content,
[client-theme] .giz-list-item:not(.selected),
[client-theme] .giz-list-item:not(.selected) .giz-list-item__content,
[client-theme] .giz-multi-select-item:not(.selected),
[client-theme] .giz-time-product-details,
[client-theme] .giz-global-search input {
  color: var(--shell-text) !important;
}

[client-theme] .giz-header__modules-menu-item > a,
[client-theme] .giz-client-tab-item,
[client-theme] .giz-profile-navigation-item > a,
[client-theme] .giz-login-subtitle,
[client-theme] .giz-login-subtitle--sign-up,
[client-theme] .giz-empty-state__text,
[client-theme] .giz-order-summary-text,
[client-theme] .giz-header__user-menu-item,
[client-theme] .giz-profile-header .giz-title,
[client-theme] .giz-profile-section-item__info__title,
[client-theme] .giz-app-card__content__footer-category,
[client-theme] .giz-product-card__title,
[client-theme] .giz-timeline-header,
[client-theme] .giz-input-label,
[client-theme] .giz-menu-notifications__footer,
[client-theme] .giz-menu-notifications__footer__action,
[client-theme] .giz-app-details-card-brand-info {
  color: var(--shell-text-soft) !important;
}

[client-theme] .giz-header__modules-menu-item > a {
  background: transparent !important;
  border: 0 !important;
  border-radius: 0;
  box-shadow: none !important;
}

[client-theme] .giz-section__header__filters .giz-button-group,
[client-theme] .giz-section__header__filters .giz-button-group .giz-button,
[client-theme] .giz-section__header__filters .giz-combo-button,
[client-theme] .giz-section__header__filters .giz-combo-button > button,
[client-theme] .giz-section__header__filters .giz-select__root,
[client-theme] .giz-section__header__filters .giz-multi-select__root,
[client-theme] .giz-section__header__filters .giz-chip,
[client-theme] .giz-apps-filters .giz-button-group,
[client-theme] .giz-apps-filters .giz-button-group .giz-button,
[client-theme] .giz-apps-filters .giz-combo-button,
[client-theme] .giz-apps-filters .giz-combo-button > button,
[client-theme] .giz-apps-filters .giz-select__root,
[client-theme] .giz-apps-filters .giz-multi-select__root,
[client-theme] .giz-apps-filters .giz-chip,
[client-theme] [class*="sort"] .giz-button-group,
[client-theme] [class*="sort"] .giz-button-group .giz-button,
[client-theme] [class*="sort"] .giz-combo-button,
[client-theme] [class*="sort"] .giz-combo-button > button,
[client-theme] .giz-chip {
  background: var(--shell-filter-utility-bg) !important;
  background-color: var(--shell-filter-utility-bg) !important;
  border-color: var(--shell-border-color) !important;
  color: var(--shell-text) !important;
}

[client-theme] .giz-chip {
  border-width: var(--shell-control-border-width) !important;
  border-style: solid !important;
  border-radius: var(--shell-input-radius-outer) !important;
}

[client-theme] .giz-chip,
[client-theme] .giz-chip span,
[client-theme] .giz-chip .giz-chip__label,
[client-theme] .giz-chip .giz-chip__content,
[client-theme] .giz-chip [class*="label"],
[client-theme] .giz-chip [class*="content"],
[client-theme] .giz-chip [class*="text"] {
  color: var(--shell-text) !important;
}

[client-theme] .giz-chip .giz-icon,
[client-theme] .giz-chip [class^="giz-icon"],
[client-theme] .giz-chip [class*=" giz-icon"],
[client-theme] .giz-chip svg {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-chip.active,
[client-theme] .giz-chip.selected,
[client-theme] .giz-chip.giz-active,
[client-theme] .giz-chip[aria-selected="true"] {
  background: var(--shell-selected-bg) !important;
  background-color: var(--shell-selected-bg) !important;
  color: var(--shell-selected-text) !important;
  border-color: var(--shell-selected-bg) !important;
}

[client-theme] .giz-chip.active,
[client-theme] .giz-chip.active *,
[client-theme] .giz-chip.selected,
[client-theme] .giz-chip.selected *,
[client-theme] .giz-chip.giz-active,
[client-theme] .giz-chip.giz-active *,
[client-theme] .giz-chip[aria-selected="true"],
[client-theme] .giz-chip[aria-selected="true"] * {
  color: var(--shell-selected-text) !important;
}

[client-theme] .giz-filters-icon,
[client-theme] .giz-filters-icon svg,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear .giz-icon,
[client-theme] .giz-chip .giz-icon-button.giz-input-button-clear svg {
  color: var(--shell-icon) !important;
}

[client-theme] .giz-header__modules-menu-item > a .giz-icon--large,
[client-theme] .giz-client-tab-item.active svg,
[client-theme] .giz-profile-navigation-item > a.active svg {
  color: var(--shell-icon-muted) !important;
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
  color: var(--shell-icon-active) !important;
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
[client-theme] .giz-input-control .giz-input-root input,
[client-theme] .giz-main-container .giz-login__login .giz-input-root input {
  color: var(--shell-text) !important;
}

[client-theme] .giz-input-root svg,
[client-theme] .giz-input-label,
[client-theme] .giz-input-control .giz-input-root svg,
[client-theme] .giz-main-container .giz-login__login .giz-input-root svg,
[client-theme] .giz-main-container .giz-login__login .giz-input-root .giz-icon,
[client-theme] .giz-main-container .giz-login__login .giz-input-root .giz-input__icon-right,
[client-theme] .giz-main-container .giz-login__login .helper-link,
[client-theme] .giz-main-container .giz-login__login .giz-login-forgot-password > a {
  color: var(--shell-text-soft) !important;
}

[client-theme] .giz-input-label {
  background: var(--shell-bg-elevated) !important;
  background-color: var(--shell-bg-elevated) !important;
  border-radius: var(--shell-input-radius-inner) !important;
  padding-inline: 0.25rem !important;
  position: relative;
  z-index: 1;
}

[client-theme] .giz-dialog .giz-input-label,
[client-theme] .giz-user-online-deposit .giz-input-label,
[client-theme] .giz-login__login .giz-input-label {
  background: var(--shell-popup-bg) !important;
  background-color: var(--shell-popup-bg) !important;
}

[client-theme] .giz-input-control .giz-input-root input::placeholder,
[client-theme] .giz-main-container .giz-login__login .giz-input-root input::placeholder {
  color: var(--shell-text-ghost);
}

[client-theme] .giz-input-root--outline {
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  border-radius: var(--shell-input-radius-outer);
  background-color: var(--shell-bg-soft);
}

[client-theme] .giz-input-control .giz-input-root--outline,
[client-theme] .giz-main-container .giz-login__login .giz-input-root--outline {
  background-color: var(--shell-popup-bg);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  box-shadow: inset 0 0 0 1px ${hexToRgba(themeValues.shellAccentDeep, 0.06)};
}

[client-theme] .giz-input-root--outline:hover {
  border-color: var(--shell-border-hover) !important;
}

[client-theme] .giz-input-root:focus-within,
[client-theme] .giz-input-root--outline:focus-within,
[client-theme] .giz-input-root.active,
[client-theme] .giz-input-root--outline.active,
[client-theme] .giz-input-root.giz-active,
[client-theme] .giz-input-root--outline.giz-active {
  border-color: var(--shell-border-focus) !important;
  box-shadow: var(--shell-focus-inset) !important;
  outline: 0 !important;
}

[client-theme] .giz-user-menu-button,
[client-theme] .user-menu-item-button--box,
[client-theme] .giz-app__header,
[client-theme] .giz-container .giz-app__header,
[client-theme] .giz-home__header__quick-launch,
[client-theme] .giz-home__header__ads,
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
  -webkit-backdrop-filter: blur(var(--shell-blur)) !important;
  backdrop-filter: blur(var(--shell-blur)) !important;
}

[client-theme] .giz-home__header__quick-launch,
[client-theme] .giz-home__header__ads,
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
  z-index: 30 !important;
  isolation: isolate !important;
}

[client-theme] .giz-container .giz-app__header > *,
[client-theme] .giz-home-apps__header > *,
[client-theme] .giz-home-apps__header__quick-launch > *,
[client-theme] .giz-home-apps__header__ads > *,
[client-theme] .giz-home__header__quick-launch > *,
[client-theme] .giz-home__header__ads > *,
[client-theme] .giz-shop__products__header > *,
[client-theme] .giz-shop__products__header__tab > *,
[client-theme] .giz-profile-navigation > *,
[client-theme] .giz-order__items > *,
[client-theme] .giz-order__notes > *,
[client-theme] .giz-order__totals > *,
[client-theme] .giz-login-card > *,
[client-theme] .giz-drawer-content > * {
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

[client-theme] .giz-dock-item-tooltip {
  position: fixed !important;
  isolation: isolate !important;
  z-index: 2147483647 !important;
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
  border-radius: var(--shell-button-radius-outer);
  padding: 0.125rem;
}

[client-theme] .giz-login-method.giz-button-group,
[client-theme] .giz-recovery-method.giz-button-group {
  background: var(--shell-popup-bg);
  border: ${themeValues.panelBorderWidth}px solid var(--shell-border-strong);
  border-radius: var(--shell-button-radius-outer);
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
  border-radius: var(--shell-button-radius-inner);
}

[client-theme] .giz-login-method.giz-button-group .giz-button,
[client-theme] .giz-recovery-method.giz-button-group .giz-button {
  background: var(--shell-button-inactive-bg);
  color: var(--shell-text-soft);
  border-radius: var(--shell-button-radius-inner);
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

[client-theme] .giz-app-card__content__image,
[client-theme] .giz-app-card__content__image__hovered,
[client-theme] .giz-app-card__content__image img,
[client-theme] .giz-app-card__content__image picture,
[client-theme] .giz-app-card__content__image picture img,
[client-theme] .giz-app-card__content__image .giz-image,
[client-theme] .giz-app-card__content__image .giz-default-image {
  border-radius: var(--shell-card-radius-inner) !important;
  overflow: hidden !important;
  clip-path: inset(0 round var(--shell-card-radius-inner)) !important;
}

[client-theme] .giz-home__header__ads,
[client-theme] .giz-home-apps__header__ads,
[client-theme] .live-news-pill,
[client-theme] .live-ad-card,
[client-theme] .live-ad-card--side,
[client-theme] .live-ad-card--left,
[client-theme] .live-ad-card--right,
[client-theme] .live-ad-card--focus,
[client-theme] .live-ad-card--monster,
[client-theme] .live-ad-card--poster,
[client-theme] .live-ad-card--cry,
[client-theme] .no-image-placeholder {
  background: var(--shell-product-card-bg) !important;
  background-color: var(--shell-product-card-bg) !important;
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
  -webkit-backdrop-filter: blur(var(--shell-blur)) !important;
  backdrop-filter: blur(var(--shell-blur)) !important;
}

[client-theme] .giz-user-online-deposit__submitted__qr__label,
[client-theme] .giz-user-online-deposit__submitted__action__label {
  background: var(--shell-popup-bg) !important;
  background-color: var(--shell-popup-bg) !important;
  color: var(--shell-popup-text) !important;
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

[client-theme] .giz-user-online-deposit .giz-button-group .giz-button.selected,
[client-theme] .giz-user-online-deposit .giz-button-group .giz-button.active,
[client-theme] .giz-user-online-deposit-dialog .giz-button-group .giz-button.selected,
[client-theme] .giz-user-online-deposit-dialog .giz-button-group .giz-button.active,
[client-theme] .giz-user-online-deposit .quick-select .giz-button.selected,
[client-theme] .giz-user-online-deposit .quick-select .giz-button.active,
[client-theme] .giz-user-online-deposit-dialog .quick-select .giz-button.selected,
[client-theme] .giz-user-online-deposit-dialog .quick-select .giz-button.active {
  background: var(--shell-selected-bg) !important;
  background-color: var(--shell-selected-bg) !important;
  color: var(--shell-selected-text) !important;
  border-color: var(--shell-selected-bg) !important;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--shell-selected-bg) 28%, transparent) !important;
}

[client-theme] .giz-user-online-deposit .giz-button-group .giz-button.selected *,
[client-theme] .giz-user-online-deposit .giz-button-group .giz-button.active *,
[client-theme] .giz-user-online-deposit-dialog .giz-button-group .giz-button.selected *,
[client-theme] .giz-user-online-deposit-dialog .giz-button-group .giz-button.active * {
  color: var(--shell-selected-text) !important;
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
  -webkit-backdrop-filter: blur(var(--shell-blur)) !important;
  backdrop-filter: blur(var(--shell-blur)) !important;
}

[client-theme] .giz-dock-item-tooltip,
.giz-dock-item-tooltip {
  position: fixed !important;
  isolation: isolate !important;
  z-index: 2147483647 !important;
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

[client-theme] .giz-select__dropdown .giz-list-item.active,
[client-theme] .giz-select__dropdown .giz-list-item.selected,
[client-theme] .giz-multi-select__dropdown .giz-multi-select-item.selected,
[client-theme] .giz-combo-button__dropdown .giz-list-item.active,
[client-theme] .giz-combo-button__dropdown .giz-list-item.selected,
[client-theme] .giz-section__header__filters .giz-button-group .giz-button.active,
[client-theme] .giz-section__header__filters .giz-button-group .giz-button.selected,
[client-theme] .giz-apps-filters .giz-button-group .giz-button.active,
[client-theme] .giz-apps-filters .giz-button-group .giz-button.selected,
[client-theme] .quick-launcher-switch .giz-button.active,
[client-theme] .quick-launcher-switch .giz-button.selected,
[client-theme] .giz-login-method.giz-button-group .giz-button.active,
[client-theme] .giz-login-method.giz-button-group .giz-button.selected,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.active,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.selected,
[client-theme] .giz-time-product-host-group.active {
  background: var(--shell-selected-bg) !important;
  background-color: var(--shell-selected-bg) !important;
  color: var(--shell-selected-text) !important;
}

[client-theme] .giz-select__dropdown .giz-list-item.active,
[client-theme] .giz-combo-button__dropdown .giz-list-item.active,
[client-theme] .giz-section__header__filters .giz-button-group .giz-button.active,
[client-theme] .giz-apps-filters .giz-button-group .giz-button.active,
[client-theme] .quick-launcher-switch .giz-button.active,
[client-theme] .giz-login-method.giz-button-group .giz-button.active,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.active,
[client-theme] .giz-time-product-host-group.active {
  background: transparent !important;
  background-color: transparent !important;
}

[client-theme] .giz-select__dropdown .giz-list-item.active svg,
[client-theme] .giz-select__dropdown .giz-list-item.selected svg,
[client-theme] .giz-multi-select__dropdown .giz-multi-select-item.selected svg,
[client-theme] .giz-combo-button__dropdown .giz-list-item.active svg,
[client-theme] .giz-combo-button__dropdown .giz-list-item.selected svg,
[client-theme] .giz-section__header__filters .giz-button-group .giz-button.active svg,
[client-theme] .giz-section__header__filters .giz-button-group .giz-button.selected svg,
[client-theme] .giz-apps-filters .giz-button-group .giz-button.active svg,
[client-theme] .giz-apps-filters .giz-button-group .giz-button.selected svg,
[client-theme] .quick-launcher-switch .giz-button.active svg,
[client-theme] .quick-launcher-switch .giz-button.selected svg,
[client-theme] .giz-login-method.giz-button-group .giz-button.active svg,
[client-theme] .giz-login-method.giz-button-group .giz-button.selected svg,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.active svg,
[client-theme] .giz-recovery-method.giz-button-group .giz-button.selected svg {
  color: var(--shell-selected-text) !important;
}

[client-theme] .giz-product-card:hover .giz-button--fill.accent.giz-product-card-primary-button {
  background: linear-gradient(135deg, var(--shell-accent) 0%, var(--shell-accent-deep) 100%);
  color: #ffffff;
  box-shadow: 0 8px 22px ${hexToRgba(themeValues.shellAccentDeep, 0.24)};
}

[client-theme] .giz-app-card__content__image__hovered,
[client-theme] .giz-product-card__content__image__hovered {
  border-radius: inherit !important;
  overflow: hidden !important;
}

[client-theme] .giz-app-card__content--hovered,
[client-theme] .giz-product-card__content--hovered {
  border-radius: var(--shell-card-radius-inner) !important;
  overflow: hidden !important;
}

[client-theme] .giz-user-links-item:hover .giz-user-links-item__icon svg {
  color: var(--shell-user-links-hover) !important;
}

[client-theme] .giz-user-links-item:hover {
  color: var(--shell-user-links-hover) !important;
  background: transparent !important;
  background-color: transparent !important;
}

[client-theme] .giz-user-links-item:hover .giz-user-links-item__icon {
  color: var(--shell-user-links-hover) !important;
  background: transparent !important;
  background-color: transparent !important;
}

[client-theme] .giz-product-details__product__info__image .giz-default-image {
  overflow: hidden;
}

[client-theme] .giz-product-details__product__info__image .giz-default-image img {
  filter: brightness(0) saturate(100%) drop-shadow(400px 0 0 var(--shell-icon));
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
  color: var(--shell-timeline-item) !important;
  background: var(--shell-timeline-item-bg) !important;
  border-radius: var(--shell-input-radius-inner) !important;
}

[client-theme] .giz-timeline-item::before {
  background-color: var(--shell-timeline-item);
  border-color: var(--shell-timeline-item);
}

[client-theme] .giz-timeline-item::after {
  border-left-color: var(--shell-timeline-item);
}

[client-theme] .giz-time-product-expiration,
[client-theme] .giz-product-details__product__info__additional__availability,
[client-theme] .giz-product-details__product__info__additional__expirations__body .giz-product-expiration {
  padding: 0.1rem 0.4rem;
  color: var(--shell-time-product-expiration-text) !important;
  background: var(--shell-time-product-expiration-bg) !important;
  background-color: var(--shell-time-product-expiration-bg) !important;
  border-radius: var(--shell-input-radius-inner) !important;
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
  background: transparent !important;
  background-color: transparent !important;
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

${buildComprehensiveOverrideCss(themeValues)}
`;
}

function updateApplyState() {
  if (applyState) {
    applyState.textContent = hasPendingChanges
      ? 'Preview обновляется автоматически…'
      : 'Preview синхронизирован';
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
  syncPresetSelect();
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
    .replace(/(^|}|,)\s*:root(?=\s*[{,])/gm, '$1 #previewRoot')
    .replace(/(^|}|,)\s*html(?=\s*(?:::|[{,]))/gm, '$1 #previewRoot')
    .replace(/(^|}|,)\s*body(?=\s*[{,])/gm, '$1 #previewRoot')
    .replace(/#previewRoot\s+\.giz-container\s+/g, '#previewRoot ');
}

function normalizeImportedThemeValue(key, value) {
  if (ALL_COLOR_FIELD_KEYS.has(key)) {
    return normalizeThemeColorValue(key, value) ?? String(value).trim();
  }

  if (NUMERIC_THEME_KEYS.has(key)) {
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

  const wallpaperMatch = cssText.match(
    /--shell-wallpaper-image\s*:\s*(none|url\(\s*["']?(data:image\/(?:jpeg|png|webp);base64,[a-z0-9+/=]+)["']?\s*\))\s*;/i,
  );
  if (wallpaperMatch) {
    overrides.wallpaperImage = wallpaperMatch[1].toLowerCase() === 'none'
      ? ''
      : normalizeWallpaperDataUrl(wallpaperMatch[2]);
    overrides.wallpaperName = '';

    const wallpaperNameMatch = cssText.match(/--shell-wallpaper-name\s*:\s*("(?:\\.|[^"\\])*")\s*;/i);
    if (wallpaperNameMatch && overrides.wallpaperImage) {
      try {
        overrides.wallpaperName = String(JSON.parse(wallpaperNameMatch[1]));
      } catch {
        overrides.wallpaperName = 'Обои из импортированного CSS';
      }
    }
    if (overrides.wallpaperImage && !overrides.wallpaperName) {
      overrides.wallpaperName = 'Обои из импортированного CSS';
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
    syncPresetSelect();
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
    syncPresetSelect();
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

previewModeTabs?.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const mode = target.dataset.mode;
  if (!mode) return;
  setPreviewMode(mode);
});

uploadWallpaperBtn?.addEventListener('click', () => {
  wallpaperInput?.click();
});

wallpaperInput?.addEventListener('change', async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  const [file] = Array.from(target.files || []);
  if (!file) return;

  try {
    await setWallpaperFromFile(file);
  } catch (error) {
    setWallpaperStatus(error instanceof Error ? error.message : 'Не удалось загрузить изображение.', true);
  } finally {
    target.value = '';
  }
});

resetWallpaperBtn?.addEventListener('click', () => {
  draftTheme.wallpaperImage = '';
  draftTheme.wallpaperName = '';
  syncWallpaperControls();
  markPendingChanges();
});

createThemeFromWallpaperBtn?.addEventListener('click', async () => {
  const dataUrl = normalizeWallpaperDataUrl(draftTheme.wallpaperImage);
  if (!dataUrl) return;

  if (createThemeFromWallpaperBtn instanceof HTMLButtonElement) createThemeFromWallpaperBtn.disabled = true;
  setWallpaperStatus('Создаю тему из обоев...');
  try {
    const palette = await createWallpaperPalette(dataUrl);
    draftTheme = deriveThemeColors({
      ...draftTheme,
      ...palette,
    });
    syncControlValues();
    markPendingChanges();
    setWallpaperStatus(`Тема создана из обоев: ${draftTheme.wallpaperName || 'Пользовательские обои'}`);
  } catch (error) {
    setWallpaperStatus(error instanceof Error ? error.message : 'Не удалось создать тему из обоев.', true);
  } finally {
    if (createThemeFromWallpaperBtn instanceof HTMLButtonElement) createThemeFromWallpaperBtn.disabled = false;
  }
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
  if (cssDialog instanceof HTMLDialogElement && !cssDialog.open) cssDialog.showModal();
});
closeCssDialogBtn?.addEventListener('click', () => cssDialog?.close());
cssDialog?.addEventListener('click', (event) => {
  if (event.target === cssDialog) cssDialog.close();
});

createPresetOptions();
createColorControls();
createFontControls();
createRangeControls();
hydratePreviewPartials();
replacePreviewGlyphsWithSvg();
applyPreviewStyleHints();
setPreviewMode(activePreviewMode);
setPreviewSurface(activePreviewSurface);
updateImportedCssState();
renderAll(true, true);
