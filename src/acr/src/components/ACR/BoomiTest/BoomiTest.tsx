import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { BoomiTestProps } from 'components/ACR/BoomiTest/BoomiTest.props';

import { getStaticPropsForBoomiTest } from 'components/ACR/BoomiTest/BoomiTest.util';

const BoomiTest = (props: BoomiTestProps): JSX.Element => {
  const { testId, externalFields } = props;
  const { account } = externalFields ?? {};

  return (
    <div data-ref="boomi-test" data-testid={testId}>
      <p>The BoomiTest Component</p>
      <p>{account?.FirstName}</p>
      <p>{account?.LastName}</p>
      <p>{account?.Name}</p>
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
  return await getStaticPropsForBoomiTest();
};

export default BoomiTest;
