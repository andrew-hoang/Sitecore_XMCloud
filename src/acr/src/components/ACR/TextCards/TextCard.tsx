import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

import { TextCardProps } from './TextCards.props';

import ImageBase from '../Image/ImageBase';
import { Flex } from '@radix-ui/themes';

import cn from 'classnames';
import { Orientation } from 'src/enumerations/Orientation.enum';
import { twMerge } from 'tailwind-merge';

const TextCard = (props: TextCardProps): JSX.Element => {
  const { fields, params } = props;

  const { image, description, anchorId } = fields ?? {};
  const { orientation } = params ?? {};

  return (
    <Flex
      id={anchorId?.value}
      data-ref="text-card"
      align="center"
      className={twMerge(
        cn(
          'flex-col gap-6 rounded-[4px] bg-white px-5 py-6 md:min-h-[168px] md:flex-row md:gap-[35px]',
          {
            'md:flex-row': orientation === Orientation.IMAGE_LEFT,
            'md:flex-row-reverse': orientation === Orientation.IMAGE_RIGHT,
          }
        )
      )}
      justify={{ initial: 'center', md: 'between' }}
    >
      <ImageBase image={image} animate={false} className="shrink-0" />
      <Text field={description} tag="p" />
    </Flex>
  );
};

export default TextCard;
