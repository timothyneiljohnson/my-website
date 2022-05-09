import '../styles/globals.css';
import { MediaQueriesProvider } from '../components/media-queries-context';
import { StorageDarkModeProvider } from '../components/storage-dark-mode-context';

const MyApp = ({ Component, pageProps }) => (
  <MediaQueriesProvider>
    <StorageDarkModeProvider>
      <Component {...pageProps} />
    </StorageDarkModeProvider>
  </MediaQueriesProvider>
);

export default MyApp;
