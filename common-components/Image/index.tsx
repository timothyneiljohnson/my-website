import { ImageProps as NextImageProps } from 'next/image';
import { useContext } from 'react';
import { ImageOptimizationContext } from './image-optimization-context';
import { MasonryItem } from './components/MasonryItem';

import { StyledImage, StyledImageContainer } from './styles';

interface ImageProps extends NextImageProps {
  alt: string;
  className?: string;
  draggable?: boolean;
  masonry?: boolean;
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
    alt,
    className,
    height,
    masonry,
    width,
    noFadeIn,
    round,
    size,
    src,
    ...restProps
  } = props;
  const { unoptimized } = useContext(ImageOptimizationContext);
  const shortestSideLength = Math.min(height, width);
  const heightValue = size ?? height;
  const widthValue = size ?? width;
  const srcValue = src || '/placeholder.png';

  return masonry ? (
    <MasonryItem
      alt={alt}
      className={className}
      src={srcValue}
      unoptimized={unoptimized}
      {...restProps}
    />
  ) : (
    <StyledImageContainer
      className={className}
      height={heightValue}
      round={round}
      shortestSideLength={shortestSideLength}
      width={widthValue}
    >
      <StyledImage
        alt={alt}
        height={heightValue}
        noFadeIn={noFadeIn}
        src={srcValue}
        unoptimized={unoptimized}
        width={widthValue}
        {...restProps}
      />
    </StyledImageContainer>
  );
};

Image.displayName = 'Image';
