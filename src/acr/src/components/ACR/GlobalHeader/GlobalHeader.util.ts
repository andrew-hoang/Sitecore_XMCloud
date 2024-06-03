import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { GlobalHeaderData } from 'components/ACR/GlobalHeader/GlobalHeader.props';

export const getStaticPropsForGlobalHeader = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<GlobalHeaderData> => {
  // console.log(rendering);
  // console.log(layoutData);

  const model: GlobalHeaderData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
