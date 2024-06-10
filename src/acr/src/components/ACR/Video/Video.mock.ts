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
        src: 'https://placehold.co/600x400',
        alt: '',
        width: '600',
        height: '400',
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
        linktype: 'download',
      },
    },
  },
};
