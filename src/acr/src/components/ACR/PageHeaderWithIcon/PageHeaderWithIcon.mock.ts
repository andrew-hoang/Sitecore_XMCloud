import { PageHeaderWithIconProps } from './PageHeaderWithIcon.props';

export const defaultMockData: PageHeaderWithIconProps = {
  params: {
    displayLicenseLink: '0',
  },
  testId: 'PageHeaderWithIcon',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithIcon',
    dataSource: '/',
  },
  externalFields: {
    headerTitle: { value: 'Lung-RADS®' },
    image1x1: {
      value: {
        src: 'https://picsum.photos/1290/1290',
        alt: '',
        width: '1290',
        height: '1290',
      },
    },
    subtitle: { value: 'Quality assurance for lung cancer CT screening.' },
  },
};
