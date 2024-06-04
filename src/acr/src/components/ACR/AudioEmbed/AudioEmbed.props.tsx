import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type AudioEmbedProps = ComponentProps & TestProps & AudioEmbedFields;

export type AudioEmbedFields = {
  fields: {
    playerId: Field<string>;
  };
};
