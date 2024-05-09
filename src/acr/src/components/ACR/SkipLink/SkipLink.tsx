import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { SkipLinkProps } from 'components/ACR/SkipLink/SkipLink.props';

import { getSkipLinkUiProps, getStaticPropsForSkipLink } from 'components/ACR/SkipLink/SkipLink.util';

import SkipLinkBase from 'components/ACR/SkipLink/SkipLinkBase';

const SkipLink = (props: SkipLinkProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getSkipLinkUiProps(props);

  return <SkipLinkBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForSkipLink(_rendering, _layoutData);
};

export default SkipLink;
