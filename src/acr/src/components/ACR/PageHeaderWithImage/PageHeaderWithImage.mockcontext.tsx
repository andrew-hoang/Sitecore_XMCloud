import React, { ReactNode } from 'react';
import { ThemeContext } from 'src/context/Theme.context';
import { Theme } from 'src/enumerations/Theme.enum';

const defaultThemeContext = {
  theme: Theme.WHITE,
};

export const MockThemeContextProvider = ({
  context = defaultThemeContext,
  children,
}: {
  context?: any;
  children: ReactNode;
}) => {
  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};
