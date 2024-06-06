import { useContext } from 'react';
import { GlobalHeaderContext } from './GlobalHeader.context';
import { GlobalHeaderProps } from 'components/ACR/GlobalHeader/GlobalHeader.props';

import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation';
import UtilityNavigation from './UtilityNavigation/UtilityNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import QuickSearch from './QuickSearch/QuickSearch';
import PictureBase from '../Image/PictureBase';
import { Flex } from '@radix-ui/themes';
import { IconName } from 'src/enumerations/Icon.enum';
import Icon from '../Icon/Icon';

import cn from 'classnames';

const GlobalHeader = (props: GlobalHeaderProps): JSX.Element => {
  const { fields, testId } = props;

  const { headerLogoLarge, headerLogoSmall } = fields ?? {};

  const {
    labels,
    activeNavItem,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobileSearchOpen,
    setIsMobileSearchOpen,
  } = useContext(GlobalHeaderContext);

  const { menuLabel, searchLabel, closeLabel } = labels ?? {};

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
      data-testid={testId}
      data-ref="global-header"
      direction="column"
      className="relative h-screen px-[30px] py-8 gh:py-0"
    >
      <UtilityNavigation {...props} />
      <Flex
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
        <PrimaryNavigation {...props} />
        {/* Mobile View */}
        <Flex gap="4" className="gh:hidden">
          <button
            className="flex flex-col items-center text-[14px] text-indigo-100"
            aria-expanded={isMobileSearchOpen}
            aria-controls="gh-quick-search"
            onClick={toggleSearch}
          >
            <Icon iconName={isMobileSearchOpen ? IconName.CLOSE : IconName.SEARCH} />
            {isMobileSearchOpen ? closeLabel : searchLabel}
          </button>
          <button
            className="flex flex-col items-center text-[14px] text-indigo-100"
            aria-expanded={isMobileMenuOpen}
            aria-controls="gh-mobile-nav"
            onClick={toggleMobileMenu}
          >
            <Icon iconName={isMobileMenuOpen ? IconName.CLOSE : IconName.MENU} />
            {isMobileMenuOpen ? closeLabel : menuLabel}
          </button>
        </Flex>
      </Flex>
      <MobileNavigation {...props} />
      <QuickSearch className="gh:hidden" />
    </Flex>
  );
};

export default GlobalHeader;
