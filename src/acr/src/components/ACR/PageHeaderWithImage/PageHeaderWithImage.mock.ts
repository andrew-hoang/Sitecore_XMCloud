import { PageHeaderWithImageProps } from './PageHeaderWithImage.props';

const defaultPageHeaderWithImageProps: PageHeaderWithImageProps = {
  params: {
    orientation: '',
  },
  testId: 'PageHeaderWithImageDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithImage',
    dataSource: '/',
  },
  externalFields: {
    headerTitle: { value: 'Page Title' },
    image16x9: {
      value: {
        src: '',
      },
    },
    contentType: { name: 'Content Type', id: '1' },
    image1x1: {
      value: {
        src: '',
      },
    },
    subtitle: { value: 'subtitle' },
  },
};

const leftAlignedProps: PageHeaderWithImageProps = {
  params: {
    Orientation: 'image-left',
  },
  testId: 'PageHeaderWithImageLeft',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithImage',
    dataSource: '/',
  },
  externalFields: {
    headerTitle: { value: 'Page Title' },
    image16x9: {
      value: {
        src: '',
      },
    },
    contentType: { name: 'Content Type', id: '1' },
    image1x1: {
      value: {
        src: '',
      },
    },
    subtitle: { value: 'subtitle' },
  },
};

const rightAlignedProps: PageHeaderWithImageProps = {
  params: {
    Orientation: 'image-right',
  },
  testId: 'PageHeaderWithImageRight',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithImage',
    dataSource: '/',
  },
  externalFields: {
    headerTitle: { value: 'Page Title' },
    image16x9: {
      value: {
        src: '',
      },
    },
    contentType: { name: 'Content Type', id: '1' },
    image1x1: {
      value: {
        src: '',
      },
    },
    subtitle: { value: 'subtitle' },
  },
};

export const PageHeaderWithImageMock = {
  default: defaultPageHeaderWithImageProps,
  right: rightAlignedProps,
  left: leftAlignedProps,
};
