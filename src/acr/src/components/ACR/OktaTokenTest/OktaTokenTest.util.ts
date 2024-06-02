import { OktaTokenTestData } from 'components/ACR/OktaTokenTest/OktaTokenTest.props';
import { getOktaAcessToken } from 'src/utils/acrOktaClient';

export const getStaticPropsForOktaTokenTest = async (): Promise<OktaTokenTestData> => {
  const requestParams = {
    grant_type: 'refresh_token',
    scope: 'offline_access openid',
    redirect_uri: process.env.OKTA_REDIRECT_URL ?? '',
    client_id: process.env.OKTA_CLIENT_ID ?? '',
    client_secret: process.env.OKTA_CLIENT_SECRET ?? '',
    refresh_token: process.env.OKTA_REFRESH_TOKEN ?? '',
  };
  const oktaTokenResponseData = await getOktaAcessToken(requestParams);
  const model: OktaTokenTestData = {
    externalFields: {
      oktaToken: oktaTokenResponseData,
    },
  };

  return model;
};
