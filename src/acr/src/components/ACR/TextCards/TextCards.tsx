import {
  Placeholder,
  Text,
  useSitecoreContext,
  withPlaceholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { TextCardsProps, TextCardProps } from 'components/ACR/TextCards/TextCards.props';

import TextCard from './TextCard';
import { Flex } from '@radix-ui/themes';

/**
 * ACRAR-285 - Text Cards
 * @param props
 * @returns
 */
const TextCards = (props: TextCardsProps): JSX.Element => {
  const { fields, items, testId } = props;

  const { title, description } = fields ?? {};

  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const phKey = `acr-container-text-cards-${props.params.DynamicPlaceholderId}`;

  return (
    <div data-ref="text-cards" data-testid={testId}>
      <Flex gap="4" direction="column" className="mb-8 text-center md:mb-12">
        <Text tag="h2" field={title} className="heading-c text-t-primary" />
        <Text tag="p" field={description} className="sub-heading-b" />
      </Flex>
      <Flex direction="column" gap="4">
        {!isPageEditing &&
          items?.map((item: React.Component<TextCardProps>, index) => (
            <TextCard key={index} {...item?.props} />
          ))}
      </Flex>
      {isPageEditing && <Placeholder name={phKey} rendering={props.rendering} />}
    </div>
  );
};

export default withPlaceholder({
  placeholder: 'acr-container-text-cards-{*}',
  prop: 'items',
})(TextCards);
