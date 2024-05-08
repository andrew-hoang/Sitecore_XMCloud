import { ComponentFactory } from '@sitecore-jss/sitecore-jss-nextjs';

/**
 * Props that are useful for components with placeholders.
 */
export type PlaceholderProps = {
  componentFactory?: ComponentFactory;
  children?: JSX.Element | JSX.Element[];
};
