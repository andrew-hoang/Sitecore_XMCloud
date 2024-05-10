/**
 * Generates Storybook boilerplate for a component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns component story boilerplate as a string
 */
function generateComponentUiStory(componentName: string): string {
  const formatName = (componentName: string): string => {
    if (!componentName) return '';

    return componentName.replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  return `import { Meta, StoryObj } from '@storybook/react';

import ${componentName} from 'components/ACR/${componentName}/${componentName}';

import { defaultMockData } from './${componentName}.mock';

export default {
  title: 'Components/${formatName(componentName)}',
  component: ${componentName},
  tags: ['autodocs'],
} as Meta<typeof ${componentName}>;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: defaultMockData,
};
`;
}

export default generateComponentUiStory;
