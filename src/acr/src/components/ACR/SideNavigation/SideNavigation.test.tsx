import { render, screen } from '@testing-library/react';
import SideNavigation from 'components/ACR/SideNavigation/SideNavigation';
import { defaultMockData as mockData } from './SideNavigation.mock';

const TEST_ID = 'SideNavigation_TEST';

test('SideNavigation unit tests', () => {
  render(<SideNavigation {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
