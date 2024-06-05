import { Meta, StoryObj } from '@storybook/react';

import MyDashboard from 'components/ACR/MyDashboard/MyDashboard';

import { defaultMockData } from './MyDashboard.mock';

export default {
  title: 'Components/My Dashboard',
  component: MyDashboard,
  tags: ['autodocs'],
} as Meta<typeof MyDashboard>;

type Story = StoryObj<typeof MyDashboard>;

export const Default: Story = {
  args: defaultMockData,
};
