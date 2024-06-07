import { useContext } from 'react';
import { getImageProps, ImageProps } from 'next/image';

import { ImageField } from '@sitecore-jss/sitecore-jss-react';
import { ImageOptimizationContext } from 'src/context/ImageOptimization.context';
import { BP_DESKTOP } from 'variables/global';
import { StyleProps } from 'types/Style.props';

// https://nextjs.org/docs/pages/api-reference/components/image#art-direction

type PictureBaseProps = StyleProps & {
  desktopImage: ImageField;
  mobileImage: ImageField;
} & Partial<ImageProps>;

const PictureBase = (props: PictureBaseProps) => {
  const {
    styleClasses,
    fill,
    priority = true,
    sizes = '100vw',
    desktopImage,
    mobileImage,
    style = { objectFit: 'cover' },
    ...rest
  } = props;

  const { unoptimized } = useContext(ImageOptimizationContext);

  const common = {
    fill,
    priority,
    sizes,
    style,
    ...rest,
  } as ImageProps;

  const { srcSet: desktop } = getImageProps({
    ...common,
    ...desktopImage?.value,
    src: desktopImage?.value?.src ?? '',
    unoptimized: unoptimized || desktopImage?.value?.src?.includes('.svg'),
  }).props;

  const { srcSet: mobile, ...mobileRest } = getImageProps({
    ...common,
    ...mobileImage?.value,
    src: mobileImage?.value?.src ?? '',
    unoptimized: unoptimized || desktopImage?.value?.src?.includes('.svg'),
  }).props;

  const desktopMedia = `(min-width: ${BP_DESKTOP}px)`;
  const mobileMedia = `(max-width: ${BP_DESKTOP - 1}px)`;

  return (
    <picture className={styleClasses}>
      <source media={desktopMedia} srcSet={desktop} />
      <source media={mobileMedia} srcSet={mobile} />
      <img alt={(mobileImage?.value as ImageProps)?.alt} {...mobileRest} />
    </picture>
  );
};

export default PictureBase;
