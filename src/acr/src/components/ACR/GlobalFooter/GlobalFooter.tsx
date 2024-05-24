import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { GlobalFooterProps } from 'components/ACR/GlobalFooter/GlobalFooter.props';

import { getStaticPropsForGlobalFooter } from 'components/ACR/GlobalFooter/GlobalFooter.util';

const GlobalFooter = (props: GlobalFooterProps): JSX.Element => {
  const { fields, testId } = props;

  const { heading } = fields ?? {};

  return (
    <div data-ref="global-footer" data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The GlobalFooter Component</p>
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
  return getStaticPropsForGlobalFooter(_rendering, _layoutData);
};

export default GlobalFooter;
