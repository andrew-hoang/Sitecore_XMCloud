import { render, screen } from '@testing-library/react';
import Link from 'components/ACR/Link/LinkBase';
import { defaultMockData as mockData } from './Link.mock';

const TEST_ID = 'Link_TEST';

test('Link unit tests', () => {
  render(<Link {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});

