import { Meta, StoryObj } from '@storybook/react';

import GlobalHeader from 'components/ACR/GlobalHeader/GlobalHeader';

import { defaultMockData } from './GlobalHeader.mock';

export default {
  title: 'Components/Global Header',
  component: GlobalHeader,
  tags: ['autodocs'],
} as Meta<typeof GlobalHeader>;

type Story = StoryObj<typeof GlobalHeader>;

export const Default: Story = {
  args: defaultMockData,
};
