import { TestProps } from 'src/types/Test.props';
import { IconName } from 'src/enumerations/Icon.enum';

export type SvgProps = TestProps &
  React.HTMLAttributes<SVGElement> & {
    className?: string;
    isAriaHidden?: boolean;
    altText?: string;
  };

export type IconProps = SvgProps & {
  iconName: IconName | string;
};

/**
 * Shared default props between SVG icons
 */
export const defaultSvgProps = {
  isAriaHidden: false,
  className: '',
};

export const sharedAttributes = (props: SvgProps): Record<string, unknown> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isAriaHidden, altText, testId, className, ...rest } = props;

  // attributes where a blank value would not affect user experience can be defined here as default
  const attributes: Record<string, unknown> = {
    ...rest,
    'data-testid': testId,
  };

  // attributes where a blank value would affect user experience should be conditional (e.g. aria-label="" means something!)
  if (isAriaHidden) attributes['aria-hidden'] = isAriaHidden;
  if (altText) attributes['aria-label'] = altText;

  return attributes;
};
