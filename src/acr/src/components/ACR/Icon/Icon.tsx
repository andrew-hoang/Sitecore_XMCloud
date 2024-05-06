import { twMerge } from 'tailwind-merge';
import { IconProps } from './Icon.props';
import { IconName } from 'src/enumerations/Icon.enum';

const defaultProps = {
  isAriaHidden: true,
};

const iconMap: { [key: string]: string } = {
  [IconName.DOWNLOAD]: 'DownloadIcon',
  [IconName.EXTERNAL]: 'ExternalIcon',
  [IconName.RIGHT_ARROW]: 'RightArrowIcon',
  [IconName.RIGHT_ARROW_CIRCLE]: 'RightArrowCircleIcon',
};

const Icon = (props: IconProps): JSX.Element | null => {
  const { iconName, className, isAriaHidden, ...rest } = props;

  const iconType = iconMap[iconName];

  if (!iconType) return null;

  const IconType = require(`./svg/${iconType}`).default;

  return (
    <IconType {...rest} className={twMerge('h-4 w-4', className)} isAriaHidden={isAriaHidden} />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;

