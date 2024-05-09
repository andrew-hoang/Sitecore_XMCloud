import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { LinkListProps, LinkListBaseProps, LinkListData } from 'components/ACR/LinkList/LinkList.props';

export const getStaticPropsForLinkList = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<LinkListData> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: LinkListData = {
    heading: { value: 'Hardcoded for scaffolding' },
  };

  return model;
};

export const getLinkListUiProps = (props: LinkListProps): LinkListBaseProps => {
  const model: LinkListBaseProps = {
    fields: {
      heading: props.fields.heading,
    },
  };

  return model;
};
