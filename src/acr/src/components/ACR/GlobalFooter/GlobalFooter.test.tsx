import { render, screen } from '@testing-library/react';
import GlobalFooter from 'components/ACR/GlobalFooter/GlobalFooter';
import { defaultMockData as mockData } from './GlobalFooter.mock';

const TEST_ID = 'GlobalFooter_TEST';

test('GlobalFooter unit tests', () => {
  render(<GlobalFooter {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
