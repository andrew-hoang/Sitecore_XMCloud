import { GlobalHeaderProps } from 'components/ACR/GlobalHeader/GlobalHeader.props';

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

export default GlobalHeaderContainer;
