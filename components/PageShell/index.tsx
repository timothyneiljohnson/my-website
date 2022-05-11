import Head from 'next/head';
import { useRef, useCallback, useState } from 'react';
import { Button, Footer, Header, ModalDrawer } from '../../common-components';
import { colors } from '../../common-components/design-tokens';
import { useMediaQueries } from '../media-queries-context';
import { ProfilePulldownContent } from '../ProfilePulldownContent';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { GlobalStyles } from './globalStyles';
import { StyledMain } from './styles';

export const PageShell = ({ children }) => {
  const [isProfilePulldownOpen, setProfilePulldownOpen] = useState(false);
  const profileButtonFocusRef = useRef(null);
  const { isDarkMode } = useStorageDarkMode();
  const { smMax } = useMediaQueries();

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
      <GlobalStyles isDarkMode={isDarkMode} />
      <Header
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        ref={profileButtonFocusRef}
      />
      <StyledMain>{children}</StyledMain>
      <Footer handleOpenProfileDrawer={handleOpenProfileDrawer} />
      <ModalDrawer
        background={isDarkMode ? colors.grayDarker : colors.grayLightest}
        closeType="floating"
        customClose={<Button size="sm">Close profile</Button>}
        direction="top"
        isOpen={isProfilePulldownOpen}
        onCloseCallback={onCloseCallback}
        size={smMax ? 320 : 330}
      >
        <ProfilePulldownContent />
      </ModalDrawer>
    </>
  );
};

PageShell.displayName = 'PageShell';
