import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { BoomiTestProps } from 'components/ACR/BoomiTest/BoomiTest.props';

import { getStaticPropsForBoomiTest } from 'components/ACR/BoomiTest/BoomiTest.util';

const BoomiTest = (props: BoomiTestProps): JSX.Element => {
  const { testId, externalFields } = props;
  const { account } = externalFields ?? {};

  return (
    <div data-ref="boomi-test" data-testid={testId}>
      <h2>Boomi Get Account</h2>
      <br />
      <p>Account Id: {account?.Account.Id}</p>
      <p>First Name: {account?.Account.FirstName}</p>
      <p>Last Name: {account?.Account.LastName}</p>
      <p>Full Name: {account?.Account.Name}</p>
      <br />
      Full JSON:
      {JSON.stringify(account)}
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
  return await getStaticPropsForBoomiTest();
};

export default BoomiTest;
