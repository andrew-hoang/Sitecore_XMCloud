import { GlobalFooterProps, SocialLink } from 'components/ACR/GlobalFooter/GlobalFooter.props';
import { PlaceholderBaseProps } from '../Placeholder/PlaceholderBase';
import { Placeholder, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

import { Flex, Separator } from '@radix-ui/themes';
import LinkBase from '../Link/LinkBase';
import FooterSocialIcon from './FooterSocialIcon/FooterSocialIcon';

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

  const { footerNewsletterText, footerNewsletterLink, footerLogo, socialLinks } = fields;

  return (
    <div data-ref="global-footer" data-testid={testId}>
      {footerNewsletterLink && footerNewsletterText && (
        <div data-ref="global-footer__newsletter-sign-up">
          <Flex justify="between" className='py-8'>
            <Text tag="h4" className="heading-d text-green-100" field={footerNewsletterText} />
            <LinkBase link={footerNewsletterLink} styleClasses="bg-green-100 text-black" />
          </Flex>
          <Separator my="3" size="4" className='bg-green-100' />
        </div>
      )}
      <Flex>
        <div>
          <div>
            <Link field={{ href: "/" }} aria-label='navigate to root site'>
              <NextImage field={footerLogo} height="50" width="196" alt="american college of radiology logo" />
            </Link>
          </div>
          <Flex gap="4" pt="5">
            {socialLinks.map((socialLink: SocialLink) => <FooterSocialIcon {...socialLink} iconClassName="h-6 w-6" />)}
          </Flex>
        </div>
        <Placeholder
          name={footerLink1Placeholder.placeholder.name}
          rendering={footerLink1Placeholder.placeholder.rendering}
        />
        <Placeholder
          name={footerLink2Placeholder.placeholder.name}
          rendering={footerLink1Placeholder.placeholder.rendering}
        />
      </Flex>
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
