import { Flex } from '@radix-ui/themes';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithImageProps } from 'components/ACR/PageHeaderWithImage/PageHeaderWithImage.props';

import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { getStaticPropsForPageHeader } from '../PageHeader/PageHeader.util';

import { Orientation } from 'src/enumerations/Orientation.enum';

const PageHeaderWithImage = (props: PageHeaderWithImageProps): JSX.Element => {
  const { params, testId } = props;
  const { orientation } = params ?? {};

  const contentTypeField = props?.externalFields?.contentType;
  const contentTypeFieldvalue = contentTypeField?.name ?? '';
  const headerTitle = props?.externalFields?.headerTitle;
  const subtitle = props?.externalFields?.subtitle;

  const headerImage = props?.externalFields?.image1x1;
  const headerImagecheck = props?.externalFields?.image1x1?.value?.src;

  const imageleft = orientation === Orientation.IMAGE_LEFT;
  const imageRight = orientation === Orientation.IMAGE_RIGHT;

  return (
    <div className="relative overflow-hidden" data-ref="PageHeaderWithImage" data-testid={testId}>
      {headerImage && (
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${headerImage})` }}
        />
      )}
      <Flex className="relative flex-col items-start justify-between gap-5 px-8 py-12 md:flex-row md:items-center md:gap-9 md:px-16">
        {imageleft && headerImagecheck && (
          <div className="h-32 w-32 flex-shrink-0 md:h-48 md:w-48">
            <Image field={headerImage} alt="Header Image" className="h-full w-full object-cover" />
          </div>
        )}
        <Flex direction="column" gap="4" width={{ initial: 'auto', md: '770px' }}>
          <h3 className="body-xs">{contentTypeFieldvalue}</h3>
          <Text field={headerTitle} tag="h2" className="heading-d" />
          <Text field={subtitle} tag="p" />
        </Flex>
        {imageRight && headerImagecheck && (
          <div className="h-32 w-32 flex-shrink-0 md:h-48 md:w-48">
            <Image field={headerImage} alt="Header Image" className="h-full w-full object-cover" />
          </div>
        )}
      </Flex>
    </div>
  );
};
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForPageHeader(_layoutData);
};
export default PageHeaderWithImage;
