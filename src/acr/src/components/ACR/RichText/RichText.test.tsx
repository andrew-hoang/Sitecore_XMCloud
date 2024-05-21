import { render, screen } from '@testing-library/react';
import RichText from 'components/ACR/RichText/RichText';
import { defaultMockData as mockData } from './RichText.mock';

const TEST_ID = 'RichText_TEST';

test('RichText unit tests', () => {
  render(<RichText {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
