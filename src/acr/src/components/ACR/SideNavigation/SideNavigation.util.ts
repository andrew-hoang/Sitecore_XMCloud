import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { SideNavigationData } from 'components/ACR/SideNavigation/SideNavigation.props';

export const getStaticPropsForSideNavigation = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<SideNavigationData> => {
  console.log(rendering);
  console.log(layoutData);

  const model: SideNavigationData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
