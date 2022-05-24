import styled from 'styled-components';
import { animation, colors, decorations, focusStyle } from '../design-tokens';
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  background-color: ${({ bgColor }) => bgColor};
  ${({ size }) => size === 'xs' && 'padding: 6px 10px; font-size: 12px;'}
  ${({ size }) => size === 'sm' && 'padding: 8px 12px; font-size: 14px;'}
  ${({ size }) => size === 'md' && 'padding: 10px 14px; font-size: 16px;'}
  ${({ size }) => size === 'lg' && 'padding: 12px 18px; font-size: 18px;'}
  ${({ size }) => size === 'xl' && 'padding: 14px 24px; font-size: 20px;'}
  font-weight: bold;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border: 1px solid ${defaultButtonBorderColor};
  color: ${({ textColor }) => (textColor ?? defaultButtonTextColor)};
  white-space: nowrap;
  transition: filter ${animation.durations.faster}ms; 
  ${({ pill }) =>
    pill ? 'border-radius: 9999px;' : decorations.buttons.borderRadiusStyle}

  ${({ variant }) =>
    variant === 'primary' &&
    `
    background-color: ${primaryButtonBGColor};
    border: 1px solid ${primaryButtonBorderColor};
    color: ${primaryButtonTextColor};
  `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background-color: ${secondaryButtonBGColor};
    border: 1px solid ${secondaryButtonBorderColor};
    color: ${secondaryButtonTextColor};
  `}


  ${({ gradientStart, gradientEnd }) =>
    gradientStart &&
    `
    background: linear-gradient(to right, ${gradientStart}, ${gradientEnd});
  `}

  ${({ pointerGradient, gradientStart, gradientEnd }) =>
    pointerGradient &&
    `
    background: radial-gradient(at calc(var(--mouse-x, 0) * 1px) calc(var(--mouse-y, 0) * 1px), ${gradientStart}, ${gradientEnd});
  `}

  &:hover:not(&:disabled) {
    ${decorations.buttons.hoverFilterStyle}
  }

  &:disabled {
    background-color: ${disabledButtonBGColor};
    border: 1px solid ${disabledButtonBorderColor};
    color: ${disabledButtonTextColor};
    pointer-events: none;
  }

  &:focus,
  &:active {
    ${focusStyle}
    text-decoration: underline;
  }
`;

export const StyledLinkAsButton = styled(StyledButton).attrs({
  as: 'a',
})`
  text-decoration: none;
`;
