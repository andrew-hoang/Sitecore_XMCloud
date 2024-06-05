import { PageHeaderWithImageProps } from './PageHeaderWithImage.props';
import { Orientation } from 'src/enumerations/Orientation.enum';

export const defaultMockData: PageHeaderWithImageProps = {
  params: {
    orientation: Orientation.IMAGE_LEFT,
  },
  testId: 'PageHeaderWithImageDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeaderWithImage',
    dataSource: '/',
  },
  externalFields: {
    headerTitle: { value: 'Unlocking AI Transparency in Radiology: A New Era with AICentral.org' },
    image16x9: {
      value: {
        src: 'https://picsum.photos/1290/726',
        alt: '',
        width: '1290',
        height: '726',
      },
    },
    contentType: { name: 'Blog', id: '1' },
    image1x1: {
      value: {
        src: 'https://picsum.photos/seed/pageheader/726/726',
        alt: '',
        width: '726',
        height: '726',
      },
    },
    subtitle: {
      value:
        'AICentral.org is the premier online resource for information on FDA-cleared imaging AI tools, helping you find the algorithms that best support your patients and workflows',
    },
  },
};
