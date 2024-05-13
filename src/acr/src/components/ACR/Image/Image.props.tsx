import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type ImageProps = ComponentProps & TestProps & ImageFields;

export type ImageFields = {
  fields: {
    image: ImageField;
    title?: Field<string>;
    caption?: Field<string>;
  };
};
