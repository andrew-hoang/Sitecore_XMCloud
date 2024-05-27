import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderWithImageProps = ComponentProps &
  TestProps &
  PageHeaderWithImageParams   ;

// Component Rendering Parameter fields
export type PageHeaderWithImageParams = {
  params: {
    Orientation?: string;
  };
};


