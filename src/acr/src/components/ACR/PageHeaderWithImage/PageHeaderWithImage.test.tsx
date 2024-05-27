import { render, screen } from '@testing-library/react';
import PageHeaderWithImage from 'components/ACR/PageHeaderWithImage/PageHeaderWithImage';
import { PageHeaderWithImageMock as mockData } from './PageHeaderWithImage.mock';

const TEST_ID = 'PageHeaderWithImage_TEST';

test('PageHeaderWithImage unit tests', () => {
  render(<PageHeaderWithImage {...mockData.left} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
