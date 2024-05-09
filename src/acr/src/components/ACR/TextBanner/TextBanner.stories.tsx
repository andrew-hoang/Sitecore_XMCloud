import { Meta, StoryObj } from '@storybook/react';

import TextBanner from 'components/ACR/TextBanner/TextBanner';

import { defaultMockData } from './TextBanner.mock';

export default {
  title: 'Components/TextBanner',
  component: TextBanner,
  tags: ['autodocs'],
} as Meta<typeof TextBanner>;

type Story = StoryObj<typeof TextBanner>;

export const Default: Story = {
  args: defaultMockData,
};
