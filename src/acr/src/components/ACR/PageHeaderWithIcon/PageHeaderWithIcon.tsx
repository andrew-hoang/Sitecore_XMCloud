import { Flex } from '@radix-ui/themes';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithIconProps } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.props';
import { useContext } from 'react';
import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';
import cn from 'classnames';
import ImageBase from '../Image/ImageBase';
import { getStaticPropsForPageBanner } from '../PageHeader/PageHeader.util';
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { dictionaryKeys } from 'variables/dictionary';
import { useI18n } from 'next-localization';

const PageHeaderWithIcon = (props: PageHeaderWithIconProps): JSX.Element => {
  const { t } = useI18n();
  const { params, testId } = props;
  const { displayLicenseLink } = params ?? {};

  const linkText = t(dictionaryKeys.PAGE_BANNER_LICENSE_TEXT);
  const licenseLinkUrl = t(dictionaryKeys.PAGE_BANNER_ANCHOR_LINK);

  const headerTitle = props?.externalFields?.headerTitle;
  const subtitle = props?.externalFields?.subtitle;
  const headerImage = props?.externalFields?.image1x1;
  const headerImagecheck = props?.externalFields?.image1x1?.value?.src;

  const { theme = Theme.WHITE } = useContext(ThemeContext);

  const bgWhite = theme === Theme.WHITE;
  const bgLightIndigo = theme === Theme.LIGHT_INDIGO;
  const bgIndigo = theme === Theme.INDIGO;
  const bgPurple = theme === Theme.PURPLE;

  return (
    <Flex
      className={cn('rounded-lg shadow-md w-fulll p-6', {
        'text-blue-900 bg-white': bgWhite,
        'bg-blue-100 text-blue-900': bgLightIndigo,
        'bg-indigo-900 text-white': bgIndigo,
        'bg-purple-900 text-white': bgPurple,
      })}
      data-ref="PageHeaderWithIcon"
      data-testid={testId}
      data-theme={theme}
      direction={{ initial: 'column', md: 'row' }}
      align={{ initial: 'start', md: 'center' }}
      justify={{ initial: 'center', md: 'center' }}
      gap="4"
    >
      <Flex direction="column" className="flex-1">
        <Text field={headerTitle} tag="h2" className="text-2xl mt-2 font-semibold" />
        <Text field={subtitle} tag="p" className="mt-4" />

        {displayLicenseLink === '1' && (
          <a href={licenseLinkUrl} className="text-blue-600 mt-2 underline">
            {linkText}
          </a>
        )}
      </Flex>
      {headerImagecheck && <ImageBase image={headerImage} className="h-32 w-32 " />}
    </Flex>
  );
};
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForPageBanner(_layoutData);
};
export default PageHeaderWithIcon;
