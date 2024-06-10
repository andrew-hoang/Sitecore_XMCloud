<<<<<<< HEAD
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { MultiPromoProps } from 'components/ACR/MultiPromo/MultiPromo.props';

import { getStaticPropsForMultiPromo } from 'components/ACR/MultiPromo/MultiPromo.util';

const MultiPromo = (props: MultiPromoProps): JSX.Element => {
  const { fields, testId } = props;

  const { heading } = fields ?? {};

  return (
    <div data-ref="multi-promo" data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The MultiPromo Component</p>
    </div>
  );
};

/**
 * "Data" developer method
 * TODO_SCAFFOLD_BE: If "getStaticProps" was deleted remove "useComponentProps". They work together.
 * TODO_SCAFFOLD_BE: Populate if needed, remove if not
 * Will be called during SSG.  Do NOT return null.
 * @param {ComponentRendering} _rendering
 * @param {LayoutServiceData} _layoutData
 * @param {GetStaticPropsContext} _context
 */
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForMultiPromo(_rendering, _layoutData);
};

export default MultiPromo;
=======
import {
  Placeholder,
  // Text,
  useSitecoreContext,
  withPlaceholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Flex, Grid } from '@radix-ui/themes';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import cn from 'classnames';

import LinkBase from '../Link/LinkBase';
import SimplePromo from './SimplePromo';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { MultiPromoProps, SimplePromoProps } from 'components/ACR/MultiPromo/MultiPromo.props';

const MultiPromo = (props: MultiPromoProps): JSX.Element => {
  const { fields, promos, testId } = props;
  const { heading, description, link } = fields ?? {};

  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const phKey = `acr-multi-promo-${props.params.DynamicPlaceholderId}`;

  const renderSimplePromo = (promo: React.Component<SimplePromoProps>, index: number) => {
    switch (promos.length) {
      case 2:
        return (
          <SimplePromo
            key={index}
            {...promo?.props}
            styleClasses={cn({
              'md:col-span-8 md:flex-row gap-[30px]': index === 0,
              'md:col-span-4': index > 0,
            })}
          />
        );
      case 3:
        return (
          <SimplePromo key={index} {...promo?.props} styleClasses="md:col-span-6 lg:col-span-4" />
        );
      case 4:
        return (
          <SimplePromo
            key={index}
            {...promo?.props}
            styleClasses={cn({
              'md:col-span-12 lg:col-span-8 md:flex-row gap-[30px]': index === 0 || index === 3,
              'md:col-span-6 lg:col-span-4': index === 1 || index === 2,
            })}
          />
        );
      case 5:
        return (
          <SimplePromo
            key={index}
            {...promo?.props}
            styleClasses={cn({
              'md:col-span-12 lg:col-span-8 lg:flex-row gap-[30px]': index === 0,
              'md:col-span-6 lg:col-span-4': index > 0,
            })}
          />
        );
      case 6:
        return (
          <SimplePromo
            key={index}
            {...promo?.props}
            styleClasses={cn('md:col-span-6', {
              'lg:col-span-8 lg:flex-row gap-[30px]': index === 0,
              'lg:col-span-4': index === 1,
              'lg:col-span-3 lg:row-start-2': index >= 2,
            })}
          />
        );
      case 7:
        return (
          <SimplePromo
            key={index}
            {...promo?.props}
            styleClasses={cn('md:col-span-6', {
              'lg:col-span-4': index <= 2,
              'lg:col-span-3 lg:row-start-2': index >= 3,
            })}
          />
        );
      default:
        return;
    }
  };

  return (
    <Flex data-ref="multi-promo" data-testid={testId} direction="column" gap="6">
      <div>
        <Text field={heading} tag="h2" className="heading-c text-t-primary" />
        <Text field={description} tag="p" className="mb-8 mt-6 fill-t-btn-text" />
        {link && <LinkBase link={link} style={ButtonStyle.CTA} />}
      </div>

      {!isPageEditing && (
        <Grid gap="6" className="grid-cols-1 md:grid-cols-12" asChild>
          <ul>
            {promos?.map((promo: React.Component<SimplePromoProps>, index) => {
              return renderSimplePromo(promo, index);
            })}
          </ul>
        </Grid>
      )}

      {isPageEditing && <Placeholder name={phKey} rendering={props.rendering} />}
    </Flex>
  );
};

export default withPlaceholder({
  placeholder: 'acr-multi-promo-{*}',
  prop: 'promos',
})(MultiPromo);
>>>>>>> origin/release1.0
