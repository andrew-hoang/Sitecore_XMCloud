import { SideNavigationProps } from './SideNavigation.props';

export const defaultMockData: SideNavigationProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'SideNavigation',
    dataSource: '/',
  },
  fields: {
    title: { value: 'MOCK_DATA_HEADING' },
    links: [
      {
        id: 'bb040074-e0da-41b3-8ec6-8fa69df79368',
        url: '/SideNav/Data/SideNaveTest/Sub-Nav-1?sc_site=ACR',
        name: 'Sub Nav 1',
        displayName: 'Sub Nav 1',
        fields: {
          link: {
            value: {
              href: 'http://#',
              text: 'Subnav 1',
              linktype: 'external',
              url: 'http://#',
              anchor: '',
              target: '',
            },
          },
        },
      },
      {
        id: '7a3bf269-5be2-4c93-a697-b81e70969468',
        url: '/SideNav/Data/SideNaveTest/Sub-Nav-2?sc_site=ACR',
        name: 'Sub Nav 2',
        displayName: 'Sub Nav 2',
        fields: {
          link: {
            value: {
              href: 'http://#',
              text: 'Subnav 2',
              linktype: 'external',
              url: 'http://#',
              anchor: '',
              target: '',
            },
          },
        },
      },
    ],
  },
};
