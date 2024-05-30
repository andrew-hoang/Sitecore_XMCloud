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
  //Needs logic to build final url
  console.log('Search Page Url', searchHub?.fields?.searchPage?.value?.href);

  return (
    <div
      className="mx-auto w-full max-w-[1268px] rounded-lg p-[30px] sm:px-[65px] sm:py-[41px]"
      data-ref="searchbox"
      data-testid={testId}
    >
      <style>{styles}</style>
      <Text className="heading-d mb-6 sm:mb-8" tag="p" field={title} />
      <AtomicSearchBox />
    </div>
  );
};

export default SearchBar;
