import { Container, Grid, Section } from '@radix-ui/themes';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Container70Props } from 'components/ACR/Container/Container70/Container70.props';
import PlaceholderBase, { PlaceholderBaseProps } from 'components/ACR/Placeholder/PlaceholderBase';
import { twMerge } from 'tailwind-merge';

const Container70 = (props: Container70Props): JSX.Element | null => {
  const { rendering, componentFactory, children, testId } = props;

  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const PLACEHOLDER_FRAGMENT = 'acr-container-contentwell';
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
      pb="0"
      pt="0"
      className={twMerge('mt-[72px] first-of-type:mt-0', props.params.styles)}
      data-ref="container-70"
      data-testid={testId}
    >
      <Container px="6">
        <Grid className="md:grid-cols-12" gap="6">
          <Container className=" *:flex *:flex-col *:gap-12 md:col-start-3 md:col-end-11">
            <PlaceholderBase {...placeholderProps} />
          </Container>
        </Grid>
      </Container>
    </Section>
  );
};

export default Container70;
