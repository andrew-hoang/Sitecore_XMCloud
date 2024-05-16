import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { BreadcrumbPage, BreadcrumbProps } from 'components/ACR/Breadcrumb/Breadcrumb.props';
import {
  BreadCrumbRequest,
  getStaticPropsForBreadcrumb,
} from 'components/ACR/Breadcrumb/Breadcrumb.util';

import { Flex } from '@radix-ui/themes';

import Icon from 'components/ACR/Icon/Icon';
import { IconName } from 'src/enumerations/Icon.enum';

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  const { externalFields, testId } = props;

  const { datasource } = externalFields ?? {};

  const { ancestors, name } = datasource ?? { ancestors: [], name: '' };

  if (ancestors?.length <= 0) {
    return <></>;
  }

  const parentPage = ancestors[ancestors.length - 1];

  return (
    <nav data-ref="breadcrumb" data-testid={testId} aria-label="breadcrumb">
      <Flex gap="3" asChild>
        <ul className="body-xs hidden py-5 md:flex">
          {ancestors.map((ancestor: BreadcrumbPage, index) => {
            const title =
              ancestor?.shortTitle?.jsonValue?.value || ancestor.title?.jsonValue?.value;

            return (
              <li key={index}>
                <Flex gap="3" align="center" asChild>
                  <a href={ancestor.url?.href} className="whitespace-nowrap">
                    <span className="link-underline max-w-[45ch] overflow-hidden text-ellipsis">
                      {title}
                    </span>
                    <Icon iconName={IconName.CHEVRON_RIGHT} className="h-[18] w-[18]" />
                  </a>
                </Flex>
              </li>
            );
          })}
          <li aria-current="page" className="">
            <Flex gap="3" align="center">
              <span className="max-w-[45ch] overflow-hidden text-ellipsis">{name}</span>
              <Icon iconName={IconName.CHEVRON_RIGHT} className="h-[18] w-[18]" />
            </Flex>
          </li>
        </ul>
      </Flex>
      <div className="py-5 md:hidden">
        <a
          href={parentPage?.url?.href}
          className="body-xs group inline-flex items-center gap-2 !font-medium text-t-body"
        >
          <Icon
            iconName={IconName.LEFT_ARROW_CIRCLE}
            className="h-[30px] w-[30px] group-hover:fill-t-link-hover group-hover:[&>circle]:stroke-t-link-hover group-hover:[&>path]:fill-t-btn-text"
          />

          <span className="link-underline">{parentPage?.name}</span>
        </a>
      </div>
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
