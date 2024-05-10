import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { LinkListProps } from 'components/ACR/LinkList/LinkList.props';

import { getLinkListUiProps, getStaticPropsForLinkList } from 'components/ACR/LinkList/LinkList.util';

import LinkListBase from 'components/ACR/LinkList/LinkListBase';

const LinkList = (props: LinkListProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getLinkListUiProps(props);

  return <LinkListBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForLinkList(_rendering, _layoutData);
};

export default LinkList;
