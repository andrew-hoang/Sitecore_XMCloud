import { Meta, StoryObj } from '@storybook/react';
import PageHeaderWithImage from './PageHeaderWithImage';
import { PageHeaderWithImageProps } from './PageHeaderWithImage.props';
import { PageHeaderWithImageMock } from './PageHeaderWithImage.mock';
import { Theme } from 'src/enumerations/Theme.enum';
import { MockThemeContextProvider } from 'src/components/ACR/PageHeaderWithImage/PageHeaderWithImage.mockcontext';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

export default {
  title: 'Components/PageHeaderWithImage',
  component: PageHeaderWithImage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof PageHeaderWithImage>;

type Story = StoryObj<PageHeaderWithImageProps & { theme: Theme }>;

const renderWithContainers = (args: PageHeaderWithImageProps & { theme: Theme }) => {
  return (
    <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args.theme }}>
      <ContainerFullWidth {...containerFullWidthMockData}>
      
        <PageHeaderWithImage {...args} />
        
      </ContainerFullWidth>
    </ContainerFullBleed>
  );
};

export const DefaultPageHeaderImage: Story = {
  args: PageHeaderWithImageMock.default,
  render: (args) => (
    
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
    </MockThemeContextProvider>
    
  ),
};

export const LeftOriented: Story = {
  args: PageHeaderWithImageMock.left,
  render: (args) => (
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
    </MockThemeContextProvider>
  ),
};

export const RightOriented: Story = {
  args: PageHeaderWithImageMock.right,
  render: (args) => (
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
      </MockThemeContextProvider>
  ),
};



