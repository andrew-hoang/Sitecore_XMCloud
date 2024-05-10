import { render, screen } from '@testing-library/react';
import Image from 'components/ACR/Image/Image';
import { defaultMockData as mockData } from './Image.mock';

const TEST_ID = 'Image_TEST';

test('Image unit tests', () => {
  render(<Image {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
