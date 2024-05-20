import { Meta, StoryObj } from '@storybook/react';

import MultiPromo from 'components/ACR/MultiPromo/MultiPromo';

import { defaultMockData } from './MultiPromo.mock';

export default {
  title: 'Components/Multi Promo',
  component: MultiPromo,
  tags: ['autodocs'],
} as Meta<typeof MultiPromo>;

type Story = StoryObj<typeof MultiPromo>;

export const Default: Story = {
  args: defaultMockData,
};
