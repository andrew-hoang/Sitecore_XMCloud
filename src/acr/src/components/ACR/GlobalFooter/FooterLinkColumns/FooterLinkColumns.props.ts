import { PlaceholderProps } from '@sitecore-jss/sitecore-jss-react/types/components/PlaceholderCommon';

import { ComponentProps } from 'lib/component-props';

import { Component } from 'react';
export type FooterLinkColumnProps = ComponentProps &
  PlaceholderProps & {
    links: Component[];
  };

export type FooterLinkColumnsProps = ComponentProps & {
  rowId: '1' | '2';
};
