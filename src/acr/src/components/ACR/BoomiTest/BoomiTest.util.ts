import { BoomiTestData } from 'components/ACR/BoomiTest/BoomiTest.props';
import { getAccount } from 'src/utils/acrBoomiClient';

export const getStaticPropsForBoomiTest = async (): Promise<BoomiTestData> => {
  
  const requestParams = {
    Account: {
      Email_Address: 'akhanal@acr.org',
      Okta_ID: '',
      SF_Account_ID: '',
    },
  };
  const accountData = await getAccount(requestParams);
  
  const model: BoomiTestData = {
    externalFields: {
      account:accountData,
    },
  };

  return model;
};
