import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { CortexTestProps } from 'components/ACR/CortexTest/CortexTest.props';
import { getStaticPropsForCortexTest } from 'components/ACR/CortexTest/CortexTest.util';

const CortexTest = (props: CortexTestProps): JSX.Element => {
  const { testId, externalFields } = props;
  const { cipItem } = externalFields ?? {};

  return (
    <div data-ref="Cortex-test" data-testid={testId}>
      <b>Cortex API Test</b>
      <p>
        <br></br>
        <b>Case Id</b>: {cipItem?.caseId}
      </p>
      <p>
        <br></br>
        <b>Case History</b>: {cipItem?.history}
      </p>
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
export const getStaticProps: GetStaticComponentProps = async () => {
  return await getStaticPropsForCortexTest();
};

export default CortexTest;
