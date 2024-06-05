import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { VideoData } from 'components/ACR/Video/Video.props';

export const getStaticPropsForVideo = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<VideoData> => {
  console.log(rendering);
  console.log(layoutData);

  const model: VideoData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
