import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { SearchHubField } from 'src/types/SearchHub.props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type SearchBarProps = ComponentProps & TestProps & SearchBarFields;

export type SearchBarFields = {
  fields: {
    title: Field<string>;
    searchHub: SearchHubField;
    inputPlaceholderText: Field<string>;
  };
};
