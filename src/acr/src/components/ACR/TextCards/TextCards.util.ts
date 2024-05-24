import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { TextCardsData } from 'components/ACR/TextCards/TextCards.props';

export const getStaticPropsForTextCards = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<TextCardsData> => {
  console.log(rendering);
  console.log(layoutData);

  const model: TextCardsData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
