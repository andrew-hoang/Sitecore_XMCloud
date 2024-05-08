import { PlaceholderProps } from 'src/types/Placeholder.props';
import { TestProps } from 'src/types/Test.props';
import { Theme } from 'src/enumerations/Theme.enum';
import { ComponentProps } from 'lib/component-props';

/**
 * Model used for Sitecore Component integration
 */
export type ContainerFullBleedProps = ComponentProps &
  TestProps &
  PlaceholderProps &
  ContainerFullBleedParams;

type ContainerFullBleedParams = {
  params?: {
    theme?: Theme;
    excludeTopMargin?: string;
  };
};
