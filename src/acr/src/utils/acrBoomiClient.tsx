/*import config from 'temp/config';

export const getBoomiBaseApi = (): string => {
   return process.env.SALESFORCE_BASE_API_URL ?? config.boomiBaseApi;
 };*/

import { AccountRequest } from "src/types/boomi/requests/AccountRequest.props";

const account = {
   Account: {
        Email_Address: 'akhanal@acr.org',
        Okta_ID: '',
        SF_Account_ID: ''
      }};    

const addPosts = async (request:AccountRequest) => {
   await fetch('https://acrapi-uat.acr.org:8443/ws/rest/getcustomer/v3/account/', {
   method: 'POST',
   body: JSON.stringify(account),
   headers: { 
      'Content-Type': 'application/json',
      'x-api-key': '4b8373dd-bc52-47d0-bcb7-567959c8976c'
   },
   })
   .then((response) => response.json())
   .then((data) => {
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
   })
   .catch((err) => {
      console.log(err.message);
   });
   };