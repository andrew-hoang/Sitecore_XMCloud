import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ReferenceField } from 'src/types/ReferenceField.props';

export type ACREnumeration = ReferenceField & {
  fields: {
    Value: Field<string>;
  };
};
