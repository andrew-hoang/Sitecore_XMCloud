import { PlaceholderProps } from 'src/types/Placeholder.props';
import { ComponentProps } from 'lib/component-props';

import { FooterLinkItemProps } from '../GlobalFooter.props';

export type FooterLinkColumnProps = FooterLinkItemProps[] | undefined;

export type FooterLinkColumnsProps = PlaceholderProps & ComponentProps & {
  columns?: FooterLinkColumnProps[];
  rowId: '1' | '2';
};