import { useEffect, useState } from 'react';
import { LinkBaseProps } from './Link.props';
import { Link, LinkField } from '@sitecore-jss/sitecore-jss-react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

import Icon from '../Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';

import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

type LinkProps = Partial<LinkBaseProps> & {
  animate?: boolean;
};

/**
 * ACRAR-333
 * @param props The UI data coming from the parent component
 * @returns
 */
const LinkBase = (props: LinkProps): JSX.Element | null => {
  const { link, testId, styleClasses, style = ButtonStyle.BUTTON, hasIcon, animate = true } = props;

  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  const [shouldRenderIcon, setShouldRenderIcon] = useState<boolean>(false);

  const linkText = link?.value?.text;
  const linkType = link?.value?.linktype;

  const linkIsValid = (link: LinkField) => {
    return !!linkText && (!!link?.value?.href || !!link?.value?.url);
  };

  useEffect(() => {
    if (hasIcon || linkType === 'external' || linkType === 'media' || linkType === 'download') {
      setShouldRenderIcon(true);
    }
  }, [hasIcon, linkType]);

  const isInternal =
    link?.value?.linktype === 'internal' || link?.value?.linktype === '' || !link?.value?.linktype;
  const isCTALink = style === ButtonStyle.CTA && isInternal;

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
        className={cn('flex-none', {
          'h-[30px] w-[30px] group-hover:fill-t-link-hover group-hover:[&>circle]:stroke-t-link-hover group-hover:[&>path]:fill-t-btn-text':
            isCTALink,
        })}
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
            'body-xs group inline-flex items-center gap-2 !font-medium',
            {
              button: style === ButtonStyle.BUTTON,
            },
            {
              'text-t-primary hover:text-t-link-hover': style !== ButtonStyle.BUTTON,
            }
          ),
          styleClasses
        )}
      >
        {isCTALink && renderIcon()}
        <span
          className={cn({
            'link-underline': animate,
            'before:bg-t-contrast': style === ButtonStyle.BUTTON,
          })}
        >
          {linkText}
        </span>
        {shouldRenderIcon && !isCTALink && renderIcon()}
      </Link>
    );
  };

  return isPageEditing ? renderEELink() : renderLink();
};

export default LinkBase;
