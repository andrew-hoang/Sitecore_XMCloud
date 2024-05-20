import { render, screen } from '@testing-library/react';
import Promo from 'components/ACR/Promo/Promo';
import { defaultMockData as mockData } from './Promo.mock';

const TEST_ID = 'Promo_TEST';

test('Promo unit tests', () => {
  render(<Promo {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
