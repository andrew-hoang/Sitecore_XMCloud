/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

import { beausite, playFair } from 'src/fonts';

import { Theme as RadixThemes } from '@radix-ui/themes';
import { Theme as ThemeProps } from './types/Theme.props';
import { ThemeContext } from 'src/context/Theme.context';
import { Theme } from './enumerations/Theme.enum';

import cn from 'classnames';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;

  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  const theme = fields.theme as ThemeProps;

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>
      <RadixThemes>
        {/* root placeholder for the app, which we add components to using route data */}
        <div className={cn(beausite.variable, playFair.variable, mainClassPageEditing)}>
          <header>
            <div id="header">
              {route && <Placeholder name="headless-header" rendering={route} />}
            </div>
          </header>
          <main>
            <ThemeContext.Provider value={{ theme: theme?.name as Theme }}>
              <div id="content" data-theme={theme?.name}>
                {route && <Placeholder name="headless-main" rendering={route} />}
              </div>
            </ThemeContext.Provider>
          </main>
          <footer>
            <div id="footer">
              {route && <Placeholder name="headless-footer" rendering={route} />}
            </div>
          </footer>
        </div>
      </RadixThemes>
    </>
  );
};

export default Layout;
