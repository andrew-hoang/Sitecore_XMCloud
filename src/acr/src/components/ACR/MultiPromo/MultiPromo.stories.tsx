import { Meta, StoryObj } from '@storybook/react';

import MultiPromo from 'components/ACR/MultiPromo/MultiPromo';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';

import { twoPromoData, threePromoData, fourPromoData, fivePromoData, sixPromoData, sevenPromoData } from './MultiPromo.mock';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

import { Theme } from 'src/enumerations/Theme.enum';
import { MultiPromoProps } from './MultiPromo.props';

export default {
  title: 'Components/Multi Promo',
  component: MultiPromo,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof MultiPromo>;

type Story = StoryObj<MultiPromoProps & { theme: Theme }>;

export const ATwo: Story = {
  args: twoPromoData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <MultiPromo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const BThree: Story = {
  args: threePromoData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <MultiPromo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const CFour: Story = {
  args: fourPromoData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <MultiPromo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const DFive: Story = {
  args: fivePromoData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <MultiPromo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const ESix: Story = {
  args: sixPromoData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <MultiPromo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const FSeven: Story = {
  args: sevenPromoData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <MultiPromo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};
