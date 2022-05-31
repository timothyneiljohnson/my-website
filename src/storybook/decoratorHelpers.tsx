import { ReactNode } from 'react';
import { MediaQueriesProvider } from '../../common-components/media-queries-context';
import { StorageDarkModeProvider } from '../../common-components/storage-dark-mode-context';
import { ImageOptimizationProvider } from '../../common-components/Image/image-optimization-context';

export const globalDecorators = [
  // Media queries provider
  (storyFn: () => ReactNode) => {
    const Trigger = () => <>{storyFn()}</>;
    return (
      <MediaQueriesProvider>
        <StorageDarkModeProvider>
          <ImageOptimizationProvider unoptimized={true}>
            <Trigger />
          </ImageOptimizationProvider>
        </StorageDarkModeProvider>
      </MediaQueriesProvider>
    );
  },
];
