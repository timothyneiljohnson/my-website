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
import { StyledMain, BackToTop, BackToTopButton } from './styles';
import { ModalDrawerProps } from '../../../common-components/ModalDrawer/types';
import { API_BASE_URL } from '../../lib/constants';
import { Icon } from '../../../common-components/Icon';

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
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollCallback = useCallback((event) => {
    const { scrollTop } = event.target?.scrollingElement ?? {};

    setShowBackToTop(scrollTop > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollCallback);
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  });

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

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleOpenProfileDrawer = useCallback(() => {
    setIsModalOpen(true);
    handleScrollToTop();
  }, [handleScrollToTop]);

  let modalSize = 364;
  if (xsMax) {
    modalSize = 350;
  } else if (smMax) {
    modalSize = 304;
  } else if (mdMax) {
    modalSize = 392;
  }

  return (
    <>
      <Head>
        <title>Tim J: Software Engineer</title>
        <meta content="Tim J: Software Engineer" name="description" />
        <meta content="timothyneil.com" name="twitter:domain" />
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
      <Footer
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        isFullWidth={isFullWidth}
      />
      <BackToTop in={showBackToTop}>
        <BackToTopButton onClick={handleScrollToTop}>
          <Icon
            fill={isDarkMode ? colors.white : colors.tertiary}
            name="arrow-up-circle"
            size={40}
          />
        </BackToTopButton>
      </BackToTop>
      {isModalDisplayed && (
        <DynamicModalDrawer
          background={isDarkMode ? '#303438' : colors.grayLightest}
          closeType="floating"
          customClose={(
            <Button
              bgColor={isDarkMode ? colors.grayLight : colors.white}
              borderColor={isDarkMode ? colors.grayLight : colors.grayLightest}
              pill
              size="xs"
              textColor={isDarkMode ? colors.white : colors.grayDarker}
            >
              Close profile
            </Button>
          )}
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
