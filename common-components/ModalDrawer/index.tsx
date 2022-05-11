import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Col } from '../Col';
import { colors } from '../design-tokens';
import { Grid } from '../Grid';
import { Row } from '../Row';
import { SideNames } from '../types';
import {
  CloseIcon,
  FloatingCloseButtonWrapper,
  FullscreenOverlay,
  ModalDrawerContainer,
  ModalDrawerInner,
  ModalHeading,
  StandardCloseButton,
} from './styles';

interface ModalDrawerProps {
  background?: string;
  children: ReactElement | ReactElement[] | string;
  closeType?: 'corner' | 'floating';
  direction?: SideNames;
  isOpen: boolean;
  customClose?: ReactElement;
  onCloseCallback: () => void;
  size?: number;
  title?: string;
}

export const ModalDrawer = ({
  background = colors.white,
  children,
  closeType = 'corner',
  customClose,
  direction = 'right',
  isOpen,
  onCloseCallback,
  size = 320,
  title,
}: ModalDrawerProps) => {
  const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(isOpen);
  const [floatingCloseOffset, setFloatingCloseOffset] = useState(0);
  const floatingCloseRef = useRef(null);

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

  // Calculate offset for 'floating' close button:
  // Its size in the relevant dimension + 12px
  useEffect(() => {
    const refWidth = floatingCloseRef.current?.clientWidth;
    const refHeight = floatingCloseRef.current?.clientHeight;

    if (
      isOverlayDisplayed &&
      closeType === 'floating' &&
      floatingCloseRef.current
    ) {
      if (isHorizontal) {
        setFloatingCloseOffset(refWidth + 12);
      } else {
        setFloatingCloseOffset(refHeight + 12);
      }
    }
  }, [closeType, floatingCloseRef, isHorizontal, isOverlayDisplayed]);

  return (
    <>
      <ModalDrawerContainer
        aria-hidden={!isOpen}
        background={background}
        direction={direction}
        isHorizontal={isHorizontal}
        isOpen={isOpen}
        isOverlayDisplayed={isOverlayDisplayed}
        size={size}
      >
        <ModalDrawerInner>
          <Grid>
            <Row end noWrap>
              {title && (
                <Col shrink>
                  <ModalHeading level={2}>{title}</ModalHeading>
                </Col>
              )}
              {closeType === 'corner' && (
                <Col end flex grow top>
                  <StandardCloseButton
                    direction={direction}
                    isHorizontal={isHorizontal}
                    onClick={onClose}
                  >
                    {customClose ?? (
                      <CloseIcon
                        fill={colors.grayLight}
                        name="close-outline"
                        size={36}
                      />
                    )}
                  </StandardCloseButton>
                </Col>
              )}
            </Row>
          </Grid>
          {children}
        </ModalDrawerInner>

        {closeType === 'floating' && (
          <FloatingCloseButtonWrapper
            direction={direction}
            offset={floatingCloseOffset}
            onClick={onClose}
            ref={floatingCloseRef}
          >
            <button>
              {customClose ?? (
                <CloseIcon
                  fill={colors.grayLighter}
                  name="close-circle"
                  size={36}
                />
              )}
            </button>
          </FloatingCloseButtonWrapper>
        )}
      </ModalDrawerContainer>
      {isOverlayDisplayed && (
        <FullscreenOverlay isOpen={isOpen} onClick={onClose} />
      )}
    </>
  );
};

ModalDrawer.displayName = 'ModalDrawer';
