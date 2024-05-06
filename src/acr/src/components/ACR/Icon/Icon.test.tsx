import { render, screen, waitFor } from '@testing-library/react';
import Icon from './Icon';
import { defaultMockData as mockData } from './Icon.mock';
import { expect, test } from 'vitest';

const TEST_ID = 'Icon_TEST';

test('Link unit tests', () => {
  render(<Icon {...mockData} testId={TEST_ID} />);
  const element = screen.queryByTestId(TEST_ID);
  waitFor(() => expect(element).toBeDefined());
});
