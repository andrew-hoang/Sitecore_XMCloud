import { render, screen } from '@testing-library/react';
import Coveo from 'components/ACR/Coveo/Coveo';
import { defaultMockData as mockData } from './Coveo.mock';

const TEST_ID = 'Coveo_TEST';

test('Coveo unit tests', () => {
  render(<Coveo {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
