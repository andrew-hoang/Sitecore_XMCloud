import React from 'react';
import type { Preview } from '@storybook/react';

import '@radix-ui/themes/styles.css';
import '../src/assets/main.scss';

import { withFonts, withI18n, withRadixTheme, withImageOptimiziation, withCoveoSearch } from './decorators';
import { Title, Primary, Controls, Stories } from '@storybook/blocks';
import colorThemes from './radixThemePresets';

export const decorators = [
  withI18n,
  withFonts,
  withImageOptimiziation,
  withCoveoSearch,
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
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

export default preview;
