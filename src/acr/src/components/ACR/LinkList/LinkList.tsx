import { LinkListProps } from 'components/ACR/LinkList/LinkList.props';
import Icon from '../Icon/Icon';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { IconName } from 'src/enumerations/Icon.enum';

import LinkBase from 'components/ACR/Link/LinkBase';

/**
 * ACRAR-271 - Link List
 * @param props
 * @returns
 */
const LinkList = (props: LinkListProps): JSX.Element => {
  const { hasIcon = true, style = ButtonStyle.LINK, fields, testId } = props;
  const { links } = fields ?? {};

  const renderBulletIcon = (): JSX.Element | null => {
    return (
      <Icon
        className={`
          invisible
          absolute
          left-0
          top-10
          inline-block
          h-2.5 
          w-4
          shrink-0
          text-t-link-hover
          duration-300
          ease-in-out

          peer-hover:visible
          peer-hover:left-2

          lg:-left-2
          lg:top-[2.6rem]
          lg:w-5
          lg:peer-hover:left-0
        `}
        iconName={IconName.BULLET}
        isAriaHidden={true}
      />
    );
  };

  return (
    <ul className="columns-md md:block" data-ref="link-list" data-testid={testId}>
      {links.map((link, i) => (
        <li className="relative mb-4 w-full px-8 pt-8" key={i}>
          <LinkBase
            link={link}
            hasIcon={hasIcon}
            style={style}
            styleClasses={
              `
            body-lg
            lg:!title-c
            pb-6
            justify-between
            w-full
            border-b-1
            border-t-body
            peer

            hover:no-underline
          `}
          />
          {renderBulletIcon()}
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
