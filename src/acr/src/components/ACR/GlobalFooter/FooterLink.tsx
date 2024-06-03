import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import LinkBase from '../Link/LinkBase';
import { FooterLinkItemProps } from './GlobalFooter.props';
import cn from 'classnames';

const FooterLink = (props: FooterLinkItemProps) => {
  const { fields, rowId } = props ?? {};
  console.log('props: ', props);
  return (
    <LinkBase
      styleClasses={cn({ 'body-xs': rowId === '2' })}
      link={fields?.link}
      style={rowId === '2' ? ButtonStyle.STATIC_LINK : ButtonStyle.LINK}
    />
  );
};

export default FooterLink;
