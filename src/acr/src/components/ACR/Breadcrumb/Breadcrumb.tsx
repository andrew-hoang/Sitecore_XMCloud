import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { BreadcrumbProps } from 'components/ACR/Breadcrumb/Breadcrumb.props';

import { getBreadcrumbUiProps, getStaticPropsForBreadcrumb } from 'components/ACR/Breadcrumb/Breadcrumb.util';

import BreadcrumbBase from 'components/ACR/Breadcrumb/BreadcrumbBase';

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getBreadcrumbUiProps(props);

  return <BreadcrumbBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForBreadcrumb(_rendering, _layoutData);
};

export default Breadcrumb;
