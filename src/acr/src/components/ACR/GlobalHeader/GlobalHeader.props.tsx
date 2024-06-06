import { Field, FileField, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { PrimaryNavItem } from './PrimaryNavigation/PrimaryNavigation.props';
import { UtilityNavItem } from './UtilityNavigation/UtilityNavigation.props';

/**
 * Model used for Sitecore Component integration
 */
export type GlobalHeaderProps = ComponentProps & TestProps & GlobalHeaderFields;

export type GlobalHeaderFields = GlobalHeaderLogoBranding & {
  fields: {
    primaryNavCategories: PrimaryNavItem[];
    utilityNavLinks: UtilityNavItem[];
    myACRLink?: LinkField;
    loginPage: LinkField;
  };
};

export type GlobalHeaderLogoBranding = {
  fields: {
    headerLogoLarge: ImageField;
    headerLogoSmall?: ImageField;
    headerBrandingTitle?: Field<string>;
    favicon?: FileField | null;
  };
};

export type GlobalHeaderLabels = {
  menuLabel?: string;
  closeLabel?: string;
  backLabel?: string;
  searchLabel?: string;
};
