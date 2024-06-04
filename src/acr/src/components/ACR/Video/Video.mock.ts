import { VideoProps } from './Video.props';

export const defaultMockData: VideoProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Video',
    dataSource: '/',
  },
  fields: {
    coverImage: {
      value: {
        src: '/-/media/Feature/JSS-Experience-Accelerator/Basic-Site/banner-image.jpg?h=2001&iar=0&w=3000',
        alt: '',
        width: '3000',
        height: '2001',
      },
    },
    video: {
      value: {
        href: 'https://youtu.be/Z38JJpQ5mVE?si=hXWS_GMrtR_puriI',
        text: 'Funny Cat',
        linktype: 'external',
        url: 'https://youtu.be/Z38JJpQ5mVE?si=hXWS_GMrtR_puriI',
        anchor: '',
        target: '',
      },
    },
    caption: { value: 'Funny cat videos' },
    transcript: {
      value: {
        src: '/-/media/Feature/ACR/Multimedia/image-thumbnail.png',
        name: 'image-thumbnail',
        displayName: 'image-thumbnail',
        title: '',
        keywords: '',
        description: '',
        extension: 'png',
        mimeType: 'image/png',
        size: '1356218',
      },
    },
  },
};
