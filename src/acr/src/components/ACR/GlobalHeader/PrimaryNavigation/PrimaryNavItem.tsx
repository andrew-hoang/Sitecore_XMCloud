import { useContext } from 'react';
import { PrimaryNavItemProps } from './PrimaryNavigation.props';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { GlobalHeaderContext } from '../GlobalHeader.context';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

import PrimaryNavigationColumn from './PrimaryNavigationColumn';
import { Container, Flex } from '@radix-ui/themes';
import Icon from '../../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';
import LinkBase from '../../Link/LinkBase';

import cn from 'classnames';

const PrimaryNavItem = (props: PrimaryNavItemProps) => {
  const { fields } = props;
  const { title, link, columns } = fields ?? {};

  const { activeNavItem, setActiveNavItem } = useContext(GlobalHeaderContext);

  const isOpen = activeNavItem === title?.value;

  const toggleMenu = (title: string) => {
    activeNavItem === title ? setActiveNavItem(null) : setActiveNavItem(title);
  };

  return (
    <li data-ref="primary-nav-item">
      <Flex asChild gap="2" align="center">
        <button
          className={cn(
            'link-underline body-xs text-left !font-medium text-indigo-100 focus:outline-indigo-100',
            {
              'before:scale-x-100': isOpen,
            }
          )}
          aria-expanded={isOpen}
          onClick={() => toggleMenu(title?.value)}
        >
          <Text field={title} />
          <Icon
            iconName={IconName.CHEVRON_DOWN}
            className={cn('h-[10px] w-[10px]', { 'rotate-180 transition-all': isOpen })}
          />
        </button>
      </Flex>
      {isOpen && (
        <div
          role="list"
          className={cn(
            'absolute left-0 top-full w-full rounded-b-4 border-t-1 border-t-gray-100 bg-white pb-10'
          )}
        >
          <Container px="6">
            <LinkBase
              link={link}
              style={ButtonStyle.LINK}
              hasIcon
              styleClasses="!title-b !font-regular text-indigo-100 focus:outline-indigo-100 my-6"
            />
            <Flex gap="6">
              {columns?.map((column, index) => <PrimaryNavigationColumn key={index} {...column} />)}
            </Flex>
          </Container>
        </div>
      )}
    </li>
  );
};

export default PrimaryNavItem;
