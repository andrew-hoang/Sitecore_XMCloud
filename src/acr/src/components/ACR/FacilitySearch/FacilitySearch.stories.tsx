import { Meta, StoryObj } from '@storybook/react';

import FacilitySearch from 'components/ACR/FacilitySearch/FacilitySearch';

import { defaultMockData } from './FacilitySearch.mock';

export default {
  title: 'Components/Facility Search',
  component: FacilitySearch,
  tags: ['autodocs'],
} as Meta<typeof FacilitySearch>;

type Story = StoryObj<typeof FacilitySearch>;

export const Default: Story = {
  args: defaultMockData,
};
