import { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

import { defaultMockData } from 'components/ACR/Icon/Icon.mock';

export default {
  title: 'Base/Icon',
  component: Icon,
  parameters: { jest: ['Icon.test.tsx'] },
} as Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: defaultMockData,
};

