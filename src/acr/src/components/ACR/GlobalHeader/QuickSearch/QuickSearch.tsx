import { useContext, useState } from 'react';
import { AtomicSearchBox } from '@coveo/atomic-react';

import { GlobalHeaderContext } from '../GlobalHeader.context';

import { Flex } from '@radix-ui/themes';
import styles from './QuickSearch.styles';
import Icon from '../../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';
import { QuickSearchProps } from './QuickSearch.props';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

const QuickSearch = (props: QuickSearchProps) => {
  const { className } = props;

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const { labels, isMobileSearchOpen } = useContext(GlobalHeaderContext);

  const { searchLabel, closeLabel } = labels ?? {};

  return (
    <Flex
      data-ref="quick-search"
      gap="4"
      className={twMerge(
        cn('rounded-b-4 bg-white px-[15px] gh:flex gh:bg-transparent gh:px-0 '),
        className
      )}
    >
      <style>{styles}</style>
      {(isSearchOpen || isMobileSearchOpen) && (
        <div id="gh-quick-search" className="w-full py-8 gh:py-0">
          <AtomicSearchBox redirectionUrl={''} />
        </div>
      )}

      <Flex align="center" gap="2" className="hidden gh:flex" asChild>
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-expanded={isSearchOpen}
          aria-controls="gh-quick-search"
        >
          {isSearchOpen ? closeLabel : searchLabel}{' '}
          <Icon
            iconName={isSearchOpen ? IconName.CLOSE : IconName.SEARCH}
            className="mt-px h-[14px] w-[14px]"
          />
        </button>
      </Flex>
    </Flex>
  );
};

export default QuickSearch;
