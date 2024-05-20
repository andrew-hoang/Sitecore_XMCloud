import { Meta, StoryObj } from '@storybook/react';

import SearchBar from 'components/ACR/SearchBar/SearchBar';

import { defaultMockData } from './SearchBar.mock';

export default {
  title: 'Components/Search Bar',
  component: SearchBar,
  tags: ['autodocs'],
} as Meta<typeof SearchBar>;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: defaultMockData,
};
