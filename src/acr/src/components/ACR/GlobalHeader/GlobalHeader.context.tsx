import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

interface GlobalHeaderContextProps {
  activeNavItem: string | null;
  isMobileMenuOpen: boolean;
  setActiveNavItem: Dispatch<SetStateAction<string | null>>;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const GlobalHeaderContext = createContext<GlobalHeaderContextProps>({
  activeNavItem: null,
  isMobileMenuOpen: false,
  setActiveNavItem: () => {
    return;
  },
  setIsMobileMenuOpen: () => {
    return;
  },
});

type ProviderProps = {
  children: React.ReactNode;
};

export const GlobalHeaderProvider = (props: ProviderProps) => {
  const { children } = props;

  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (activeNavItem !== null) {
      document.body.classList.add('has-navigation-open');
    } else {
      document.body.classList.remove('has-navigation-open');
    }
  }, [activeNavItem, isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const context = {
    activeNavItem,
    setActiveNavItem,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };

  return <GlobalHeaderContext.Provider value={context}>{children}</GlobalHeaderContext.Provider>;
};
