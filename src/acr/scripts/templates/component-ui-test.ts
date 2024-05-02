/**
 * Generates Jest testing boilerplate for a UI component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns ui component test boilerplate as a string
 */
function generateComponentUiTest(componentName: string): string {
  return `import { render, screen, waitFor } from '@testing-library/react';
import ${componentName} from 'components/ACR/${componentName}/${componentName}';
import { defaultMockData as mockData } from './${componentName}.mock';
import { expect, test } from "vitest";

const TEST_ID = '${componentName}_TEST';

test('${componentName} unit tests', () => {
  render(<${componentName} {...mockData} testId={TEST_ID} />);
  const element = screen.queryByTestId(TEST_ID);
  waitFor(() => expect(element).toBeDefined());
});
`;
}

export default generateComponentUiTest;
