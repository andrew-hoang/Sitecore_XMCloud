import { Meta, StoryObj } from '@storybook/react';

import BoomiTest from 'components/ACR/BoomiTest/BoomiTest';

import { defaultMockData } from './BoomiTest.mock';

export default {
  title: 'Components/Boomi Test',
  component: BoomiTest,
  tags: ['autodocs'],
} as Meta<typeof BoomiTest>;

type Story = StoryObj<typeof BoomiTest>;

export const Default: Story = {
  args: defaultMockData,
};
