import { Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';

const playFair = Playfair_Display({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const beausite = localFont({
  src: [
    { path: '../../public/fonts/BeausiteClassicWeb-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/BeausiteClassicWeb-Medium.woff2', weight: '500', style: 'normal' },
    {
      path: '../../public/fonts/BeausiteClassicWeb-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    { path: '../../public/fonts/BeausiteClassicWeb-Bold.woff2', weight: '700', style: 'normal' },
  ],
  preload: true,
  display: 'swap',
  variable: '--font-sans',
});

export { playFair, beausite };
