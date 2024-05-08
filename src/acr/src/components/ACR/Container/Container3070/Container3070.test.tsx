import { render, screen } from '@testing-library/react';
import Container3070 from './Container3070';
import { defaultMockData as mockData } from './Container3070.mock';

const TEST_ID = 'Container3070_TEST';

test('Container3070 unit tests', async () => {
  render(<Container3070 {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});

