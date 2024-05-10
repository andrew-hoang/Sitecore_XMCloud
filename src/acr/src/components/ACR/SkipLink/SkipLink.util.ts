import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { SkipLinkProps, SkipLinkBaseProps, SkipLinkData } from 'components/ACR/SkipLink/SkipLink.props';

export const getStaticPropsForSkipLink = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<SkipLinkData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: SkipLinkData = {
    heading: { value: 'Hardcoded for scaffolding' },
  };

  return model;
};

export const getSkipLinkUiProps = (props: SkipLinkProps): SkipLinkBaseProps => {
  const model: SkipLinkBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
