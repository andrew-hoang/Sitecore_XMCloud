import { render, screen } from '@testing-library/react';
import MultiPromo from 'components/ACR/MultiPromo/MultiPromo';
import { twoPromoData as mockData } from './MultiPromo.mock';

const TEST_ID = 'MultiPromo_TEST';

test('MultiPromo unit tests', () => {
  render(<MultiPromo {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
