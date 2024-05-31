export interface Chapter {
    Id: string
    Name: string
    CreatedDate: string
    CreatedById: string
    LastModifiedDate: string
    LastModifiedById: string
    NU__RecordTypeName__c: string
    NU__Status__c: string
    RecordTypeId?: string
    BillingCountry?: string
    BillingCountryCode?: string
    BillingState?: string
    BillingStateCode?: string
    PrimaryContact?: string
    Phone?: string
    Website?: string
    BillingStreet?: string
    BillingCity?: string
    BillingPostalCode?: string
  }