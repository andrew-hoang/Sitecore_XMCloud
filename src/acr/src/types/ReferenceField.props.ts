import { Field, Item } from '@sitecore-jss/sitecore-jss-react';

export type ReferenceField = {
  id: string;
  name: string;
  url?: string;
  displayName?: string;
  fields?: {
    [key: string]: Field | Item[] | ReferenceField | null;
  };
};
