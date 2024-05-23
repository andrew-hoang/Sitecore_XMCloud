import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { AtomicSearchBox } from "@coveo/atomic-react";
import { Theme } from '@radix-ui/themes';

import { SearchBarProps } from 'components/ACR/SearchBar/SearchBar.props';
import styles from "./SearchBar.styles";
import { getStaticPropsForSearchBar } from 'components/ACR/SearchBar/SearchBar.util';


/**
 * ACRAR-283 - Search Bar
 * @param props
 * @returns JSX Element Coveo Search Bar
 */
const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { fields, testId } = props;

  const { label } = fields ?? {};


  return (
    <Theme data-theme="light-indigo" accentColor='gray'>
      <div className="sm:px-[65px] sm:py-[41px] p-[30px] rounded-lg bg-t-background text-t-body max-w-[1268px] mx-auto" data-ref="searchbox" data-testid={testId}>
        <style>{styles}</style>
        <Text className="sm:mb-8 mb-6 heading-d" tag="p" field={label} />
        <AtomicSearchBox />
      </div>
    </Theme>
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
