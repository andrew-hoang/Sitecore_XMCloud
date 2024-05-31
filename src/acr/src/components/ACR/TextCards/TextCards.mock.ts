import { Orientation } from 'src/enumerations/Orientation.enum';
import { TextCardsProps } from './TextCards.props';

export const defaultMockData: TextCardsProps = {
  name: 'TextCards',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'TextCards',
    dataSource: '/',
    placeholders: {
      'acr-container-text-cards-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'TextCard',
          dataSource: '/',
          params: {
            orientation: Orientation.IMAGE_LEFT,
          },
          fields: {
            image: {
              value: {
                src: 'https://picsum.photos/125/120',
                alt: '',
                width: 125,
                height: 120,
              },
            },
            description: {
              value:
                'A facility with this logo has been designated an ACR Comprehensive Breast Imaging Center by achieving accreditation in all breast imaging modalities.',
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'TextCard',
          dataSource: '/',
          params: {
            orientation: Orientation.IMAGE_RIGHT,
          },
          fields: {
            image: {
              value: {
                src: 'https://picsum.photos/125/120',
                alt: '',
                width: 125,
                height: 120,
              },
            },
            description: {
              value:
                'The ACR Diagnostic Imaging Center of Excellence logo indicates that a facility delivers the highest levels of imaging quality, safety and care by surpassing standard accreditation requirements.',
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'TextCard',
          dataSource: '/',
          params: {
            orientation: Orientation.IMAGE_LEFT,
          },
          fields: {
            description: {
              value:
                'Image Gently® supporter logo indicates a facility accredited in pediatric CT imaging. Such facilities commit to imaging pediatric patients with appropriate radiation dose.',
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'TextCard',
          dataSource: '/',
          params: {
            orientation: Orientation.IMAGE_RIGHT,
          },
          fields: {
            image: {
              value: {
                src: 'https://picsum.photos/125/120',
                alt: '',
                width: 125,
                height: 120,
              },
            },
            description: {
              value:
                'This seal indicates that a facility is an ACR Designated Lung Cancer Screening Center and has at least one accredited CT unit that meets the minimum requirements for acceptable lung cancer screening performance.',
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'TextCard',
          dataSource: '/',
          params: {
            orientation: Orientation.IMAGE_LEFT,
          },
          fields: {
            image: {
              value: {
                src: 'https://picsum.photos/125/120',
                alt: '',
                width: 125,
                height: 120,
              },
            },
            description: {
              value:
                'This seal indicates that a facility is an ACR Prostate Cancer MRI Designated Center and has at least one accredited MR unit that meets the minimum requirements for acceptable MR prostate exam performance.',
            },
          },
        },
      ],
    },
  },
  fields: {
    title: { value: 'What Do the Seals Mean?' },
    description: {
      value:
        'Some ACR-accredited facilities have received additional recognition. Look for the following seals in your search results.',
    },
  },
  items: [],
};
