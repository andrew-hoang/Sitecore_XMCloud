import { OktaTokenTestData } from 'components/ACR/OktaTokenTest/OktaTokenTest.props';
import { getOktaAcessToken } from 'src/utils/acrOktaClient';

export const getStaticPropsForOktaTokenTest = async (): Promise<OktaTokenTestData> => {
  const oktaTokenResponseData = await getOktaAcessToken();
  const model: OktaTokenTestData = {
    externalFields: {
      oktaToken: oktaTokenResponseData,
    },
  };

  return model;
};
