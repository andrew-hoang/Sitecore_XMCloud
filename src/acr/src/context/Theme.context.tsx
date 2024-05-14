import { createContext } from 'react';
import { Theme } from 'src/enumerations/Theme.enum';

interface ThemeContextProps {
  theme?: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({});
