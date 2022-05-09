import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import { useMediaQueries } from './media-queries-context';

interface StorageDarkModeContextProps {
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}
const defaultValue = {
  isDarkMode: false,
  toggleDarkMode: () => false,
};
const StorageDarkModeContext =
  createContext<StorageDarkModeContextProps>(defaultValue);

interface StorageDarkModeProps {
  children: ReactNode;
}
const StorageDarkModeProvider = ({ children }: StorageDarkModeProps) => {
  const { darkMode } = useMediaQueries();
  const [darkModeState, setDarkModeState] = useState(null);

  // Manually toggle dark modem, persist in local storage
  const handleToggleDarkModeManually = useCallback(() => {
    setDarkModeState(!darkModeState);
    localStorage.setItem('mysite-dark-mode', (!darkModeState).toString());
  }, [darkModeState]);

  const value = useMemo(() => ({
    isDarkMode: darkModeState,
    toggleDarkMode: handleToggleDarkModeManually,
  }), [darkModeState, handleToggleDarkModeManually]);

  // Initially set state to local storage value, or fallback to system preference
  useEffect(() => {
    const localStorageDarkModeString = localStorage.getItem('mysite-dark-mode');
    const newStorageDarkModeValue = localStorageDarkModeString
      ? localStorageDarkModeString === 'true'
      : darkModeState;

    if (localStorageDarkModeString) {
      setDarkModeState(newStorageDarkModeValue);
    }
  }, [darkModeState]);

  // If no storage value, follow system preference
  useEffect(() => {
    const localStorageDarkModeString = localStorage.getItem('mysite-dark-mode');
    if (
      localStorageDarkModeString === null ||
      localStorageDarkModeString === undefined
    ) {
      setDarkModeState(darkMode);
    }
  }, [darkMode]);

  return (
    <StorageDarkModeContext.Provider value={value}>
      {children}
    </StorageDarkModeContext.Provider>
  );
};

const useStorageDarkMode = () => {
  const context = useContext<StorageDarkModeContextProps>(
    StorageDarkModeContext
  );
  if (context === defaultValue) {
    throw new Error(
      'useStorageDarkMode must be used within StorageDarkModeProvider'
    );
  }
  return context;
};

export { useStorageDarkMode, StorageDarkModeProvider };
