import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { PageHeaderData } from '../PageHeader/PageHeader.props';
import { Orientation } from 'src/enumerations/Orientation.enum';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderWithImageProps = ComponentProps &
  TestProps &
  PageHeaderWithImageParams &
  PageHeaderData;

// Component Rendering Parameter fields
export type PageHeaderWithImageParams = {
  params: {
    orientation?: Orientation;
  };
};
