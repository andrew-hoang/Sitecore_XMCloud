import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { FacilitySearchData } from 'components/ACR/FacilitySearch/FacilitySearch.props';

export const getStaticPropsForFacilitySearch = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<FacilitySearchData> => {
  console.log(rendering);
  console.log(layoutData);

  const model: FacilitySearchData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
