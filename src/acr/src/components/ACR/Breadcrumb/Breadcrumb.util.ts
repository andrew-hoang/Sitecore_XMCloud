import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { BreadcrumbData } from 'components/ACR/Breadcrumb/Breadcrumb.props';

export const getStaticPropsForBreadcrumb = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<BreadcrumbData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: BreadcrumbData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
