import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { ImageProps, ImageBaseProps, ImageData } from 'components/ACR/Image/Image.props';

export const getStaticPropsForImage = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<ImageData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: ImageData = {
    heading: { value: 'Hardcoded for scaffolding' },
  };

  return model;
};

export const getImageUiProps = (props: ImageProps): ImageBaseProps => {
  const model: ImageBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
