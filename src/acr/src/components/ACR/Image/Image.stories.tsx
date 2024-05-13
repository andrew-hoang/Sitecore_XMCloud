import { Meta, StoryObj } from '@storybook/react';

import Image from 'components/ACR/Image/Image';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';

import { defaultMockData } from './Image.mock';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';
import { sampleText } from 'src/variables/global';

export default {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: defaultMockData,
};

export const InContext: Story = {
  args: defaultMockData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <p>{sampleText}</p>
        </ContainerFullWidth>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <Image {...args} />
        </ContainerFullWidth>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <p>{sampleText}</p>
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};
