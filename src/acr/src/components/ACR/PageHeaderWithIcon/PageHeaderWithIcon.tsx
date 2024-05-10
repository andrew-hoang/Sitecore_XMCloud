import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { PageHeaderWithIconProps } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.props';

import { getPageHeaderWithIconUiProps, getStaticPropsForPageHeaderWithIcon } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.util';

import PageHeaderWithIconBase from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIconBase';

const PageHeaderWithIcon = (props: PageHeaderWithIconProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getPageHeaderWithIconUiProps(props);

  return <PageHeaderWithIconBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForPageHeaderWithIcon(_rendering, _layoutData);
};

export default PageHeaderWithIcon;
