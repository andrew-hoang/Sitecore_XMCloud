import { ComponentProps } from 'src/lib/component-props';
import { GlobalHeaderFields } from '../GlobalHeader.props';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type UtilityNavigationProps = ComponentProps & GlobalHeaderFields;

export type UtilityNavItems = {
  links: UtilityNavItemProps;
};

export type UtilityNavItemProps = {
  fields: {
    link: LinkField;
  };
};
