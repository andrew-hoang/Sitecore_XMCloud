import { useContext } from 'react';
import {
  PrimaryNavItemProps,
  PrimaryNavigationProps,
} from '../PrimaryNavigation/PrimaryNavigation.props';
import { GlobalHeaderContext } from '../GlobalHeader.context';
import { Flex } from '@radix-ui/themes';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

import MobileNavItem from './MobileNavItem';
import MobileNavSubMenu from './MobileNavSubMenu';
import MobileLogin from '../Login/MobileLogin';
import LinkBase from '../../Link/LinkBase';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

const MobileNavigation = (props: PrimaryNavigationProps) => {
  const { fields } = props;
  const { primaryNavCategories, utilityNavLinks, myACRLink, loginPage } = fields ?? {};

  const { isMobileMenuOpen, activeChildItem } = useContext(GlobalHeaderContext);

  const isSubMenuOpen = activeChildItem !== null;

  const links = [...(myACRLink ? [myACRLink] : [])];

  return (
    <div
      id="gh-mobile-nav"
      data-ref="mobile-navigation"
      className={twMerge(
        cn(
          'ease grid max-h-[calc(100%-73px)] w-full grid-rows-[0fr] rounded-b-4 bg-white px-[15px] transition-all duration-300',
          { 'grid-rows-[1fr]': isMobileMenuOpen }
        )
      )}
    >
      <Flex direction="column" className="overflow-scroll">
        {!isSubMenuOpen ? (
          <>
            {/* Primary Nav Items */}
            <Flex direction="column" asChild>
              <ul>
                {primaryNavCategories?.map((item: PrimaryNavItemProps, index) => (
                  <MobileNavItem key={index} {...item} />
                ))}
              </ul>
            </Flex>
            {/* Utility Nav Items */}
            <Flex direction="column" gap="4" className="my-6 border-b-1 border-b-gray-100 pb-6">
              {utilityNavLinks?.map((link, index) => (
                <LinkBase
                  key={index}
                  link={link?.fields?.link}
                  style={ButtonStyle.LINK}
                  styleClasses="!font-regular text-indigo-100 max-w-max focus:outline-indigo-100"
                />
              ))}
            </Flex>
            <MobileLogin login={loginPage} links={links} />
          </>
        ) : (
          <MobileNavSubMenu />
        )}
      </Flex>
    </div>
  );
};

export default MobileNavigation;
