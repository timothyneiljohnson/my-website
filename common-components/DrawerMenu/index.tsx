import React, {
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { colors } from '../design-tokens';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import {
  FullscreenOverlay,
  DrawerMenuContainer,
  DrawerMenuInner,
  MenuItemWrapper,
  MenuItemsWrapper,
  ToggleDrawerButton,
} from './styles';
import { DrawerMenuProps } from './types';

export const DrawerMenu = ({
  background = colors.white,
  iconColor = colors.grayDarker,
  menuItems,
  size = 320,
}: DrawerMenuProps) => {
  const { isDarkMode } = useStorageDarkMode();
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  const [isModalOverlayDisplayed, setIsModalOverlayDisplayed] = useState(false);
  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  const ref = useRef(null);
  const focusRef = useRef(null);

  const onCloseCallback = useCallback(() => {
    setIsDrawerMenuOpen(false);
    setTimeout(() => {
      setIsModalOverlayDisplayed(false);
    }, 800);
    if (focusRef && 'current' in focusRef) {
      focusRef.current?.focus();
    }
  }, [focusRef]);

  const onKeyDownCallback = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onCloseCallback();
      }
    },
    [onCloseCallback]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownCallback, false);
    return () => {
      document.removeEventListener('keydown', onKeyDownCallback, false);
    };
  }, [onKeyDownCallback]);

  useEffect(() => {
    if (isDrawerMenuOpen) {
      setIsModalOverlayDisplayed(true);
    }
  }, [isDrawerMenuOpen]);

  const handleClick = useCallback(() => {
    setIsDrawerMenuOpen(!isDrawerMenuOpen);
    setHasPageLoaded(true);
    if (isDrawerMenuOpen) {
      onCloseCallback();
    }
  }, [isDrawerMenuOpen, onCloseCallback]);

  const menuItemElements = React.Children.toArray(menuItems);

  return (
    <>
      <ToggleDrawerButton
        background={background}
        data-state={isDrawerMenuOpen ? 'open' : 'closed'}
        hasPageLoaded={hasPageLoaded}
        isOpen={isDrawerMenuOpen}
        onClick={handleClick}
        ref={ref}
      >
        <svg height="20" viewBox="0 0 22 20" width="22">
          <path
            d="M 2 2.5 L 20 2.5"
            fill="transparent"
            stroke={iconColor}
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M 2 9.673 L 20 9.673"
            fill="transparent"
            opacity="1"
            stroke={iconColor}
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M 2 16.596 L 20 16.596"
            fill="transparent"
            stroke={iconColor}
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </ToggleDrawerButton>
      <DrawerMenuContainer
        aria-hidden={!isDrawerMenuOpen}
        hasPageLoaded={hasPageLoaded}
        isOpen={isDrawerMenuOpen}
        size={size}
      >
        <DrawerMenuInner background={background}>
          <MenuItemsWrapper isOpen={isDrawerMenuOpen}>
            {menuItemElements.map((menuItem: ReactElement, i) => (
              <MenuItemWrapper
                isOpen={isDrawerMenuOpen}
                key={i}
                menuLength={menuItemElements.length}
              >
                {cloneElement(menuItem)}
              </MenuItemWrapper>
            ))}
          </MenuItemsWrapper>
        </DrawerMenuInner>
      </DrawerMenuContainer>
      {isModalOverlayDisplayed && (
        <FullscreenOverlay
          isDarkMode={isDarkMode}
          isOpen={isDrawerMenuOpen}
          onClick={onCloseCallback}
        />
      )}
    </>
  );
};

DrawerMenu.displayName = 'DrawerMenu';
