import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { AtomicSearchBox } from "@coveo/atomic-react";

import { SearchBarProps } from 'components/ACR/SearchBar/SearchBar.props';
import styles from "./SearchBar.styles";
import { getStaticPropsForSearchBar } from 'components/ACR/SearchBar/SearchBar.util';


const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { fields, testId } = props;

  const { label } = fields ?? {};


  return (
    <div className="px-[65px] py-[41px] rounded-lg" data-ref="searchbox" data-testid={testId}>
      <style>{styles}</style>
      <Text className="mb-8" tag="p" field={label} />
      <AtomicSearchBox />
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
