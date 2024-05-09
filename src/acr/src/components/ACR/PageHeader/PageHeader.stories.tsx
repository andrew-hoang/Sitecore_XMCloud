import { Meta, StoryObj } from '@storybook/react';

import PageHeader from 'components/ACR/PageHeader/PageHeader';

import { defaultMockData } from './PageHeader.mock';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
} as Meta<typeof PageHeader>;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: defaultMockData,
};
