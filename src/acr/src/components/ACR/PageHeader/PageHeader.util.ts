import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderData } from 'components/ACR/PageHeader/PageHeader.props';

export const getStaticPropsForPageHeader = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<PageHeaderData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: PageHeaderData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
