import { BreadcrumbProps } from './Breadcrumb.props';

export const defaultMockData: BreadcrumbProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Breadcrumb',
    dataSource: '/',
  },
  fields: {},
  externalFields: {
    datasource: {
      name: 'Detail 1',
      ancestors: [
        {
          title: { jsonValue: { value: 'Home' } },
          shortTitle: { jsonValue: { value: '' } },
          name: 'Home',
          url: { href: '/en' },
        },
      ],
    },
    isPageEditing: false,
  },
};
