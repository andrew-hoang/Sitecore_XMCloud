import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { AccordionRowProps } from 'components/ACR/Accordion/Accordion.props';

const AccordionRow = (props: AccordionRowProps) => {
  const { fields } = props;
  const { title, content } = fields ?? {};
  return (
    <div className="accordion-row">
      <Text tag="p" field={title} className="sub-heading-b" />
      <Text tag="p" field={content} className="sub-heading-b" />
    </div>
  );
};

export default AccordionRow;
