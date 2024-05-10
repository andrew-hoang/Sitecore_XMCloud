import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { LinkListData } from 'components/ACR/LinkList/LinkList.props';

export const getStaticPropsForLinkList = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<LinkListData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: LinkListData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
