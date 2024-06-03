import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router'
import { Flex } from '@radix-ui/themes';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';
import { useContext } from 'react';

import { SimplePromoProps } from './MultiPromo.props';

import ImageBase from '../Image/ImageBase';
import LinkBase from '../Link/LinkBase';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';

const SimplePromo = (props: SimplePromoProps): JSX.Element => {
  const { fields, styleClasses } = props;

  const { eyebrowText, title, description, link, image } =
    fields ?? {};

  // Theme sourced from ContainerFullBleed
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(link?.value.href);
  };

  const handleKeyDown = (e: any) => {
    e.preventDefault();

    if (e.key === "Enter") {
      router.push(link?.value.href);
    }
  };

  return (
    <Flex
      data-ref="promo"
      py="32px"
      px="30px"
      justify="between"
      className={twMerge(cn(`group focus:ring h-fit flex-col gap-6 border-1 duration-300 ease-in-out hover:cursor-pointer hover:bg-t-secondary ${styleClasses}`, {
        'bg-indigo-100 text-white ': theme === Theme.WHITE,
        'border-white hover:border-t-secondary hover:text-t-btn-text': theme === Theme.PURPLE || theme === Theme.INDIGO,
        'border-black hover:border-t-secondary hover:text-white': theme === Theme.LIGHT_INDIGO,
      }))}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
    >
      <Flex direction="column" className="lg:flex-1">
        <Text field={eyebrowText} tag="p" className="body-xs mb-4" />
        <Text field={title} tag="h2" className="title-c mb-4" />
        <Text field={description} tag="p" className="mb-6" />

        {link && <LinkBase link={link} style={ButtonStyle.CTA} styleClasses={cn({
          "text-white hover:text-white": theme === Theme.WHITE,
          "group-hover:text-t-btn-text": theme === Theme.INDIGO || theme === Theme.PURPLE,
        })} />}
      </Flex>

      <ImageBase
        image={image}
        animate={false}
      />
    </Flex>
  );
};

export default SimplePromo;

