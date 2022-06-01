import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRef, useCallback, useState, useEffect, ReactNode } from 'react';
import { Button } from '../../../common-components/Button';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { colors } from '../../../common-components/design-tokens';
import { useMediaQueries } from '../../../common-components/media-queries-context';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { GlobalStyles } from './globalStyles';
import { StyledMain } from './styles';
import { ModalDrawerProps } from '../../../common-components/ModalDrawer/types';
import { API_BASE_URL } from '../../lib/constants';

const DynamicModalDrawer = dynamic<ModalDrawerProps>(() =>
  import('../../../common-components/ModalDrawer').then(
    ({ ModalDrawer }) => ModalDrawer
  )
);

const DynamicProfilePulldownContent = dynamic(() =>
  import('../ProfilePulldownContent').then(
    ({ ProfilePulldownContent }) => ProfilePulldownContent
  )
);

interface PageShellProps {
  children?: ReactNode;
  isFullWidth?: boolean;
}
export const PageShell = ({ children, isFullWidth }: PageShellProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const focusRef = useRef(null);
  const { isDarkMode } = useStorageDarkMode();
  const { xsMax, smMax, mdMax } = useMediaQueries();

  useEffect(() => {
    if (isModalOpen) {
      setIsModalDisplayed(true);
    }
  }, [isModalOpen]);

  const onCloseCallback = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalDisplayed(false);
    }, 400);
    if (focusRef && 'current' in focusRef) {
      focusRef.current?.focus();
    }
  }, [focusRef]);

  const handleOpenProfileDrawer = useCallback(() => {
    setIsModalOpen(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  let modalSize = 350;
  if (xsMax) {
    modalSize = 400;
  } else if (smMax) {
    modalSize = 360;
  } else if (mdMax) {
    modalSize = 380;
  }

  return (
    <>
      <Head>
        <title>Tim J: Software Engineer</title>
        <meta content="Tim J: Software Engineer" name="description" />
        <meta content={colors.tertiary} name="theme-color" />
        <link href={API_BASE_URL} rel="preconnect" />
        <link href="/favicon.png" rel="icon" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <GlobalStyles isDarkMode={isDarkMode} />
      <Header
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        isFullWidth={isFullWidth}
        ref={focusRef}
      />
      <StyledMain isFullWidth={isFullWidth}>{children}</StyledMain>
      <Footer handleOpenProfileDrawer={handleOpenProfileDrawer} />
      {isModalDisplayed && (
        <DynamicModalDrawer
          background={isDarkMode ? colors.grayDarker : colors.grayLightest}
          closeType="floating"
          customClose={<Button size="sm">Close profile</Button>}
          direction="top"
          isOpen={isModalOpen}
          onCloseCallback={onCloseCallback}
          size={modalSize}
        >
          <DynamicProfilePulldownContent />
        </DynamicModalDrawer>
      )}
    </>
  );
};

PageShell.displayName = 'PageShell';
