import { PageHeaderProps } from './PageHeader.props';




const defaultPageHeaderProps: PageHeaderProps = {
  params: {
    Alignment: 'Left',
  },
  testId: 'PageHeaderDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeader',
    dataSource: '/',
    
  },
};

const centerAlignedProps: PageHeaderProps = {
  params: {
    Alignment: 'Center',
  },
  testId: 'PageHeaderCenter',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeader',
    dataSource: '/',
    
  },
};

const leftAlignedProps: PageHeaderProps = {
  params: {
    Alignment: 'Left',
  },
  testId: 'PageHeaderRight',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeader',
    dataSource: '/',
    
  },
};

export const mockPageHeaderProps = {
  default: defaultPageHeaderProps,
  center: centerAlignedProps,
  left: leftAlignedProps,
};

