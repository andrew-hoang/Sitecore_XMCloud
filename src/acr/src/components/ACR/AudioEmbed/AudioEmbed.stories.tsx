import { Meta, StoryObj } from '@storybook/react';

import AudioEmbed from 'components/ACR/AudioEmbed/AudioEmbed';

import { defaultMockData } from './AudioEmbed.mock';

export default {
  title: 'Components/Audio Embed',
  component: AudioEmbed,
  tags: ['autodocs'],
} as Meta<typeof AudioEmbed>;

type Story = StoryObj<typeof AudioEmbed>;

export const Default: Story = {
  args: defaultMockData,
};
