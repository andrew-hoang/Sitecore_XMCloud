import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithIconData } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.props';

export const getStaticPropsForPageHeaderWithIcon = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<PageHeaderWithIconData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: PageHeaderWithIconData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
