import type { Config } from 'tailwindcss';

import { radixThemePreset } from 'radix-themes-tw';
import { createThemes } from 'tw-colors';

const config: Config = {
  content: ['./.storybook/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  presets: [radixThemePreset],
  theme: {
    colors: {
      black: 'var(--c-black)',
      white: 'var(--c-white)',
      green: {
        25: 'var(--c-green-1)',
        40: 'var(--c-green-2)',
        50: 'var(--c-green-3)',
        100: 'var(--c-green)',
      },
      indigo: {
        25: 'var(--c-indigo-1)',
        40: 'var(--c-indigo-2)',
        50: 'var(--c-indigo-3)',
        100: 'var(--c-indigo)',
      },
      gray: {
        20: 'var(--c-gray-1)',
        50: 'var(--c-gray-2)',
        70: 'var(--c-gray-3)',
        90: 'var(--c-gray-4)',
        100: 'var(--c-gray)',
      },
      purple: {
        25: 'var(--c-purple-1)',
        45: 'var(--c-purple-2)',
        50: 'var(--c-purple-3)',
        100: 'var(--c-purple)',
      },
      teal: {
        25: 'var(--c-teal-1)',
        45: 'var(--c-teal-2)',
        50: 'var(--c-teal-3)',
        100: 'var(--c-teal)',
      },
      orange: {
        25: 'var(--c-orange-1)',
        45: 'var(--c-orange-2)',
        50: 'var(--c-orange-3)',
        100: 'var(--c-orange)',
      },
      brown: {
        25: 'var(--c-brown-1)',
        45: 'var(--c-brown-2)',
        50: 'var(--c-brown-3)',
        100: 'var(--c-brown)',
      },
      red: {
        25: 'var(--c-red-1)',
        50: 'var(--c-red-2)',
        100: 'var(--c-red)',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
      serif: ['var(--font-serif)'],
    },
    screens: {
      sm: '440px',
      md: '800px',
      lg: '1440px',
      xl: '1800px',
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      borderRadius: {
        none: '0',
      },
      fontWeight: {
        semibold: '600',
        black: '900',
      },
      fill: {
        current: 'currentColor',
      },
    },
  },
  plugins: [
    createThemes(
      {
        white: {
          't-background': '#FFFFFF',
          't-primary': '#1b1449',
          't-secondary': '#8055f0',
          't-contrast': '#00FF00',
          't-body': '#000000',
          't-btn-text': '#FFFFFF',
          't-link-hover': '#8055F0',
          't-rte-link': '#8055f0',
          't-rte-link-hover': '#452F84',
          't-input': '#8055F0',
          't-caption': '#707070',
        },
        'light-indigo': {
          't-background': '#bfdafd',
          't-primary': '#1b1449',
          't-secondary': '#8055f0',
          't-contrast': '#00FF00',
          't-body': '#000000',
          't-btn-text': '#FFFFFF',
          't-link-hover': '#1b1449',
          't-rte-link': '#8055f0',
          't-rte-link-hover': '#452F84',
          't-input': '#1B1449',
          't-caption': '#000000',
        },
        indigo: {
          't-background': '#1B1449',
          't-primary': '#FFFFFF',
          't-secondary': '#00FF00',
          't-contrast': '#8055F0',
          't-body': '#FFFFFF',
          't-btn-text': '#1b1449',
          't-link-hover': '#00FF00',
          't-rte-link': '#00FF00',
          't-rte-link-hover': '#80FF81',
          't-input': '#00FF00',
          't-caption': '#FFFFFF',
        },
        purple: {
          't-background': '#8055F0',
          't-primary': '#FFFFFF',
          't-secondary': '#00FF00',
          't-contrast': '#8055F0',
          't-body': '#FFFFFF',
          't-btn-text': '#1b1449',
          't-link-hover': '#FFFFFF',
          't-rte-link': '#FFFFFF',
          't-rte-link-hover': '#FFFFFF',
          't-input': '#FFFFFF',
          't-caption': '#FFFFFF',
        },
      },
      { defaultTheme: 'white' }
    ),
  ],
};

export default config;
