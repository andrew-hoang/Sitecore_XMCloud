import { Text } from '@sitecore-jss/sitecore-jss-react';
import cn from 'classnames';

import { SectionHeaderProps } from 'components/ACR/SectionHeader/SectionHeader.props';

const SectionHeader = (props: SectionHeaderProps): JSX.Element => {
  const { fields, testId, params } = props;

  const { title, subtitle } = fields ?? {};
  const { includeBottomMargin } = params ?? {};

  /**
   * ACRAR-284 - Section Header
   * @param props
   * @returns
   */

  return (
    <div
      data-ref="section-header"
      data-testid={testId}
      className={cn('', { '-mb-4': includeBottomMargin === '0' })}
    >
      <Text tag="h2" field={title} className="heading-c max-w-[770px]" />
      <Text tag="p" field={subtitle} className="mt-4 max-w-[770px]" />
    </div>
  );
};

export default SectionHeader;
