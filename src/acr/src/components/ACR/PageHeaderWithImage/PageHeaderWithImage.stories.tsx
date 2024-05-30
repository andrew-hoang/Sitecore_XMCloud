import { Meta, StoryObj } from '@storybook/react';
import PageHeaderWithImage from './PageHeaderWithImage';
import { PageHeaderWithImageProps } from './PageHeaderWithImage.props';
import { defaultMockData } from './PageHeaderWithImage.mock';
import { Orientation } from 'src/enumerations/Orientation.enum';

export default {
  title: 'Components/PageHeaderWithImage',
  component: PageHeaderWithImage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: defaultMockData,
} as Meta<typeof PageHeaderWithImage>;

type Story = StoryObj<PageHeaderWithImageProps>;

export const Default: Story = {
  args: defaultMockData,
};

export const LeftOriented: Story = {
  args: {
    ...defaultMockData,
    params: {
      orientation: Orientation.IMAGE_LEFT,
    },
  },
  render: (args) => <PageHeaderWithImage {...args} />,
};
