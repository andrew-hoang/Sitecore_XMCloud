import { Meta, StoryObj } from '@storybook/react';
import PageHeader from './PageHeader';
import { PageHeaderProps } from './PageHeader.props';
import { defaultMockData } from './PageHeader.mock';
import { Theme } from 'src/enumerations/Theme.enum';
import { Alignment } from 'src/enumerations/Aligment.enum';

import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

export default {
  title: 'Components/Page Header',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof PageHeader>;

type Story = StoryObj<PageHeaderProps & { theme: Theme }>;

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
