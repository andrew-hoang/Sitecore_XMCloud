import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { ACRAccount } from 'src/types/boomi/results/ACRAccount.props';

/**
 * Model used for Sitecore Component integration
 */
export type BoomiTestProps = ComponentProps & TestProps & BoomiTestFields & BoomiTestData;

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type BoomiTestData = {
  externalFields?: {
    account?: ACRAccount;
  };
};

export type BoomiTestFields = {
  fields: {};
};
