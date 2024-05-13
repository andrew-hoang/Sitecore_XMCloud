import { Text } from '@sitecore-jss/sitecore-jss-react';

import { ImageProps } from 'components/ACR/Image/Image.props';

import ImageBase from 'components/ACR/Image/ImageBase';

const ImageBlock = (props: ImageProps): JSX.Element => {
  const { fields, testId } = props;

  const { title, image, caption } = fields ?? {};

  return (
    <div data-ref="image" data-testid={testId}>
      <Text tag="p" field={title} className="heading-c mb-4 md:mb-8" />
      <ImageBase image={image} className="mb-4 aspect-video h-auto w-full object-cover" />
      <Text tag="p" field={caption} className="body-xs text-t-caption" />
    </div>
  );
};

export default ImageBlock;
