import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { SearchBarData } from 'components/ACR/SearchBar/SearchBar.props';

export const getStaticPropsForSearchBar = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<SearchBarData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: SearchBarData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
