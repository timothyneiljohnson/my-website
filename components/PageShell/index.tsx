import Head from 'next/head';
import { useRef, useCallback, useState } from 'react';
import { Footer, Header, ModalDrawer } from '../../common-components';
import { ProfilePulldownContent } from '../ProfilePulldownContent';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { GlobalStyles } from './globalStyles';
import { StyledMain } from './styles';

export const PageShell = ({ children }) => {
  const [isProfilePulldownOpen, setProfilePulldownOpen] = useState(false);
  const profileButtonFocusRef = useRef(null);
  const { isDarkMode } = useStorageDarkMode();

  const onCloseCallback = useCallback(() => {
    setProfilePulldownOpen(false);
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
        <link href="/favicon.png" rel="icon" />
      </Head>
      <GlobalStyles
        isDarkMode={isDarkMode}
      />
      <Header
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        ref={profileButtonFocusRef}
      />
      <StyledMain>{children}</StyledMain>
      <Footer handleOpenProfileDrawer={handleOpenProfileDrawer} />
      <ModalDrawer
        customCloseText="Close profile"
        direction="top"
        isOpen={isProfilePulldownOpen}
        onCloseCallback={onCloseCallback}
        size={345}
      >
        <ProfilePulldownContent />
      </ModalDrawer>
    </>
  );
};

PageShell.displayName = 'PageShell';
