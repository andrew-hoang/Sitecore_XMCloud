import {
  ComponentFactory,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

type PlaceholderUiProps = {
  name: string;
  rendering: ComponentRendering;
  componentFactory?: ComponentFactory;
};

export type PlaceholderBaseProps = {
  placeholder: PlaceholderUiProps;
  children?: JSX.Element | JSX.Element[];
};

const PlaceholderBase = (props: PlaceholderBaseProps): JSX.Element => {
  const { placeholder, children } = props;

  return (
    <>
      <Placeholder {...placeholder} />
      {children}
    </>
  );
};

export default PlaceholderBase;
