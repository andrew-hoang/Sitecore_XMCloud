/**
 * Generates prop types boilerplate for a UI component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns ui component mock data boilerplate as a string
 */
function generateComponentMockData(componentName: string): string {
  return `import { ${componentName}Props } from './${componentName}.props';

export const defaultMockData: ${componentName}Props = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: '${componentName}',
    dataSource: '/',
  },
  fields: {
    heading: { value: 'MOCK_DATA_HEADING' },
  },
};
`;
}

export default generateComponentMockData;
