// @flow strict
import palette from './palette'

const borderRadius = '0.25rem'

const theme = {
  /* eslint-disable sort-keys */
  e2e: true,
  fontPrimary: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;",
  palette,
  screenSizes: {
    sm: '48rem',
    md: '62rem',
    lg: '75rem',
  },
  brandNameColor: palette.gray3,
  buttonBackgroundColor: palette.orient,
  buttonBorderRadius: borderRadius,
  buttonColor: palette.white,
  buttonHoverColor: palette.ocean,
  cartridgeBackgroundColor: palette.cerulean,
  cartridgeColor: palette.white,
  circleBadgeBackgroundColor: palette.gray2,
  circleBadgeColor: palette.white,
  circleBadgeHoverColor: palette.orient,
  dangerColor: palette.red,
  footerCategoryColor: palette.gray7,
  iconColor: palette.gray5,
  iconHoverColor: palette.gray4,
  inputActiveColor: palette.cerulean,
  inputBackgroundColor: palette.white,
  inputBackgroundColorDisabled: palette.gray0,
  inputBorderColor: palette.gray2,
  inputBorderRadius: borderRadius,
  inputCheckedColor: palette.orient,
  inputColor: palette.gray5,
  inputLabelColor: palette.gray4,
  inputPlaceholderColor: palette.gray3,
  linkColor: palette.gray5,
  linkHoverColor: palette.orient,
  loaderColor: palette.cerulean,
  modalBackgroundColor: palette.blackAlpha50,
  modalForegroundColor: palette.white,
  modalShadowColor: palette.gray1,
  modalBorderColor: palette.gray2,
  navbarBrandZIndex: 1001,
  navbarTogglerZIndex: 1001,
  navbarDropdownContentBackgroundColor: palette.white,
  navbarDropdownContentBorderColor: palette.gray3,
  navbarDropdownContentShadowColor: palette.blackAlpha25,
  navbarDropdownContentShadowColor2: palette.blackAlpha10,
  navbarDropdownDescriptionColor: palette.gray3,
  navbarDropdownDescriptionMobileColor: palette.whiteAlpha50,
  navbarDropdownHeaderColor: palette.white,
  navbarDropdownTitleColor: palette.azure,
  navbarDropdownTitleMobileColor: palette.white,
  navbarMenuBackgroundColor: palette.orient,
  navbarMenuZIndex: 1000,
  navbarTogglerColor: palette.white,
  paginationBackgroundColor: palette.transparent,
  paginationBorderColor: palette.gray1,
  paginationColor: palette.gray6,
  paginationHoverBackgroundColor: palette.ceruleanAlpha10,
  paginationHoverColor: palette.gray6,
  paginationSelectedBackgroundColor: palette.cerulean,
  paginationSelectedColor: palette.white,
  panelBackgroundColor: palette.white,
  panelShadowColor: palette.gray1,
  searchBarBackgroundColor: palette.white,
  searchBarIconColor: palette.black,
  searchBarShadowColor: palette.blackAlpha50,
  searchBarSubmitBackgroundColor: palette.gold,
  searchBarSubmitColor: palette.black,
  searchBarSubmitHoverBackgroundColor: palette.royal,
  searchBarUnderlinedBackgroundColor: palette.transparent,
  searchBarUnderlinedBorderColor: palette.gray2,
  sectionBackgroundColor: palette.transparent,
  successColor: palette.green,
  tableCellEvenBackgroundColor: palette.gray0,
  tableCellOddBackgroundColor: palette.white,
  tableShadowColor: palette.gray1,
  tabMenuBarColor: palette.gold,
  tabMenuBorderColor: palette.gray1,
  textColor: palette.gray5,
  toastBackgroundColor: palette.white,
  toastBorderRadius: borderRadius,
  toastTextColor: palette.black,
  togglerBackgroundColor: palette.white,
  togglerBorderColor: palette.gray1,
  togglerColor: palette.cerulean,
  togglerSelectedBackgroundColor: palette.cerulean,
  togglerSelectedColor: palette.white,
  tooltipBackgroundColor: palette.gray6,
  tooltipBorderColor: palette.gray6,
  tooltipColor: palette.white,
  warningColor: palette.yellow,
  /* eslint-enable sort-keys */
}

export type ThemeType = typeof theme

export default theme
