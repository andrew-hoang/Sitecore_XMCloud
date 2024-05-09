import { render, screen } from '@testing-library/react';
import SectionHeader from 'components/ACR/SectionHeader/SectionHeader';
import { defaultMockData as mockData } from './SectionHeader.mock';

const TEST_ID = 'SectionHeader_TEST';

test('SectionHeader unit tests', () => {
  render(<SectionHeader {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
