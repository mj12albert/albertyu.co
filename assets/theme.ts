import type { Theme } from 'theme-ui';

const SYSTEM_FONT_STACK =
  'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  colors: {
    slate: [
      '#f8fafc',
      '#f1f5f9',
      '#e2e8f0',
      '#cbd5e1',
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
      '#0f172a',
    ],

    gray: [
      '#f9fafb',
      '#f3f4f6',
      '#e5e7eb',
      '#d1d5db',
      '#9ca3af',
      '#6b7280',
      '#4b5563',
      '#374151',
      '#1f2937',
      '#111827',
    ],

    blue: [
      '#eff6ff',
      '#dbeafe',
      '#bfdbfe',
      '#93c5fd',
      '#60a5fa',
      '#3b82f6',
      '#2563eb',
      '#1d4ed8',
      '#1e40af',
      '#1e3a8a',
    ],
  },

  fonts: {
    sans: SYSTEM_FONT_STACK,
    monospace: 'Menlo, monospace',
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
      h4: {
        fontSize: 1,
        lineHeight: 'heading',
        fontWeight: 600,
      },
    },
    text: {
      fontSize: 2,
      lineHeight: 'body',
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
    // root is applied to <html> and will override global.css
    root: {
      fontFamily: 'sans',
      color: 'gray.8',
      backgroundColor: 'gray.2',
      overscrollBehavior: 'auto',
    },
  },
});
