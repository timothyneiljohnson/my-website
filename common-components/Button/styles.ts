import styled, { css } from 'styled-components';
import { Col } from '../Col';
import {
  animation,
  buttons,
  colors,
  decorations,
  focusStyle,
  spacing,
} from '../design-tokens';
import { Grid } from '../Grid';
import { Transition } from '../Transition';
import { StandardSizes } from '../types';

interface ButtonWrapperProps {
  fullWidth?: boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  position: relative;
  display: inline-flex;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  button {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  }
`;

interface StyledButtonProps {
  bgColor?: string;
  borderColor?: string;
  hasDropdown?: boolean;
  gradientStart?: string;
  gradientEnd?: string;
  pointerGradient?: boolean;
  textColor?: string;
  topMargin?: number;
  pill?: boolean;
  size?: StandardSizes;
  variantName?: 'primary' | 'secondary' | 'default' | 'defaultDarkMode';
  style: any;
}
export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: ${spacing.x2};
  z-index: 0;
  ${({ size }) => size === 'xs' && 'font-size: 12px;'}
  ${({ size }) => size === 'sm' && 'font-size: 14px;'}
  ${({ size }) => size === 'md' && 'font-size: 16px;'}
  ${({ size }) => size === 'lg' && 'font-size: 18px;'}
  ${({ size }) => size === 'xl' && 'font-size: 20px;'}
  font-weight: bold;
  color: ${({ textColor }) => textColor ?? buttons.default.text};
  white-space: nowrap;
  ${({ pill }) =>
    pill ? 'border-radius: 9999px;' : decorations.buttons.borderRadiusStyle}

  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid ${buttons.default.border};

  transition: filter ${animation.durations.faster}ms,
    border-color ${animation.durations.faster}ms;

  ${({ pill }) =>
    pill ? 'border-radius: 9999px;' : decorations.buttons.borderRadiusStyle}

  ${({ variantName }) =>
    variantName === 'defaultDarkMode' &&
    `
      background-color: ${buttons.defaultDarkMode.bg};
      border: 1px solid ${buttons.defaultDarkMode.border};
      &:hover {
        border: 1px solid ${buttons.defaultDarkMode.borderHover};
      }
    `}

  ${({ borderColor }) =>
    borderColor &&
    `
    border: 1px solid ${borderColor};
  `}

  ${({ gradientStart, gradientEnd }) =>
    gradientStart &&
    css`
      background: linear-gradient(to right, ${gradientStart}, ${gradientEnd});
      border: transparent;
    `}

  ${({ pointerGradient, gradientStart, gradientEnd }) =>
    pointerGradient &&
    `
      background: radial-gradient(150% 150% at calc(var(--mouse-x, 0) * 1px) calc(var(--mouse-y, 0) * 1px), ${gradientStart}, ${gradientEnd});
    `}

  &:focus,
  &:active {
    ${({ pill }) =>
      pill ? focusStyle.withRadius(9999) : focusStyle.withRadius(8)}
    text-decoration: underline;
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    ${decorations.buttons.hoverFilterStyle}
  }
`;

export const StyledLinkAsButton = styled(StyledButton).attrs({
  as: 'a',
})`
  text-decoration: none;
`;

interface ButtonContentColProps {
  buttonSize: StandardSizes;
  hasGradient?: boolean;
}
export const ButtonContentCol = styled(Col)<ButtonContentColProps>`
  ${({ buttonSize }) => css`
    ${buttonSize === 'xs' && 'padding: 6px 10px;'}
    ${buttonSize === 'sm' && 'padding: 8px 12px;'}
    ${buttonSize === 'md' && 'padding: 10px 14px;'}
    ${buttonSize === 'lg' && 'padding: 12px 18px;'}
    ${buttonSize === 'xl' && 'padding: 14px 24px;'}
  `}
  ${({ buttonSize, hasGradient }) =>
    hasGradient &&
    css`
      ${buttonSize === 'xs' && 'padding: 7px 11px;'}
      ${buttonSize === 'sm' && 'padding: 9px 13px;'}
      ${buttonSize === 'md' && 'padding: 11px 15px;'}
      ${buttonSize === 'lg' && 'padding: 13px 19px;'}
      ${buttonSize === 'xl' && 'padding: 15px 25px;'}
    `}
  gap: ${spacing.x2};
`;

export const DropdownArrowCol = styled(Col)`
  border-left: 1px solid;
  padding: 0 ${spacing.x2};
`;

export const DropdownWrapper = styled.div`
  background-color: ${colors.white};
`;

export const StyledDropdownTransition = styled(Transition)`
  position: absolute;
  margin-top: -6px;
  z-index: 2;
  right: 0;
  top: 100%;
`;

export const StyledGrid = styled(Grid)`
  width: 100%;
`;
