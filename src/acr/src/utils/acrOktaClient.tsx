import { OktaTokenResponse } from 'src/types/Okta/OktaTokenResponse.props';
import axios from 'axios';

const url = process.env.OKTA_TOKEN_ENDPOINT ?? 'https://sso.acr.org/oauth2/default/v1/token';
const refreshToken = process.env.OKTA_REFRESH_TOKEN ?? '';
const clientId = process.env.OKTA_CLIENT_ID ?? '';
const clientSecret = process.env.OKTA_CLIENT_SECRET ?? '';

export const getOktaAcessToken = async (): Promise<OktaTokenResponse> => { 
  try {
  const response = await axios.post(
    url, 
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }).toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  ); 
  if (response.status===200) {    
    const tokenResponse: OktaTokenResponse = {
    token_type: response.data.token_type,
    expires_in: response.data.expires_in,
    access_token: response.data.access_token,
    scope: response.data.scope,
    refresh_token: response.data.refresh_token,
    id_token: response.data.id_token
    };
    return tokenResponse;
  }
  else
  {
    throw new Error(`Error in request getAccount ${response.statusText}`);
  }  
 } catch (error) {
   throw new Error(`Error while getting access token: ${error}`); 
 }
};

