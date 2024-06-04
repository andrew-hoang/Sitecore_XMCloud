import { MultiPromoProps } from './MultiPromo.props';

export const twoPromoData: MultiPromoProps = {
  name: 'MultiPromo',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'MultiPromo',
    dataSource: '/',
    placeholders: {
      'acr-multi-promo-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: 'https://www.acr.org/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/368/368',
                alt: 'image',
                height: '368',
                width: '368',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: 'https://www.acr.org/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/310/174',
                alt: 'image',
                height: '174',
                width: '310',
              },
            },
          },
        },
      ],
    },
  },
  fields: {
    heading: { value: 'Clinical Tools & References' },
    description: {
      value:
        'Evidence-based guidelines assist imaging professionals and referring providers in making the most approrpiate imaging or treatment decision for a specific clinical condition.',
    },
    link: {
      value: { href: '/', text: 'View all Clinical Tools & References', linktype: 'link' },
    },
  },
  promos: [],
};

export const threePromoData: MultiPromoProps = {
  name: 'MultiPromo',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'MultiPromo',
    dataSource: '/',
    placeholders: {
      'acr-multi-promo-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Use the Template', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/310/174',
                alt: 'image',
                height: '174',
                width: '310',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Resource' },
            title: {
              value:
                'How to Cite the ACR Reporting and Data Systems (RADS) Publications and Content',
            },
            description: {
              value: '',
            },
            link: { value: { href: '/', text: 'Learn more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'Lung-RADS Assistant (Computer Assisted Reporting) ' },
            description: {
              value: '',
            },
            link: { value: { href: '/', text: 'Learn more', linktype: 'link' } },
          },
        },
      ],
    },
  },
  fields: {
    heading: { value: 'Clinical Tools & References' },
    description: {
      value:
        'Evidence-based guidelines assist imaging professionals and referring providers in making the most approrpiate imaging or treatment decision for a specific clinical condition.',
    },
    link: {
      value: { href: '/', text: 'View all Clinical Tools & References', linktype: 'link' },
    },
  },
  promos: [],
};

export const fourPromoData: MultiPromoProps = {
  name: 'MultiPromo',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'MultiPromo',
    dataSource: '/',
    placeholders: {
      'acr-multi-promo-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/368/368',
                alt: 'image',
                height: '368',
                width: '368',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/310/174',
                alt: 'image',
                height: '174',
                width: '310',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/368/368',
                alt: 'image',
                height: '368',
                width: '368',
              },
            },
          },
        },
      ],
    },
  },
  fields: {
    heading: { value: 'Clinical Tools & References' },
    description: {
      value:
        'Evidence-based guidelines assist imaging professionals and referring providers in making the most approrpiate imaging or treatment decision for a specific clinical condition.',
    },
    link: {
      value: { href: '/', text: 'View all Clinical Tools & References', linktype: 'link' },
    },
  },
  promos: [],
};

export const fivePromoData: MultiPromoProps = {
  name: 'MultiPromo',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'MultiPromo',
    dataSource: '/',
    placeholders: {
      'acr-multi-promo-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/368/368',
                alt: 'image',
                height: '368',
                width: '368',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/310/174',
                alt: 'image',
                height: '174',
                width: '310',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
      ],
    },
  },
  fields: {
    heading: { value: 'Clinical Tools & References' },
    description: {
      value:
        'Evidence-based guidelines assist imaging professionals and referring providers in making the most approrpiate imaging or treatment decision for a specific clinical condition.',
    },
    link: {
      value: { href: '/', text: 'View all Clinical Tools & References', linktype: 'link' },
    },
  },
  promos: [],
};

export const sixPromoData: MultiPromoProps = {
  name: 'MultiPromo',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'MultiPromo',
    dataSource: '/',
    placeholders: {
      'acr-multi-promo-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/368/368',
                alt: 'image',
                height: '368',
                width: '368',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
      ],
    },
  },
  fields: {
    heading: { value: 'Clinical Tools & References' },
    description: {
      value:
        'Evidence-based guidelines assist imaging professionals and referring providers in making the most approrpiate imaging or treatment decision for a specific clinical condition.',
    },
    link: {
      value: { href: '/', text: 'View all Clinical Tools & References', linktype: 'link' },
    },
  },
  promos: [],
};

export const sevenPromoData: MultiPromoProps = {
  name: 'MultiPromo',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'MultiPromo',
    dataSource: '/',
    placeholders: {
      'acr-multi-promo-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/310/174',
                alt: 'image',
                height: '174',
                width: '310',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
            image: {
              value: {
                src: 'https://picsum.photos/310/174',
                alt: 'image',
                height: '174',
                width: '310',
              },
            },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Template' },
            title: { value: 'Reporting and Data Systems (RADS)' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'SimplePromo',
          dataSource: '/',
          fields: {
            eyebrowText: { value: 'Webinar' },
            title: { value: 'ACR Reporting and Data Systems (RADS) Criteria' },
            description: {
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            link: { value: { href: '/', text: 'Read more', linktype: 'link' } },
          },
        },
      ],
    },
  },
  fields: {
    heading: { value: 'Clinical Tools & References' },
    description: {
      value:
        'Evidence-based guidelines assist imaging professionals and referring providers in making the most approrpiate imaging or treatment decision for a specific clinical condition.',
    },
    link: {
      value: { href: '/', text: 'View all Clinical Tools & References', linktype: 'link' },
    },
  },
  promos: [],
};
