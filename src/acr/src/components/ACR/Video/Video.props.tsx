import { Field, FileField, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type VideoProps = ComponentProps & TestProps & VideoFields;

export type VideoFields = {
  fields: {
    video: LinkField;
    coverImage?: ImageField;
    caption?: Field<string>;
    transcript?: FileField;
  };
};
