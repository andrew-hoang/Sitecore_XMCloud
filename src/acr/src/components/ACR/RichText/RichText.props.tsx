import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type RichTextProps = ComponentProps &
  TestProps &
  RichTextParams &
  RichTextFields &
  RichTextData;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type RichTextParams = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type RichTextData = {
  externalFields?: {
    mock_external_data: Field<string>;
  };
};

export type RichTextFields = {
  fields: {
    text1: Field<string>;
    text2?: Field<string>;
  };
};
