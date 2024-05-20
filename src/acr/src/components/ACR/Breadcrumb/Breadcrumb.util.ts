import { BreadcrumbData, BreadcrumbsGraphQLData } from 'components/ACR/Breadcrumb/Breadcrumb.props';
import { BreadcrumbQueryString } from 'components/ACR/Breadcrumb/Breadcrumb.string';
import { getACRGraphQlClient } from 'src/utils/acrGraphQlClient';

export type BreadCrumbRequest = {
  language?: string;
  contextItem?: string;
  isPageEditing: boolean;
};

export const getStaticPropsForBreadcrumb = async (
  request: BreadCrumbRequest | null
): Promise<BreadcrumbData> => {
  const result = await getACRGraphQlClient().request<BreadcrumbsGraphQLData>(
    BreadcrumbQueryString,
    {
      language: request?.language ?? 'en',
      contextItem: request?.contextItem,
    }
  );
  result.isPageEditing = request?.isPageEditing ?? false;
  const byDescending = result.datasource?.ancestors?.slice().reverse();
  const model: BreadcrumbData = {
    externalFields: {
      datasource: { ancestors: byDescending, name: result.datasource.name },
      isPageEditing: result.isPageEditing,
    },
  };
  return model;
};
