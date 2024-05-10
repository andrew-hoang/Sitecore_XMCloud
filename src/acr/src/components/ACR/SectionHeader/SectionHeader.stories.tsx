import { Meta, StoryObj } from '@storybook/react';

import SectionHeader from 'components/ACR/SectionHeader/SectionHeader';

import { defaultMockData } from './SectionHeader.mock';

export default {
  title: 'Components/Section Header',
  component: SectionHeader,
  tags: ['autodocs'],
} as Meta<typeof SectionHeader>;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: defaultMockData,
};
