import { RichText as JssRichText } from '@sitecore-jss/sitecore-jss-react';

import { RichTextProps } from 'components/ACR/RichText/RichText.props';

const RichText = (props: RichTextProps): JSX.Element => {
  const { fields, testId } = props;

  const { text } = fields ?? {};

  return (
    <div data-ref="rich-text" data-testid={testId}>
      <p>The RichText Component</p>
      <JssRichText field={text} />
    </div>
  );
};

export default RichText;
