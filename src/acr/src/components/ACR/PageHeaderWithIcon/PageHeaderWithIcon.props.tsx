import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { PageHeaderData } from '../PageHeader/PageHeader.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderWithIconProps = ComponentProps &
  TestProps &
  PageHeaderWithIconParams &
  PageHeaderData;

export type PageHeaderWithIconParams = {
  params: {
    displayLicenseLink?: string;
  };
};
