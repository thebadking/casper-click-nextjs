import { CsprClickThemes } from '@make-software/csprclick-ui'

export function getCsprTheme(theme: 'light' | 'dark'): typeof CsprClickThemes {
  const themeC = theme === 'light' ? CsprClickThemes.light : CsprClickThemes.dark
  return {
    ...themeC,
    typography: {
      ...CsprClickThemes.typography,
      fontWeight: {
        bold: 700,
        extraBold: 800,
        light: 300,
        medium: 500,
        regular: 400,
        semiBold: 600,
      },
      fontFamily: {
        primary:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important',
        mono: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important',
      },
    },
    styleguideColors: {
      ...themeC.styleguideColors,
      backgroundTertiary: theme === 'light' ? 'white' : '#1f2937',
      contentTertiary: theme === 'light' ? 'gray' : 'gray',
      contentOnFill: theme === 'light' ? 'gray' : 'gray',
    },
  }
}
