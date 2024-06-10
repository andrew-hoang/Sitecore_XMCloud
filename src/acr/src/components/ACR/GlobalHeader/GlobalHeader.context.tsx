import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import useMatchMedia from 'src/hooks/useMatchMedia';
import { BP_GLOBAL_HEADER } from 'src/variables/global';
import {
  PrimaryNavItemColumn,
  PrimaryNavItemProps,
} from './PrimaryNavigation/PrimaryNavigation.props';
import { GlobalHeaderLabels } from './GlobalHeader.props';

interface GlobalHeaderContextProps {
  labels?: GlobalHeaderLabels;
  activeNavItem: string | null;
  activeMobileNavItem: string | null;
  activeChildItem: PrimaryNavItemColumn | null;
  setActiveChildItem: Dispatch<SetStateAction<PrimaryNavItemProps | PrimaryNavItemColumn | null>>;
  isMobileMenuOpen: boolean;
  isMobileSearchOpen: boolean;
  setActiveNavItem: Dispatch<SetStateAction<string | null>>;
  setActiveMobileNavItem: Dispatch<SetStateAction<string | null>>;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsMobileSearchOpen: Dispatch<SetStateAction<boolean>>;
}

export const GlobalHeaderContext = createContext<GlobalHeaderContextProps>({
  activeNavItem: null,
  activeMobileNavItem: null,
  isMobileMenuOpen: false,
  isMobileSearchOpen: false,
  activeChildItem: null,
  setActiveChildItem: () => {
    return;
  },
  setActiveNavItem: () => {
    return;
  },
  setActiveMobileNavItem: () => {
    return;
  },
  setIsMobileMenuOpen: () => {
    return;
  },
  setIsMobileSearchOpen: () => {
    return;
  },
});

type ProviderProps = {
  labels: GlobalHeaderLabels;
  children: React.ReactNode;
};

export const GlobalHeaderProvider = (props: ProviderProps) => {
  const { children, labels } = props;

  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [activeMobileNavItem, setActiveMobileNavItem] = useState<string | null>(null);

  // Mobile State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);
  const [activeChildItem, setActiveChildItem] = useState<PrimaryNavItemColumn | null>(null);

  const isLargeBreakpoint = useMatchMedia(`(min-width: ${BP_GLOBAL_HEADER}px)`);

  useEffect(() => {
    const closeMenu = () => {
      if (isLargeBreakpoint) {
        setIsMobileMenuOpen(false);
        setIsMobileSearchOpen(false);
      } else {
        setActiveNavItem(null);
      }
    };

    window.addEventListener('resize', closeMenu);

    return () => {
      window.removeEventListener('resize', closeMenu);
    };
  }, [isLargeBreakpoint]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    setActiveNavItem(null);
    setActiveMobileNavItem(null);
    setActiveChildItem(null);
  }, [isMobileMenuOpen]);

  const context = {
    labels,
    activeNavItem,
    activeMobileNavItem,
    activeChildItem,
    setActiveNavItem,
    setActiveMobileNavItem,
    setActiveChildItem,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobileSearchOpen,
    setIsMobileSearchOpen,
  };

  return <GlobalHeaderContext.Provider value={context}>{children}</GlobalHeaderContext.Provider>;
};
