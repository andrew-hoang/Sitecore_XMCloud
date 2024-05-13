import { useContext } from 'react';
import { Flex } from '@radix-ui/themes';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { TextBannerProps } from 'components/ACR/TextBanner/TextBanner.props';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';

import LinkBase from 'components/ACR/Link/LinkBase';

import cn from 'classnames';

/**
 * ACRAR-134 - Text Banner
 * @param props
 * @returns
 */
const TextBanner = (props: TextBannerProps): JSX.Element => {
  const { fields, testId } = props;

  const { title, description, link } = fields ?? {};

  // Theme sourced from ContainerFullBleed
  const { theme } = useContext(ThemeContext);

  const bgWhite = theme === Theme.LIGHT_INDIGO || theme === Theme.PURPLE;
  const bgLightIndigo = theme === Theme.WHITE || theme === Theme.INDIGO;

  return (
    <Flex
      className={cn('body-sm rounded-4 text-indigo-100', {
        'bg-white': bgWhite,
        'bg-indigo-25': bgLightIndigo,
      })}
      data-ref="text-banner"
      data-testid={testId}
      data-theme={bgLightIndigo ? Theme.LIGHT_INDIGO : Theme.WHITE} // Theme targets component's link style
      py="48px"
      px={{ initial: '30px', md: '65px' }}
      gap={{ initial: '5', md: '9' }}
      direction={{ initial: 'column', md: 'row' }}
      align={{ initial: 'start', md: 'center' }}
      justify="between"
    >
      <Flex direction="column" gap="4" width={{ initial: 'auto', md: '770px' }}>
        <Text field={title} tag="h2" className="heading-d" />
        <Text field={description} tag="p" />
      </Flex>
      {link && <LinkBase link={link} style={ButtonStyle.CTA} styleClasses="shrink-0" />}
    </Flex>
  );
};

export default TextBanner;
