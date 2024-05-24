import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type SectionHeaderProps = ComponentProps &
  TestProps &
  SectionHeaderParams &
  SectionHeaderFields;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type SectionHeaderParams = {
  params: {
    includeMarginBottom?: string;
  };
};

export type SectionHeaderFields = {
  fields: {
    title: Field<string>;
    subtitle?: Field<string>;
  };
};
