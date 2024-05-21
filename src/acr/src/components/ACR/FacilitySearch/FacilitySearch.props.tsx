import { ComponentRendering, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { ReferenceField } from 'src/types/ReferenceField.props';
import { TestProps } from 'src/types/Test.props';
import { ACREnumeration } from 'src/types/enum.props';

/**
 * Model used for Sitecore Component integration
 */
export type FacilitySearchProps = ComponentProps &
  TestProps &
  FacilitySearchFields &
  FacilitySearchData;

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type FacilitySearchData = {
  externalFields?: {
    searchOptions: FacilityEnumeration[];
    modalityOptions: FacilityEnumeration[];
    designationOptions: FacilityEnumeration[];
    milesOptions: FacilityEnumeration[];
    stateOptions: FacilityEnumeration[];
    countryOptions: FacilityEnumeration[];
  };
};

export type FacilityEnumeration = {
  name: string;
  value: string;
};

export type FacilitySearchFields = {
  fields: {
    searchBy: Field<string>;
    zipCityLabel: Field<string>;
    withinLabel: Field<string>;
    modalityLabel: Field<string>;
    designationLabel: Field<string>;
    resultsFoundLabel: Field<string>;
    noResultsFoundLabel: Field<string>;
    searchButtonLabel: Field<string>;
    previousLabel: Field<string>;
    nextLabel: Field<string>;
    searchOptions: ACREnumeration[];
    modalityOptions: ACREnumeration[];
    designationOptions: ACREnumeration[];
    milesOptions: ACREnumeration[];
    stateOptions: ReferenceField;
    countryOptions: ReferenceField;
  };
};

export type FacilitySearchStateEnumGraphQL = {
  name: string;
  value: { value: string };
};

export type FacilitySearchDataModel = FacilitySearchFields & ComponentRendering;
