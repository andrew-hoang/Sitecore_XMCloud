import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';
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

  const { eyebrowText, title, description, link, image } = fields ?? {};

  // Theme sourced from ContainerFullBleed
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    link?.value.href && router.push(link?.value.href);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.key === 'Enter') {
      link?.value.href && router.push(link?.value.href);
    }
  };

  return (
    <Flex
      data-ref="promo"
      py="32px"
      px="30px"
      justify="between"
      className={twMerge(
        cn(
          `group h-fit flex-col gap-6 border-1 duration-300 ease-in-out hover:cursor-pointer hover:bg-t-secondary focus:bg-t-secondary ${styleClasses}`,
          {
            'bg-indigo-100 text-white ': theme === Theme.WHITE,
            'border-white hover:border-t-secondary hover:text-t-btn-text focus:border-t-secondary focus:text-t-btn-text':
              theme === Theme.PURPLE || theme === Theme.INDIGO,
            'border-black hover:border-t-secondary hover:text-white focus:border-t-secondary focus:text-white':
              theme === Theme.LIGHT_INDIGO,
          }
        )
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      asChild
    >
      <li>
        <Flex direction="column" className="lg:flex-1">
          <Text field={eyebrowText} tag="p" className="body-xs mb-2" />
          <Text field={title} tag="h2" className="title-c mb-4" />
          <Text field={description} tag="p" className="mb-6" />

          {link && (
            <LinkBase
              link={link}
              style={ButtonStyle.CTA}
              styleClasses={cn('group-hover:underline', {
                'text-white hover:text-white focus:text-white': theme === Theme.WHITE,
                'group-hover:text-white group-focus:text-white': theme === Theme.LIGHT_INDIGO,
                'group-hover:text-t-btn-text group-focus:text-t-btn-text':
                  theme === Theme.INDIGO || theme === Theme.PURPLE,
              })}
              iconStyleClasses={cn({
                'group-hover:[&>circle]:fill-white group-hover:[&>circle]:!stroke-white group-hover:[&>path]:!fill-t-secondary group-focus:[&>circle]:fill-white group-focus:[&>circle]:!stroke-white group-focus:[&>path]:!fill-t-secondary':
                  theme === Theme.WHITE || theme === Theme.LIGHT_INDIGO,
                'group-hover:[&>circle]:fill-t-btn-text group-hover:[&>circle]:!stroke-t-btn-text group-hover:[&>path]:!fill-white group-focus:[&>circle]:fill-t-btn-text group-focus:[&>circle]:!stroke-t-btn-text group-focus:[&>path]:!fill-white':
                  theme === Theme.PURPLE || theme === Theme.INDIGO,
              })}
            />
          )}
        </Flex>

        <ImageBase
          image={image}
          animate={false}
          imageClassName="w-full lg:w-auto lg:max-w-[368px]"
        />
      </li>
    </Flex>
  );
};

export default SimplePromo;
