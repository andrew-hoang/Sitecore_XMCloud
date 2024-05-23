import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type PromoProps = ComponentProps & TestProps & PromoParams & PromoFields & PromoData;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type PromoParams = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type PromoData = {
  externalFields?: {
    mock_external_data: Field<string>;
  };
};

export type PromoFields = {
  fields: {
    heading: Field<string>; // Sitecore editable text field
    image?: ImageField; // Sitecore editable image field
    link?: LinkField; // Sitecore editable link field
  };
};
