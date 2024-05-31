/*export interface ACRAccount {
  Id: string;
  Name: string;
  LastName: string;
  FirstName: string;
  PersonMailingCountry: string;
  PersonMailingAddress: string;
  NU__FullName__c: string;
  NU__Member__c: string;
  NU__PersonEmail__c: string;
  ACRId__c: string;
  NU__IsMemberFlag__c: string;
  ACR_PrimaryAddress__c: string;
  Role: string;
  Account_Detail__c: string;
  RFS: string;
  YPS: string;
}*/

export interface ACRAccount {
  Account: Account
}

export interface Account {
  Id: string
  Name: string
  LastName: string
  FirstName: string
  PersonMailingCountry: string
  PersonMailingAddress: string
  NU__FullName__c: string
  NU__Member__c: string
  NU__PersonEmail__c: string
  ACRId__c: string
  NU__IsMemberFlag__c: string
  ACR_PrimaryAddress__c: string
  Role: string
  Account_Detail__c: string
  RFS: string
  YPS: string
}

