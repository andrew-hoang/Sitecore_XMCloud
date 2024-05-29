import { Meta, StoryObj } from '@storybook/react';

import TextCards from 'components/ACR/TextCards/TextCards';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import Container70 from '../Container/Container70/Container70';

import { defaultMockData } from './TextCards.mock';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';
import { defaultMockData as container70MockData } from 'components/ACR/Container/Container70/Container70.mock';

import { sampleText } from 'src/variables/global';
import { Theme } from 'src/enumerations/Theme.enum';

export default {
  title: 'Components/Text Cards',
  component: TextCards,
  tags: ['autodocs'],
} as Meta<typeof TextCards>;

type Story = StoryObj<typeof TextCards>;

export const Default: Story = {
  args: defaultMockData,
};

export const InContext: Story = {
  args: defaultMockData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: Theme.LIGHT_INDIGO }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <p>{sampleText}</p>
        </ContainerFullWidth>
        <Container70 {...container70MockData}>
          <TextCards {...args} />
        </Container70>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <p>{sampleText}</p>
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};
