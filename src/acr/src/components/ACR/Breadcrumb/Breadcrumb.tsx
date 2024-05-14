import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { BreadcrumbPage, BreadcrumbProps } from 'components/ACR/Breadcrumb/Breadcrumb.props';

import {
  BreadCrumbRequest,
  getStaticPropsForBreadcrumb,
} from 'components/ACR/Breadcrumb/Breadcrumb.util';

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  const { externalFields, testId } = props;

  const { datasource } = externalFields ?? {};

  const { ancestors, name } = datasource ?? {};

  const truncate = (str: string): string => {
    return str?.length > 25
      ? str
          .replace(/(.{24})..+/, '$1')
          .trim()
          .concat('...')
      : str;
  };

  return (
    <nav data-testid={testId}>
      <ul>
        {ancestors?.map((ancestor: BreadcrumbPage, index) => {
          const title = ancestor?.shortTitle?.jsonValue?.value || ancestor.title?.jsonValue?.value;

          return (
            <li key={index}>
              <a href={ancestor.url?.href}>{truncate(`${title}`)}</a>
            </li>
          );
        })}
        <li>{truncate(name ?? '')}</li>
      </ul>
    </nav>
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
  const breadcrumbRequest: BreadCrumbRequest = {
    contextItem: _layoutData?.sitecore?.route?.itemId,
    isPageEditing: _layoutData?.sitecore?.context?.pageEditing ?? false,
    language: _layoutData?.sitecore?.context?.language,
  };
  return await getStaticPropsForBreadcrumb(breadcrumbRequest);
};

export default Breadcrumb;
