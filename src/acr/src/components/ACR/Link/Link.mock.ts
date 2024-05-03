import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { LinkBaseProps } from './Link.props';

export const defaultMockData: LinkBaseProps = {
  link: { value: { href: '/', text: 'Explore activities' } },
  style: ButtonStyle.BUTTON,
};

export const linkMockData: LinkBaseProps = {
  link: { value: { href: '/', text: 'Learn more' } },
  style: ButtonStyle.CTA,
};

export const withIconMockData: LinkBaseProps = {
  link: { value: { href: '/', text: 'Explore activities', linktype: 'download' } },
  style: ButtonStyle.BUTTON,
  hasIcon: true,
};

