import { LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { GqlFieldString } from 'src/types/GraphQL.props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type BreadcrumbProps = ComponentProps &
  TestProps &
  BreadcrumbParams &
  BreadcrumbFields &
  BreadcrumbData;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type BreadcrumbParams = {
  params: {
    mock_param?: string;
  };
};

export type BreadcrumbsGraphQLData = {
  datasource: {
    ancestors: BreadcrumbPage[];
    name: string;
  };
  isPageEditing: boolean;
};
export type BreadcrumbPage = {
  name: string;
  title: GqlFieldString;
  shortTitle: GqlFieldString;
  url?: LinkFieldValue;
};
// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type BreadcrumbData = {
  externalFields?: BreadcrumbsGraphQLData;
};

export type BreadcrumbFields = {
  fields: object;
};
