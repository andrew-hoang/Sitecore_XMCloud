import { useContext } from 'react';
import { LinkListProps } from 'components/ACR/LinkList/LinkList.props';
import Icon from '../Icon/Icon';

import { Theme } from 'src/enumerations/Theme.enum';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { IconName } from 'src/enumerations/Icon.enum';
import { ThemeContext } from 'src/context/Theme.context';

import LinkBase from 'components/ACR/Link/LinkBase';

import cn from 'classnames';

/**
 * ACRAR-271 - Link List
 * @param props
 * @returns
 */
const LinkList = (props: LinkListProps): JSX.Element => {
  const { hasIcon = true, style = ButtonStyle.LINK, fields, testId, } = props;
  const { links, } = fields ?? {};

  // Theme sourced from ContainerFullBleed
  const { theme } = useContext(ThemeContext);

  const textWhite = theme === Theme.INDIGO || theme === Theme.PURPLE;
  const textBlack = theme === Theme.WHITE || theme === Theme.LIGHT_INDIGO;

  const renderBulletIcon = (): JSX.Element | null => {
    return (
      <Icon
        className={`
          shrink-0
          absolute
          invisible
          top-10
          left-0
          inline-block 
          text-t-link-hover
          ease-in-out
          duration-300
          w-4
          h-2.5

          peer-hover:visible
          peer-hover:left-2

          lg:w-5
          lg:top-[2.6rem]
          lg:-left-2
          lg:peer-hover:left-0
        `}
        iconName={IconName.BULLET}
        isAriaHidden={true}
      />
    );
  };

  return (
    <ul className='md:block columns-md' data-ref='link-list' data-testid={testId}>
      {links.map((link, i) => (
        <li className='px-8 pt-8 mb-4 w-full relative' key={i}>
          <LinkBase link={link} hasIcon={hasIcon} style={style} shrinkIcon={false} styleClasses={cn(`
            body-lg
            lg:!title-c
            pb-6
            justify-between
            w-full
            border-b-1
            border-current
            peer

            hover:no-underline
          `, {
            'hover:border-black': textBlack,
            'hover:border-white': textWhite
          })}/>
          {renderBulletIcon()}
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
 