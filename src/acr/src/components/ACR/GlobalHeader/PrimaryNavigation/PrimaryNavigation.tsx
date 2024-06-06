import { useContext, useRef } from 'react';
import { PrimaryNavItemProps, PrimaryNavigationProps } from './PrimaryNavigation.props';

import { GlobalHeaderContext } from '../GlobalHeader.context';
import { useKeyboardEvents } from 'src/hooks/useKeyboardEvents';

import PrimaryNavItem from './PrimaryNavItem';
import { Flex } from '@radix-ui/themes';

const PrimaryNavigation = (props: PrimaryNavigationProps): JSX.Element => {
  const { fields } = props;
  const { primaryNavCategories } = fields ?? {};

  const { setActiveNavItem } = useContext(GlobalHeaderContext);

  const navRef = useRef<HTMLElement>(null);

  useKeyboardEvents(navRef, () => setActiveNavItem(null));

  return (
    <nav
      data-ref="primary-navigation"
      ref={navRef}
      aria-label="Primary Navigation"
      className="hidden gh:block"
    >
      <Flex asChild gap="4" align="center">
        <ul>
          {primaryNavCategories?.map((item: PrimaryNavItemProps, index) => (
            <PrimaryNavItem key={index} {...item} index={index} />
          ))}
        </ul>
      </Flex>
    </nav>
  );
};

export default PrimaryNavigation;
