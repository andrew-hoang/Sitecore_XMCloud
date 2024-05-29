import cn from "classnames";
import LinkBase from "../../Link/LinkBase";
import Icon from "../../Icon/Icon";

import { SocialLink } from "./FooterSocialIcon.props";
import { ButtonStyle } from "src/enumerations/ButtonStyle.enum";

const FooterSocialIcon = (props: SocialLink) => {
  const { link, socialIcon, iconClassName } = props;

  if (!link || !socialIcon) {
    return null;
  }

  return (
    <LinkBase
      link={link}
      style={ButtonStyle.LINK}
    >
      <Icon iconName={socialIcon} className={cn(iconClassName)} />
    </LinkBase>
  )
};

export default FooterSocialIcon