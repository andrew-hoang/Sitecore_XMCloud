import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { SearchBarProps } from 'components/ACR/SearchBar/SearchBar.props';

import { getSearchBarUiProps, getStaticPropsForSearchBar } from 'components/ACR/SearchBar/SearchBar.util';

import SearchBarBase from 'components/ACR/SearchBar/SearchBarBase';

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getSearchBarUiProps(props);

  return <SearchBarBase {...uiProps} testId={testId} />;
};

/**
 * "Data" developer method
 * TODO_SCAFFOLD_BE: If "getStaticProps" was deleted remove "useComponentProps". They work together.
 * TODO_SCAFFOLD_BE: Populate if needed, remove if not
 * Will be called during SSG.  Do NOT return null.
 * @param {ComponentRendering} _rendering
 * @param {LayoutServiceData} _layoutData
 * @param {GetStaticPropsContext} _context
 */
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForSearchBar(_rendering, _layoutData);
};

export default SearchBar;
