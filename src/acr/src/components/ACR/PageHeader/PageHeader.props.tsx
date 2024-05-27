import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderProps = ComponentProps &
  TestProps &
  PageHeaderParams   ;

// Component Rendering Parameter fields
export type PageHeaderParams = {
  params: {
    Alignment?: string;
  };
};


