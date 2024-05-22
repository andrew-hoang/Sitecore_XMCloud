import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

/**
 * Model used for Sitecore Component integration
 */
export type LinkListProps = ComponentProps &
  TestProps &
  LinkListFields & {
    hasIcon?: boolean;
    style?: ButtonStyle;
  };

export type LinkListFields = {
  fields: {
    link1: LinkField;
    link2: LinkField;
    link3: LinkField;
    link4: LinkField;
    link5: LinkField;
    link6: LinkField;
    link7: LinkField;
    link8: LinkField;
    link9: LinkField;
    link10: LinkField;
  };
};
