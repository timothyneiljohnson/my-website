import { ImageProps as NextImageProps } from 'next/image';
import { StyledImage } from './styles';

interface ImageProps extends NextImageProps {
  className?: string;
  draggable?: boolean;
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
      height={heightValue}
      noFadeIn={noFadeIn}
      round={round}
      shortestSideLength={shortestSideLength}
      width={widthValue}
      {...restProps}
    />
  );
};

Image.displayName = 'Image';
