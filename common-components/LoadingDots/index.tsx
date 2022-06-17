import { colors } from '../design-tokens';
import { StandardSizes } from '../types';
import { LoadingDot, LoadingDotsWrapper, StyledLoadingDots } from './styles';

export interface LoadingDotsProps {
  className?: string;
  color?: string;
  size?: StandardSizes;
}
export const LoadingDots = ({
  className,
  color = colors.primary,
  size = 'md',
}: LoadingDotsProps) => (
  <StyledLoadingDots>
    <LoadingDotsWrapper className={className} size={size}>
      <LoadingDot color={color} size={size} />
      <LoadingDot color={color} size={size} />
      <LoadingDot color={color} size={size} />
    </LoadingDotsWrapper>
  </StyledLoadingDots>
);

LoadingDots.displayName = 'LoadingDots';
