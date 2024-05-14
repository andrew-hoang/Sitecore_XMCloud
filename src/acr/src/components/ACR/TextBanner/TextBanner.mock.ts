import { TextBannerProps } from './TextBanner.props';

export const defaultMockData: TextBannerProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'TextBanner',
    dataSource: '/',
  },
  fields: {
    title: { value: 'Requests to Reproduce Lung-RADS' },
    description: {
      value:
        'Evidence-based guidelines assist imaging professionals and referring providers in making the most appropriate imaging or treatment decision for a specific clinical condition.',
    },
    link: { value: { href: '/', text: 'Submit request' } },
  },
};
