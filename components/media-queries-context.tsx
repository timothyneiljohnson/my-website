import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { mediaQueries } from '../common-components/design-tokens';

const defaultValue = {};

interface MediaQueriesContextProps {
  xs?: boolean;
  xsMax?: boolean;
  sm?: boolean;
  smMax?: boolean;
  md?: boolean;
  mdMax?: boolean;
  lg?: boolean;
  lgMax?: boolean;
  xl?: boolean;
  portait?: boolean;
  darkMode?: boolean;
  reduceMotion?: boolean;
}

const MediaQueriesContext = createContext(defaultValue);

interface MediaQueriesProps {
  children: ReactNode;
}

const MediaQueriesProvider = ({ children }: MediaQueriesProps) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(mediaQueries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media]?.matches
        );
        return acc;
      }, {});
      setQueryMatch(updatedMatches);
    };

    if (window?.matchMedia) {
      const matches = {};
      keys.forEach((media) => {
        if (typeof mediaQueries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(mediaQueries[media]);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach((media) => {
        if (typeof mediaQueries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof mediaQueries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, []);

  return (
    <MediaQueriesContext.Provider value={queryMatch}>
      {children}
    </MediaQueriesContext.Provider>
  );
};

const useMediaQueries = () => {
  const context = useContext<MediaQueriesContextProps>(MediaQueriesContext);
  if (context === defaultValue) {
    throw new Error('useMediaQueries must be used within MediaQueriesProvider');
  }
  return context;
};

export { useMediaQueries, MediaQueriesProvider };
