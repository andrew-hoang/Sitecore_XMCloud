import { render, screen } from '@testing-library/react';
import SkipLink from 'components/ACR/SkipLink/SkipLink';
import { defaultMockData as mockData } from './SkipLink.mock';

const TEST_ID = 'SkipLink_TEST';

test('SkipLink unit tests', () => {
  render(<SkipLink {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
