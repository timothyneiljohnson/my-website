import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRef, useCallback, useState, useEffect } from 'react';
import { Button } from '../../common-components/Button';
import { Footer } from '../../common-components/Footer';
import { Header } from '../../common-components/Header';
import { colors } from '../../common-components/design-tokens';
import { useMediaQueries } from '../media-queries-context';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { GlobalStyles } from './globalStyles';
import { StyledMain } from './styles';
import { ModalDrawerProps } from '../../common-components/ModalDrawer';
import { BASE_URL } from '../../lib/constants';

const DynamicModalDrawer = dynamic<ModalDrawerProps>(() =>
  import('../../common-components/ModalDrawer').then(
    ({ ModalDrawer }) => ModalDrawer
  )
);

const DynamicProfilePulldownContent = dynamic(() =>
  import('../ProfilePulldownContent').then(
    ({ ProfilePulldownContent }) => ProfilePulldownContent
  )
);

export const PageShell = ({ children }) => {
  const [isProfilePulldownOpen, setProfilePulldownOpen] = useState(false);
  const [isModalOverlayDisplayed, setIsModalOverlayDisplayed] = useState(false);
  const profileButtonFocusRef = useRef(null);
  const { isDarkMode } = useStorageDarkMode();
  const { smMax } = useMediaQueries();

  useEffect(() => {
    if (isProfilePulldownOpen) {
      setIsModalOverlayDisplayed(true);
    }
  }, [isProfilePulldownOpen]);

  const onCloseCallback = useCallback(() => {
    setProfilePulldownOpen(false);
    setTimeout(() => {
      setIsModalOverlayDisplayed(false);
    }, 400);
    if (profileButtonFocusRef && 'current' in profileButtonFocusRef) {
      profileButtonFocusRef.current?.focus();
    }
  }, [profileButtonFocusRef]);

  const handleOpenProfileDrawer = useCallback(() => {
    setProfilePulldownOpen(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Tim J: Software Engineer</title>
        <meta content="Tim J: Software Engineer" name="description" />
        <meta content={colors.tertiary} name="theme-color" />
        <link href={BASE_URL} rel="preconnect" />
        <link href="/favicon.png" rel="icon" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <GlobalStyles isDarkMode={isDarkMode} />
      <Header
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        ref={profileButtonFocusRef}
      />
      <StyledMain>{children}</StyledMain>
      <Footer handleOpenProfileDrawer={handleOpenProfileDrawer} />
      {isModalOverlayDisplayed && (
        <DynamicModalDrawer
          background={isDarkMode ? colors.grayDarker : colors.grayLightest}
          closeType="floating"
          customClose={<Button size="sm">Close profile</Button>}
          direction="top"
          isOpen={isProfilePulldownOpen}
          onCloseCallback={onCloseCallback}
          size={smMax ? 320 : 330}
        >
          <DynamicProfilePulldownContent />
        </DynamicModalDrawer>
      )}
    </>
  );
};

PageShell.displayName = 'PageShell';
