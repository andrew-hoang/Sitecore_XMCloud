import { GlobalFooterProps } from './GlobalFooter.props';

export const defaultMockData: GlobalFooterProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'GlobalFooter',
    dataSource: '/',
    placeholders: {
      'acr-container-footer-links-a-{*}': [
        {
          uid: '0b4a47ad-247c-40e0-b9e1-6f9513c9dc0d',
          componentName: 'FooterLink',
          dataSource: '{BA02F288-791B-4E0B-833E-7CC1EFF8F478}',
          params: { GridParameters: 'col-12', DynamicPlaceholderId: '2', FieldNames: 'Default' },
          fields: {
            link: {
              value: {
                text: 'Test Link',
                anchor: '',
                linktype: 'internal',
                class: '',
                title: '',
                target: '',
                querystring: 'sc_site=ACR',
                id: '{7B68C3B0-3FBC-4D59-92EA-3E23535E7755}',
                href: '/',
              },
            },
          },
        },
      ],
      'acr-container-footer-links-b-{*}': [
        {
          uid: 'ef7f7220-9e58-4cd0-8235-3357cdcda515',
          componentName: 'FooterLink',
          dataSource: '{246751FD-1FE4-4D00-9E67-6972A405B170}',
          params: { GridParameters: 'col-12', DynamicPlaceholderId: '3', FieldNames: 'Default' },
          fields: {
            link: {
              value: {
                linktype: 'internal',
                text: 'Test link 2',
                querystring: 'sc_site=ACR',
                target: '',
                id: '{7B68C3B0-3FBC-4D59-92EA-3E23535E7755}',
                href: '/',
              },
            },
          },
        },
      ],
      'acr-container-footer-links-c-{*}': [],
      'acr-container-footer-links-d-{*}': [],
    },
  },
  fields: {
    locationName: {
      value: 'Headquarters Office',
    },
    zipcode: {
      value: '20191',
    },
    phoneNumber: {
      value: '7036488900',
    },
    address1: {
      value: '1892 Preston White Dr.',
    },
    address2: {
      value: '',
    },
    city: {
      value: 'Reston',
    },
    state: {
      value: 'VA',
    },
    copyrightStatement: {
      value: 'Copyright © American College of Radiology',
    },
    footerLogo: {
      value: {
        src: '',
      },
    },
    footerNewsletterText: {
      value: 'Get the latest ACR news',
    },
    footerNewsletterLink: {
      value: {
        href: '/',
        text: 'Sign up',
      },
    },
    directoryTitle: {
      value: 'Company Directory',
    },
    directoryDescription: {
      value: 'Looking for a specific department?',
    },
    directoryLink: {
      value: {
        href: '/',
        text: 'See all',
      },
    },
    engageLink: {
      value: {
        href: '/',
        text: 'Learn More',
      },
    },
    engageTitle: {
      value: 'Engage Forum',
    },
    engageDescription: {
      value: 'A discussion forum for ACR members.',
    },
    socialLinks: [
      {
        link: {
          value: {
            href: '/',
            title: 'Facebook',
          },
        },
        socialIcon: 'facebook',
      },
      {
        link: {
          value: {
            href: '/',
            title: 'Instagram',
          },
        },
        socialIcon: 'instagram',
      },
      {
        link: {
          value: {
            href: '/',
            title: 'Youtube',
          },
        },
        socialIcon: 'youtube',
      },
      {
        link: {
          value: {
            href: '/',
            title: 'Twitter X',
          },
        },
        socialIcon: 'twitterx',
      },
      {
        link: {
          value: {
            href: '/',
            title: 'Linkedin',
          },
        },
        socialIcon: 'linkedin',
      },
    ],
  },
};
