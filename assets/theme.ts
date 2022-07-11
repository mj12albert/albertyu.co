import type { Theme } from 'theme-ui';

const SYSTEM_FONT_STACK =
  'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  breakpoints: [512, 768, 1024].map((n) => `${(n / 16).toFixed(2)}em`),

  colors: {
    gray: [
      '#f9fafb',
      '#f3f4f6', // 1 - root bg color
      '#e5e7eb',
      '#d1d5db', // 3 - <hr> color
      '#9ca3af',
      '#6b7280', // 5 - muted text color
      '#4b5563',
      '#374151', // 7 - root text color
      '#1f2937',
      '#111827',
    ],

    blue: [
      '#eff6ff',
      '#dbeafe',
      '#bfdbfe',
      '#93c5fd',
      '#60a5fa', // 4 - <a> hover color
      '#3b82f6',
      '#2563eb', // 6 - <a> color
      '#1d4ed8',
      '#1e40af',
      '#1e3a8a',
    ],
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
      color: 'gray.7',
      backgroundColor: 'gray.1',
      overscrollBehavior: 'auto',
      strong: {
        fontWeight: 600,
      },
    },
  },
});
