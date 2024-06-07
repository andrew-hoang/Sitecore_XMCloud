import React from 'react';
import { StoryFn } from '@storybook/react';
import { StoryContext } from '@storybook/react';
import { DecoratorHelpers } from '@storybook/addon-themes';
import colorThemes, { ColorThemesType } from './radixThemePresets';
import { ImageOptimizationProvider } from '../src/context/ImageOptimization.context';
import { dictionaryKeys, mockDictionary } from '../src/variables/dictionary';

import { AtomicSearchInterface } from '@coveo/atomic-react';
const { initializeThemeState, pluckThemeFromContext, useThemeParameters } = DecoratorHelpers;

import { Theme as RadixTheme } from '@radix-ui/themes';
import { ThemeContext } from 'src/context/Theme.context';
import { Theme } from 'src/enumerations/Theme.enum';

import { I18nProvider } from 'next-localization';
import { SessionProvider } from 'next-auth/react';

import cn from 'classnames';

import { playFair } from '../src/fonts';
import localFont from 'next/font/local';

const beausite = localFont({
  src: [
    { path: '../../fonts/BeausiteClassicWeb-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/BeausiteClassicWeb-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/BeausiteClassicWeb-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/BeausiteClassicWeb-Bold.woff2', weight: '700', style: 'normal' },
  ],
  preload: true,
  display: 'swap',
  variable: '--font-sans',
});

export const withRadixTheme = ({
  themes,
  defaultTheme,
}: {
  themes: ColorThemesType;
  defaultTheme: string;
}) => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (Story: StoryFn, context: StoryContext) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = useThemeParameters();
    const selected = themeOverride || selectedTheme || defaultTheme;
    const radixTheme = colorThemes[selected];

    return (
      <RadixTheme {...radixTheme} style={{ minHeight: 0 }}>
        <ThemeContext.Provider value={{ theme: radixTheme['data-theme'] as Theme }}>
          {context?.componentId === 'components-container' ? (
            <Story />
          ) : (
            <div className="min-h-screen bg-t-background text-t-body">
              <Story />
            </div>
          )}
        </ThemeContext.Provider>
      </RadixTheme>
    );
  };
};

export const withFonts = (Story: StoryFn) => (
  <div className={cn(beausite.variable, playFair.variable)}>
    <Story />
  </div>
);

export const withImageOptimiziation = (Story: StoryFn) => (
  <ImageOptimizationProvider unoptimized={true}>
    <Story />
  </ImageOptimizationProvider>
);

export const withI18n = (Story: StoryFn) => (
  <I18nProvider locale="en" lngDict={mockDictionary(dictionaryKeys)}>
    <Story />
  </I18nProvider>
);

export const withCoveoSearch = (Story: StoryFn) => (
  <AtomicSearchInterface>
    <Story />
  </AtomicSearchInterface>
);

export const withAuth = (Story: StoryFn) => (
  <SessionProvider>
    <Story />
  </SessionProvider>
);
