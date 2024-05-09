import { render, screen } from '@testing-library/react';
import PageHeaderWithIcon from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon';
import { defaultMockData as mockData } from './PageHeaderWithIcon.mock';

const TEST_ID = 'PageHeaderWithIcon_TEST';

test('PageHeaderWithIcon unit tests', () => {
  render(<PageHeaderWithIcon {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
