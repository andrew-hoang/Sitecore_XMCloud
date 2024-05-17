import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { CoveoData } from 'components/ACR/Coveo/Coveo.props';

export const getStaticPropsForCoveo = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<CoveoData> => {
  // console.log(rendering);
  // console.log(layoutData);

  const model: CoveoData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
