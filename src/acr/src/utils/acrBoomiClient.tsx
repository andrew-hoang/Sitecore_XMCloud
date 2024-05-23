/*import config from 'temp/config';

export const getBoomiBaseApi = (): string => {
   return process.env.SALESFORCE_BASE_API_URL ?? config.boomiBaseApi;
 };*/

import { AccountRequest } from 'src/types/boomi/requests/AccountRequest.props';
import { ACRAccount } from 'src/types/boomi/results/ACRAccount.props';

const account = {
  Account: {
    Email_Address: 'akhanal@acr.org',
    Okta_ID: '',
    SF_Account_ID: '',
  },
};

export const getAccount = async (request: AccountRequest): Promise<ACRAccount> => {
  const oktaAccessKey = process.env.OKTA_ACCESS_TOKEN ?? '';

  const r = await fetch('https://acrapi-uat.acr.org:8443/ws/rest/getcustomer/v3/account/', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': oktaAccessKey,
    },
  });
  if (!r.ok) {
    throw new Error(`Error in request getAccount ${r.statusText}`);
  }
  return await r.json().then((data: ACRAccount) => data);
};
