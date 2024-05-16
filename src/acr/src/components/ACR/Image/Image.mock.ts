import { ImageProps } from './Image.props';

export const defaultMockData: ImageProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Image',
    dataSource: '/',
  },
  fields: {
    title: { value: 'Optional Title' },
    image: {
      value: {
        src: 'https://picsum.photos/1290/726',
        alt: '',
        width: '1290',
        height: '726',
      },
    },
    caption: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
};
