import { RichText as SitecoreRichText } from '@sitecore-jss/sitecore-jss-react';
import cn from 'classnames';

import { RichTextProps } from 'components/ACR/RichText/RichText.props';

const RichText = (props: RichTextProps): JSX.Element => {
  const { fields, testId } = props;

  const { text1, text2 } = fields ?? {};

  const isTwoColumn = text1?.value && text2?.value;

  return (
    <div
      data-ref="rich-text"
      data-testid={testId}
      className={cn({
        'gap-6 md:grid-cols-12': isTwoColumn,
      })}
    >
      <SitecoreRichText
        field={text1}
        className={cn({
          '*:flex *:flex-col *:gap-12 md:col-start-1 md:col-end-7': isTwoColumn,
        })}
      />
      <SitecoreRichText
        field={text2}
        className={cn({
          '*:flex *:flex-col *:gap-12 md:col-start-1 md:col-end-7': isTwoColumn,
        })}
      />
    </div>
  );
};

export default RichText;
