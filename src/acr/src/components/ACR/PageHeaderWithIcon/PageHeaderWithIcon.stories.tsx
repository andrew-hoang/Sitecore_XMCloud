import { Meta, StoryObj } from '@storybook/react';
import PageHeaderWithIcon from './PageHeaderWithIcon';
import { PageHeaderWithIconProps } from './PageHeaderWithIcon.props';
import { defaultMockData } from './PageHeaderWithIcon.mock';

export default {
  title: 'Components/PageHeaderWithIcon',
  component: PageHeaderWithIcon,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof PageHeaderWithIcon>;

type Story = StoryObj<PageHeaderWithIconProps>;

export const Default: Story = {
  args: defaultMockData,
};

export const ShowLink: Story = {
  args: {
    ...defaultMockData,
    params: {
      displayLicenseLink: '1',
    },
  },
};
