import React from 'react';
import { Placeholder, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { AccordionProps, AccordionRowProps } from 'components/ACR/Accordion/Accordion.props';
import AccordionRow from 'components/ACR/Accordion/AccordionRow';
import { useSitecoreContext, withPlaceholder } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageBase from '../Image/ImageBase';
import LinkBase from 'components/ACR/Link/LinkBase';

const Accordion = (props: AccordionProps): JSX.Element => {
  const { testId, items, fields } = props;
  const { sitecoreContext } = useSitecoreContext();
  const { title, titleHighlight, description, link, accentImage } = fields ?? {};
  const isPageEditing = sitecoreContext?.pageEditing ?? false;
  const PLACEHOLDER_FRAGMENT = 'acr-accordion';
  const PLACEHOLDER_NAME = `${PLACEHOLDER_FRAGMENT}-${props.params.DynamicPlaceholderId}`;

  return (
    <div className="accordion" data-ref="accordion" data-testid={testId}>
      <Text tag="h2" field={title} className="heading-c text-t-primary" />
      <Text tag="p" field={titleHighlight} className="sub-heading-b" />
      <Text tag="p" field={description} className="sub-heading-b" />
      {link && <LinkBase link={link} styleClasses="shrink-0" />}
      <ImageBase image={accentImage} animate={false} className="shrink-0" />
      {!isPageEditing &&
        items?.map((item: React.Component<AccordionRowProps>, index) => (
          <AccordionRow key={index} {...item?.props} />
        ))}
      {isPageEditing && <Placeholder name={PLACEHOLDER_NAME} rendering={props.rendering} />}
    </div>
  );
};

export default withPlaceholder({
  placeholder: 'acr-accordion-{*}',
  prop: 'items',
})(Accordion);
