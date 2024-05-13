import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { SkipLinkData } from 'components/ACR/SkipLink/SkipLink.props';

export const getStaticPropsForSkipLink = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<SkipLinkData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: SkipLinkData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
