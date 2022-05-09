import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Button } from '../Button';
import { colors } from '../design-tokens';
import {
  CloseDrawer,
  FullscreenOverlay,
  ModalDrawerContainer,
  ModalDrawerInner,
} from './styles';

interface ModalDrawerProps {
  background?: string;
  children: ReactElement;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  isOpen: boolean;
  customCloseText?: string;
  onCloseCallback: () => void;
  size?: number;
}

export const ModalDrawer = ({
  background = colors.white,
  children,
  customCloseText,
  direction = 'right',
  isOpen,
  onCloseCallback,
  size = 320,
}: ModalDrawerProps) => {
  const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(isOpen);

  const onClose = useCallback(() => {
    onCloseCallback();
    setTimeout(() => {
      setIsOverlayDisplayed(false);
    }, 400);
  }, [onCloseCallback]);

  const onKeyDownCallback = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownCallback, false);
    return () => {
      document.removeEventListener('keydown', onKeyDownCallback, false);
    };
  }, [onKeyDownCallback]);

  useEffect(() => {
    if (isOpen) {
      setIsOverlayDisplayed(true);
    }
  }, [isOpen]);

  const isHorizontal = direction === 'left' || direction === 'right';

  return (
    <>
      <ModalDrawerContainer
        aria-hidden={!isOpen}
        direction={direction}
        isHorizontal={isHorizontal}
        isOpen={isOpen}
        isOverlayDisplayed={isOverlayDisplayed}
        size={size}
      >
        <ModalDrawerInner background={background}>{children}</ModalDrawerInner>
        <CloseDrawer onClick={onClose}>
          <Button onClick={onClose} size="sm">
            {customCloseText ?? 'Close'}
          </Button>
        </CloseDrawer>
      </ModalDrawerContainer>
      {isOverlayDisplayed && (
        <FullscreenOverlay isOpen={isOpen} onClick={onClose} />
      )}
    </>
  );
};

ModalDrawer.displayName = 'ModalDrawer';
