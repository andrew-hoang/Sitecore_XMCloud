import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { PromoData } from 'components/ACR/Promo/Promo.props';

export const getStaticPropsForPromo = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<PromoData> => {
  // console.log(rendering);
  // console.log(layoutData);

  const model: PromoData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
