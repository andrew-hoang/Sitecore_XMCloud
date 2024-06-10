import { Meta, StoryObj } from '@storybook/react';

import Video from 'components/ACR/Video/Video';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';

import { defaultMockData } from './Video.mock';

export default {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
} as Meta<typeof Video>;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: defaultMockData,
  render: (args) => (
    <ContainerFullWidth rendering={args.rendering} params={args.params}>
      <Video {...args} />
    </ContainerFullWidth>
  ),
};
