import { SearchBarProps } from './SearchBar.props';

export const defaultMockData: SearchBarProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'SearchBar',
    dataSource: '/',
  },
  fields: {
    title: { value: "Still can't find what you're looking for?" },
    inputPlaceholderText: { value: 'Search' },
    searchHub: {
      id: '1',
      name: 'Search Hub',
      fields: {
        name: { value: 'Search Hub Name' },
        value: { value: 'www.example.com' },
      },
    },
  },
};
