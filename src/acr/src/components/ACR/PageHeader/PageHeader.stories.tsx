import { Meta, StoryObj } from '@storybook/react';
import PageHeader from './PageHeader';
import { PageHeaderProps } from './PageHeader.props';
import { mockPageHeaderProps } from './PageHeader.mock';
import { Theme } from 'src/enumerations/Theme.enum';
import { MockThemeContextProvider } from 'src/components/ACR/PageHeader/PageHeader.mockcontext';
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

const renderWithContainers = (args: PageHeaderProps & { theme: Theme }) => {
  return (
    <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args.theme }}>
      <ContainerFullWidth {...containerFullWidthMockData}>
        <PageHeader {...args} />
      </ContainerFullWidth>
    </ContainerFullBleed>
  );
};

export const Default: Story = {
  args: mockPageHeaderProps.default,
  render: (args) => (
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
    </MockThemeContextProvider>
  ),
};

export const CenterAligned: Story = {
  args: mockPageHeaderProps.center,
  render: (args) => (
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
    </MockThemeContextProvider>
  ),
};

export const LeftAligned: Story = {
  args: mockPageHeaderProps.left,
  render: (args) => (
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
    </MockThemeContextProvider>
  ),
};
