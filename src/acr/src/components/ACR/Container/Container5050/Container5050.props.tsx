import { PlaceholderProps } from 'src/types/Placeholder.props';
import { TestProps } from 'src/types/Test.props';
import { ComponentProps } from 'lib/component-props';

/**
 * Model used for Sitecore Component integration
 */
export type Container5050Props = ComponentProps &
  TestProps &
  PlaceholderProps & {
    left?: JSX.Element;
    right?: JSX.Element;
  };
