import { Meta, StoryObj } from '@storybook/react';

import OktaTokenTest from 'components/ACR/OktaTokenTest/OktaTokenTest';

import { defaultMockData } from './OktaTokenTest.mock';

export default {
  title: 'Components/Okta Token Test',
  component: OktaTokenTest,
  tags: ['autodocs'],
} as Meta<typeof OktaTokenTest>;

type Story = StoryObj<typeof OktaTokenTest>;

export const Default: Story = {
  args: defaultMockData,
};
