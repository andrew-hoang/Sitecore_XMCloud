import { useContext } from 'react';
import { LinkListProps } from 'components/ACR/LinkList/LinkList.props';

import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';

import LinkBase from 'components/ACR/Link/LinkBase';

import cn from 'classnames';

/**
 * ACRAR-271 - Link List
 * @param props
 * @returns
 */
const LinkList = (props: LinkListProps): JSX.Element => {
  const { hasIcon, style, fields, testId, isInHalfWidthContainer } = props;
  const { links, } = fields ?? {};

  // Theme sourced from ContainerFullBleed
  const { theme } = useContext(ThemeContext);

  const textWhite = theme === Theme.INDIGO || theme === Theme.PURPLE;
  const textIndigo = theme === Theme.WHITE || theme === Theme.LIGHT_INDIGO;

  return (
    <ul className={cn('md:block', {'md:columns-2': !isInHalfWidthContainer, 'md:columns-1': isInHalfWidthContainer})} data-ref='link-list' data-testid={testId}>
      {links.map((link) => (
        <li className='px-8 pt-8 mb-4 w-full'>
          <LinkBase link={link} hasIcon={hasIcon} style={style} shrinkIcon={false} hasBulletIcon styleClasses={cn(`
            body-md
            md:!title-c
            pb-6
            justify-between
            w-full
            border-b-1
            border-current
            relative

            hover:no-underline
          `, {
            'text-indigo': textIndigo,
            'text-white': textWhite,
            'hover:border-black': textIndigo,
            'hover:border-white': textWhite
          })}/>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
 