import { GlobalFooterProps } from './GlobalFooter.props';

export const defaultMockData: GlobalFooterProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'GlobalFooter',
    dataSource: '/',
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
        text: "Sign up"
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
        text: 'See all'
      },
    },
    engageLink: {
      value: {
        href: '/',
        text: 'Learn More'
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
  externalFields: {
    footerColumn1: [
      {
        link: { value: { href: '/', text: 'Membership' } },
      },
      {
        link: { value: { href: '/', text: 'Clinical Resources' } },
      },
      {
        link: { value: { href: '/', text: 'Accrediation' } },
      },
      {
        link: { value: { href: '/', text: 'Media Center' } },
      },
    ],
    footerColumn2: [
      {
        link: { value: { href: '/', text: 'For Patients' } },
      },
      {
        link: { value: { href: '/', text: 'Jobs at ACR' } },
      },
      {
        link: { value: { href: '/', text: 'ACR Foundation' } },
      },
      {
        link: { value: { href: '/', text: 'Contact' } },
      },
    ],
    footerColumn4: [
      {
        link: { value: { href: '/', text: 'Legal' } },
      },
      {
        link: { value: { href: '/', text: 'Data and Privacy Policy Center' } },
      },
    ],
  }
};
