import { render, screen } from '@testing-library/react';
import GlobalHeader from 'components/ACR/GlobalHeader/GlobalHeaderProvider';
import { defaultMockData as mockData } from './GlobalHeader.mock';

const TEST_ID = 'GlobalHeader_TEST';

test('GlobalHeader unit tests', () => {
  render(<GlobalHeader {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
