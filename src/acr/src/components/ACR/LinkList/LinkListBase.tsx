import { LinkListBaseProps } from './LinkList.props';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import cn from 'classnames';

const defaultProps = {};

/**
 * LinkList - TODO_SCAFFOLD_FE: a good description of this component
 * @param props The UI data coming from the parent component
 * @returns TODO_SCAFFOLD_FE: a good description of what this component renders
 */
const LinkListBase = (props: LinkListBaseProps): JSX.Element => {
  const { fields, testId, styleClasses } = props;

  const { heading } = fields ?? {};

  return (
    <div className={cn(styleClasses)} data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The LinkList Component</p>
    </div>
  );
};

LinkListBase.defaultProps = defaultProps;

export default LinkListBase;
