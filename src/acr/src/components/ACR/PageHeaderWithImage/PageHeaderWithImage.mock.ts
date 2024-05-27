import { PageHeaderWithImageProps } from './PageHeaderWithImage.props';




const defaultPageHeaderWithImageProps: PageHeaderWithImageProps = {
  params: {
    Orientation: '',
  },
  testId: 'PageHeaderWithImageDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithImage',
    dataSource: '/',
    
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
};

export const PageHeaderWithImageMock = {
  default: defaultPageHeaderWithImageProps,
  right: rightAlignedProps,
  left: leftAlignedProps,
};

