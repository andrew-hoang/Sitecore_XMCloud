import { LinkBaseProps } from './Link.props';
import { Link, LinkField } from '@sitecore-jss/sitecore-jss-react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

import Icon from '../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';

import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

/**
 * ACRAR-333
 * @param props The UI data coming from the parent component
 * @returns
 */
const LinkBase = (props: LinkBaseProps): JSX.Element | null => {
  const { link, testId, styleClasses, style = ButtonStyle.BUTTON, hasIcon, shrinkIcon, hasBulletIcon } = props;

  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const linkText = link?.value?.text;

  const linkIsValid = (link: LinkField) => {
    return !!linkText && (!!link?.value?.href || !!link?.value?.url);
  };

  const isCTALink = style === ButtonStyle.CTA;
  
  const getIcon = () => {
    if (isCTALink) {
      return IconName.RIGHT_ARROW_CIRCLE;
    }

    switch (link?.value?.linktype) {
      case 'back':
        return IconName.LEFT_ARROW_CIRCLE;
      case 'external':
        return IconName.EXTERNAL;
      case 'download':
      case 'media':
        return IconName.DOWNLOAD;
      default:
        return IconName.RIGHT_ARROW;
    }
  };

  const renderIcon = (): JSX.Element | null => {
    return (
      <Icon
        iconName={getIcon()}
        className={cn({
          'h-[30px] w-[30px] group-hover:fill-t-link-hover group-hover:[&>circle]:stroke-t-link-hover group-hover:[&>path]:fill-t-btn-text':
            isCTALink,
          'shrink-0': !shrinkIcon
        })}
      />
    );
  };

  const renderBulletIcon = (): JSX.Element | null => {
    return (
      <Icon
        className={`
          shrink-0
          invisible
          absolute
          top-2
          fill-current 
          inline-block 
          -translate-x-8
          ease-in-out
          duration-300
          w-4
          h-2.5

          group-hover:visible
          group-hover:-translate-x-6

          md:w-5
          md:top-2.5
          md:-translate-x-10
          md:group-hover:-translate-x-8
        `}
        iconName={IconName.LINK_ITEM_BULLET}
        isAriaHidden={true}
      />
    );
  };

  /**
   * Renders a link that is suitable and editable for Sitecore Experience Editor
   * @returns Link element
   */
  const renderEELink = (): JSX.Element => {
    if (link === null) {
      return <></>;
    }

    return <Link editable field={link} />;
  };

  const renderLink = (): JSX.Element | null => {
    if (!link || !linkIsValid(link)) return null;

    return (
      <Link
        field={link}
        data-testid={testId}
        className={twMerge(
          cn(
            'body-xs group inline-flex items-center gap-2 !font-medium text-t-body',
            {
              'rounded-[6px] bg-t-primary px-[15px] py-[12px] text-t-btn-text transition-all hover:rounded-tr-[30px] hover:text-t-contrast':
                style === ButtonStyle.BUTTON,
            },
            {
              'hover:text-t-link-hover': style !== ButtonStyle.BUTTON,
            }
          ),
          styleClasses
        )}
      >
        {hasBulletIcon && renderBulletIcon()}
        {isCTALink && renderIcon()}
        <span className={cn({ 'link-underline': style !== ButtonStyle.BUTTON })}>{linkText}</span>
        {hasIcon && !isCTALink && renderIcon()}
      </Link>
    );
  };

  return isPageEditing ? renderEELink() : renderLink();
};

export default LinkBase;
