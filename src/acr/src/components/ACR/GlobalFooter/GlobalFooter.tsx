import { GlobalFooterProps, SocialLink } from 'components/ACR/GlobalFooter/GlobalFooter.props';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

import { Flex, Separator } from '@radix-ui/themes';
import LinkBase from '../Link/LinkBase';
import FooterSocialIcon from './FooterSocialIcon/FooterSocialIcon';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { formatAddress, formatPhoneNumber } from "./helper";

import FooterLinkColumns from './FooterLinkColumns/FooterLinkColumns';

const GlobalFooter = (props: GlobalFooterProps): JSX.Element => {
  const { testId, fields, externalFields } = props;

  const { footerNewsletterText, footerNewsletterLink, footerLogo, socialLinks, engageTitle, engageDescription, engageLink, locationName, phoneNumber, address1, address2, city, state, zipcode, directoryTitle, directoryDescription, directoryLink, copyrightStatement } = fields;

  const renderFooterEngageForum = !!engageTitle?.value && !!engageLink?.value && !!engageDescription?.value;

  return (
    <div className='w-full max-w-[1440px] mx-auto py-12 lg:px-[135px] px-[35px]' data-ref="global-footer" data-testid={testId}>
      {footerNewsletterLink && footerNewsletterText && (
        <div className='mb-12'>
          <Flex justify="between" className='py-8'>
            <Text tag="h4" className="heading-d text-green-100" field={footerNewsletterText} />
            <LinkBase link={footerNewsletterLink} styleClasses="bg-green-100 text-black" />
          </Flex>
          <Separator my="3" size="4" className='bg-green-100' />
        </div>
      )}
      <Flex gap={{ initial: '8', sm: '6' }} direction={{ initial: 'column', sm: 'row' }} className='mb-12'>
        <div className='w-full min-[1000px]:max-w-[270px] max-w-[200px]'>
          <div>
            <Link field={{ href: "/" }} aria-label='navigate to root site'>
              <NextImage field={footerLogo} height="50" width="196" alt="american college of radiology logo" />
            </Link>
          </div>
          <Flex gap="4" pt="5">
            {socialLinks.map((socialLink: SocialLink) => <FooterSocialIcon {...socialLink} iconClassName="h-6 w-6" />)}
          </Flex>
        </div>
        <FooterLinkColumns columns={[externalFields?.footerColumn1, externalFields?.footerColumn2, externalFields?.footerColumn3].filter((column) => !!column)} {...props} rowId='1' />
        {renderFooterEngageForum && <div>
          <Text tag="p" className="font-bold mb-2" field={engageTitle} />
          <Text tag="p" className="body-xs !font-medium mb-2" field={engageDescription} />
          <LinkBase link={engageLink} style={ButtonStyle.CTA} />
        </div>}
      </Flex>
      <Separator size="4" className='bg-white mb-12' />
      <Flex gap={{ initial: '8', sm: '6' }} direction={{ initial: 'column', sm: 'row' }} className='shrink'>
        <Flex direction='column' className='grow w-full min-[1000px]:max-w-[270px] max-w-[200px]'>
          <Text tag="p" className="font-bold mb-2" field={locationName} />
          <LinkBase styleClasses='whitespace-pre-line mb-4 body-sm' link={{
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
          <LinkBase link={{ value: { text: formatPhoneNumber(phoneNumber.value), href: `tel:${phoneNumber.value}` } }} style={ButtonStyle.STATIC_LINK} styleClasses='body-sm' />
        </Flex>
        <div className='w-full max-w-[270px]'>
          <Text tag="p" className="font-bold mb-2" field={directoryTitle} />
          <Text tag="p" className="body-sm !font-medium mb-4" field={directoryDescription} />
          <LinkBase link={directoryLink} style={ButtonStyle.CTA} />
        </div>
        <div>
          <FooterLinkColumns columns={[externalFields?.footerColumn4].filter((column) => !!column)} {...props} rowId='2' />
          {copyrightStatement && <Text tag='p' className="body-xs" field={copyrightStatement} />}
        </div>
      </Flex>
    </div>
  );
};

export default GlobalFooter;
