import { useCallback, useEffect, useRef, useState } from 'react';
import { Col } from '../Col';
import { animation, colors } from '../design-tokens';
import { Row } from '../Row';
import { TransitionTypes } from '../Transition/types';
import {
  CloseIcon,
  FloatingCloseButtonWrapper,
  FullscreenOverlay,
  ModalDrawerContainer,
  ModalDrawerInnerTransition,
  ModalHeading,
  StandardCloseButton,
  StyledGrid,
} from './styles';
import { ModalDrawerProps } from './types';

export const ModalDrawer = ({
  background = colors.white,
  children,
  closeType = 'corner',
  customClose,
  direction = 'right',
  isOpen,
  modalType,
  onCloseCallback,
  size = 320,
  title,
}: ModalDrawerProps) => {
  const [floatingCloseOffset, setFloatingCloseOffset] = useState(0);
  const [isFloatingCloseShown, setIsFloatingCloseShown] = useState(false);
  const floatingCloseRef = useRef(null);

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

  const isHorizontal = direction === 'left' || direction === 'right';

  // Calculate offset for 'floating' close button:
  // Its size in the relevant dimension + 12px
  useEffect(() => {
    if (closeType === 'floating' && floatingCloseRef.current) {
      const refWidth = floatingCloseRef.current.clientWidth;
      const refHeight = floatingCloseRef.current.clientHeight;

      if (isHorizontal) {
        setFloatingCloseOffset(refWidth + 12);
      } else {
        setFloatingCloseOffset(refHeight + 12);
      }
    }
  }, [closeType, floatingCloseRef, isHorizontal]);

  useEffect(() => {
    if (floatingCloseOffset > 12) {
      setIsFloatingCloseShown(isOpen);
    }
  }, [floatingCloseOffset, isOpen]);

  let transitionType: TransitionTypes = 'slide';
  if (modalType === 'fullscreen') {
    transitionType = 'fade';
  } else if (modalType === 'float') {
    transitionType = 'scaleFadeBounce';
  }

  return (
    <ModalDrawerContainer
      aria-hidden={!isOpen}
      direction={direction}
      isHorizontal={isHorizontal}
      isOpen={isOpen}
      modalType={modalType}
      size={size}
    >
      <ModalDrawerInnerTransition
        background={background}
        direction={direction}
        distance={size}
        duration={animation.durations.slow}
        in={isOpen}
        type={transitionType}
      >
        <StyledGrid>
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
                  onClick={onCloseCallback}
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
          <Row flex grow>
            <Col xs={12}>{children}</Col>
          </Row>
        </StyledGrid>
      </ModalDrawerInnerTransition>

      {closeType === 'floating' && (
        <FloatingCloseButtonWrapper
          direction={direction}
          isShown={isFloatingCloseShown}
          offset={floatingCloseOffset}
          onClick={onCloseCallback}
          ref={floatingCloseRef}
        >
          {customClose ?? (
            <button>
              <CloseIcon
                fill={colors.grayLighter}
                name="close-circle"
                size={36}
              />
            </button>
          )}
        </FloatingCloseButtonWrapper>
      )}
      {modalType !== 'fullscreen' && (
        <FullscreenOverlay isOpen={isOpen} onClick={onCloseCallback} />
      )}
    </ModalDrawerContainer>
  );
};

ModalDrawer.displayName = 'ModalDrawer';
