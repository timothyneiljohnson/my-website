import styled from 'styled-components';
import { colorLuminance } from '../helpers';
import { animation, decorations } from '../design-tokens';
import { sizeMap } from '.';
import { StandardSizes } from '../types';

interface SliderActiveProps {
  hoverProgressColor?: string;
  isDragging?: boolean;
  progressColor?: string;
  size?: string;
}
export const SliderActive = styled.div<SliderActiveProps>`
  width: calc(
    ((100% - ${({ size }) => sizeMap[size]}px) * var(--slider-percentage, 0)) +
      ${({ size }) => sizeMap[size] / 2}px
  );
  background: ${({ hoverProgressColor, isDragging, progressColor }) =>
    isDragging && hoverProgressColor ? hoverProgressColor : progressColor};
  height: 100%;
  transition: background ${animation.durations.fastest}ms ease-in-out;
`;

interface StyledSliderWrapperProps {
  hoverProgressColor?: string;
  size?: StandardSizes;
  style?: {
    '--slider-percentage'?: number;
  };
}
export const SliderWrapper = styled.div<StyledSliderWrapperProps>`
  height: ${({ size }) => sizeMap[size]}px;
  width: 100%;
  position: relative;

  &:hover {
    ${SliderActive} {
      background: ${({ hoverProgressColor }) =>
        hoverProgressColor ?? undefined};
    }
  }
`;

interface StyledSliderTrackProps {
  trackColor?: string;
  percentage?: number;
}
export const StyledSliderTrack = styled.div<StyledSliderTrackProps>`
  transition: background-color ${animation.durations.faster}ms ease-out,
    box-shadow ${animation.durations.faster}ms ease-out;
  transform: translateX();
  background: ${({ trackColor }) => trackColor};
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-items: center;
  box-shadow: inset 0 0 3px 2px
    ${({ trackColor }) => colorLuminance(trackColor, -0.04)};
  user-select: none;
  overflow: hidden;
  height: 100%;
`;

interface SliderMarkerProps {
  markerColor?: string;
  size?: string;
}
export const SliderMarker = styled.div<SliderMarkerProps>`
  position: absolute;
  background: ${({ markerColor }) => markerColor};
  border-radius: 999px;
  cursor: pointer;
  top: 0px;
  height: ${({ size }) => sizeMap[size]}px;
  width: ${({ size }) => sizeMap[size]}px;
  left: calc(
    (100% - ${({ size }) => sizeMap[size]}px) * var(--slider-percentage, 0)
  );
  ${decorations.boxShadow.smStyle}
`;

export const HiddenRangeInput = styled.input.attrs({
  type: 'range',
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
