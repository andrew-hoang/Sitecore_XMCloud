import { LinkListProps } from './LinkList.props';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

export const defaultMockData: LinkListProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'LinkList',
    dataSource: '/',
  },
  hasIcon: true,
  style: ButtonStyle.LINK,
  isInHalfWidthContainer: false,
  fields: {
    links: [
      { value: { href: "/", text: "ACR Radiation Safety Resources", linktype: 'media' } },
      { value: { href: "/", text: "ACR Guidance Document on MR Safe Practices", linktype: 'external' } },
      { value: { href: "/", text: "ACR Manual on Contrast Media", linktype: 'link' } },
      { value: { href: "/", text: "Whitepaper on Radiation Dose in Medicine", linktype: 'media' } },
      { value: { href: "/", text: "Mammography Guidelines", linktype: 'external' } },
      { value: { href: "/", text: "Whitepaper on Radiation Dose in Medicine: 3 years later", linktype: 'link' } },
      { value: { href: "/", text: "U.S. Diagnostic Reference Levels and Achievable Doses for 10 Adult CT Examinations", linktype: 'media' } },
    ]
  },
};
