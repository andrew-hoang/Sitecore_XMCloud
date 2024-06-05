import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { PlaceholderProps } from '@sitecore-jss/sitecore-jss-react/types/components/PlaceholderCommon';
import { TestProps } from 'src/types/Test.props';
import { Component } from 'react';

export type AccordionProps = ComponentProps &
  TestProps &
  PlaceholderProps &
  AccordionFields & { items: Component[] };

export type AccordionFields = {
  fields: {
    title?: Field<string>;
    titleHighlight?: Field<string>;
    description?: Field<string>;
    link?: LinkField;
    accentImage?: ImageField;
  };
};

export type AccordionRowProps = ComponentProps & {
  fields: {
    title?: Field<string>;
    content?: Field<string>;
  };
};
