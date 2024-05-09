import { Meta, StoryObj } from '@storybook/react';

import TextBanner from 'components/ACR/TextBanner/TextBanner';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';

import { defaultMockData } from './TextBanner.mock';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

import { Theme } from 'src/enumerations/Theme.enum';

export default {
  title: 'Components/Text Banner',
  component: TextBanner,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof TextBanner>;

type Story = StoryObj<typeof TextBanner>;

export const Default: Story = {
  args: defaultMockData,
  render: (args) => (
    <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: Theme.INDIGO }}>
      <ContainerFullWidth {...containerFullWidthMockData}>
        <TextBanner {...args} />
      </ContainerFullWidth>
    </ContainerFullBleed>
  ),
};
