import { render, screen } from '@testing-library/react';
import ContainerFullBleed from './ContainerFullBleed';
import { defaultMockData as mockData } from './ContainerFullBleed.mock';

const TEST_ID = 'ContainerFullBleed_TEST';

test('ContainerFullBleed unit tests', async () => {
  render(<ContainerFullBleed {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
