import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type PageTitles = {
  title: Field<string>;
  subtitle?: Field<string>;
  shortTitle?: Field<string>;
  headerTitle: Field<string>;
};
