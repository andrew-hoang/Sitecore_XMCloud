import { Container, Grid, Section } from '@radix-ui/themes';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

import { Container7030Props } from 'components/ACR/Container/Container7030/Container7030.props';
import {
  getContainerPlaceholderProps,
  isContainerPlaceholderEmpty,
} from 'components/ACR/Container/Container.util';
import PlaceholderBase, { PlaceholderBaseProps } from 'components/ACR/Placeholder/PlaceholderBase';

import { twMerge } from 'tailwind-merge';

const Container7030 = (props: Container7030Props): JSX.Element | null => {
  const { rendering, componentFactory, left, right, testId } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const leftPlaceholders = getContainerPlaceholderProps('acr-container-70-left', props.params);
  const rightPlaceholders = getContainerPlaceholderProps('acr-container-30-right', props.params);

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
      data-testid={testId}
    >
      <Container px="6">
        <Grid className="md:grid-cols-12" gap="6">
          <Container className="md:col-start-1 md:col-end-9">
            <PlaceholderBase {...placeholderLeftProps} />
          </Container>
          <Container className="md:col-start-9 md:col-end-13">
            <PlaceholderBase {...placeholderRightProps} />
          </Container>
        </Grid>
      </Container>
    </Section>
  );
};

export default Container7030;
