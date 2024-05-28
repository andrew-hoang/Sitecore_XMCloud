import { render, screen } from '@testing-library/react';
import PageHeader from 'components/ACR/PageHeader/PageHeader';
import { defaultMockData as mockData } from './PageHeader.mock';

const TEST_ID = 'PageHeader_TEST';

test('PageHeader unit tests', () => {
  render(<PageHeader {...mockData.left} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
