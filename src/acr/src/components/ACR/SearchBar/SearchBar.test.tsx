import { render, screen } from '@testing-library/react';
import SearchBar from 'components/ACR/SearchBar/SearchBar';
import { defaultMockData as mockData } from './SearchBar.mock';

const TEST_ID = 'SearchBar_TEST';

test('SearchBar unit tests', () => {
  render(<SearchBar {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
