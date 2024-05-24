import { LinkListProps } from './LinkList.props';

export const defaultMockData: LinkListProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'LinkList',
    dataSource: '/',
  },
  fields: {
    link1: {
      value: { href: '/', text: 'ACR Radiation Safety Resources', linktype: 'media' },
    },
    link2: {
      value: {
        href: '/',
        text: 'ACR Guidance Document on MR Safe Practices',
        linktype: 'external',
      },
    },
    link3: {
      value: { href: '/', text: 'ACR Manual on Contrast Media', linktype: 'link' },
    },
    link4: {
      value: { href: '/', text: 'Whitepaper on Radiation Dose in Medicine', linktype: 'media' },
    },
    link5: {
      value: { href: '/', text: 'Mammography Guidelines', linktype: 'external' },
    },
    link6: {
      value: {
        href: '/',
        text: 'Whitepaper on Radiation Dose in Medicine: 3 years later',
        linktype: 'link',
      },
    },
    link7: {
      value: {
        href: '/',
        text: 'U.S. Diagnostic Reference Levels and Achievable Doses for 10 Adult CT Examinations',
        linktype: 'media',
      },
    },
    link8: {
      value: { href: '/', text: 'ACR Radiation Safety Resources' },
    },
    link9: {
      value: { href: '/', text: 'ACR Radiation Safety Resources', linktype: 'media' },
    },
    link10: {
      value: { href: '/', text: 'ACR Radiation Safety Resources', linktype: 'media' },
    },
  },
};
