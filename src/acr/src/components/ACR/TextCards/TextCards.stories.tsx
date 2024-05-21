import { Meta, StoryObj } from '@storybook/react';

import TextCards from 'components/ACR/TextCards/TextCards';

import { defaultMockData } from './TextCards.mock';

export default {
  title: 'Components/Text Cards',
  component: TextCards,
  tags: ['autodocs'],
} as Meta<typeof TextCards>;

type Story = StoryObj<typeof TextCards>;

export const Default: Story = {
  args: defaultMockData,
};
