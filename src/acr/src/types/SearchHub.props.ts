import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ReferenceField } from './ReferenceField.props';

export type SearchHubField = ReferenceField & {
  fields: {
    name: Field<string>;
    value: Field<string>;
  };
};
