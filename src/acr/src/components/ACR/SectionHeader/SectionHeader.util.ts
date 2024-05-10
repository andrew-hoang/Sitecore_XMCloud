import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { SectionHeaderData } from 'components/ACR/SectionHeader/SectionHeader.props';

export const getStaticPropsForSectionHeader = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<SectionHeaderData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: SectionHeaderData = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
