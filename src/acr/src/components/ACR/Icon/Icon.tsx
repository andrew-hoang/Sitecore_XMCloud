import { twMerge } from 'tailwind-merge';
import { IconProps } from './Icon.props';
import { IconName } from 'src/enumerations/Icon.enum';

const iconMap: { [key: string]: string } = {
  [IconName.CHEVRON_RIGHT]: 'ChevronRightIcon',
  [IconName.CHEVRON_DOWN]: 'ChevronDownIcon',
  [IconName.CHEVRON_LEFT]: 'ChevronLeftIcon',
  [IconName.DOWNLOAD]: 'DownloadIcon',
  [IconName.EXTERNAL]: 'ExternalIcon',
  [IconName.MENU]: 'MenuIcon',
  [IconName.CLOSE]: 'CloseIcon',
  [IconName.SEARCH]: 'SearchIcon',
  [IconName.RIGHT_ARROW]: 'RightArrowIcon',
  [IconName.RIGHT_ARROW_CIRCLE]: 'RightArrowCircleIcon',
  [IconName.LEFT_ARROW_CIRCLE]: 'LeftArrowCircleIcon',
  [IconName.BULLET]: 'BulletIcon',
  [IconName.TWITTERX]: 'TwitterX',
  [IconName.YOUTUBE]: 'Youtube',
  [IconName.INSTAGRAM]: 'Instagram',
  [IconName.LINKEDIN]: 'LinkedIn',
  [IconName.FACEBOOK]: 'Facebook',
};

const Icon = (props: IconProps): JSX.Element | null => {
  const { iconName, className, isAriaHidden = true, ...rest } = props;

  const iconType = iconMap[iconName];

  if (!iconType) return null;

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const IconType = require(`./svg/${iconType}`).default;

    return (
      <IconType {...rest} className={twMerge('h-4 w-4', className)} isAriaHidden={isAriaHidden} />
    );
  } catch (err) {
    return <></>;
  }
};

export default Icon;
