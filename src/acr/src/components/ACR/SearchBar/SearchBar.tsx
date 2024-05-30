import { Text } from '@sitecore-jss/sitecore-jss-react';
import { AtomicSearchBox } from '@coveo/atomic-react';

import { SearchBarProps } from 'components/ACR/SearchBar/SearchBar.props';
import styles from './SearchBar.styles';

/**
 * ACRAR-283 - Search Bar
 * @param props
 * @returns JSX Element Coveo Search Bar
 */
const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { fields, testId } = props;

  const { title, searchHub } = fields ?? {};
  const url = searchHub?.fields?.searchPage?.value?.href;

  return (
    <div
      className="mx-auto w-full max-w-[1268px] rounded-lg p-[30px] sm:px-[65px] sm:py-[41px] bg-t-background text-t-body"
      data-ref="searchbox"
      data-testid={testId}
    >
      <style>{styles}</style>
      <Text className="heading-d mb-6 sm:mb-8" tag="p" field={title} />
      <AtomicSearchBox redirectionUrl={url} />
    </div>
  );
};

export default SearchBar;
