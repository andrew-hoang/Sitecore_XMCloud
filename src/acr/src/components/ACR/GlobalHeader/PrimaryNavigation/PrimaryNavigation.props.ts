import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'src/lib/component-props';
import { GlobalHeaderFields } from '../GlobalHeader.props';

export type PrimaryNavigationProps = ComponentProps & GlobalHeaderFields;

export type PrimaryNavItemProps = ComponentProps & PrimaryNavItem;

export type PrimaryNavItem = {
  index?: number;
  fields: {
    title: Field<string>;
    link: LinkField;
    primaryNavColumns: PrimaryNavItemColumn[];
  };
};

export type PrimaryNavItemColumn = {
  fields: {
    title?: Field<string>;
    link?: LinkField;
    numberOfColumns: Field<number>;
    primaryNavLinks: PrimaryNavItemLink[];
  };
};

export type PrimaryNavItemLink = {
  fields: {
    link: LinkField;
    alternateStyle: Field<boolean>;
  };
};
