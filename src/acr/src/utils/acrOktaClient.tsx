import { OktaClientInfo } from 'src/types/Okta/OktaClientInfo.props';
import { OktaTokenResponse } from 'src/types/Okta/OktaTokenResponse.props';

const url = process.env.OKTA_TOKEN_ENDPOINT ?? '';

export const getOktaAcessToken = async (request: OktaClientInfo): Promise<OktaTokenResponse> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (!response.ok) {
    throw new Error(`Error in request getOktaAcessToken ${response.statusText}`);
  }
  return await response.json().then((data: OktaTokenResponse) => data);
};
