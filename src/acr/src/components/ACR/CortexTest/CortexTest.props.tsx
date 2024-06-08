import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { CaseInPointItem } from 'src/types/Cortex/CaseInPointItem.props';
/**
 * Model used for Sitecore Component integration
 */
export type CortexTestProps = ComponentProps & TestProps & CortexTestData;

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type CortexTestData = {
  externalFields?: {
    cipItem?: CaseInPointItem;
  };
};
