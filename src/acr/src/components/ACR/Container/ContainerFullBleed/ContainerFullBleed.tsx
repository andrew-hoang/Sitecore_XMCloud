import { Section } from '@radix-ui/themes';

import { ContainerFullBleedProps } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.props';
import PlaceholderBase, { PlaceholderBaseProps } from 'components/ACR/Placeholder/PlaceholderBase';

import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

const ContainerFullBleed = (props: ContainerFullBleedProps): JSX.Element => {
  const { rendering, params, componentFactory, children, testId } = props;

  const { excludeTopMargin, theme } = params ?? {};

  const PLACEHOLDER_NAME = `acr-container-fullbleed-${props.params.DynamicPlaceholderId}`;

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
      data-theme={theme}
      className={twMerge(
        cn('bg-t-background py-[72px] text-t-body', { 'pt-0': excludeTopMargin === '1' }),
        props.params.styles
      )}
      data-testid={testId}
    >
      <PlaceholderBase {...placeholderProps} />
    </Section>
  );
};

export default ContainerFullBleed;
