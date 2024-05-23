import { render, screen } from '@testing-library/react';
import TextCards from 'components/ACR/TextCards/TextCards';
import { defaultMockData as mockData } from './TextCards.mock';

const TEST_ID = 'TextCards_TEST';

test('TextCards unit tests', () => {
  render(<TextCards {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
