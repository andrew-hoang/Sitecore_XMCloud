import { GlobalFooterProps } from 'components/ACR/GlobalFooter/GlobalFooter.props';
import { PlaceholderBaseProps } from '../Placeholder/PlaceholderBase';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Theme } from '@radix-ui/themes';

import { Flex, Separator } from '@radix-ui/themes';
import LinkBase from '../Link/LinkBase';

const GlobalFooter = (props: GlobalFooterProps): JSX.Element => {
  const { testId, rendering, componentFactory, fields } = props;

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

  const { footerNewsletterText, footerNewsletterLink } = fields;

  return (
    <Theme data-theme="indigo" accentColor='green'>
      <div data-ref="global-footer bg-t-background text-t-body" data-testid={testId}>
        <div data-ref="newsletter-sign-up indigo" data-testid={testId}>
          <Flex justify="between" className='py-8'>
            <Text tag="h4" className="heading-d green" field={footerNewsletterText} />
            <LinkBase link={footerNewsletterLink} />
          </Flex>
          <Separator my="3" size="4" color='green' />
        </div>
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
    </Theme>
  );
};

export default GlobalFooter;
