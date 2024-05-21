import { Meta, StoryObj } from '@storybook/react';

import TextBanner from 'components/ACR/TextBanner/TextBanner';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';

import { defaultMockData } from './TextBanner.mock';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

import { Theme } from 'src/enumerations/Theme.enum';
import { TextBannerProps } from './TextBanner.props';

export default {
  title: 'Components/Text Banner',
  component: TextBanner,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof TextBanner>;

type Story = StoryObj<TextBannerProps & { theme: Theme }>;

export const Default: Story = {
  args: defaultMockData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <TextBanner {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};
