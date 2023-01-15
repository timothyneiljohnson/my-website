import { colors } from '../design-tokens';
import { hexToRgba } from '../helpers';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { StyledSkeleton } from './styles';

interface SkeletonProps {
  className?: string;
  color?: string;
  height?: number;
  rounded?: boolean;
  size?: number;
  src?: string;
  style?: any;
  topMargin?: number;
  type?: 'rectangle' | 'circle' | 'text' | 'svg';
  width?: number;
}
export const Skeleton = ({
  color = colors.grayLighter,
  height,
  rounded,
  topMargin,
  size,
  src,
  type = 'rectangle',
  width,
  ...restProps
}: SkeletonProps) => {
  const shortestSideLength = Math.min(height, width);
  const heightValue = size ?? height;
  const widthValue = size ?? width;

  const { isDarkMode } = useStorageDarkMode();
  return (
    <StyledSkeleton
      color={color}
      height={heightValue}
      isDarkMode={isDarkMode}
      lighterColor={hexToRgba(color, 0.4)}
      rounded={rounded}
      shortestSideLength={shortestSideLength}
      src={src}
      topMargin={topMargin}
      type={type}
      width={widthValue}
      {...restProps}
    />
  );
};
Skeleton.displayName = 'Skeleton';

export const SkeletonRounded = (props: SkeletonProps) => (
  <Skeleton {...props} rounded />
);
SkeletonRounded.displayName = 'SkeletonRounded';

export const SkeletonCircle = (props: SkeletonProps) => (
  <Skeleton {...props} type="circle" />
);
SkeletonCircle.displayName = 'SkeletonCircle';

interface SkeletonTextProps extends SkeletonProps {
  lines?: number;
}
export const SkeletonText = ({
  className,
  height = 14,
  topMargin = 12,
  lines = 1,
  ...restProps
}: SkeletonTextProps) => (
  <div className={className}>
    {[...Array(lines)].map((_, i) => (
      <Skeleton
        {...restProps}
        height={height}
        key={i}
        topMargin={topMargin}
        type="text"
      />
    ))}
  </div>
);
SkeletonText.displayName = 'SkeletonText';

interface SkeletonSVGProps extends SkeletonProps {
  src?: string;
}
export const SkeletonSVG = ({ src, ...restProps }: SkeletonSVGProps) => (
  <Skeleton src={src} type="svg" {...restProps} />
);
SkeletonText.displayName = 'SkeletonText';
