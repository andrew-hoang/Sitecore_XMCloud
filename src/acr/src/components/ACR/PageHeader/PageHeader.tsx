import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { PageHeaderProps } from 'components/ACR/PageHeader/PageHeader.props';

import { getPageHeaderUiProps, getStaticPropsForPageHeader } from 'components/ACR/PageHeader/PageHeader.util';

import PageHeaderBase from 'components/ACR/PageHeader/PageHeaderBase';

const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getPageHeaderUiProps(props);

  return <PageHeaderBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForPageHeader(_rendering, _layoutData);
};

export default PageHeader;
