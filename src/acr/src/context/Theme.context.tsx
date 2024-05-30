import { createContext, useContext } from 'react';
import { Theme } from 'src/enumerations/Theme.enum';

interface ThemeContextProps {
  theme?: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const useTheme = () => {
  const context = useContext(ThemeContext);

  const theme = context.theme;

  const useWhiteBg = theme === Theme.LIGHT_INDIGO || theme === Theme.PURPLE;
  const useLightIndigoBg = theme === Theme.WHITE || theme === Theme.INDIGO;

  const linkStyle = useLightIndigoBg ? Theme.LIGHT_INDIGO : Theme.WHITE;

  const setAltTheme = () => {
    switch (theme) {
      case Theme.LIGHT_INDIGO:
      case Theme.PURPLE:
        return Theme.WHITE;
      case Theme.WHITE:
      case Theme.INDIGO:
        return Theme.LIGHT_INDIGO;
      default:
        return '';
    }
  };

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return {
    theme,
    useWhiteBg,
    useLightIndigoBg,
    linkStyle,
    setAltTheme,
  };
};
