import styled from 'styled-components';
import { animation, decorations, focusStyle, spacing } from '../design-tokens';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { getOppositedirection } from '../helpers';
import { SideNamesVertical } from '../types';

interface FloatingCloseButtonWrapperProps {
  direction: SideNamesVertical;
  offset: number;
}
export const FloatingCloseButtonWrapper = styled.div<FloatingCloseButtonWrapperProps>`
  text-align: center;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 100;
  ${({ direction, offset }) =>
    `${getOppositedirection(direction)}: ${offset}px;`}
`;

interface ToastContainerProps {
  direction: SideNamesVertical;
  isOpen: boolean;
}
export const ToastContainer = styled.div<ToastContainerProps>`
  position: absolute;
  z-index: 100;

  ${({ direction, isOpen }) => `
    transition: opacity ${animation.durations.fast}ms ease-in-out;
    width: 100%;
    opacity: ${isOpen ? '1' : '0'};
    ${direction}: 0;
  `}
`;

interface ToastInnerProps {
  accentColor?: string;
  background: string;
  textColor?: string;
}
export const ToastInner = styled.div<ToastInnerProps>`
  padding: ${spacing.x3};
  margin: ${spacing.x4};
  width: calc(100% - ${spacing.x8});
  height: auto;
  color: ${({ color }) => color};
  background: ${({ accentColor, background }) =>
    `linear-gradient(${accentColor} 5px, ${background} 0) 10px 0`};
  overflow: hidden;
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}
`;

export const ToastHeading = styled(Heading)`
  margin: ${spacing.x1} 0 0;
`;

export const ToastTypeIcon = styled(Icon)`
  margin: ${spacing.x1} ${spacing.x3} 0 0;
`;

interface StandardCloseButtonProps {
  direction: SideNamesVertical;
}
export const StandardCloseButton = styled.button<StandardCloseButtonProps>`
  margin-right: -${spacing.x1};
  z-index: 100;

  &:focus,
  &:active {
    ${focusStyle}
  }
`;

export const CloseIcon = styled(Icon)`
  display: block;
`;

export const ToastBody = styled.div`
  margin-top: ${spacing.x1};
`;
