import { PlaceholderProps } from 'src/types/Placeholder.props';
import { ComponentProps } from 'lib/component-props';

import { FooterLinkItemProps } from '../GlobalFooter.props';

export type FooterLinkColumnProps = FooterLinkItemProps[] | undefined;

export type FooterLinkColumnsProps = PlaceholderProps & ComponentProps & {
  column1?: FooterLinkColumnProps;
  column2?: FooterLinkColumnProps;
  column3?: FooterLinkColumnProps;
  column4?: FooterLinkColumnProps;
  rowId: '1' | '2';
};