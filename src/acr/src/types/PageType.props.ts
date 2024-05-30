import { RouteData } from '@sitecore-jss/sitecore-jss-nextjs';
import { PageTaxonomies } from './PageTaxonomies.props';
import { PageTitles } from './PageTitles.props';
import { PageImages } from './PageImages.props';

export type PageType = {
  fields: PageTitles & PageImages & PageTaxonomies;
};

export type PageRouteData = RouteData & PageType;
