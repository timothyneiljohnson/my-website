import styled from 'styled-components';
import { animation, decorations, spacing } from '../design-tokens';
import { getOppositedirection } from '../helpers';
import { SideNames } from '../types';
import { getRibbonClipPath } from './helpers';

interface RibbonWrapperProps {
  facing?: SideNames;
  thickness?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  side?: 'left' | 'top' | 'right';
}

export const RibbonWrapper = styled.div<RibbonWrapperProps>`
  position: absolute;
  ${({ side }) => side}: -4px;
  top: ${({ top }) => (top !== undefined ? `${top - 4}px` : undefined)};
  right: ${({ right }) => (right !== undefined ? `${right - 4}px` : undefined)};
  left: ${({ left }) => (left !== undefined ? `${left - 4}px` : undefined)};
  z-index: 1;
  ${({ side, thickness }) => `${side === 'top' ? 'width' : 'height'}: ${thickness}px;`}
  ${decorations.filterShadow.mdStyle}

  &:before {
    height: 0;
    width: 0;
    ${({ side, facing }) => side === 'top' ? facing : getOppositedirection(facing)}:
    ${({ side, thickness }) => (side === 'top' ? thickness : -10)}px;
    ${({ side }) => side}: 0;
    filter: brightness(70%);
    ${({ facing }) => `border-${getOppositedirection(facing)}: 10px solid transparent;`}
    ${({ side, color }) => `border-${getOppositedirection(side)}: 4px solid ${color};`}
    position: absolute;
    content: '';
  }
`;

interface StyledRibbonPolygonProps {
  color?: string;
  endStyle?: 'split' | 'point' | 'slant' | 'reverseSlant';
  facing?: SideNames;
  gradientStart?: string;
  gradientEnd?: string;
  textColor?: string;
  thickness?: number;
  side?: 'left' | 'top' | 'right';
  lift?: number;
}

export const StyledRibbonPolygon = styled.div<StyledRibbonPolygonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  padding: ${({ side }) => (side === 'top' ? `${spacing.x8} ${spacing.x1}` : `${spacing.x1} ${spacing.x8}`)};
  ${({ side, facing }) => side === 'top' ? `border-top-${facing}` : `border-${facing}-${side}`}-radius: 5px;
  color: ${({ textColor }) => textColor};
  pointer-events: none;
  background: ${({ color, gradientStart, gradientEnd }) =>
    !gradientStart
      ? color
      : `linear-gradient(${gradientStart}, ${gradientEnd})`};
  transition: clip-path ${animation.durations.slow}ms ease-in-out;
  ${({ endStyle, side, lift }) => getRibbonClipPath({ endStyle, side, lift })}
`;
