import styled from 'styled-components';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  spacing,
} from '../design-tokens';
import { StandardSizes } from '../types';

interface StyledButtonProps {
  bgColor?: string;
  fullWidth?: boolean;
  gradientStart?: string;
  gradientEnd?: string;
  pointerGradient?: boolean;
  textColor?: string;
  topMargin?: number;
  pill?: boolean;
  size?: StandardSizes;
  variant?: 'primary' | 'secondary';
  style: any;
}

const primaryButtonBGColor = colors.primary;
const primaryButtonBorderColor = colors.primary;
const primaryButtonTextColor = colors.white;

const secondaryButtonBGColor = colors.tertiary;
const secondaryButtonBorderColor = colors.tertiary;
const secondaryButtonTextColor = colors.white;

const defaultButtonBorderColor = colors.grayLighter;
const defaultButtonTextColor = colors.grayDarker;

const disabledButtonBGColor = colors.grayLighter;
const disabledButtonBorderColor = colors.grayLighter;
const disabledButtonTextColor = colors.grayLight;

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: ${spacing.x2};
  overflow: hidden;
  z-index: 0;
  ${({ size }) => size === 'xs' && 'padding: 6px 10px; font-size: 12px;'}
  ${({ size }) => size === 'sm' && 'padding: 8px 12px; font-size: 14px;'}
  ${({ size }) => size === 'md' && 'padding: 10px 14px; font-size: 16px;'}
  ${({ size }) => size === 'lg' && 'padding: 12px 18px; font-size: 18px;'}
  ${({ size }) => size === 'xl' && 'padding: 14px 24px; font-size: 20px;'}
  font-weight: bold;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  color: ${({ textColor }) => textColor ?? defaultButtonTextColor};
  white-space: nowrap;
  ${({ pill }) =>
      pill ? 'border-radius: 9999px;' : decorations.buttons.borderRadiusStyle}

  ${({ variant }) =>
    variant === 'primary' &&
    `
    color: ${primaryButtonTextColor};
  `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    color: ${secondaryButtonTextColor};
  `}

  &:focus,
  &:active {
    ${focusStyle}
    text-decoration: underline;
  }

  &::before {
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;

    background-color: ${({ bgColor }) => bgColor};
    border: 1px solid ${defaultButtonBorderColor};

    transition: filter ${animation.durations.faster}ms;

    ${({ pill }) =>
      pill ? 'border-radius: 9999px;' : decorations.buttons.borderRadiusStyle}

    ${({ variant }) =>
      variant === 'primary' &&
      `
      background-color: ${primaryButtonBGColor};
      border: 1px solid ${primaryButtonBorderColor};
    `}

    ${({ variant }) =>
      variant === 'secondary' &&
      `
      background-color: ${secondaryButtonBGColor};
      border: 1px solid ${secondaryButtonBorderColor};
    `}


    ${({ gradientStart, gradientEnd }) =>
      gradientStart &&
      `
      background: linear-gradient(to right, ${gradientStart}, ${gradientEnd});
      border: transparent;
    `}

    ${({ pointerGradient, gradientStart, gradientEnd }) =>
      pointerGradient &&
      `
      background: radial-gradient(150% 150% at calc(var(--mouse-x, 0) * 1px) calc(var(--mouse-y, 0) * 1px), ${gradientStart}, ${gradientEnd});
    `}
  }

  &:disabled {
    color: ${disabledButtonTextColor};
    pointer-events: none;
  }

  &:disabled::before {
    background-color: ${disabledButtonBGColor};
    border: 1px solid ${disabledButtonBorderColor};
  }

  &:hover:not(&:disabled)::before {
    ${decorations.buttons.hoverFilterStyle}
  }
`;

export const StyledLinkAsButton = styled(StyledButton).attrs({
  as: 'a',
})`
  text-decoration: none;
`;
