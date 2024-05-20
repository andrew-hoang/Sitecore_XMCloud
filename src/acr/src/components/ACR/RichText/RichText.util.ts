import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { RichTextData } from 'components/ACR/RichText/RichText.props';

export const getStaticPropsForRichText = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<RichTextData> => {
  // console.log(rendering);
  // console.log(layoutData);

  const model: RichTextData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
