import { useContext } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { PrimaryNavItemProps } from '../PrimaryNavigation/PrimaryNavigation.props';
import { GlobalHeaderContext } from '../GlobalHeader.context';
import { Flex } from '@radix-ui/themes';

import { IconName } from 'src/enumerations/Icon.enum';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

import Icon from '../../Icon/Icon';
import LinkBase from '../../Link/LinkBase';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

const MobileNavItem = (props: PrimaryNavItemProps) => {
  const { fields } = props;
  const { title, primaryNavColumns, link } = fields ?? {};

  const { activeMobileNavItem, setActiveMobileNavItem, setActiveChildItem } =
    useContext(GlobalHeaderContext);

  const isOpen = activeMobileNavItem === title?.value;

  const toggleMenu = (title: string) => {
    activeMobileNavItem === title ? setActiveMobileNavItem(null) : setActiveMobileNavItem(title);
  };

  return (
    <li className="relative border-b-1 border-b-gray-100 py-6">
      <Flex asChild gap="2" align="center">
        <button
          className={cn(
            'z-10 w-full text-[20px] font-medium text-indigo-100 focus:outline-indigo-100'
          )}
          onClick={() => toggleMenu(title?.value)}
        >
          <Text field={title} />
          <Icon
            iconName={IconName.CHEVRON_DOWN}
            className={cn('h-[10px] w-[10px]', {
              'rotate-180 transition-all': isOpen,
            })}
          />
        </button>
      </Flex>
      <Flex
        className={twMerge(
          cn('ease invisible grid grid-rows-[0fr] transition-all duration-300', {
            'visible grid-rows-[1fr]': isOpen,
          })
        )}
      >
        <Flex align="start" direction="column" gap="5" className="overflow-hidden">
          <LinkBase
            link={link}
            style={ButtonStyle.LINK}
            styleClasses="mt-5 !font-regular text-indigo-100 focus:outline-indigo-100 max-w-max"
          />
          {primaryNavColumns?.map((column, index) => {
            const { fields } = column;
            const { title, primaryNavLinks } = fields ?? {};

            const hasChildren = title && title !== null;

            return hasChildren ? (
              <Flex key={index} align="center" gap="2" asChild>
                <button
                  type="button"
                  className="text-indigo-100 focus:outline-indigo-100"
                  onClick={() => setActiveChildItem(column)}
                >
                  <Text field={title} tag="p" className="body-xs !font-medium" />
                  <Icon iconName={IconName.CHEVRON_RIGHT} className="h-5 w-5" />
                </button>
              </Flex>
            ) : (
              <Flex key={index} gap="5" direction="column">
                {primaryNavLinks?.map((link, linkIndex) => (
                  <LinkBase
                    key={linkIndex}
                    link={link?.fields?.link}
                    style={ButtonStyle.LINK}
                    styleClasses={cn('focus:outline-indigo-100 text-indigo-100 max-w-max', {
                      '!font-regular': !link?.fields?.alternateStyle?.value,
                      '!font-bold': link?.fields?.alternateStyle?.value,
                    })}
                    hasIcon={link?.fields?.alternateStyle?.value}
                  />
                ))}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </li>
  );
};

export default MobileNavItem;
