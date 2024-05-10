import { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from 'components/ACR/Breadcrumb/Breadcrumb';

import { defaultMockData } from './Breadcrumb.mock';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
} as Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: defaultMockData,
};
