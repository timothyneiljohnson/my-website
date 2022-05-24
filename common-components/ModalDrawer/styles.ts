import styled from 'styled-components';
import { a11y, animation, focusStyle } from '../design-tokens';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { getOppositedirection } from '../helpers';
import { SideNames } from '../types';
import { Transition } from '../Transition';

interface FloatingCloseButtonWrapperProps {
  direction: SideNames;
  offset: number;
}
export const FloatingCloseButtonWrapper = styled.div<FloatingCloseButtonWrapperProps>`
  text-align: center;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 100;
  ${({ direction, offset }) =>
    `${getOppositedirection(direction)}: ${-offset}px;`}
`;

interface ModalDrawerContainerProps {
  direction: SideNames;
  isHorizontal: boolean;
  isOpen: boolean;
  size: number;
  modalType: 'fullscreen' | 'float';
}
export const ModalDrawerContainer = styled.div<ModalDrawerContainerProps>`
  position: fixed;
  z-index: 100;

  ${({ direction, modalType, isHorizontal, size }) => `
    ${isHorizontal ? 'width' : 'height'}: ${size}px;
    ${isHorizontal ? 'height' : 'width'}: 100%;
    ${modalType === 'fullscreen' ? `
      height: 100%;
      width: 100%;
    ` : ''}
    ${direction}: 0;
    ${direction === 'bottom' ? 'bottom' : 'top'}: 0;
    ${a11y.reduceMotionOverrideStyle}
  `}

  ${FloatingCloseButtonWrapper} {
    ${({ isHorizontal, isOpen }) => `
      transition: opacity ${animation.durations.faster}ms ease-in-out;
      opacity: ${isOpen ? '1' : '0'};
      ${isHorizontal ? 'height' : 'width'}: 100%;
      ${a11y.reduceMotionOverrideStyle}
    `}
  }
`;

interface ModalDrawerInnerTransitionProps {
  background?: string;
}
export const ModalDrawerInnerTransition = styled(Transition)<ModalDrawerInnerTransitionProps>`
  position: absolute;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  overflow: hidden;
`;

export const ModalHeading = styled(Heading)`
  padding: 12px 12px 0 0;
`;

interface FullscreenOverlayProps {
  isOpen: boolean;
  isDarkMode?: boolean;
}
export const FullscreenOverlay = styled.div<FullscreenOverlayProps>`
  position: fixed;
  background: rgba(51, 51, 51, 0.8);
  width: 100%;
  height: 100%;
  z-index: 99;
  inset: 0;
  opacity: 0;
  transition: opacity ${animation.durations.fast}ms ease-in-out;
  ${({ isOpen }) => (isOpen ? 'opacity: 1;' : '')};
  ${a11y.reduceMotionOverrideStyle}

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background: rgba(30, 30, 30, 0.95);
  `}
  animation: ${animation.keyframes.fadeIn} ${animation.durations
    .fast}ms ease-in-out;
`;

interface StandardCloseButtonProps {
  direction: SideNames;
  isHorizontal: boolean;
}
export const StandardCloseButton = styled.button<StandardCloseButtonProps>`
  margin-top: 14px;
  margin-right: -6px;
  z-index: 100;

  &:focus,
  &:active {
    ${focusStyle}
  }
`;

export const CloseIcon = styled(Icon)`
  display: block;
`;
