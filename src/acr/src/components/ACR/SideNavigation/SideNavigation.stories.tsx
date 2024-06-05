import { Meta, StoryObj } from '@storybook/react';

import SideNavigation from 'components/ACR/SideNavigation/SideNavigation';

import { defaultMockData } from './SideNavigation.mock';

export default {
  title: 'Components/Side Navigation',
  component: SideNavigation,
  tags: ['autodocs'],
} as Meta<typeof SideNavigation>;

type Story = StoryObj<typeof SideNavigation>;

export const Default: Story = {
  args: defaultMockData,
};
