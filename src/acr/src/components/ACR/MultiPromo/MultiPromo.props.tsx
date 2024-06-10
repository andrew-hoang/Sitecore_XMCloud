import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { PlaceholderProps } from '@sitecore-jss/sitecore-jss-react/types/components/PlaceholderCommon';
import { TestProps } from 'src/types/Test.props';
import { StyleProps } from 'src/types/Style.props';
import { Component } from 'react';

/**
 * Model used for Sitecore Component integration
 */
export type MultiPromoProps = ComponentProps &
  TestProps &
  PlaceholderProps &
  MultiPromoFields & { promos: Component[] };

export type MultiPromoFields = {
  fields: {
    heading?: Field<string>;
    description?: Field<string>;
    link?: LinkField;
  };
};

export type SimplePromoProps = ComponentProps &
  StyleProps & {
    fields: {
      eyebrowText?: Field<string>;
      title: Field<string>;
      description?: Field<string>;
      link?: LinkField;
      image?: ImageField;
    };
  };
