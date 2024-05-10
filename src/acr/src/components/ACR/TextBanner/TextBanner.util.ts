import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import {
  TextBannerProps,
  TextBannerBaseProps,
  TextBannerData,
} from 'components/ACR/TextBanner/TextBanner.props';

export const getStaticPropsForTextBanner = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<TextBannerData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: TextBannerData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};

export const getTextBannerUiProps = (props: TextBannerProps): TextBannerBaseProps => {
  const model: TextBannerBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
