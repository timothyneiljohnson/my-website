import React, { useMemo } from 'react';

interface ImageOptions {
  unoptimized: boolean;
}

interface ProviderProps extends ImageOptions {
  children: React.ReactNode;
}

export const ImageOptimizationContext = React.createContext<ImageOptions>({
  unoptimized: false,
});

// This provider is useful for allowing storybook to use unoptimized: true
export const ImageOptimizationProvider = ({
  children,
  unoptimized,
}: ProviderProps) => {
  const value = useMemo(
    () => ({
      unoptimized,
    }),
    [unoptimized]
  );

  return (
    <ImageOptimizationContext.Provider value={value}>
      {children}
    </ImageOptimizationContext.Provider>
  );
};
