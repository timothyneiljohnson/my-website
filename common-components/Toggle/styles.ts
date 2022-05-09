import styled from 'styled-components';
import { colorLuminance } from '../helpers';
import { animation, colors } from '../design-tokens';
import { StandardSizes } from '../types';

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

interface StyledToggleLabelProps {
  size?: StandardSizes;
  activeColor?: string;
  inactiveColor?: string;
  isActive?: boolean;
}
export const StyledToggleLabel = styled.label<StyledToggleLabelProps>`
  height: ${({ size }) =>
    `${sizeMap[size] > 0 ? `${sizeMap[size]}px` : '100%'}`};
  width: ${({ size }) =>
    `${sizeMap[size] > 0 ? `${sizeMap[size] * 2 - 4}px` : '100%'}`};
  transition: background-color ${animation.durationFaster}ms ease-out,
    box-shadow ${animation.durationFaster}ms ease-out;
  transform: translateX();
  background-color: ${({ isActive, inactiveColor, activeColor }) =>
    isActive ? activeColor : inactiveColor};
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  box-shadow: inset 0 0 3px 2px
    ${({ isActive, inactiveColor, activeColor }) =>
      isActive
        ? colorLuminance(activeColor, -0.04)
        : colorLuminance(inactiveColor, -0.04)};
`;

interface ToggleSwitchProps {
  isActive?: boolean;
}
export const ToggleSwitch = styled.div<ToggleSwitchProps>`
  background: ${colors.white};
  border-radius: inherit;
  height: calc(100% - 4px);
  width: calc(50% - 2px);
  margin-left: 2px;
  transition: transform ${animation.durationFaster}ms ease-out;
  transform: translateX(${({ isActive }) => (isActive ? '100%' : 0)});
`;

export const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  padding: 0;
  height: 1px;
  width: 1px;
  margin: -1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
`;
