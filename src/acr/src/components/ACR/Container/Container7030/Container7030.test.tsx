import { render, screen } from '@testing-library/react';
import Container7030 from './Container7030';
import { defaultMockData as mockData } from './Container7030.mock';

const TEST_ID = 'Container7030_TEST';

test('Container7030 unit tests', async () => {
  render(<Container7030 {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});

