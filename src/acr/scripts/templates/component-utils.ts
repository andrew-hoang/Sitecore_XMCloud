/**
 * Generates utility script boilerplate for a component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns component utility script boilerplate as a string
 */
function generateComponentUtils(componentName: string): string {
  return `import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { ${componentName}Data } from 'components/ACR/${componentName}/${componentName}.props';

export const getStaticPropsFor${componentName} = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<${componentName}Data> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: ${componentName}Data = {
    externalFields: {
      mock_external_data: { value: 'Hardcoded for scaffolding' },
    },
  };

  return model;
};
`;
}

export default generateComponentUtils;
