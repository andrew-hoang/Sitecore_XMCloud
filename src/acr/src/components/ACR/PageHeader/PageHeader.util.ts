import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderProps, PageHeaderBaseProps, PageHeaderData } from 'components/ACR/PageHeader/PageHeader.props';

export const getStaticPropsForPageHeader = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<PageHeaderData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: PageHeaderData = {
    heading: { value: 'Hardcoded for scaffolding' },
  };

  return model;
};

export const getPageHeaderUiProps = (props: PageHeaderProps): PageHeaderBaseProps => {
  const model: PageHeaderBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
