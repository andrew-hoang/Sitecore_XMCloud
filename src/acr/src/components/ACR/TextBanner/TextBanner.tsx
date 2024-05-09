import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { TextBannerProps } from 'components/ACR/TextBanner/TextBanner.props';

import { getTextBannerUiProps, getStaticPropsForTextBanner } from 'components/ACR/TextBanner/TextBanner.util';

import TextBannerBase from 'components/ACR/TextBanner/TextBannerBase';

const TextBanner = (props: TextBannerProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getTextBannerUiProps(props);

  return <TextBannerBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForTextBanner(_rendering, _layoutData);
};

export default TextBanner;
