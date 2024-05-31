import { GlobalFooterProps, SocialLink } from 'components/ACR/GlobalFooter/GlobalFooter.props';
import { PlaceholderBaseProps } from '../Placeholder/PlaceholderBase';
import { Placeholder, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

import { Flex, Separator } from '@radix-ui/themes';
import LinkBase from '../Link/LinkBase';
import FooterSocialIcon from './FooterSocialIcon/FooterSocialIcon';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { formatAddress, formatPhoneNumber } from "./helper";

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

  const { footerNewsletterText, footerNewsletterLink, footerLogo, socialLinks, engageTitle, engageDescription, engageLink, locationName, phoneNumber, address1, address2, city, state, zipcode, directoryTitle, directoryDescription, directoryLink } = fields;

  const renderFooterEngageForum = !!engageTitle?.value && !!engageLink?.value && !!engageDescription?.value;

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
      <Flex className='mb-12'>
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
        <Placeholder
          name={footerLink3Placeholder.placeholder.name}
          rendering={footerLink1Placeholder.placeholder.rendering}
        />
        {renderFooterEngageForum && <div>
          <Text tag="p" className="font-bold mb-2" field={engageTitle} />
          <Text tag="p" className="body-xs !font-medium mb-2" field={engageDescription} />
          <LinkBase link={engageLink} style={ButtonStyle.CTA} />
        </div>}
      </Flex>
      <Separator size="4" className='bg-white mb-12' />
      <Flex>
        <Flex direction="column">
          <Text tag="p" className="font-bold mb-2" field={locationName} />
          <LinkBase link={{
            value: {
              text: formatAddress(
                address1?.value,
                address2?.value,
                city.value,
                state.value,
                zipcode.value
              ),
              href: formatAddress(
                address1?.value,
                address2?.value,
                city.value,
                state.value,
                zipcode.value,
                true
              ),
            }
          }}
            style={ButtonStyle.STATIC_LINK}
          />
          <LinkBase link={{ value: { text: formatPhoneNumber(phoneNumber.value), href: `tel:${phoneNumber.value}` } }} style={ButtonStyle.STATIC_LINK} />
        </Flex>
        <div>
          <Text tag="p" className="font-bold mb-2" field={directoryTitle} />
          <Text tag="p" className="body-xs !font-medium mb-2" field={directoryDescription} />
          <LinkBase link={directoryLink} style={ButtonStyle.CTA} />
        </div>
        <Placeholder
          name={footerLink4Placeholder.placeholder.name}
          rendering={footerLink4Placeholder.placeholder.rendering}
        />
      </Flex>
    </div>
  );
};

export default GlobalFooter;
