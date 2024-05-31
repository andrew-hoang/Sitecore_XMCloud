import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { PlaceholderProps } from 'src/types/Placeholder.props';
import { ComponentProps } from 'lib/component-props';

export type FooterLinkItemProps = {
  link: LinkField;
};

export type FooterLinkColumnProps = FooterLinkItemProps[];

export type FooterLinkColumnsProps = PlaceholderProps & ComponentProps & {
  columns?: FooterLinkColumnProps[] | undefined;
  rowId: '1' | '2';
};