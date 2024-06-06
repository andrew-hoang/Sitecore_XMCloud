import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { GlobalHeaderProps } from 'components/ACR/GlobalHeader/GlobalHeader.props';

import { getStaticPropsForGlobalHeader } from 'components/ACR/GlobalHeader/GlobalHeader.util';
import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation';
import { GlobalHeaderProvider } from './GlobalHeader.context';
import UtilityNavigation from './UtilityNavigation/UtilityNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { Flex } from '@radix-ui/themes';
import { useI18n } from 'next-localization';
import { dictionaryKeys } from 'src/variables/dictionary';
import QuickSearch from './QuickSearch/QuickSearch';

const GlobalHeader = (props: GlobalHeaderProps): JSX.Element => {
  const { testId } = props;

  const { t } = useI18n();

  const labels = {
    menuLabel: t(dictionaryKeys.GLOBAL_HEADER_MENU),
    closeLabel: t(dictionaryKeys.GLOBAL_HEADER_CLOSE),
    backLabel: t(dictionaryKeys.GLOBAL_HEADER_BACK),
    searchLabel: t(dictionaryKeys.GLOBAL_HEADER_SEARCH),
  };

  return (
    <GlobalHeaderProvider labels={labels}>
      <Flex
        data-testid={testId}
        data-ref="global-header"
        direction="column"
        className="relative h-screen px-[30px] py-8 gh:py-0"
      >
        <UtilityNavigation {...props} />
        <PrimaryNavigation {...props} />
        <MobileNavigation {...props} />
        <QuickSearch className="flex gh:hidden" />
      </Flex>
    </GlobalHeaderProvider>
  );
};

/**
 * "Data" developer method
 * TODO_SCAFFOLD_BE: If "getStaticProps" was deleted remove "useComponentProps". They work together.
 * TODO_SCAFFOLD_BE: Populate if needed, remove if not
 * Will be called during SSG.  Do NOT return null.
 * @param {ComponentRendering} _rendering
 * @param {LayoutServiceData} _layoutData
 * @param {GetStaticPropsContext} _context
 */
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForGlobalHeader(_rendering, _layoutData);
};

export default GlobalHeader;
