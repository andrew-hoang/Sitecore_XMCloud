import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { MyDashboardData } from 'components/ACR/MyDashboard/MyDashboard.props';

export const getStaticPropsForMyDashboard = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<MyDashboardData> => {
  // console.log(rendering);
  // console.log(layoutData);

  const model: MyDashboardData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
