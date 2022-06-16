import type { Theme } from 'theme-ui';

const SYSTEM_FONT_STACK = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

const makeTheme = <T extends Theme>(t: T) => t

export const theme = makeTheme({
  colors: {
    text: '#111',
    background: '#fefefe',
    primary: '#33e',
    blue: '#0074d9',
    white: '#fefefe',
  },

  fonts: {
    sans: SYSTEM_FONT_STACK,
    monospace: 'Menlo, monospace',
  },

  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],

  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },

  typography: {
    headings: {
      h1: {
        fontSize: 5,
        lineHeight: 'heading',
        fontWeight: 600,
      },
      h2: {
        fontSize: 4,
        lineHeight: 'heading',
        fontWeight: 600,
      }
    },
    text: {
      fontSize: 2,
      lineHeight: 'body',
    },
  },

  space: [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96],

  styles: {
    // root is applied to <html> and will override global.css
    root: {
      fontFamily: 'sans',
      color: 'text',
      backgroundColor: 'text',
    }
  }
});
