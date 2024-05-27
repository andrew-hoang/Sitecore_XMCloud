import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderWithIconProps = ComponentProps &
  TestProps &
  PageHeaderWithIconParams   ;


// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type PageHeaderWithIconParams = {
  params: {
    DisplayLicenseLink?: string;
  };
};
