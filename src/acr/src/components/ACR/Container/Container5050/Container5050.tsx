import { Container, Grid, Section } from '@radix-ui/themes';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

import { Container5050Props } from 'components/ACR/Container/Container5050/Container5050.props';
import {
  getContainerPlaceholderProps,
  isContainerPlaceholderEmpty,
} from 'components/ACR/Container/Container.util';
import PlaceholderBase, { PlaceholderBaseProps } from 'components/ACR/Placeholder/PlaceholderBase';
import { twMerge } from 'tailwind-merge';

const Container5050 = (props: Container5050Props): JSX.Element | null => {
  const { rendering, componentFactory, left, right, testId } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const leftPlaceholders = getContainerPlaceholderProps('acr-container-fifty-left', props.params);
  const rightPlaceholders = getContainerPlaceholderProps('acr-container-fifty-right', props.params);

  const isEmptyPlaceholder =
    isContainerPlaceholderEmpty(rendering, leftPlaceholders, left) &&
    isContainerPlaceholderEmpty(rendering, rightPlaceholders, right);

  if (isEmptyPlaceholder && !isPageEditing && !testId) {
    return null;
  }

  const placeholderLeftProps: PlaceholderBaseProps = {
    placeholder: {
      name: leftPlaceholders.dynamicKey,
      rendering,
      componentFactory,
    },
    children: left,
  };

  const placeholderRightProps: PlaceholderBaseProps = {
    placeholder: {
      name: rightPlaceholders.dynamicKey,
      rendering,
      componentFactory,
    },
    children: right,
  };

  return (
    <Section
      pb="0"
      pt="0"
      className={twMerge('mt-[72px] first-of-type:mt-0', props.params.styles)}
      data-ref="container-5050"
      data-testid={testId}
    >
      <Container px="6">
        <Grid className="md:grid-cols-12" gap="6">
          <Container className="*:flex *:flex-col *:gap-12 md:col-start-1 md:col-end-7 @container/column">
            <PlaceholderBase {...placeholderLeftProps} />
          </Container>
          <Container className="*:flex *:flex-col *:gap-12 md:col-start-7 md:col-end-13 @container/column">
            <PlaceholderBase {...placeholderRightProps} />
          </Container>
        </Grid>
      </Container>
    </Section>
  );
};

export default Container5050;
