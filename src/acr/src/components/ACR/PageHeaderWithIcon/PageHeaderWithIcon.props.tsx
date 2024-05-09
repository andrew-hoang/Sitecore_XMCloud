import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { StyleProps } from 'src/types/Style.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderWithIconProps = ComponentProps & TestProps &
  PageHeaderWithIconParams &
  PageHeaderWithIconFields &
  PageHeaderWithIconData;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type PageHeaderWithIconParams = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type PageHeaderWithIconData = {
  externalFields: {
    mock_external_data: Field<string>;
  };
};

export type PageHeaderWithIconFields = {
  fields: {
    heading: Field<string>; // Sitecore editable text field
    image?: ImageField; // Sitecore editable image field
    link?: LinkField; // Sitecore editable link field
  };
};

/**
 * UI is developed against this model
 */
export type PageHeaderWithIconBaseProps = TestProps & StyleProps & {
    fields: {
      // "UI" developer defines everything else here
      heading: Field<string>; // Sitecore editable text field
      image?: ImageField; // Sitecore editable image field
      link?: LinkField; // Sitecore editable link field
    };
  };
