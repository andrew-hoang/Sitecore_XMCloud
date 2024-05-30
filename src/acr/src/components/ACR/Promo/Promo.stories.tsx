import { Meta, StoryObj } from '@storybook/react';

import Promo from 'components/ACR/Promo/Promo';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import Container5050 from '../Container/Container5050/Container5050';
import Container7030 from '../Container/Container7030/Container7030';

import { defaultMockData } from './Promo.mock';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

import { Theme } from 'src/enumerations/Theme.enum';
import { PromoProps } from './Promo.props';
import { Orientation } from 'src/enumerations/Orientation.enum';

export default {
  title: 'Components/Promo',
  component: Promo,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof Promo>;

type Story = StoryObj<PromoProps & { theme: Theme }>;

export const ContainerFullWidthImageRight: Story = {
  args: {
    ...defaultMockData,
    params: {
      orientation: Orientation.IMAGE_RIGHT
    }
  },
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <Promo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const ContainerFullWidthImageLeft: Story = {
  args: {
    ...defaultMockData,
    params: {
      orientation: Orientation.IMAGE_LEFT
    }
  },
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <Promo {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const Container50_50: Story = {
  args: {
    ...defaultMockData,
    params: {
      orientation: Orientation.IMAGE_LEFT
    }
  },
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <Container5050 {...containerFullWidthMockData}
          left={
            <Promo {...args} />
          }
          right={
            <Promo {...args} />
          }
        />
      </ContainerFullBleed>
    );
  },
};

export const Container70_30: Story = {
  args: {
    ...defaultMockData,
    params: {
      orientation: Orientation.IMAGE_LEFT
    }
  },
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <Container7030 {...containerFullWidthMockData}
          left={
            <Promo {...args} />
          }
          right={
            <Promo {...args} />
          }
        />
      </ContainerFullBleed>
    );
  },
};
