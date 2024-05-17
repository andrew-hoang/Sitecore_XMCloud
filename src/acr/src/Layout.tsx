/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

import { beausite, playFair } from 'src/fonts';

import cn from 'classnames';
import { Theme } from '@radix-ui/themes';

import LinkBase from './components/ACR/Link/LinkBase';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { Container } from '@radix-ui/themes';

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

  const skipLink = {
    value: {
      href: '#main-content',
      text: 'Skip to Main Content',
    },
  };

  const mainContentMsg = 'Main Content';

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
      <Theme>
        {/* root placeholder for the app, which we add components to using route data */}
        <div className={cn(beausite.variable, playFair.variable, mainClassPageEditing)}>
          <header>
            <Container
              px="6"
              data-ref="skip link"
              className="absolute -top-full w-full opacity-0 transition-all focus-within:top-2 focus-within:opacity-100"
            >
              <LinkBase link={skipLink} style={ButtonStyle.BUTTON} />
            </Container>
            <div id="header">
              {route && <Placeholder name="headless-header" rendering={route} />}
            </div>
          </header>
          <main>
            <div id="content">
              <Container px="6">
                <div id="main-content" tabIndex={-1} className="group inline-block">
                  <span className="hidden p-2 group-focus:block">{mainContentMsg}</span>
                </div>
              </Container>
              {route && <Placeholder name="headless-main" rendering={route} />}
            </div>
          </main>
          <footer>
            <div id="footer">
              {route && <Placeholder name="headless-footer" rendering={route} />}
            </div>
          </footer>
        </div>
      </Theme>
    </>
  );
};

export default Layout;
