import { PageHeaderWithIconProps } from './PageHeaderWithIcon.props';




const defaultPageHeaderWithIconProps: PageHeaderWithIconProps = {
  params: {
    DisplayLicenseLink: '0',
  },
  testId: 'PageHeaderWithIconDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithIcon',
    dataSource: '/',
    
  },
};

const hideLinkProps: PageHeaderWithIconProps = {
  params: {
    DisplayLicenseLink: '0',
  },
  testId: 'PageHeaderWithIconHide',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithIcon',
    dataSource: '/',
    
  },
};

const showLinkProps: PageHeaderWithIconProps = {
  params: {
    DisplayLicenseLink: '1',
  },
  testId: 'PageHeaderWithIconShow',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithIcon',
    dataSource: '/',
    
  },
};

export const PageHeaderWithIconMock = {
  default: defaultPageHeaderWithIconProps,
  hide: hideLinkProps,
  show: showLinkProps,
};

