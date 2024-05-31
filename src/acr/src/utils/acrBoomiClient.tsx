import { AccountRequest } from 'src/types/boomi/requests/AccountRequest.props';
import { ACRAccount } from 'src/types/boomi/results/ACRAccount.props';

export const getAccount = async (request: AccountRequest): Promise<ACRAccount> => {
  const okta_access_token = process.env.OKTA_ACCESS_TOKEN ?? '';
  const get_customer_x_api_key = process.env.SALESFORCE_GETCUSTOMER_XApiKey ?? '';
  const response = await fetch('https://acrapi-uat.acr.org:8443/ws/rest/getcustomer/v3/account/', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${okta_access_token}`,
      'x-api-key': get_customer_x_api_key,
    },
  });
  if (!response.ok) {
    throw new Error(`Error in request getAccount ${response.statusText}`);
  }
  return await response.json().then((data: ACRAccount) => data);
};
