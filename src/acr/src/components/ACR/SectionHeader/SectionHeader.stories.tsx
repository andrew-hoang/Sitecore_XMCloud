import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@radix-ui/themes';

import SectionHeader from 'components/ACR/SectionHeader/SectionHeader';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

import { defaultMockData } from './SectionHeader.mock';

export default {
  title: 'Components/Section Header',
  component: SectionHeader,
  tags: ['autodocs'],
} as Meta<typeof SectionHeader>;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: defaultMockData,
};

export const Stacked: Story = {
  args: {
    ...defaultMockData,
    params: {
      includeBottomMargin: '1',
    },
  },
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <SectionHeader {...args} />
          <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
            Component below
          </Box>
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};
