import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import LinkBase from '../Link/LinkBase';
import { FooterLinkItemProps } from './GlobalFooter.props';

const FooterLink = (props: FooterLinkItemProps) => {
  const { fields } = props ?? {};
  return (
    <LinkBase
      styleClasses='body-xs'
      link={fields?.link}
      style={ButtonStyle.STATIC_LINK}
    />
  );
};

export default FooterLink;
