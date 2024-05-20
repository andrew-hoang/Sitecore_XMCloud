import { Text } from '@sitecore-jss/sitecore-jss-react';

import { RichTextProps } from 'components/ACR/RichText/RichText.props';

const RichText = (props: RichTextProps): JSX.Element => {
  const { fields, testId } = props;

  const { heading } = fields ?? {};

  return (
    <div data-ref="rich-text" data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The RichText Component</p>
    </div>
  );
};

export default RichText;
