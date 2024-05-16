import { useContext, useState } from 'react';
import { NextImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageProps } from 'next/image';

import { ImageOptimizationContext } from 'src/context/ImageOptimization.context';

import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

type ImageBaseProps = Partial<ImageProps> & {
  image?: ImageField | null;
  animate?: boolean;
};

const ImageBase = (props: ImageBaseProps) => {
  const { image, animate = true, className, ...rest } = props;

  const src = image?.value?.src;

  if (!src) {
    return <></>;
  }

  const { unoptimized } = useContext(ImageOptimizationContext);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const { ref, inView } = useInView({ triggerOnce: true });

  // SVGs by default should not be optimized
  // https://nextjs.org/docs/pages/api-reference/components/image#dangerouslyallowsvg
  const isSvg = src?.includes('.svg');

  return (
    <div ref={ref} className={cn('relative block max-w-max overflow-hidden', className)}>
      <NextImage
        field={image}
        unoptimized={unoptimized || isSvg}
        onLoad={() => setIsLoaded(true)}
        {...rest}
      />
      {animate && (
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 top-0 block origin-[50%_0] bg-green-100 transition-transform duration-1000',
            { 'scale-y-0': isLoaded && inView }
          )}
        />
      )}
    </div>
  );
};

export default ImageBase;
