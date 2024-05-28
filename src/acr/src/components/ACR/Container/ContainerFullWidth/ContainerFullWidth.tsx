import { Container, Grid, Section } from '@radix-ui/themes';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ContainerFullWidthProps } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.props';
import PlaceholderBase, { PlaceholderBaseProps } from 'components/ACR/Placeholder/PlaceholderBase';

import { twMerge } from 'tailwind-merge';

const ContainerFullWidth = (props: ContainerFullWidthProps): JSX.Element | null => {
  const { rendering, componentFactory, children, testId } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const PLACEHOLDER_FRAGMENT = 'acr-container-fullwidth';
  const PLACEHOLDER_NAME = `${PLACEHOLDER_FRAGMENT}-${props.params.DynamicPlaceholderId}`;
  const isEmptyPlaceholder =
    !(
      rendering?.placeholders?.[PLACEHOLDER_NAME] ||
      rendering?.placeholders?.[`${PLACEHOLDER_FRAGMENT}-{*}`]
    ) && !children;

  if (isEmptyPlaceholder && !isPageEditing && !testId) {
    return null;
  }

  const placeholderProps: PlaceholderBaseProps = {
    placeholder: {
      name: PLACEHOLDER_NAME,
      rendering,
      componentFactory,
    },
    children,
  };

  return (
    <Section
      pt="0"
      pb="0"
      className={twMerge('mt-[72px] first-of-type:mt-0', props.params.styles)}
      data-ref="container-full-width"
      data-testid={testId}
    >
      <Container px="6">
        <Grid className="md:grid-cols-12" gap="6">
          <Container className="*:flex *:flex-col *:gap-12 md:col-start-1 md:col-end-13">
            <PlaceholderBase {...placeholderProps} />
          </Container>
        </Grid>
      </Container>
    </Section>
  );
};

export default ContainerFullWidth;
