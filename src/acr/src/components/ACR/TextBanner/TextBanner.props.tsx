import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type TextBannerProps = ComponentProps & TestProps & TextBannerFields;

export type TextBannerFields = {
  fields: {
    title: Field<string>;
    description?: Field<string>;
    link?: LinkField;
  };
};
