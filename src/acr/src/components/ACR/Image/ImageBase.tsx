import { NextImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageProps } from 'next/image';
import { useContext } from 'react';
import { ImageOptimizationContext } from 'src/context/ImageOptimization.context';

type ImageBaseProps = Partial<ImageProps> & {
  image?: ImageField | null;
};

const ImageBase = (props: ImageBaseProps) => {
  const { image, className, ...rest } = props;

  const src = image?.value?.src;

  if (!src) {
    return <></>;
  }

  const { unoptimized } = useContext(ImageOptimizationContext);

  // SVGs by default should not be optimized
  // https://nextjs.org/docs/pages/api-reference/components/image#dangerouslyallowsvg
  const isSvg = src?.includes('.svg');

  return (
    <NextImage field={image} className={className} unoptimized={unoptimized || isSvg} {...rest} />
  );
};

export default ImageBase;
