import { Orientation } from 'src/enumerations/Orientation.enum';
import { PromoProps } from './Promo.props';

export const defaultMockData: PromoProps = {
  params: {
    orientation: Orientation.IMAGE_RIGHT,
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Promo',
    dataSource: '/',
  },
  fields: {
    eyebrowText: { value: 'Eyebrow text' },
    title: { value: 'Headline text' },
    titleHighlight: { value: 'goes here' },
    description: {
      value:
        'With so many initiatives going on at once, the College needs a well-defined, streamlined structure that is well representative of its diverse constituency. But who does what, how do the different parts of the ACR fit together, and how are you represented in this structure?',
    },
    primaryLink: { value: { href: '/', text: 'Learn more', linktype: 'cta' } },
    secondaryLink: { value: { href: '/', text: 'Learn more', linktype: 'link' } },
    image: {
      value: {
        src: 'https://picsum.photos/570/583',
        alt: 'image',
        height: '583',
        width: '570',
      },
    },
  },
};
