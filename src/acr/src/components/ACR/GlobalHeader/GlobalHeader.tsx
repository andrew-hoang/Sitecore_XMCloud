import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { GlobalHeaderProps } from 'components/ACR/GlobalHeader/GlobalHeader.props';

import { getStaticPropsForGlobalHeader } from 'components/ACR/GlobalHeader/GlobalHeader.util';
import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation';
import { GlobalHeaderProvider } from './GlobalHeader.context';
import UtilityNavigation from './UtilityNavigation/UtilityNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';

const GlobalHeader = (props: GlobalHeaderProps): JSX.Element => {
  const { testId } = props;

  return (
    <GlobalHeaderProvider>
      <div
        data-ref="global-header"
        className="relative px-[30px] pt-8 lg:pt-0"
        data-testid={testId}
      >
        <UtilityNavigation {...props} />
        <PrimaryNavigation {...props} />
        <MobileNavigation {...props} />
      </div>
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
