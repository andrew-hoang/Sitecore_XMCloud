import { useContext } from 'react';
import { PrimaryNavItemProps, PrimaryNavigationProps } from './PrimaryNavigation.props';

import { GlobalHeaderContext } from '../GlobalHeader.context';
import { Theme } from 'src/enumerations/Theme.enum';

import PrimaryNavItem from './PrimaryNavItem';
import { Flex } from '@radix-ui/themes';
import ImageBase from '../../Image/ImageBase';

import cn from 'classnames';
import Icon from '../../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

const PrimaryNavigation = (props: PrimaryNavigationProps): JSX.Element => {
  const { fields } = props;
  const { headerLogoLarge, headerLogoSmall, headerBrandingTitle, primaryNavItems } = fields ?? {};

  const { activeNavItem, isMobileMenuOpen, setIsMobileMenuOpen } = useContext(GlobalHeaderContext);

  return (
    <Flex
      data-ref="primary-navigation"
      align="center"
      justify="between"
      className={cn(
        'relative rounded-lg bg-white px-[15px] py-[16.5px]  text-t-body lg:px-[30px] lg:py-5',
        {
          'rounded-bl-none rounded-br-none': activeNavItem !== null || isMobileMenuOpen,
        }
      )}
      data-theme={Theme.WHITE}
    >
      <ImageBase image={headerLogoLarge} animate={false} className="max-h-10 flex-shrink-0" />
      <Flex asChild gap="4" align="center" className="hidden lg:flex">
        <ul>
          {primaryNavItems?.map((item: PrimaryNavItemProps, index) => (
            <PrimaryNavItem key={index} {...item} />
          ))}
        </ul>
      </Flex>
      <Flex direction="column" align="center" asChild className="flex text-[14px] lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Icon iconName={IconName.MENU} />
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </Flex>
      {/* <MobileNavigation {...props} /> */}
    </Flex>
  );
};

export default PrimaryNavigation;

