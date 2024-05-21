import { Meta, StoryObj } from '@storybook/react';

import Promo from 'components/ACR/Promo/Promo';

import { defaultMockData } from './Promo.mock';

export default {
  title: 'Components/Promo',
  component: Promo,
  tags: ['autodocs'],
} as Meta<typeof Promo>;

type Story = StoryObj<typeof Promo>;

export const Default: Story = {
  args: defaultMockData,
};
