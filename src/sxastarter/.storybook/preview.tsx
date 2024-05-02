import type { Preview } from '@storybook/react';

import '@radix-ui/themes/styles.css';
import '../src/assets/main.scss';

import { withFonts, withI18n, withRadixTheme } from './decorators';
import colorThemes from './radixThemePresets';

export const decorators = [
  withI18n,
  withFonts,
  withRadixTheme({
    themes: colorThemes,
    defaultTheme: 'white',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Components', 'Base'],
      },
    },
  },
};

export default preview;
