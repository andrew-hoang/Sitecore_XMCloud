import { render, screen } from '@testing-library/react';
import Container5050 from './Container5050';
import { defaultMockData as mockData } from './Container5050.mock';

const TEST_ID = 'Container5050_TEST';

test('Container5050 unit tests', async () => {
  render(<Container5050 {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
