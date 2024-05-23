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
  LinkListFields & {
    hasIcon?: boolean;
    style?: ButtonStyle;
  };

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type LinkListParams = {
  params: {
    mock_param?: string;
  };
}

type LinkListFields = {
  fields: {
    links: LinkField[]; // Array of Sitecore editable link field objects
  };
};
