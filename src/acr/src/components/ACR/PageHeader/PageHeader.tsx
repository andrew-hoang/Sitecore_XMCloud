import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { PageHeaderProps } from 'components/ACR/PageHeader/PageHeader.props';

import { getStaticPropsForPageHeader } from 'components/ACR/PageHeader/PageHeader.util';

const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { fields, testId } = props;

  const { heading } = fields ?? {};

  return (
    <div data-ref="page-header" data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The PageHeader Component</p>
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
  return getStaticPropsForPageHeader(_rendering, _layoutData);
};

export default PageHeader;
