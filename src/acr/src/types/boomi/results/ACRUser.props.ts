import { Account } from "./ACRAccount.props"

export interface User {
    Id: string
    Username: string
    LastName: string
    FirstName: string
    Email: string
    IsActive: string
    ACR_Okta_ID__c: string
    Account: Account
  }  
  