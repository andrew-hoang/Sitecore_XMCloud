import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { SearchBarProps } from 'components/ACR/SearchBar/SearchBar.props';

import { getStaticPropsForSearchBar } from 'components/ACR/SearchBar/SearchBar.util';

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { fields, testId } = props;

  const { heading } = fields ?? {};

  return (
    <div data-ref="search-bar" data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The SearchBar Component</p>
    </div>
  );
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
