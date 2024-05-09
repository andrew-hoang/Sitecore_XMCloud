import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { SectionHeaderProps } from 'components/ACR/SectionHeader/SectionHeader.props';

import { getSectionHeaderUiProps, getStaticPropsForSectionHeader } from 'components/ACR/SectionHeader/SectionHeader.util';

import SectionHeaderBase from 'components/ACR/SectionHeader/SectionHeaderBase';

const SectionHeader = (props: SectionHeaderProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getSectionHeaderUiProps(props);

  return <SectionHeaderBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForSectionHeader(_rendering, _layoutData);
};

export default SectionHeader;
