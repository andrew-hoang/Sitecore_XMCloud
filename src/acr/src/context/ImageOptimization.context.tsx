import { createContext } from 'react';

// https://dejanvasic.wordpress.com/2022/05/08/next-images-in-storybook/
// Next's Image component doesn't work in Storybook, so just unoptimize it and it will work again

interface ImageOptions {
  unoptimized: boolean;
}

export const ImageOptimizationContext = createContext({ unoptimized: false });

interface ProviderProps extends ImageOptions {
  children: React.ReactNode;
}

// This provider is useful for allowing storybook to use a unoptimized: true
export const ImageOptimizationProvider = ({ children, unoptimized }: ProviderProps) => {
  return (
    <ImageOptimizationContext.Provider value={{ unoptimized }}>
      {children}
    </ImageOptimizationContext.Provider>
  );
};
