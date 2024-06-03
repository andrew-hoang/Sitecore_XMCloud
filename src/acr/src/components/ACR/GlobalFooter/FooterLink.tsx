import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import LinkBase from '../Link/LinkBase';
import { FooterLinkItemProps } from './GlobalFooter.props';
import cn from 'classnames';

const FooterLink = (props: FooterLinkItemProps) => {
  const { fields } = props ?? {};
  return (
    <LinkBase
      styleClasses={cn({ 'body-xs': false })}
      link={fields?.link}
      style={ButtonStyle.LINK}
    />
  );
};

export default FooterLink;
