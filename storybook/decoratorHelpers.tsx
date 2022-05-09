import { ReactNode } from 'react';
import { MediaQueriesProvider } from '../components/media-queries-context';
import { StorageDarkModeProvider } from '../components/storage-dark-mode-context';

export const globalDecorators = [
  // Media queries provider
  (storyFn: () => ReactNode) => {
    const Trigger = () => <>{storyFn()}</>;
    return (
      <MediaQueriesProvider>
        <StorageDarkModeProvider>
          <Trigger />
        </StorageDarkModeProvider>
      </MediaQueriesProvider>
    );
  },
];
