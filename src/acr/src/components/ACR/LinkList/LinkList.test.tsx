import { render, screen } from '@testing-library/react';
import LinkList from 'components/ACR/LinkList/LinkList';
import { defaultMockData as mockData } from './LinkList.mock';

const TEST_ID = 'LinkList_TEST';

test('LinkList unit tests', () => {
  render(<LinkList {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
