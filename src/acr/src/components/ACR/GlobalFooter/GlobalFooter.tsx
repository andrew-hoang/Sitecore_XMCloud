import { GlobalFooterProps } from 'components/ACR/GlobalFooter/GlobalFooter.props';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

import { Flex, Separator, Container } from '@radix-ui/themes';
import LinkBase from '../Link/LinkBase';
import FooterSocialIcon from './FooterSocialIcon/FooterSocialIcon';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { formatAddress, formatPhoneNumber } from './helper';

import FooterLinkColumns from './FooterLinkColumns/FooterLinkColumns';
import { SocialLink } from './FooterSocialIcon/FooterSocialIcon.props';
import { Theme } from 'src/enumerations/Theme.enum';

const GlobalFooter = (props: GlobalFooterProps): JSX.Element => {
  const { testId, fields } = props;

  const {
    footerNewsletterText,
    footerNewsletterLink,
    footerLogo,
    socialLinks,
    engageTitle,
    engageDescription,
    engageLink,
    locationName,
    phoneNumber,
    address1,
    address2,
    city,
    state,
    zipcode,
    directoryTitle,
    directoryDescription,
    directoryLink,
    copyrightStatement,
  } = fields;

  const renderFooterEngageForum =
    !!engageTitle?.value && !!engageLink?.value && !!engageDescription?.value;

  const src = footerLogo?.value?.src;
  const isSvg = src?.includes('.svg');

  return (
    <Container
      px="6"
      className="w-full bg-t-background px-[35px] py-12 text-t-body lg:px-[135px]"
      data-ref="global-footer"
      data-testid={testId}
      data-theme={Theme.INDIGO}
    >
      {footerNewsletterLink && footerNewsletterText && (
        <div className="mb-12">
          <Flex
            justify={{ initial: 'center', sm: 'between' }}
            direction={{ initial: 'column', sm: 'row' }}
            className="gap-0 py-8 max-[768px]:gap-6"
          >
            <Text tag="h4" className="heading-d text-green-100" field={footerNewsletterText} />
            <LinkBase
              link={footerNewsletterLink}
              styleClasses="bg-green-100 text-black w-fit"
              hideExternalIcon
            />
          </Flex>
          <Separator my="3" size="4" className="bg-green-100" />
        </div>
      )}
      <Flex
        gap={{ initial: '8', sm: '6' }}
        direction={{ initial: 'column', sm: 'row' }}
        className="mb-12"
      >
        <div className="w-full max-w-[200px] min-[1000px]:max-w-[270px]">
          <div>
            <Link field={{ href: '/' }} aria-label="navigate to root site">
              <NextImage
                field={footerLogo}
                unoptimized={isSvg}
                height="50"
                width="196"
                alt="american college of radiology logo"
              />
            </Link>
          </div>
          <Flex gap="4" pt="5">
            {socialLinks?.map((socialLink: SocialLink, index) => (
              <FooterSocialIcon key={index} {...socialLink} iconClassName="h-[30px] w-[30px]" />
            ))}
          </Flex>
        </div>
        <FooterLinkColumns {...props} rowId="1" />
        {renderFooterEngageForum && (
          <div>
            <Text tag="p" className="mb-2 font-bold" field={engageTitle} />
            <Text tag="p" className="body-xs mb-4 !font-medium" field={engageDescription} />
            <LinkBase link={engageLink} style={ButtonStyle.CTA} />
          </div>
        )}
      </Flex>
      <Separator size="4" className="mb-12 bg-white" />
      <Flex
        gap={{ initial: '8', sm: '6' }}
        direction={{ initial: 'column', sm: 'row' }}
        className="shrink"
      >
        <Flex direction="column" className="w-full max-w-[200px] grow min-[1000px]:max-w-[270px]">
          <Text tag="p" className="mb-2 font-bold" field={locationName} />
          {address1 && city && state && zipcode && (
            <LinkBase
              styleClasses="whitespace-pre-line mb-4 body-sm"
              link={{
                value: {
                  text: formatAddress(
                    address1?.value,
                    address2?.value,
                    city?.value,
                    state?.value,
                    zipcode?.value
                  ),
                  href: formatAddress(
                    address1?.value,
                    address2?.value,
                    city.value,
                    state.value,
                    zipcode.value,
                    true
                  ),
                },
              }}
              style={ButtonStyle.STATIC_LINK}
            />
          )}
          {phoneNumber.value && (
            <LinkBase
              link={{
                value: {
                  text: formatPhoneNumber(phoneNumber.value),
                  href: `tel:${phoneNumber.value}`,
                },
              }}
              style={ButtonStyle.STATIC_LINK}
              styleClasses="body-sm"
              ariaProps={{
                'aria-label': `${locationName?.value} - ${phoneNumber.value}`,
              }}
            />
          )}
        </Flex>
        <div className="w-full max-w-[270px]">
          <Text tag="p" className="mb-2 font-bold" field={directoryTitle} />
          <Text tag="p" className="body-sm mb-4 !font-medium" field={directoryDescription} />
          <LinkBase link={directoryLink} style={ButtonStyle.CTA} />
        </div>
        <div>
          <FooterLinkColumns {...props} rowId="2" />
          {copyrightStatement && <Text tag="p" className="body-xs" field={copyrightStatement} />}
        </div>
      </Flex>
    </Container>
  );
};

export default GlobalFooter;
