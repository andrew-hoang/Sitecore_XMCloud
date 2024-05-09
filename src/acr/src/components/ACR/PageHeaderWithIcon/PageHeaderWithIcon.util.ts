import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithIconProps, PageHeaderWithIconBaseProps, PageHeaderWithIconData } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.props';

export const getStaticPropsForPageHeaderWithIcon = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<PageHeaderWithIconData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: PageHeaderWithIconData = {
    heading: { value: 'Hardcoded for scaffolding' },
  };

  return model;
};

export const getPageHeaderWithIconUiProps = (props: PageHeaderWithIconProps): PageHeaderWithIconBaseProps => {
  const model: PageHeaderWithIconBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
