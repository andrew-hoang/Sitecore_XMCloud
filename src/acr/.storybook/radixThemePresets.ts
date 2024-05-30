export default {
  white: { ['data-theme']: 'white', accentColor: 'gray' },
  'light-indigo': { ['data-theme']: 'light-indigo', accentColor: 'gray' },
  indigo: { ['data-theme']: 'indigo', accentColor: 'sky' },
  purple: { ['data-theme']: 'purple', accentColor: 'gray' },
} as ColorThemesType;

export type ColorThemesType = {
  [key: string]: { [key: string]: string };
};
