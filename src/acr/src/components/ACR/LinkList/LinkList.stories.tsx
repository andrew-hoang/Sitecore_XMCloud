import { Meta, StoryObj } from '@storybook/react';

import LinkList from 'components/ACR/LinkList/LinkList';

import { defaultMockData } from './LinkList.mock';

export default {
  title: 'Components/LinkList',
  component: LinkList,
  tags: ['autodocs'],
} as Meta<typeof LinkList>;

type Story = StoryObj<typeof LinkList>;

export const Default: Story = {
  args: defaultMockData,
};
