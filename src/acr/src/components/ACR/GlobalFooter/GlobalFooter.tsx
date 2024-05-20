import { GlobalFooterProps } from 'components/ACR/GlobalFooter/GlobalFooter.props';

const GlobalFooter = (props: GlobalFooterProps): JSX.Element => {
  const { testId } = props;

  return (
    <div data-ref="global-footer" data-testid={testId}>
      <p>The GlobalFooter Component</p>
    </div>
  );
};

export default GlobalFooter;
