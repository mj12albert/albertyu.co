import type { Theme } from 'theme-ui';
import colors from './colors';

const SYSTEM_FONT_STACK =
  'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  breakpoints: [512, 768, 1024].map((n) => `${(n / 16).toFixed(2)}em`),

  colors: {
    ...colors.scales,
    // inspired by @primer https://primer.style/design/foundations/color#functional-system ❤️
    fg: {
      default: colors.scales.gray[7],
      subtle: colors.scales.gray[5],
    },
    border: {
      default: colors.scales.gray[3],
    },
    canvas: {
      default: colors.scales.gray[1],
    },
    accent: {
      fg: colors.scales.blue[6],
      active: colors.scales.blue[4],
    },
  },

  fonts: {
    sans: SYSTEM_FONT_STACK,
    monospace:
      'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
  },

  fontSizes: [
    12, // 0
    14, // 1
    16, // 2
    20, // 3
    24, // 4
    32, // 5
    48, // 6
    64, // 7
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
      },
      h3: {
        fontSize: 3,
        lineHeight: 'heading',
        fontWeight: 600,
      },
      h4: {
        fontSize: 1,
        lineHeight: 'heading',
        fontWeight: 600,
      },
    },
    text: {
      lede: {
        fontSize: 18,
        lineHeight: 'body',
        maxWidth: '40ch',
      },
      body: {
        fontSize: 2,
        lineHeight: 'body',
        maxWidth: '45ch',
      },
    },
  },

  grids: {
    containers: {
      '12col': {
        display: 'grid',
        gridTemplateColumns: ['1fr', null, 'repeat(12, minmax(16px, 1fr))'],
        gridColumnGap: 5,
      },
    },
    items: {
      content: {
        gridColumn: [null, null, '6/span 5', '7/span 4'],
        alignSelf: 'center',
      },
    },
  },

  // prettier-ignore
  space: [
    0,  // 0
    2,  // 1
    4,  // 2
    8,  // 3
    12, // 4
    16, // 5
    24, // 6
    32, // 7
    40, // 8
    48, // 9
    64, // 10
    80, // 11
    96, // 12
  ],

  styles: {
    root: {
      fontFamily: 'sans',
      color: 'fg.default',
      backgroundColor: 'canvas.default',
      overscrollBehavior: 'auto',
      strong: {
        fontWeight: 600,
      },
    },
  },
});