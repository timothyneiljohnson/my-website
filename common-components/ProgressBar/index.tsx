import { useRef } from 'react';
import { StandardSizes } from '../types';
import {
  StyledProgressBarTrack,
  ProgressBarActive,
  ProgressBarWrapper,
} from './styles';

export const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

interface ProgressBarProps {
  percentage: number;
  progressColor?: string;
  trackColor?: string;
  size?: StandardSizes;
}
export const ProgressBar = ({
  percentage = 0,
  progressColor = '#28ac54',
  trackColor = '#d6d8dc',
  size = 'md',
}: ProgressBarProps) => {
  const ref = useRef(null);

  return (
    <ProgressBarWrapper
      ref={ref}
      size={size}
      style={{
        '--progress-bar-percentage': percentage,
      }}
    >
      <StyledProgressBarTrack ref={ref} trackColor={trackColor}>
        <ProgressBarActive progressColor={progressColor} size={size} />
      </StyledProgressBarTrack>
    </ProgressBarWrapper>
  );
};

ProgressBar.displayName = 'ProgressBar';
