import cn from 'classnames';
import LinkBase from '../../Link/LinkBase';
import Icon from '../../Icon/Icon';

import { SocialLink } from './FooterSocialIcon.props';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

const FooterSocialIcon = (props: SocialLink) => {
  const { fields, iconClassName } = props;
  const { link, socialIcon } = fields ?? {};
  if (!link || !socialIcon) {
    return null;
  }

  return (
    <LinkBase
      link={link}
      style={ButtonStyle.LINK}
      spanStyleClasses="link-no-underline"
      ariaProps={{ 'aria-label': socialIcon?.fields?.Value?.value }}
      hideExternalIcon
    >
      <Icon iconName={socialIcon?.fields?.Value?.value} className={cn(iconClassName)} />
    </LinkBase>
  );
};

export default FooterSocialIcon;
