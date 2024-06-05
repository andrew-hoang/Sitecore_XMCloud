'use client';

import { useContext, useState } from 'react';
import { NextImage, ImageField, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageProps } from 'next/image';

import { ImageOptimizationContext } from 'src/context/ImageOptimization.context';

import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

type ImageBaseProps = Partial<ImageProps> & {
  image?: ImageField | null;
  imageClassName?: string;
  animate?: boolean;
};

const ImageBase = (props: ImageBaseProps) => {
  const { image, animate = true, className, imageClassName, ...rest } = props;

  const src = image?.value?.src;

  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const { unoptimized } = useContext(ImageOptimizationContext);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  if (!src) {
    return <></>;
  }

  // SVGs by default should not be optimized
  // https://nextjs.org/docs/pages/api-reference/components/image#dangerouslyallowsvg
  const isSvg = src?.includes('.svg');

  return (
    <div
      ref={ref}
      className={cn(
        'block',
        { 'reveal-image': animate },
        { 'reveal-image--in-view': (animate && isLoaded && inView) || isPageEditing },
        className
      )}
    >
      <NextImage
        field={image}
        unoptimized={unoptimized || isSvg}
        onLoad={() => setIsLoaded(true)}
        {...rest}
        className={imageClassName}
      />
    </div>
  );
};

export default ImageBase;
