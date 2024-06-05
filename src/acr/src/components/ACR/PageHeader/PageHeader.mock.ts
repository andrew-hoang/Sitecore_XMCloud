import { Alignment } from 'src/enumerations/Aligment.enum';
import { PageHeaderProps } from './PageHeader.props';

export const defaultMockData: PageHeaderProps = {
  params: {
    alignment: Alignment.Left,
  },
  testId: 'PageHeaderDefault',
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PageHeader',
    dataSource: '/',
  },
  externalFields: {
    headerTitle: {
      value:
        'National Medical Groups Express Growing Concern Over HHS Extended Closure of Arbitration',
    },
    image16x9: {
      value: {
        src: '',
      },
    },
    contentType: { name: 'Tag', id: '1' },
    image1x1: {
      value: {
        src: '',
      },
    },
    subtitle: {
      value:
        'AICentral.org is the premier online resource for information on FDA-cleared imaging AI tools, helping you find the algorithms that best support your patients and workflows',
    },
  },
};
