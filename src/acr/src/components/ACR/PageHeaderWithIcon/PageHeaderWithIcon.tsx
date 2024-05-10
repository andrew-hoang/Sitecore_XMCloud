import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { PageHeaderWithIconProps } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.props';

import { getStaticPropsForPageHeaderWithIcon } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.util';

const PageHeaderWithIcon = (props: PageHeaderWithIconProps): JSX.Element => {
  const { fields, testId } = props;

  const { heading } = fields ?? {};

  return (
    <div data-ref="page-header-with-icon" data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The PageHeaderWithIcon Component</p>
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
  return getStaticPropsForPageHeaderWithIcon(_rendering, _layoutData);
};

export default PageHeaderWithIcon;
