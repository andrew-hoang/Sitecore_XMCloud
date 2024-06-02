import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';
import { OktaTokenResponse } from 'src/types/Okta/OktaTokenResponse.props';
/**
 * Model used for Sitecore Component integration
 */
export type OktaTokenTestProps = ComponentProps & TestProps & OktaTokenTestData;

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type OktaTokenTestData = {
  externalFields?: {
    oktaToken?: OktaTokenResponse;
  };
};
