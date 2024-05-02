/**
 * Generates React boilerplate for a UI component under `src/components`
 * @param componentName - the component name
 * @returns ui component src boilerplate as a string
 */
function generateComponentUiSrc(componentName: string): string {
  return `import { ${componentName}BaseProps } from './${componentName}.props';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const defaultProps = {};

/**
 * ${componentName} - TODO_SCAFFOLD_FE: a good description of this component
 * @param props The UI data coming from the parent component
 * @returns TODO_SCAFFOLD_FE: a good description of what this component renders
 */
const ${componentName}Base = (props: ${componentName}BaseProps): JSX.Element => {
  const { fields } = props;

  const { heading } = fields ?? {};

  return (
    <div>
      <Text tag="h2" field={heading} />
      <p>The ${componentName} Component</p>
    </div>
  );
};

${componentName}Base.defaultProps = defaultProps;

export default ${componentName}Base;
`;
}

export default generateComponentUiSrc;
