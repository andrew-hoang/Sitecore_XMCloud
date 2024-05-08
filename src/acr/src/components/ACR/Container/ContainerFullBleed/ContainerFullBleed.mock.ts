import { Theme } from 'src/enumerations/Theme.enum';
import { ContainerFullBleedProps } from './ContainerFullBleed.props';

export const defaultMockData: ContainerFullBleedProps = {
  params: {
    excludeTopMargin: '0',
    theme: Theme.LIGHT_INDIGO,
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'ContainerFullBleed',
    dataSource: '/',
    placeholders: {
      'acr-container-fullbleed': [],
    },
  },
};
