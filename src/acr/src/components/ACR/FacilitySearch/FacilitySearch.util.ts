import { ComponentRendering } from '@sitecore-jss/sitecore-jss-react';
import {
  FacilityEnumeration,
  FacilitySearchData,
  FacilitySearchDataModel,
  FacilitySearchStateEnumGraphQL,
} from 'components/ACR/FacilitySearch/FacilitySearch.props';
import { ACREnumeration } from 'src/types/enum.props';
import { GqlResult, getACRGraphQlClient } from 'src/utils/acrGraphQlClient';
import { getStateCountryQuery } from './FacilitySearch.string';

export type StateRequest = {
  language?: string;
  isPageEditing: boolean;
};
export const getStaticPropsForFacilitySearch = async (
  rendering: ComponentRendering,
  request: StateRequest
): Promise<FacilitySearchData> => {
  const data = rendering as FacilitySearchDataModel;
  const transformToFacilityEnumeration = (
    item: ACREnumeration | FacilitySearchStateEnumGraphQL
  ) => {
    const model: FacilityEnumeration = {
      name: item.name,
      value: '',
    };
    if ('fields' in item) {
      const m = item as ACREnumeration;
      model.value = m?.fields?.Value?.value ?? '';
    } else {
      const m = item as FacilitySearchStateEnumGraphQL;
      model.value = m?.value?.value ?? '';
    }
    return model;
  };
  const stateQuery = getStateCountryQuery(data?.fields?.stateOptions?.id, request.language);
  const result =
    await getACRGraphQlClient().request<GqlResult<FacilitySearchStateEnumGraphQL[]>>(stateQuery);

  const countryQuery = getStateCountryQuery(data?.fields?.countryOptions?.id, request.language);
  const countryResult =
    await getACRGraphQlClient().request<GqlResult<FacilitySearchStateEnumGraphQL[]>>(countryQuery);

  const model: FacilitySearchData = {
    externalFields: {
      searchOptions: data?.fields?.searchOptions?.map(transformToFacilityEnumeration) ?? [],
      designationOptions:
        data?.fields?.designationOptions?.map(transformToFacilityEnumeration) ?? [],
      milesOptions: data?.fields?.milesOptions?.map(transformToFacilityEnumeration) ?? [],
      modalityOptions: data?.fields?.modalityOptions?.map(transformToFacilityEnumeration) ?? [],
      stateOptions: result?.search?.results?.map(transformToFacilityEnumeration) ?? [],
      countryOptions: countryResult?.search?.results?.map(transformToFacilityEnumeration) ?? [],
    },
  };

  return model;
};
