import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { PlaceholderProps } from '@sitecore-jss/sitecore-jss-react/types/components/PlaceholderCommon';
import { TestProps } from 'src/types/Test.props';
import { Component } from 'react';

/**
 * Model used for Sitecore Component integration
 */
export type TextCardsProps = ComponentProps &
  TestProps &
  PlaceholderProps &
  TextCardsFields & { items: Component[] };

// Component Rendering Parameter fields
export type TextCardParams = {
  params: {
    orientation?: string;
  };
};

export type TextCardsFields = {
  fields: {
    title?: Field<string>;
    description?: Field<string>;
  };
};

export type TextCardProps = ComponentProps &
  TextCardParams & {
    fields: {
      image?: ImageField;
      description: Field<string>;
      anchorId?: Field<string>;
    };
  };
