import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

/**
 * Model used for Sitecore Component integration
 */
export type LinkListProps = ComponentProps &
  TestProps &
  LinkListParams &
  LinkListFields &
  LinkListData & {
    hasIcon?: boolean;
    style?: ButtonStyle;
  };

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type LinkListParams = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type LinkListData = {
  externalFields?: {
    mock_external_data: Field<string>;
  };
};

export type LinkListFields = {
  fields: {
    links: LinkField[]; // Array of Sitecore editable link field objects
  };
};
