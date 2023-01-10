import styled from 'styled-components';
import { animation } from '../design-tokens';
import { sizeMap } from '.';
import { StandardSizes } from '../types';

interface ProgressBarActiveProps {
  progressColor?: string;
  size?: string;
}
export const ProgressBarActive = styled.div<ProgressBarActiveProps>`
  width: calc(
    ((100% - ${({ size }) => sizeMap[size]}px) * var(--progress-bar-percentage, 0)) +
      ${({ size }) => sizeMap[size] / 2}px
  );
  background: ${({ progressColor }) =>
    progressColor};
  height: 100%;
  transition: background ${animation.durations.fastest}ms ease-in-out;
`;

interface StyledProgressBarWrapperProps {
  size?: StandardSizes;
  style?: {
    '--progress-bar-percentage'?: number;
  };
}
export const ProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  height: ${({ size }) => sizeMap[size]}px;
  width: 100%;
  position: relative;
`;

interface StyledProgressBarTrackProps {
  trackColor?: string;
  percentage?: number;
}
export const StyledProgressBarTrack = styled.div<StyledProgressBarTrackProps>`
  transition: background-color ${animation.durations.faster}ms ease-out,
    box-shadow ${animation.durations.faster}ms ease-out;
  transform: translateX();
  background: ${({ trackColor }) => trackColor};
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-items: center;
  user-select: none;
  overflow: hidden;
  height: 100%;
`;
