import { Alignment } from 'src/enumerations/Aligment.enum';
import { PageHeaderProps } from './PageHeader.props';

const defaultPageHeaderProps: PageHeaderProps = {
  params: {
    alignment: Alignment.Left,
  },
  testId: 'PageHeaderDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeader',
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

const centerAlignedProps: PageHeaderProps = {
  params: {
    alignment: Alignment.Center,
  },
  testId: 'PageHeaderCenter',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeader',
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

const leftAlignedProps: PageHeaderProps = {
  params: {
    alignment: Alignment.Left,
  },
  testId: 'PageHeaderRight',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeader',
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

export const mockPageHeaderProps = {
  default: defaultPageHeaderProps,
  center: centerAlignedProps,
  left: leftAlignedProps,
};
