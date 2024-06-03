import { Meta, StoryObj } from '@storybook/react';

import Accordion from 'components/ACR/Accordion/Accordion';

import { defaultMockData } from './Accordion.mock';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: defaultMockData,
};
