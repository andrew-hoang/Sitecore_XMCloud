import { Meta, StoryObj } from '@storybook/react';

import Link from 'components/ACR/Link/LinkBase';

import { defaultMockData, linkMockData, withIconMockData } from './Link.mock';

export default {
  title: 'Components/Button',
  component: Link,
  tags: ['autodocs'],
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: defaultMockData,
};

export const AsLink: Story = {
  args: linkMockData,
};

export const WithIcon: Story = {
  args: withIconMockData,
};

