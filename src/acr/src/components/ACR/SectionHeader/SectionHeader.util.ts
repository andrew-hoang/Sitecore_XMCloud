import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { SectionHeaderProps, SectionHeaderBaseProps, SectionHeaderData } from 'components/ACR/SectionHeader/SectionHeader.props';

export const getStaticPropsForSectionHeader = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<SectionHeaderData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: SectionHeaderData = {
    heading: { value: 'Hardcoded for scaffolding' },
  };

  return model;
};

export const getSectionHeaderUiProps = (props: SectionHeaderProps): SectionHeaderBaseProps => {
  const model: SectionHeaderBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
