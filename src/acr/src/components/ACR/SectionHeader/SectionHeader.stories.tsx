import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@radix-ui/themes';
import { Theme } from 'src/enumerations/Theme.enum';

import SectionHeader from 'components/ACR/SectionHeader/SectionHeader';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

import { defaultMockData } from './SectionHeader.mock';
import { SectionHeaderProps } from './SectionHeader.props';

export default {
  title: 'Components/Section Header',
  component: SectionHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof SectionHeader>;

type Story = StoryObj<SectionHeaderProps & { theme: Theme }>;

export const Default: Story = {
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
          <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
            Component above
          </Box>
          <SectionHeader {...args} />
          <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
            Component below
          </Box>
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};
