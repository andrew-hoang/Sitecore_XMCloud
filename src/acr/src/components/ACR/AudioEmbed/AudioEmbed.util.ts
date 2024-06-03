import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { AudioEmbedData } from 'components/ACR/AudioEmbed/AudioEmbed.props';

export const getStaticPropsForAudioEmbed = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<AudioEmbedData> => {
  console.log(rendering);
  console.log(layoutData);

  const model: AudioEmbedData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
