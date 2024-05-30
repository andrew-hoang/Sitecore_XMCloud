import { Flex } from '@radix-ui/themes';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithImageProps } from 'components/ACR/PageHeaderWithImage/PageHeaderWithImage.props';

import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { getStaticPropsForPageHeader } from '../PageHeader/PageHeader.util';

import { Orientation } from 'src/enumerations/Orientation.enum';
import cn from 'classnames';

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

  // TODO - adjust top padding / transition to match Global Header height.
  return (
    <section
      className="relative -translate-y-[176px] overflow-hidden px-[30px] pt-[176px] md:px-0"
      data-ref="PageHeaderWithImage"
      data-testid={testId}
    >
      {headerImage && (
        <div className="absolute inset-0 z-auto opacity-20">
          <Image field={headerImage} alt="" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="relative z-10 items-center gap-[30px] md:grid md:grid-cols-[1fr_repeat(12,minmax(auto,_70px))_1fr]">
        {imageleft && headerImagecheck && (
          <div className="col-span-6 col-start-1">
            <Image field={headerImage} alt="Header Image" className="h-full w-full object-cover" />
          </div>
        )}
        <Flex
          direction="column"
          gap="4"
          className={cn('col-span-7 py-14 md:py-[70px]', {
            'col-start-2': !imageleft,
            'col-start-7': imageleft,
          })}
        >
          {contentTypeFieldvalue && <p className="meta-c">{contentTypeFieldvalue}</p>}
          <Text field={headerTitle} tag="h1" className="heading-c text-t-primary" />
          <Text field={subtitle} tag="p" />
        </Flex>
        {!imageleft && headerImagecheck && (
          <div className="col-span-6 col-start-9 self-end">
            <Image field={headerImage} className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
};
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForPageHeader(_layoutData);
};
export default PageHeaderWithImage;
