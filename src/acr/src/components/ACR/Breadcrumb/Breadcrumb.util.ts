import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { BreadcrumbProps, BreadcrumbBaseProps, BreadcrumbData } from 'components/ACR/Breadcrumb/Breadcrumb.props';

export const getStaticPropsForBreadcrumb = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<BreadcrumbData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: BreadcrumbData = {
    heading: { value: 'Hardcoded for scaffolding' },
  };

  return model;
};

export const getBreadcrumbUiProps = (props: BreadcrumbProps): BreadcrumbBaseProps => {
  const model: BreadcrumbBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
