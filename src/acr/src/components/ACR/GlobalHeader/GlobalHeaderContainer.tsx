import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { GlobalHeaderProps } from 'components/ACR/GlobalHeader/GlobalHeader.props';
import { getStaticPropsForGlobalHeader } from 'components/ACR/GlobalHeader/GlobalHeader.util';

import { GlobalHeaderProvider } from './GlobalHeader.context';

import { useI18n } from 'next-localization';
import { dictionaryKeys } from 'src/variables/dictionary';
import GlobalHeader from './GlobalHeader';

const GlobalHeaderContainer = (props: GlobalHeaderProps): JSX.Element => {
  const { t } = useI18n();

  const labels = {
    menuLabel: t(dictionaryKeys.GLOBAL_HEADER_MENU),
    closeLabel: t(dictionaryKeys.GLOBAL_HEADER_CLOSE),
    backLabel: t(dictionaryKeys.GLOBAL_HEADER_BACK),
    searchLabel: t(dictionaryKeys.GLOBAL_HEADER_SEARCH),
  };

  return (
    <GlobalHeaderProvider labels={labels}>
      <GlobalHeader {...props} />
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

export default GlobalHeaderContainer;
