import { Meta, StoryObj } from '@storybook/react';
import PageHeaderWithIcon from './PageHeaderWithIcon';
import { PageHeaderWithIconProps } from './PageHeaderWithIcon.props';
import { PageHeaderWithIconMock } from './PageHeaderWithIcon.mock';
import { Theme } from 'src/enumerations/Theme.enum';
import { MockThemeContextProvider } from 'src/components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.mockcontext';
import ContainerFullBleed from '../Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from '../Container/ContainerFullWidth/ContainerFullWidth';
import { defaultMockData as containerFullBleedMockData } from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';

export default {
  title: 'Components/PageHeaderWithIcon',
  component: PageHeaderWithIcon,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: {
      options: [Theme.WHITE, Theme.LIGHT_INDIGO, Theme.PURPLE, Theme.INDIGO],
      control: { type: 'select' },
    },
  },
  args: { theme: Theme.WHITE },
} as Meta<typeof PageHeaderWithIcon>;

type Story = StoryObj<PageHeaderWithIconProps & { theme: Theme }>;

const renderWithContainers = (args: PageHeaderWithIconProps & { theme: Theme }) => {
  return (
    <ContainerFullBleed {...containerFullBleedMockData} params={{ theme: args.theme }}>
      <ContainerFullWidth {...containerFullWidthMockData}>
      
        <PageHeaderWithIcon {...args} />
        
      </ContainerFullWidth>
    </ContainerFullBleed>
  );
};

export const DefaultPageHeaderWithIcon: Story = {
  args: PageHeaderWithIconMock.default,
  render: (args) => (
    
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
    </MockThemeContextProvider>
    
  ),
};

export const ShowLink: Story = {
  args: PageHeaderWithIconMock.show,
  render: (args) => (
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
    </MockThemeContextProvider>
  ),
};

export const HideLink: Story = {
  args: PageHeaderWithIconMock.hide,
  render: (args) => (
    <MockThemeContextProvider context={{ theme: args?.theme }}>
      {renderWithContainers(args)}
      </MockThemeContextProvider>
  ),
};



