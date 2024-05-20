import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { MultiPromoData } from 'components/ACR/MultiPromo/MultiPromo.props';

export const getStaticPropsForMultiPromo = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<MultiPromoData> => {
  // console.log(rendering);
  // console.log(layoutData);

  const model: MultiPromoData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
