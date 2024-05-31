import { Text } from '@sitecore-jss/sitecore-jss-react';
import { AtomicSearchBox } from '@coveo/atomic-react';
import { useTheme } from 'src/context/Theme.context';

import { SearchBarProps } from 'components/ACR/SearchBar/SearchBar.props';
import styles from './SearchBar.styles';

/**
 * ACRAR-283 - Search Bar
 * @param props
 * @returns JSX Element Coveo Search Bar
 */
const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { fields, testId } = props;
  const { setAltTheme } = useTheme();

  const { title, searchHub } = fields ?? {};
  const url = searchHub?.fields?.searchPage?.value?.href;

  return (
    <div
      className="rounded-lg mx-auto w-full max-w-[1268px] bg-t-background p-[30px] text-t-body sm:px-[65px] sm:py-12"
      data-ref="searchbox"
      data-testid={testId}
      data-theme={setAltTheme()}
    >
      <style>{styles}</style>
      <Text className="heading-d mb-6 text-t-primary sm:mb-8" tag="p" field={title} />
      <AtomicSearchBox redirectionUrl={url} />
    </div>
  );
};

export default SearchBar;
