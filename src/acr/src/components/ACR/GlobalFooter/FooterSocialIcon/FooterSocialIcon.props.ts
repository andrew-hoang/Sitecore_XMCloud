import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ReferenceField } from 'src/types/ReferenceField.props';

export type SocialLink = ReferenceField & {
  fields: {
    link?: LinkField;
    socialIcon?: ReferenceField & {
      fields: {
        Value: { value: string };
      };
    };
  };
  iconClassName?: string;
};
