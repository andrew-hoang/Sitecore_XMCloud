import { render, screen } from '@testing-library/react';
import OktaTokenTest from 'components/ACR/OktaTokenTest/OktaTokenTest';
import { defaultMockData as mockData } from './OktaTokenTest.mock';

const TEST_ID = 'OktaTokenTest_TEST';

test('OktaTokenTest unit tests', () => {
  render(<OktaTokenTest {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
