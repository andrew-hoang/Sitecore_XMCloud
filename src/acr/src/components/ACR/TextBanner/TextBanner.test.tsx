import { render, screen } from '@testing-library/react';
import TextBanner from 'components/ACR/TextBanner/TextBanner';
import { defaultMockData as mockData } from './TextBanner.mock';

const TEST_ID = 'TextBanner_TEST';

test('TextBanner unit tests', () => {
  render(<TextBanner {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
