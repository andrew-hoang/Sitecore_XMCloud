import { render, screen } from '@testing-library/react';
import FacilitySearch from 'components/ACR/FacilitySearch/FacilitySearch';
import { defaultMockData as mockData } from './FacilitySearch.mock';

const TEST_ID = 'FacilitySearch_TEST';

test('FacilitySearch unit tests', () => {
  render(<FacilitySearch {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
