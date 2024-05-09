import { Meta, StoryObj } from '@storybook/react';

import Image from 'components/ACR/Image/Image';

import { defaultMockData } from './Image.mock';

export default {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: defaultMockData,
};
