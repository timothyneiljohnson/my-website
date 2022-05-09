import { StyledImage } from './styles';

interface ImageProps {
  className?: string;
  draggable?: boolean;
  fullWidth?: boolean;
  height?: number;
  width?: number;
  noFadeIn?: boolean;
  round?: boolean;
  size?: number;
  src: string;
  style?: any;
}
export const Image = (props: ImageProps) => {
  const {
    className,
    fullWidth,
    height,
    width,
    noFadeIn,
    round,
    size,
    ...restProps
  } = props;
  const shortestSideLength = Math.min(height, width);
  const heightValue = size ?? height;
  const widthValue = size ?? width;

  return (
    <StyledImage
      className={className}
      fullWidth={fullWidth}
      height={heightValue}
      width={widthValue}
      round={round}
      shortestSideLength={shortestSideLength}
      noFadeIn={noFadeIn}
      {...restProps}
    />
  );
};

Image.displayName = 'Image';
