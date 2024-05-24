import { StoryObj } from '@storybook/react';

import { Box } from '@radix-ui/themes';
import ContainerFullBleed from 'components/ACR/Container/ContainerFullBleed/ContainerFullBleed';
import ContainerFullWidth from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth';
import Container5050 from 'components/ACR/Container/Container5050/Container5050';
import Container7030 from 'components/ACR/Container/Container7030/Container7030';
import Container3070 from 'components/ACR/Container/Container3070/Container3070';
import Container70 from 'components/ACR/Container/Container70/Container70';

import { withBackgroundMockData as containerFullBleedMockData } from './ContainerFullBleed/ContainerFullBleed.mock';
import { defaultMockData as containerFullWidthMockData } from './ContainerFullWidth/ContainerFullWidth.mock';
import { defaultMockData as container5050MockData } from './Container5050/Container5050.mock';
import { defaultMockData as container7030MockData } from './Container7030/Container7030.mock';
import { defaultMockData as container3070MockData } from './Container3070/Container3070.mock';
import { defaultMockData as container70MockData } from './Container70/Container70.mock';

export default {
  title: 'Components/Container',
  tags: ['autodocs'],
};

export const containerFullBleed: StoryObj<typeof ContainerFullBleed> = {
  args: containerFullBleedMockData,
  render: (args) => (
    <ContainerFullBleed {...args}>
      <Box height="9" className="flex items-center justify-center">
        Container Full Bleed
      </Box>
    </ContainerFullBleed>
  ),
};

export const containerFullWidth: StoryObj<typeof ContainerFullWidth> = {
  args: containerFullWidthMockData,
  render: (args) => (
    <ContainerFullWidth {...args}>
      <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
        Container Full Width
      </Box>
    </ContainerFullWidth>
  ),
};

export const container5050: StoryObj<typeof Container5050> = {
  args: container5050MockData,
  render: (args) => (
    <Container5050
      {...args}
      left={
        <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
          50 Left
        </Box>
      }
      right={
        <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
          50 Right
        </Box>
      }
    />
  ),
};

export const container7030: StoryObj<typeof Container7030> = {
  args: container7030MockData,
  render: (args) => (
    <Container7030
      {...args}
      left={
        <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
          70 Left
        </Box>
      }
      right={
        <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
          30 Right
        </Box>
      }
    />
  ),
};

export const container3070: StoryObj<typeof Container3070> = {
  args: container3070MockData,
  render: (args) => (
    <Container3070
      {...args}
      left={
        <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
          30 Left
        </Box>
      }
      right={
        <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
          70 Right
        </Box>
      }
    />
  ),
};

export const container70: StoryObj<typeof Container70> = {
  args: container70MockData,
  render: (args) => (
    <Container70 {...args}>
      <Box height="9" className="flex items-center justify-center bg-gray-20 py-6">
        Container 70
      </Box>
    </Container70>
  ),
};

export const inContext: StoryObj<typeof ContainerFullBleed> = {
  args: containerFullBleedMockData,
  render: (args) => (
    <ContainerFullBleed {...args}>
      <ContainerFullWidth {...containerFullWidthMockData}>
        <>
          <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
            Container Full Width
          </Box>
          <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
            Container Full Width
          </Box>
        </>
      </ContainerFullWidth>
      <Container3070
        {...args}
        left={
          <>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              30 Left
            </Box>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              30 Left
            </Box>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              30 Left
            </Box>
          </>
        }
        right={
          <>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              70 Right
            </Box>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              70 Right
            </Box>
          </>
        }
      />
      <Container5050
        {...container5050MockData}
        left={
          <>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              50 Left
            </Box>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              50 Left
            </Box>
          </>
        }
        right={
          <>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              50 Right
            </Box>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              50 Right
            </Box>
          </>
        }
      />
      <Container7030
        {...container7030MockData}
        left={
          <>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              70 Left
            </Box>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              70 Left
            </Box>
          </>
        }
        right={
          <>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              30 Right
            </Box>
            <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
              30 Right
            </Box>
          </>
        }
      />
      <Container70 {...container70MockData}>
        <>
          <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
            Container 70
          </Box>
          <Box height="9" className="flex items-center justify-center bg-gray-100 py-6">
            Container 70
          </Box>
        </>
      </Container70>
    </ContainerFullBleed>
  ),
};
