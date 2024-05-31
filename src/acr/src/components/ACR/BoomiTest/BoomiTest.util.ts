import { BoomiTestData } from 'components/ACR/BoomiTest/BoomiTest.props';
import { ACRAccount } from 'src/types/boomi/results/ACRAccount.props';
import { getAccount } from 'src/utils/acrBoomiClient';

export const getStaticPropsForBoomiTest = async (): Promise<BoomiTestData> => {
  // console.log(rendering);
  // console.log(layoutData);
  const requestParams = {
    Account: {
      Email_Address: 'akhanal@acr.org',
      Okta_ID: '',
      SF_Account_ID: '',
    },
  };

  const accountData = await getAccount(requestParams);

  //Sample ACRAccount Object
 /* const testData: ACRAccount = {
    FirstName: 'Test First Name',
    Id: '',
    Name: 'Test Full Name',
    LastName: 'Test LastName',
    PersonMailingCountry: '',
    PersonMailingAddress: '',
    NU__FullName__c: '',
    NU__Member__c: '',
    NU__PersonEmail__c: '',
    ACRId__c: '',
    NU__IsMemberFlag__c: '',
    ACR_PrimaryAddress__c: '',
    Role: '',
    Account_Detail__c: '',
    RFS: '',
    YPS: '',
  };*/
  
  const model: BoomiTestData = {
    externalFields: {
      //account: testData,
      account:accountData,
    },
  };

  return model;
};
