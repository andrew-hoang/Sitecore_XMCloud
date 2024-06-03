import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type SideNavigationProps = ComponentProps &
  TestProps &
  SideNavigationParams &
  SideNavigationFields &
  SideNavigationData;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type SideNavigationParams = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type SideNavigationData = {
  externalFields?: {
    mock_external_data: Field<string>;
  };
};

export type SideNavigationFields = {
  fields: {
    heading: Field<string>; // Sitecore editable text field
    image?: ImageField; // Sitecore editable image field
    link?: LinkField; // Sitecore editable link field
  };
};
