import { render, screen } from '@testing-library/react';
import BoomiTest from 'components/ACR/BoomiTest/BoomiTest';
import { defaultMockData as mockData } from './BoomiTest.mock';

const TEST_ID = 'BoomiTest_TEST';

test('BoomiTest unit tests', () => {
  render(<BoomiTest {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
