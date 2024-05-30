import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Orientation } from 'src/enumerations/Orientation.enum';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type PromoProps = ComponentProps & TestProps & PromoParams & PromoFields;

// Component Rendering Parameter fields
export type PromoParams = {
  params: {
    orientation: Orientation;
  };
};

export type PromoFields = {
  fields: {
    eyebrowText?: Field<string>; // Sitecore editable text field
    title: Field<string>;
    titleHighlight?: Field<string>;
    description?: Field<string>;
    primaryLink?: LinkField; // Sitecore editable link field
    secondaryLink?: LinkField;
    image: ImageField; // Sitecore editable image field
  };
};
