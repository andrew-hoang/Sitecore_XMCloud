import { Meta, StoryObj } from '@storybook/react';

import GlobalHeader from 'components/ACR/GlobalHeader/GlobalHeaderContainer';

import { defaultMockData } from './GlobalHeader.mock';
import { withCoveoSearch } from 'storybook/decorators';

export default {
  title: 'Components/Global Header',
  component: GlobalHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withCoveoSearch],
} as Meta<typeof GlobalHeader>;

type Story = StoryObj<typeof GlobalHeader>;

export const Default: Story = {
  args: defaultMockData,
};
