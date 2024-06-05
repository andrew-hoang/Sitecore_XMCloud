import { render, screen } from '@testing-library/react';
import AudioEmbed from 'components/ACR/AudioEmbed/AudioEmbed';
import { defaultMockData as mockData } from './AudioEmbed.mock';

const TEST_ID = 'AudioEmbed_TEST';

test('AudioEmbed unit tests', () => {
  render(<AudioEmbed {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
