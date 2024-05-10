/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  const kebabCase = (componentName: string): string => {
    if (!componentName) return '';

    return componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  return `import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import { ${componentName}Props } from 'components/ACR/${componentName}/${componentName}.props';

import { getStaticPropsFor${componentName} } from 'components/ACR/${componentName}/${componentName}.util';

const ${componentName} = (props: ${componentName}Props): JSX.Element => {
  const { fields, testId } = props;

  const { heading } = fields ?? {};

  return (
    <div data-ref="${kebabCase(componentName)}" data-testid={testId}>
      <Text tag="h2" field={heading} />
      <p>The ${componentName} Component</p>
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
  return getStaticPropsFor${componentName}(_rendering, _layoutData);
};

export default ${componentName};
`;
}

export default generateComponentSrc;
