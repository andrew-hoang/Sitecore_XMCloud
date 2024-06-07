import { render, screen } from '@testing-library/react';
import { defaultMockData as mockData } from './GlobalHeader.mock';
import GlobalHeaderContainer from './GlobalHeaderContainer';

const TEST_ID = 'GlobalHeader_TEST';

test('GlobalHeader unit tests', () => {
  render(<GlobalHeaderContainer {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
