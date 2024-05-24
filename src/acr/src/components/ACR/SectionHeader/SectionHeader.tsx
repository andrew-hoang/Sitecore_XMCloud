import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import cn from 'classnames';

import { SectionHeaderProps } from 'components/ACR/SectionHeader/SectionHeader.props';

import { getStaticPropsForSectionHeader } from 'components/ACR/SectionHeader/SectionHeader.util';

const SectionHeader = (props: SectionHeaderProps): JSX.Element => {
  const { fields, testId, params } = props;

  const { title, subtitle } = fields ?? {};
  const { includeBottomMargin } = params ?? {};

  console.log(params);

  return (
    <div
      data-ref="section-header"
      data-testid={testId}
      className={cn('', { '-mb-4': includeBottomMargin === '1' })}
    >
      <Text tag="h2" field={title} className="heading-c max-w-[770px]" />
      <Text tag="p" field={subtitle} className="mt-4 max-w-[770px]" />
    </div>
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
  return getStaticPropsForSectionHeader(_rendering, _layoutData);
};

export default SectionHeader;
