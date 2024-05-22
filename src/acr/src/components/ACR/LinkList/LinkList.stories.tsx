import { Meta, StoryObj } from '@storybook/react';

import LinkList from 'components/ACR/LinkList/LinkList';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import Container5050 from '../Container/Container5050/Container5050';

import { defaultMockData } from './LinkList.mock';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';
import { defaultMockData as containerHalfWidthMockData } from 'components/ACR/Container/Container5050/Container5050.mock';

import { Theme } from 'src/enumerations/Theme.enum';
import { LinkListProps } from './LinkList.props';

export default {
  title: 'Components/Link List',
  component: LinkList,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof LinkList>;

type Story = StoryObj<LinkListProps & { theme: Theme }>;

export const FullWidthContainer: Story = {
  args: defaultMockData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <ContainerFullWidth {...containerFullWidthMockData}>
          <LinkList {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    );
  },
};

export const HalfWidthContainer: Story = {
  args: defaultMockData,
  render: (args) => {
    return (
      <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args?.theme }}>
        <Container5050 {...containerHalfWidthMockData} right={<LinkList {...args} />} />
      </ContainerFullBleed>
    );
  },
};
