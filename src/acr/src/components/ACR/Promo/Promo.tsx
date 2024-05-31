import { Flex } from '@radix-ui/themes';
import { Grid } from '@radix-ui/themes';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { PromoProps } from 'components/ACR/Promo/Promo.props';

import LinkBase from '../Link/LinkBase';
import ImageBase from '../Image/ImageBase';

import { Orientation } from 'src/enumerations/Orientation.enum';

import cn from 'classnames';

const Promo = (props: PromoProps): JSX.Element => {
  const { fields, testId, params } = props;

  const { eyebrowText, title, titleHighlight, description, primaryLink, secondaryLink, image } =
    fields ?? {};

  const { orientation } = params ?? {};

  return (
    <Grid
      data-testid={testId}
      data-ref="promo"
      gap="6"
      className="grid-cols-1 @5xl/column:grid-cols-2"
    >
      <Flex direction="column" justify="center">
        <Text field={eyebrowText} tag="p" className="body-xs mb-4 text-t-primary" />
        <Text field={title} tag="h2" className="heading-c text-t-primary" />
        <Text field={titleHighlight} tag="h2" className="heading-c-serif" />
        <Text field={description} tag="p" className="mb-8 mt-6" />

        <Flex
          direction={{ initial: 'column', md: 'row' }}
          align={{ initial: 'start', md: 'center' }}
          gap="4"
        >
          {primaryLink && (
            <LinkBase link={primaryLink} style={ButtonStyle.BUTTON} hasIcon={!secondaryLink} />
          )}
          {secondaryLink && <LinkBase link={secondaryLink} style={ButtonStyle.CTA} />}
        </Flex>
      </Flex>

      <ImageBase
        image={image}
        className={cn({ '@5xl/column:order-first': orientation === Orientation.IMAGE_LEFT })}
      />
    </Grid>
  );
};

export default Promo;
