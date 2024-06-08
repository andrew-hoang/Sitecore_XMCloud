import { render, screen } from '@testing-library/react';
import CortexTest from 'components/ACR/CortexTest/CortexTest';
import { defaultMockData as mockData } from './CortexTest.mock';

const TEST_ID = 'CortexTest_TEST';

test('CortexTest unit tests', () => {
  render(<CortexTest {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
