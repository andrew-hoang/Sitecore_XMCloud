import { GlobalFooterProps } from 'components/ACR/GlobalFooter/GlobalFooter.props';
import { PlaceholderBaseProps } from '../Placeholder/PlaceholderBase';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

const GlobalFooter = (props: GlobalFooterProps): JSX.Element => {
  const { testId, rendering, componentFactory } = props;

  const footerLink1Placeholder: PlaceholderBaseProps = {
    placeholder: {
      name: `acr-container-footer-links-a-${props.params.DynamicPlaceholderId}`,
      rendering,
      componentFactory,
    },
  };
  const footerLink2Placeholder: PlaceholderBaseProps = {
    placeholder: {
      name: `acr-container-footer-links-b-${props.params.DynamicPlaceholderId}`,
      rendering,
      componentFactory,
    },
  };

  const footerLink3Placeholder: PlaceholderBaseProps = {
    placeholder: {
      name: `acr-container-footer-links-c-${props.params.DynamicPlaceholderId}`,
      rendering,
      componentFactory,
    },
  };
  const footerLink4Placeholder: PlaceholderBaseProps = {
    placeholder: {
      name: `acr-container-footer-links-d-${props.params.DynamicPlaceholderId}`,
      rendering,
      componentFactory,
    },
  };

  return (
    <div data-ref="globa l-footer" data-testid={testId}>
      <p>The GlobalFooter Component</p>
      <Placeholder
        name={footerLink1Placeholder.placeholder.name}
        rendering={footerLink1Placeholder.placeholder.rendering}
      />
      <Placeholder
        name={footerLink2Placeholder.placeholder.name}
        rendering={footerLink1Placeholder.placeholder.rendering}
      />
      <Placeholder
        name={footerLink3Placeholder.placeholder.name}
        rendering={footerLink1Placeholder.placeholder.rendering}
      />
      <Placeholder
        name={footerLink4Placeholder.placeholder.name}
        rendering={footerLink4Placeholder.placeholder.rendering}
      />
    </div>
  );
};

export default GlobalFooter;
