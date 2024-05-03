import React from 'react';
import { DecoratorHelpers } from '@storybook/addon-themes';
import colorThemes from './radixThemePresets';

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } = DecoratorHelpers;

import { Theme } from '@radix-ui/themes';

import { beausite, playFair } from '../src/fonts';

import { I18nProvider } from 'next-localization';

import cn from 'classnames';

export const withRadixTheme = ({ themes, defaultTheme }) => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = useThemeParameters();
    const selected = themeOverride || selectedTheme || defaultTheme;
    const radixTheme = colorThemes[selected];

    return (
      <Theme {...radixTheme} style={{ minHeight: 0 }}>
        <div className="bg-t-background p-12 text-t-body">
          <Story />
        </div>
      </Theme>
    );
  };
};

export const withFonts = (Story) => (
  <div className={cn(beausite.variable, playFair.variable)}>
    <Story />
  </div>
);

export const withI18n = (Story) => (
  <I18nProvider locale="en">
    <Story />
  </I18nProvider>
);
