import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { PageBannerData } from '../PageHeader/PageHeader.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderWithImageProps = ComponentProps &
  TestProps &
  PageHeaderWithImageParams &
  PageBannerData;

// Component Rendering Parameter fields
export type PageHeaderWithImageParams = {
  params: {
    orientation?: string;
  };
};
