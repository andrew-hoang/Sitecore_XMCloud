/**
 * Generates prop types boilerplate for a UI component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns ui component prop types boilerplate as a string
 */
function generateComponentUiProps(componentName: string): string {
  return `import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type ${componentName}Props = ComponentProps & TestProps &
  ${componentName}Params &
  ${componentName}Fields &
  ${componentName}Data;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type ${componentName}Params = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type ${componentName}Data = {
  externalFields: {
    mock_external_data: Field<string>;
  };
};

export type ${componentName}Fields = {
  fields: {
    heading: Field<string>; // Sitecore editable text field
    image?: ImageField; // Sitecore editable image field
    link?: LinkField; // Sitecore editable link field
  };
};

/**
 * UI is developed against this model
 */
export type ${componentName}BaseProps = {
    fields: {
      // "UI" developer defines everything else here
      heading: Field<string>; // Sitecore editable text field
      image?: ImageField; // Sitecore editable image field
      link?: LinkField; // Sitecore editable link field
    };
  };
`;
}

export default generateComponentUiProps;
