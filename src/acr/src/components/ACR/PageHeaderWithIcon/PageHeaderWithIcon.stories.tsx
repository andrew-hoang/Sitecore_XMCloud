import { Meta, StoryObj } from '@storybook/react';

import PageHeaderWithIcon from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon';

import { defaultMockData } from './PageHeaderWithIcon.mock';

export default {
  title: 'Components/Page Header With Icon',
  component: PageHeaderWithIcon,
  tags: ['autodocs'],
} as Meta<typeof PageHeaderWithIcon>;

type Story = StoryObj<typeof PageHeaderWithIcon>;

export const Default: Story = {
  args: defaultMockData,
};
