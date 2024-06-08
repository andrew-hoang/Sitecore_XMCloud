import { Meta, StoryObj } from '@storybook/react';

import CortexTest from 'components/ACR/CortexTest/CortexTest';

import { defaultMockData } from './CortexTest.mock';

export default {
  title: 'Components/Cortex Test',
  component: CortexTest,
  tags: ['autodocs'],
} as Meta<typeof CortexTest>;

type Story = StoryObj<typeof CortexTest>;

export const Default: Story = {
  args: defaultMockData,
};
