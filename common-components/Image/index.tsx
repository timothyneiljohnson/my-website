import { ImageProps as NextImageProps } from 'next/image';
import { useContext } from 'react';
import { ImageOptimizationContext } from './image-optimization-context';

import { StyledImage, StyledImageContainer } from './styles';

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
  const { className, height, width, noFadeIn, round, size, ...restProps } =
    props;
  const { unoptimized } = useContext(ImageOptimizationContext);
  const shortestSideLength = Math.min(height, width);
  const heightValue = size ?? height;
  const widthValue = size ?? width;

  return (
    <StyledImageContainer
      className={className}
      height={heightValue}
      round={round}
      shortestSideLength={shortestSideLength}
      width={widthValue}
    >
      <StyledImage
        height={heightValue}
        noFadeIn={noFadeIn}
        unoptimized={unoptimized}
        width={widthValue}
        {...restProps}
      />
    </StyledImageContainer>
  );
};

Image.displayName = 'Image';
