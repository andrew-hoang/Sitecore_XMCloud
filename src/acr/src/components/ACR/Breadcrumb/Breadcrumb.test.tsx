import { render, screen } from '@testing-library/react';
import Breadcrumb from 'components/ACR/Breadcrumb/Breadcrumb';
import { defaultMockData as mockData } from './Breadcrumb.mock';

const TEST_ID = 'Breadcrumb_TEST';

test('Breadcrumb unit tests', () => {
  render(<Breadcrumb {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
