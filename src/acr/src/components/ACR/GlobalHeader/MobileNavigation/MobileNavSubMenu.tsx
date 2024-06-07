import { useContext } from 'react';
import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

import { GlobalHeaderContext } from '../GlobalHeader.context';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

import { Flex } from '@radix-ui/themes';
import { IconName } from 'src/enumerations/Icon.enum';
import LinkBase from '../../Link/LinkBase';
import Icon from '../../Icon/Icon';

import cn from 'classnames';

const MobileNavSubMenu = () => {
  const { labels, activeChildItem, setActiveChildItem } = useContext(GlobalHeaderContext);

  const { link, title, navigationLinks } = activeChildItem?.fields ?? {};
  const { backLabel } = labels ?? {};

  return (
    <>
      <Flex align="center" gap="2" asChild>
        <button
          type="button"
          className="max-w-max py-2 text-indigo-100 focus:outline-indigo-100"
          onClick={() => setActiveChildItem(null)}
        >
          <Icon iconName={IconName.CHEVRON_LEFT} className="p-[3px]" />
          {backLabel}
        </button>
      </Flex>
      <Flex direction="column" className="mt-6">
        {link?.value && title?.value && (
          <div className="border-b-1 border-b-gray-50 pb-2 text-indigo-100 ">
            <Link field={link} className="focus:outline-indigo-100">
              <Text field={title} tag="p" className="font-medium" />
            </Link>
          </div>
        )}
        <Flex className="my-6" direction="column" gap="5" asChild>
          <ul>
            {navigationLinks?.map((link, index) => (
              <LinkBase
                key={index}
                link={link?.fields?.link}
                style={ButtonStyle.LINK}
                styleClasses={cn('max-w-max text-indigo-100 focus:outline-indigo-100', {
                  '!font-regular': !link?.fields?.alternateStyle?.value,
                  '!font-bold': link?.fields?.alternateStyle?.value,
                })}
                hasIcon={link?.fields?.alternateStyle?.value}
              />
            ))}
          </ul>
        </Flex>
      </Flex>
    </>
  );
};

export default MobileNavSubMenu;
