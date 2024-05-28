import { LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { PageRouteData } from 'src/types/PageType.props';
import { PageHeaderData } from './PageHeader.props';

export const getStaticPropsForPageBanner = async (
  layoutData: LayoutServiceData
): Promise<PageHeaderData> => {
  const page = layoutData?.sitecore?.route as PageRouteData;
  const model: PageHeaderData = {
    externalFields: {
      headerTitle: page?.fields?.headerTitle ?? { value: '' },
      subtitle: page?.fields?.subtitle ?? { value: '' },
      contentType: page?.fields?.contentType,
      image1x1: page?.fields?.image1x1,
      image16x9: page?.fields?.image16x9,
    },
  };

  return model;
};
