import { render, screen } from '@testing-library/react';
import MyDashboard from 'components/ACR/MyDashboard/MyDashboard';
import { defaultMockData as mockData } from './MyDashboard.mock';

const TEST_ID = 'MyDashboard_TEST';

test('MyDashboard unit tests', () => {
  render(<MyDashboard {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
