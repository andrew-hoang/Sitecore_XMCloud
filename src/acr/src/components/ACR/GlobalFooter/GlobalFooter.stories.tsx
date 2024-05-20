import { Meta, StoryObj } from '@storybook/react';

import GlobalFooter from 'components/ACR/GlobalFooter/GlobalFooter';

import { defaultMockData } from './GlobalFooter.mock';

export default {
  title: 'Components/Global Footer',
  component: GlobalFooter,
  tags: ['autodocs'],
} as Meta<typeof GlobalFooter>;

type Story = StoryObj<typeof GlobalFooter>;

export const Default: Story = {
  args: defaultMockData,
};
