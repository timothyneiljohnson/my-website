import { StyledIcon } from './styles';

interface IconProps {
  className?: string;
  fill?: string;
  fullWidth?: boolean;
  height?: number;
  hoverFill?: string;
  name?: string;
  rotate?: number;
  size?: number;
  src?: string;
  style?: any;
  width?: number;
}

export const Icon = ({
  className,
  fill,
  fullWidth,
  height,
  hoverFill,
  name,
  rotate,
  size,
  src,
  style,
  width,
}: IconProps) => {
  const heightValue = size ?? height;
  const widthValue = size ?? width;
  const srcValue = src ?? `/ionicons/${name}.svg`;

  return (
    <StyledIcon
      className={className}
      fill={fill}
      fullWidth={fullWidth}
      height={heightValue}
      hoverFill={hoverFill}
      rotate={rotate}
      size={size}
      src={srcValue}
      style={style}
      width={widthValue}
    />
  );
};

Icon.displayName = 'Icon';
