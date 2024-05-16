import { Text } from '@sitecore-jss/sitecore-jss-react';

import { ImageProps } from 'components/ACR/Image/Image.props';

import ImageBase from 'components/ACR/Image/ImageBase';

const ImageBlock = (props: ImageProps): JSX.Element => {
  const { fields, testId } = props;

  const { title, image, caption } = fields ?? {};

  return (
    <figure data-ref="image" data-testid={testId}>
      <Text tag="p" field={title} className="heading-c mb-4 md:mb-8" />
      <ImageBase image={image} className="mb-4" sizes="(min-width: 1230px) 1170px, 100vw" />
      <Text tag="figcaption" field={caption} className="body-xs text-t-caption" />
    </figure>
  );
};

export default ImageBlock;
