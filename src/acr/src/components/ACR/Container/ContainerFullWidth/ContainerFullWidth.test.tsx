import { render, screen } from '@testing-library/react';
import ContainerFullWidth from './ContainerFullWidth';
import { defaultMockData as mockData } from './ContainerFullWidth.mock';

const TEST_ID = 'ContainerFullWidth_TEST';

test('ContainerFullWidth unit tests', async () => {
  render(<ContainerFullWidth {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});

