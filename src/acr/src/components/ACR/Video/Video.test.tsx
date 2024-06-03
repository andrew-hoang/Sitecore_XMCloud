import { render, screen } from '@testing-library/react';
import Video from 'components/ACR/Video/Video';
import { defaultMockData as mockData } from './Video.mock';

const TEST_ID = 'Video_TEST';

test('Video unit tests', () => {
  render(<Video {...mockData} testId={TEST_ID} />);
  const element = screen.getByTestId(TEST_ID);
  expect(element).toBeInTheDocument();
});
