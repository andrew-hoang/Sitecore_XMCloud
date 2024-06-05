import { render, screen } from '@testing-library/react';
import Accordion from 'components/ACR/Accordion/Accordion';
import { defaultMockData as mockData } from './Accordion.mock';

const TEST_ID = 'Accordion_TEST';

test('Accordion unit tests', () => {
  render(<Accordion {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
