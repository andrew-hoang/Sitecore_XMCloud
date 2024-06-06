import { useContext, useRef } from 'react';
import { PrimaryNavItemProps, PrimaryNavigationProps } from './PrimaryNavigation.props';

import { GlobalHeaderContext } from '../GlobalHeader.context';
import { useKeyboardEvents } from 'src/hooks/useKeyboardEvents';

import PrimaryNavItem from './PrimaryNavItem';
import PictureBase from '../../Image/PictureBase';
import { Flex } from '@radix-ui/themes';
import Icon from '../../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';

import cn from 'classnames';

const PrimaryNavigation = (props: PrimaryNavigationProps): JSX.Element => {
  const { fields } = props;
  const { headerLogoLarge, headerLogoSmall, primaryNavCategories } = fields ?? {};

  const {
    labels,
    activeNavItem,
    setActiveNavItem,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobileSearchOpen,
    setIsMobileSearchOpen,
  } = useContext(GlobalHeaderContext);

  const { menuLabel, searchLabel, closeLabel } = labels ?? {};

  const navRef = useRef<HTMLElement>(null);

  useKeyboardEvents(navRef, () => setActiveNavItem(null));

  const toggleSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileSearchOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Flex
      data-ref="primary-navigation"
      align="center"
      justify="between"
      gap="5"
      className={cn(
        'relative rounded-lg bg-white px-[15px] py-[16.5px] text-t-body gh:px-[30px] gh:py-5',
        {
          'rounded-bl-none rounded-br-none':
            activeNavItem !== null || isMobileMenuOpen || isMobileSearchOpen,
        }
      )}
    >
      <a href="/" title="Home">
        <PictureBase
          desktopImage={headerLogoLarge}
          mobileImage={headerLogoSmall ? headerLogoSmall : headerLogoLarge}
          styleClasses="max-h-10 flex-shrink-0 relative"
        />
      </a>
      <nav ref={navRef}>
        <Flex asChild gap="4" align="center" className="hidden gh:flex">
          <ul>
            {primaryNavCategories?.map((item: PrimaryNavItemProps, index) => (
              <PrimaryNavItem key={index} {...item} />
            ))}
          </ul>
        </Flex>
      </nav>
      {/* Mobile View */}
      <Flex gap="4" className="flex gh:hidden">
        <Flex direction="column" align="center" asChild className="text-[14px]">
          <button className="text-indigo-100" onClick={toggleSearch}>
            <Icon iconName={isMobileSearchOpen ? IconName.CLOSE : IconName.SEARCH} />
            {isMobileSearchOpen ? closeLabel : searchLabel}
          </button>
        </Flex>
        <Flex direction="column" align="center" asChild className="text-[14px]">
          <button className="text-indigo-100" onClick={toggleMobileMenu}>
            <Icon iconName={isMobileMenuOpen ? IconName.CLOSE : IconName.MENU} />
            {isMobileMenuOpen ? closeLabel : menuLabel}
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PrimaryNavigation;
