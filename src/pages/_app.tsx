import '../styles/globals.css';
import { MediaQueriesProvider } from '../../common-components/media-queries-context';
import { StorageDarkModeProvider } from '../../common-components/storage-dark-mode-context';

const MyApp = ({ Component, pageProps }) => (
  <MediaQueriesProvider>
    <StorageDarkModeProvider>
      <Component {...pageProps} />
    </StorageDarkModeProvider>
  </MediaQueriesProvider>
);

export default MyApp;
