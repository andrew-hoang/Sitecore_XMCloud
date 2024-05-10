import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { ImageData } from 'components/ACR/Image/Image.props';

export const getStaticPropsForImage = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<ImageData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: ImageData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
