import { Meta, StoryObj } from '@storybook/react';

import Coveo from 'components/ACR/Coveo/Coveo';

import { defaultMockData } from './Coveo.mock';

export default {
  title: 'Components/Coveo',
  component: Coveo,
  tags: ['autodocs'],
} as Meta<typeof Coveo>;

type Story = StoryObj<typeof Coveo>;

export const Default: Story = {
  args: defaultMockData,
};
