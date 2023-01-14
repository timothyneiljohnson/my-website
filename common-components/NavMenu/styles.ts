import styled from 'styled-components';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  spacing,
} from '../design-tokens';
import { colorLuminance, hexToRgba } from '../helpers';
import { Link } from '../Link';
import { Transition } from '../Transition';

interface StyledNavMenuProps {
  bgColor: string;
  gradientStart?: string;
  gradientEnd?: string;
}
export const StyledNavMenu = styled.div<StyledNavMenuProps>`
  ${({ bgColor }) => (bgColor ? `background-color: ${bgColor};` : '')};
  padding: ${spacing.x1};
  display: inline-block;
  min-height: 40px;
  max-width: 100%;
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}
  overflow: hidden;

  ${({ gradientStart, gradientEnd }) =>
    gradientStart &&
    `
      background: linear-gradient(to right, ${gradientStart}, ${gradientEnd});
    `}
`;

export const NavMenuAndTriggerWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

interface NavMenuItemTriggerButtonProps {
  navColor: string;
}
export const NavMenuTriggerButton = styled.button<NavMenuItemTriggerButtonProps>`
  z-index: 100;
  padding: ${spacing.x2} ${spacing.x3};
  overflow: hidden;
  ${decorations.borderRadiusStyle}
  &:focus {
    ${focusStyle.default}
  }

  &:hover {
    background-color: ${({ navColor }) => hexToRgba(navColor, 0.08)};
  }
`;

interface NavMenuDropdownContainerProps {
  style?: any;
}
export const NavMenuDropdownContainer = styled.div<NavMenuDropdownContainerProps>`
  position: fixed;
  width: 100%;
  top: calc(var(--destination-y, 0) * 1px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

interface NavMenuDropdownTransitionProps {
  bgColor?: string;
  height?: number;
  width?: number;
  topMargin?: number;
  isDarkMode?: boolean;
}
export const NavMenuDropdownTransition = styled(
  Transition
)<NavMenuDropdownTransitionProps>`
  background-color: ${({ bgColor }) => bgColor};
  padding: ${spacing.x4};
  position: relative;
  max-width: min(600px, calc(100% - ${spacing.x6}));
  min-width: 320px;
  transform-origin: 50% 0;
  text-align: left;
  z-index: 99;
  transition: width 0.25s;
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}
  transition: max-width ${animation.durations
    .faster}ms ease-in-out, width ${animation.durations
    .faster}ms ease-in-out;
`;

export const StyledNavMenuItem = styled.div`
  display: flex;
  align-items: center;
`;

interface StyledSubMenuItemProps {
  bgColor: string;
}
export const StyledSubMenuItem = styled(Link)<StyledSubMenuItemProps>`
  padding: ${spacing.x1} ${spacing.x2};
  ${decorations.borderRadiusStyle}
  overflow: hidden;
  font-size: 14px;
  color: ${colors.grayDark};
  max-width: 298px;

  &:hover {
    background-color: ${({ bgColor }) => colorLuminance(bgColor, -0.1)};
  }
  &:focus {
    ${focusStyle.default}
  }
`;

export const SubMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
`;

interface CurrentNavArrowProps {
  style: any;
}
export const CurrentNavArrow = styled(Transition)<CurrentNavArrowProps>`
  position: fixed;
  height: 14px;
  width: 14px;
  top: -14px;
  z-index: 100;
  overflow: hidden;
  left: calc(var(--arrow-destination-x, 0) * 1px);
  border-radius: 2px;
  transition: left ${animation.durations.faster}ms linear;
`;

interface CurrentNavArrowInnerProps {
  bgColor: string;
}
export const CurrentNavArrowInner = styled.div<CurrentNavArrowInnerProps>`
  position: absolute;
  height: 14px;
  width: 14px;
  z-index: 100;
  background-color: ${({ bgColor }) => bgColor};
  transform: rotate(45deg) translateX(8px) translateY(8px);
  border-radius: 2px;
`;
