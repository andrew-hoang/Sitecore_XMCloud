import { useContext, useState } from 'react';
import { PrimaryNavigationProps } from '../PrimaryNavigation/PrimaryNavigation.props';
import { GlobalHeaderContext } from '../GlobalHeader.context';
import { Flex } from '@radix-ui/themes';

import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Icon from '../../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';

import cn from 'classnames';
import LinkBase from '../../Link/LinkBase';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

const MobileNavigation = (props: PrimaryNavigationProps) => {
  const { fields } = props;
  const { primaryNavItems } = fields ?? {};

  const { isMobileMenuOpen } = useContext(GlobalHeaderContext);

  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  const toggleMenu = (title: string) => {
    activeNavItem === title ? setActiveNavItem(null) : setActiveNavItem(title);
  };

  return (
    <div
      data-ref="mobile-navigation"
      role="list"
      className={cn(
        'grid w-full grid-rows-[0fr] overflow-hidden rounded-b-4 bg-white px-[15px] transition-all duration-300 ease-in-out',
        { 'grid-rows-[1fr]': isMobileMenuOpen }
      )}
    >
      <Flex direction="column" asChild className="overflow-hidden">
        <ul>
          {primaryNavItems?.map((item, index) => (
            <li key={index}>
              <Flex asChild gap="2" align="center">
                <button
                  className={cn(
                    'w-full border-b-1 border-b-gray-100 py-6 text-[20px] font-medium text-indigo-100'
                  )}
                  onClick={() => toggleMenu(item?.fields?.title?.value)}
                >
                  <Text field={item?.fields?.title} />
                  <Icon
                    iconName={IconName.CHEVRON_DOWN}
                    className={cn('h-[10px] w-[10px]', {
                      'rotate-180 transition-all': activeNavItem === item?.fields?.title?.value,
                    })}
                  />
                </button>
              </Flex>
              {activeNavItem === item?.fields?.title?.value && (
                <div key={index}>
                  <LinkBase
                    link={item?.fields?.link}
                    style={ButtonStyle.LINK}
                    hasIcon
                    styleClasses="!title-b !font-regular text-indigo-100 my-6"
                  />
                  <Flex direction="column" gap="4">
                    {item?.fields?.columns?.map((column, index) => {
                      const { fields } = column;
                      const { title, link, navigationLinks } = fields ?? {};

                      return (
                        <div key={index}>
                          <div className="mb-4 border-b-1 border-b-gray-50 pb-4">
                            <Link field={link}>
                              <Text field={title} tag="p" className=" font-medium" />
                            </Link>
                          </div>
                          <Flex gap="4" direction="column">
                            {navigationLinks?.map((link, linkIndex) => (
                              <LinkBase
                                key={linkIndex}
                                link={link?.fields?.link}
                                style={ButtonStyle.LINK}
                                styleClasses={cn({
                                  '!font-regular': !link?.fields?.alternateStyle?.value,
                                  '!font-bold': link?.fields?.alternateStyle?.value,
                                })}
                                hasIcon={link?.fields?.alternateStyle?.value}
                              />
                            ))}
                          </Flex>
                        </div>
                      );
                    })}
                  </Flex>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Flex>
    </div>
  );
};

export default MobileNavigation;

