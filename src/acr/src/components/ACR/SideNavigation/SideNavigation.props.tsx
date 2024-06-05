import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { ReferenceField } from 'src/types/ReferenceField.props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type SideNavigationProps = ComponentProps & TestProps & SideNavigationFields;

export type SideNavigationLink = ReferenceField & {
  fields: {
    link: LinkField;
  };
};
export type SideNavigationFields = {
  fields: {
    title?: Field<string>;
    links?: SideNavigationLink[];
  };
};
