import { Flex, Container } from '@radix-ui/themes';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithIconProps } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.props';

import ImageBase from '../Image/ImageBase';
import { getStaticPropsForPageHeader } from '../PageHeader/PageHeader.util';
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { dictionaryKeys } from 'variables/dictionary';
import { useI18n } from 'next-localization';

const PageHeaderWithIcon = (props: PageHeaderWithIconProps): JSX.Element => {
  const i18n = useI18n();
  const { params, testId, externalFields } = props;
  const { displayLicenseLink } = params ?? {};

  const linkText = i18n?.t(dictionaryKeys.PAGE_HEADER_LICENSE_TEXT);
  const licenseLinkUrl = i18n?.t(dictionaryKeys.PAGE_HEADER_ANCHOR_LINK);

  const headerTitle = externalFields?.headerTitle;
  const subtitle = externalFields?.subtitle;
  const headerImage = externalFields?.image1x1;
  const headerImagecheck = externalFields?.image1x1?.value?.src;

  return (
<<<<<<< HEAD
    <section className="py-[70px]" data-ref="PageHeaderWithIcon" data-testid={testId}>
=======
    <section className="py-[72px]" data-ref="PageHeaderWithIcon" data-testid={testId}>
>>>>>>> c7764189d03b1090497fe9f1136e92361deabfa2
      <Container px="6">
        <Flex
          direction={{ initial: 'column', sm: 'row' }}
          align={{ initial: 'start', sm: 'center' }}
          justify={{ initial: 'center', sm: 'between' }}
          gap="4"
        >
          <div className="max-w-[970px]">
            <Text field={headerTitle} tag="h1" className="heading-b text-t-primary" />
            <Text field={subtitle} tag="p" className="sub-heading-a mt-4 text-t-body" />
            {displayLicenseLink === '1' && (
              <div className="mt-6 md:mt-8">
                <a
                  href={licenseLinkUrl}
<<<<<<< HEAD
                  className="body-xs !font-medium text-t-body hover:text-t-link-hover"
                >
                  <span className="link-underline">{linkText}</span>
=======
                  className="body-xs !font-medium text-t-primary hover:text-t-link-hover"
                >
                  <span className="underline">{linkText}</span>
>>>>>>> c7764189d03b1090497fe9f1136e92361deabfa2
                </a>
              </div>
            )}
          </div>
          <div className="max-h-[135px] max-w-[135px] ">
<<<<<<< HEAD
            {headerImagecheck && <ImageBase image={headerImage} />}
=======
            {headerImagecheck && <ImageBase animate={false} image={headerImage} />}
>>>>>>> c7764189d03b1090497fe9f1136e92361deabfa2
          </div>
        </Flex>
      </Container>
    </section>
  );
};
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForPageHeader(_layoutData);
};
export default PageHeaderWithIcon;
