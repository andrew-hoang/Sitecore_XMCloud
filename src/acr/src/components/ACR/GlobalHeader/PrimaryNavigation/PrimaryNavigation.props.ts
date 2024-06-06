import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'src/lib/component-props';
import { GlobalHeaderFields } from '../GlobalHeader.props';

export type PrimaryNavigationProps = ComponentProps & GlobalHeaderFields;

export type PrimaryNavItemProps = ComponentProps & PrimaryNavItem;

export type PrimaryNavItem = {
  fields: {
    title: Field<string>;
    link: LinkField;
    columns: PrimaryNavItemColumn[];
  };
};

export type PrimaryNavItemColumn = {
  fields: {
    title?: Field<string>;
    link?: LinkField;
    numberOfColumns: Field<number>;
    navigationLinks: PrimaryNavItemLink[];
  };
};

export type PrimaryNavItemLink = {
  fields: {
    link: LinkField;
    alternateStyle: Field<boolean>;
  };
};
