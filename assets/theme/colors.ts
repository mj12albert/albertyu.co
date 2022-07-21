import { alpha } from '@theme-ui/color';

// Tailwind colors
// https://tailwindcss.com/docs/customizing-colors#default-color-palette
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
const scales = {
  gray: [
    '#f9fafb',
    '#f3f4f6', // 1 - root bg color canvas.default
    '#e5e7eb',
    '#d1d5db', // 3 - <hr> color border.default
    '#9ca3af',
    '#6b7280', // 5 - muted text color fg.subtle
    '#4b5563',
    '#374151', // 7 - root text color fg.default
    '#1f2937',
    '#111827',
  ],

  zinc: [
    '#fafafa',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#a1a1aa',
    '#71717a',
    '#52525b',
    '#3f3f46',
    '#27272a',
    '#18181b',
  ],

  blue: [
    '#eff6ff',
    '#dbeafe',
    '#bfdbfe',
    '#93c5fd',
    '#60a5fa', // 4 - <a> hover color accent.active
    '#3b82f6',
    '#2563eb', // 6 - <a> color accent.fg
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
  ],
};

// @primer’s token naming scheme ❤️
// https://primer.style/design/foundations/color#functional-system
const light = {
  fg: {
    default: scales.gray[7],
    muted: scales.gray[6],
    subtle: scales.gray[5],
  },
  border: {
    default: scales.gray[3],
    muted: scales.gray[2],
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  canvas: {
    default: scales.gray[1],
    muted: alpha(scales.gray[2], 0.5),
  },
  accent: {
    fg: scales.blue[6],
    active: scales.blue[4],
  },
};

const dark = {
  fg: {
    default: scales.zinc[2],
    muted: scales.zinc[3],
    subtle: scales.zinc[4],
  },
  border: {
    default: scales.zinc[7],
    muted: scales.zinc[6],
  },
  canvas: {
    default: scales.zinc[9],
    muted: scales.zinc[8],
  },
  accent: {
    fg: scales.blue[4],
    active: scales.blue[3],
  },
};

const colors = {
  scales,
  modes: {
    light,
    dark,
  },
};

export default colors;
