import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { PageBannerData } from '../PageHeader/PageHeader.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderWithIconProps = ComponentProps &
  TestProps &
  PageHeaderWithIconParams &
  PageBannerData;

// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type PageHeaderWithIconParams = {
  params: {
    displayLicenseLink?: string;
  };
};
