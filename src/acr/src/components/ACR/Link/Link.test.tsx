import { render, screen, waitFor } from '@testing-library/react';
import Link from 'components/ACR/Link/LinkBase';
import { defaultMockData as mockData } from './Link.mock';
import { expect, test } from 'vitest';

const TEST_ID = 'Link_TEST';

test('Link unit tests', () => {
  render(<Link {...mockData} testId={TEST_ID} />);
  const element = screen.queryByTestId(TEST_ID);
  waitFor(() => expect(element).toBeDefined());
});
