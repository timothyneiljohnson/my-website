import styled, { css } from 'styled-components';
import { a11y, animation, spacing } from '../design-tokens';
import { Heading } from '../Heading';

interface DrawerMenuContainerProps {
  hasPageLoaded: boolean;
  isOpen: boolean;
  size: number;
}
export const DrawerMenuContainer = styled.div<DrawerMenuContainerProps>`
  position: fixed;
  z-index: 99;
  clip-path: circle(22px at 34px 34px);

  ${({ size }) => `
    width: min(100%, ${size}px);
    height: 100%;
    left: 0;
    top: 0;
    ${a11y.reduceMotionOverrideStyle}
  `}

  @keyframes openClipPath {
    0% {
      clip-path: circle(21px at 35px 35px);
    }
    100% {
      clip-path: circle(2200px at 35px 35px);
    }
  }

  @keyframes closeClipPath {
    0% {
      clip-path: circle(2200px at 35px 35px);
    }
    100% {
      clip-path: circle(21px at 35px 35px);
    }
  }

  ${({ hasPageLoaded, isOpen }) => hasPageLoaded ? css`
    animation: 
      ${isOpen
        ? `openClipPath ${animation.durations.slower}ms forwards ease-in-out`
        : `closeClipPath ${animation.durations.slower}ms forwards ease-in-out`};
  ` : ''}
`;

interface DrawerMenuInnerProps {
  background?: string;
}
export const DrawerMenuInner = styled.div<DrawerMenuInnerProps>`
  position: absolute;
  padding: 60px 0;
  background: ${({ background }) => background};
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  overflow: auto;
`;

export const ModalHeading = styled(Heading)`
  padding: ${spacing.x3} ${spacing.x3} 0 0;
`;

interface ToggleDrawerButtonProps {
  background: string;
  hasPageLoaded: boolean;
  isOpen: boolean;
}
export const ToggleDrawerButton = styled.button<ToggleDrawerButtonProps>`
  z-index: 100;
  display: block;
  position: fixed;
  left: ${spacing.x3};
  top: ${spacing.x3};
  width: 46px;
  height: 46px;
  padding: ${spacing.x3};
  border-radius: 999px;
  overflow: hidden;
  background-color: ${({ background }) => background};

  @keyframes path1 {
    0% {
      d: path('M 2 2.5 L 20 2.5');
    }
    100% {
      d: path('M 3.5 18.5 L 19 2.5');
    }
  }
  @keyframes path3 {
    0% {
      d: path('M 2 16.596 L 20 16.596');
    }
    100% {
      d: path('M 3.5 2.5 L 19 18.346');
    }
  }
  @keyframes path1Closed {
    0% {
      d: path('M 3.5 18.5 L 19 2.5');
    }
    100% {
      d: path('M 2 2.5 L 20 2.5');
    }
  }
  @keyframes path3Closed {
    0% {
      d: path('M 3.5 2.5 L 19 18.346');
    }
    100% {
      d: path('M 2 16.596 L 20 16.596');
    }
  }

  svg > {
    ${({ isOpen, hasPageLoaded }) => css`
      ${hasPageLoaded
        ? css`
            &:nth-child(1) {
              ${isOpen
                ? `animation: path1 ${animation.durations.slow}ms forwards ${animation.curve.bounce};`
                : `animation: path1Closed ${animation.durations.slow}ms forwards ${animation.curve.bounce};`}
            }
            &:nth-child(2) {
              ${isOpen
                ? css`
                    animation: ${animation.keyframes.fadeOut}
                      ${animation.durations.slow}ms forwards
                      ${animation.curve.bounce};
                  `
                : css`
                    animation: ${animation.keyframes.fadeIn}
                      ${animation.durations.slow}ms forwards
                      ${animation.curve.bounce};
                  `}
            }
            &:nth-child(3) {
              ${isOpen
                ? `animation: path3 ${animation.durations.slow}ms forwards ${animation.curve.bounce};`
                : `animation: path3Closed ${animation.durations.slow}ms forwards ${animation.curve.bounce};`}
            }
          `
        : ''}
    `}
  }
`;

interface MenuItemWrapperProps {
  isOpen: boolean;
  menuLength: number;
}
export const MenuItemWrapper = styled.div<MenuItemWrapperProps>`
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  ${({ isOpen, menuLength }) =>
    [...Array(menuLength)].map(
      (_, i) => css`
        &:nth-child(${i + 1}) {
          ${isOpen
            ? css`
                animation: ${animation.keyframes.fadeIn}
                  ${animation.durations.fast}ms forwards ${i * 150}ms
                  ease-in-out;
              `
            : css`
                animation: ${animation.keyframes.fadeOut}
                  ${animation.durations.fast}ms forwards
                  ${((menuLength - i) * 150) - 450}ms ease-in-out;
              `}
        }
      `
    )};
`;

interface MenuItemsWrapperProps {
  isOpen: boolean;
}
export const MenuItemsWrapper = styled.div<MenuItemsWrapperProps>`
  ${({ isOpen }) =>
    !isOpen &&
    css`
      animation: ${animation.keyframes.slideOut('bottom', 30)}
        ${animation.durations.slow}ms forwards ease-in-out;
    `}
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
  z-index: 1;
  inset: 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

  ${a11y.reduceMotionOverrideStyle}

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background: rgba(20, 20, 20, 0.8);
  `}
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${animation.keyframes.fadeIn} ${animation.durations.fast}ms
            ease-in-out;
        `
      : css`
          animation: ${animation.keyframes.fadeOut}
            ${animation.durations.slower}ms ease-in-out;
        `}
`;
