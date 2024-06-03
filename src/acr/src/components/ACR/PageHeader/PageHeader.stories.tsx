import { Meta, StoryObj } from '@storybook/react';
import PageHeader from './PageHeader';
import { PageHeaderProps } from './PageHeader.props';
import { defaultMockData } from './PageHeader.mock';

import { Alignment } from 'src/enumerations/Aligment.enum';

export default {
  title: 'Components/Page Header',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof PageHeader>;

type Story = StoryObj<PageHeaderProps>;

export const Default: Story = {
  args: defaultMockData,
};

export const CenterAligned: Story = {
  args: {
    ...defaultMockData,
    params: {
      alignment: Alignment.Center,
    },
  },
};
