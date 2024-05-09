import { Meta, StoryObj } from '@storybook/react';

import SkipLink from 'components/ACR/SkipLink/SkipLink';

import { defaultMockData } from './SkipLink.mock';

export default {
  title: 'Components/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
} as Meta<typeof SkipLink>;

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  args: defaultMockData,
};
