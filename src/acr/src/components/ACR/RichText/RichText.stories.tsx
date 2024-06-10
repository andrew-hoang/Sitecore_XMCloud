import { Meta, StoryObj } from '@storybook/react';

import RichText from 'components/ACR/RichText/RichText';

import { defaultMockData, twoColumnRTE, summaryRTE, quoteRTE, imageRTE } from './RichText.mock';

export default {
  title: 'Components/Rich Text',
  component: RichText,
  tags: ['autodocs'],
} as Meta<typeof RichText>;

type Story = StoryObj<typeof RichText>;

export const Default: Story = {
  args: defaultMockData,
};

export const RTESummary: Story = {
  args: summaryRTE,
};

export const RTEQuote: Story = {
  args: quoteRTE,
};

export const RTEImage: Story = {
  args: imageRTE,
};

export const TwoColumnRTE: Story = {
  args: twoColumnRTE,
};
