import { useContext } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

import { TextCardProps } from './TextCards.props';
import { ThemeContext } from 'src/context/Theme.context';
import { Theme } from 'src/enumerations/Theme.enum';
import { Orientation } from 'src/enumerations/Orientation.enum';

import ImageBase from '../Image/ImageBase';
import { Flex } from '@radix-ui/themes';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

const TextCard = (props: TextCardProps): JSX.Element => {
  const { fields, params } = props;

  const { image, description, anchorId } = fields ?? {};
  const { orientation } = params ?? {};

  const { theme = Theme.WHITE } = useContext(ThemeContext);

  const bgWhite = theme === Theme.LIGHT_INDIGO || theme === Theme.PURPLE;
  const bgLightIndigo = theme === Theme.WHITE || theme === Theme.INDIGO;

  return (
    <Flex
      id={anchorId?.value}
      data-ref="text-card"
      align="center"
      data-theme={bgLightIndigo ? Theme.LIGHT_INDIGO : Theme.WHITE}
      className={twMerge(
        cn(
<<<<<<< HEAD
          'flex-col gap-6 rounded-[4px] px-5 py-6 text-t-body md:min-h-[168px] md:flex-row md:gap-[35px]',
=======
          'flex-col justify-center gap-6 rounded-[4px] px-5 py-6 text-t-body md:min-h-[168px] md:flex-row md:justify-start md:gap-[35px]',
>>>>>>> c7764189d03b1090497fe9f1136e92361deabfa2
          {
            'md:flex-row': orientation === Orientation.IMAGE_LEFT,
            'md:flex-row-reverse': orientation === Orientation.IMAGE_RIGHT,
            'bg-white': bgWhite,
            'bg-indigo-25': bgLightIndigo,
          }
        )
      )}
<<<<<<< HEAD
      justify={{ initial: 'center', md: 'between' }}
    >
      <ImageBase image={image} animate={false} className="shrink-0" />
=======
    >
      <ImageBase
        image={image}
        animate={false}
        className="shrink-0 [&>img]:max-h-[120px] [&>img]:w-auto [&>img]:object-contain"
      />
>>>>>>> c7764189d03b1090497fe9f1136e92361deabfa2
      <Text field={description} tag="p" />
    </Flex>
  );
};

export default TextCard;
