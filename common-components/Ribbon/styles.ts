import styled from 'styled-components';
import { animation, decorations, helpers } from '../design-tokens';
import { getRibbonClipPath } from './helpers';

interface RibbonWrapperProps {
  facing?: 'left' | 'top' | 'right' | 'bottom';
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
  ${({ side, thickness }) => `${side === 'top' ? 'width' : 'height'}: ${thickness}px;`}
  ${decorations.filterShadow.mdStyle}

  &:before {
    height: 0;
    width: 0;
    ${({ side, facing }) => side === 'top' ? facing : helpers.getOppositeDirection(facing)}:
    ${({ side, thickness }) => (side === 'top' ? thickness : -10)}px;
    ${({ side }) => side}: 0;
    filter: brightness(70%);
    ${({ facing }) => `border-${helpers.getOppositeDirection(facing)}: 10px solid transparent;`}
    ${({ side, color }) => `border-${helpers.getOppositeDirection(side)}: 4px solid ${color};`}
    position: absolute;
    content: '';
  }
`;

interface StyledRibbonPolygonProps {
  color?: string;
  endStyle?: 'split' | 'point' | 'slant' | 'reverseSlant';
  facing?: 'left' | 'top' | 'right' | 'bottom';
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
  padding: ${({ side }) => (side === 'top' ? '30px 5px' : '5px 30px')};
  ${({ side, facing }) => side === 'top' ? `border-top-${facing}` : `border-${facing}-${side}`}-radius: 5px;
  color: ${({ textColor }) => textColor};
  background: ${({ color, gradientStart, gradientEnd }) =>
    !gradientStart
      ? color
      : `linear-gradient(${gradientStart}, ${gradientEnd})`};
  transition: clip-path ${animation.durationSlow}ms ease-in-out;
  ${({ endStyle, side, lift }) => getRibbonClipPath({ endStyle, side, lift })}
`;
