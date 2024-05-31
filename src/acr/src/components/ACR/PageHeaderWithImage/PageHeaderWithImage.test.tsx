import { render, screen } from '@testing-library/react';
import PageHeaderWithImage from 'components/ACR/PageHeaderWithImage/PageHeaderWithImage';
import { defaultMockData as mockData } from './PageHeaderWithImage.mock';

const TEST_ID = 'PageHeaderWithImage_TEST';

test('PageHeaderWithImage unit tests', () => {
  render(<PageHeaderWithImage {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
