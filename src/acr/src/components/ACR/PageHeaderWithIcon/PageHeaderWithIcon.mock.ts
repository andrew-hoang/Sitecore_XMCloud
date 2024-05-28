import { PageHeaderWithIconProps } from './PageHeaderWithIcon.props';

const defaultPageHeaderWithIconProps: PageHeaderWithIconProps = {
  params: {
    displayLicenseLink: '0',
  },
  testId: 'PageHeaderWithIconDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithIcon',
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

const hideLinkProps: PageHeaderWithIconProps = {
  params: {
    displayLicenseLink: '0',
  },
  testId: 'PageHeaderWithIconHide',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithIcon',
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

const showLinkProps: PageHeaderWithIconProps = {
  params: {
    displayLicenseLink: '1',
  },
  testId: 'PageHeaderWithIconShow',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithIcon',
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

export const PageHeaderWithIconMock = {
  default: defaultPageHeaderWithIconProps,
  hide: hideLinkProps,
  show: showLinkProps,
};
