import styled from 'styled-components';
import { animation, helpers } from '../design-tokens';

export const CloseDrawer = styled.div`
  margin-top: 12px;
  text-align: center;
  position: absolute;
  z-index: 100;
`;

interface ModalDrawerContainerProps {
  direction: 'top' | 'right' | 'bottom' | 'left';
  isHorizontal: boolean;
  isOverlayDisplayed: boolean;
  isOpen: boolean;
  size: number;
}

export const ModalDrawerContainer = styled.div<ModalDrawerContainerProps>`
  position: fixed;
  z-index: 100;

  ${({ direction, isHorizontal, isOpen, size }) => `
    transition: margin-${direction} ${animation.durationSlow}ms ease-in-out;
    margin-${direction}: ${isOpen ? 0 : `${-size}px`};
    ${isHorizontal ? 'width' : 'height'}: ${size}px;
    ${isHorizontal ? 'height' : 'width'}: 100%;
    ${direction}: 0;
    ${direction === 'bottom' ? 'bottom' : 'top'}: 0;
    ${helpers.reduceMotionOverrideStyle}
  `}

  ${CloseDrawer} {
    ${({ direction, isHorizontal, isOpen, isOverlayDisplayed, size }) => `
      display: ${isOverlayDisplayed ? 'block' : 'none'};
      transition: ${direction} ${animation.durationSlow}ms ease-in-out, opacity ${animation.durationFaster}ms ease-in-out;
      ${direction}: ${isOpen ? `${size}px` : 0};
      opacity: ${isOpen ? '1' : '0'};
      ${isHorizontal ? 'height' : 'width'}: 100%;
      padding: 0 15px;
      ${helpers.reduceMotionOverrideStyle}
    `}
  }
`;

interface ModalDrawerInnerProps {
  background?: string;
}

export const ModalDrawerInner = styled.div<ModalDrawerInnerProps>`
  padding: 0 15px;
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
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
  transition: opacity ${animation.durationFast}ms ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  ${helpers.reduceMotionOverrideStyle}

  ${({ isDarkMode }) => isDarkMode && `
    background: rgba(30, 30, 30, 0.95);
  `}
`;
