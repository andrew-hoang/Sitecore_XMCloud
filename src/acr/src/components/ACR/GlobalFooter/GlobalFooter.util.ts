import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { GlobalFooterData } from 'components/ACR/GlobalFooter/GlobalFooter.props';

export const getStaticPropsForGlobalFooter = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<GlobalFooterData> => {
  // console.log(rendering);
  // console.log(layoutData);

  const model: GlobalFooterData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
