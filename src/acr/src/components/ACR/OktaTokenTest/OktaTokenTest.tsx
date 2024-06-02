import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { OktaTokenTestProps } from 'components/ACR/OktaTokenTest/OktaTokenTest.props';
import { getStaticPropsForOktaTokenTest } from 'components/ACR/OktaTokenTest/OktaTokenTest.util';

const OktaTokenTest = (props: OktaTokenTestProps): JSX.Element => {
  const { testId, externalFields } = props;
  const { oktaToken } = externalFields ?? {};

  return (
    <div data-ref="oktaToken-test" data-testid={testId}>
      <h2>Get Okta Token</h2>
      <br />
      <br />
      Full JSON:
      {JSON.stringify(oktaToken)}
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
  return await getStaticPropsForOktaTokenTest();
};

export default OktaTokenTest;
