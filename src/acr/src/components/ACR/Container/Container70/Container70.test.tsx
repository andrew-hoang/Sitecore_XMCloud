import { render, screen } from '@testing-library/react';
import Container70 from './Container70';
import { defaultMockData as mockData } from './Container70.mock';

const TEST_ID = 'Container70_TEST';

test('Container70 unit tests', () => {
  render(<Container70 {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
