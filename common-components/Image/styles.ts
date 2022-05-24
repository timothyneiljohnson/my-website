import Image, { ImageProps } from 'next/image';
import styled, { css } from 'styled-components';
import { animation } from '../design-tokens';

interface StyledImageProps extends ImageProps {
  height?: number;
  width?: number;
  topMargin?: number;
  round?: boolean;
  noFadeIn?: boolean;
  shortestSideLength?: number;
}

export const StyledImage = styled(Image).withConfig({
  shouldForwardProp: (prop) =>
    !['noFadeIn', 'round', 'shortestSideLength'].includes(prop),
})<StyledImageProps>`
  ${({ shortestSideLength, round }) =>
    round
      ? `
    border-radius: 50%;
    object-fit: cover;
    width: ${shortestSideLength}px;
    height: ${shortestSideLength}px;
  `
      : ''};
  overflow: hidden;
  transition: border-radius ${animation.durations.faster}ms ease-in-out,
    width ${animation.durations.faster}ms ease-in-out,
    height ${animation.durations.faster}ms ease-in-out;

  ${({ noFadeIn }) =>
    !noFadeIn &&
    css`
      animation: ${animation.keyframes.fadeIn} ${animation.durations.fast}ms
        ease-in-out;
    `}
`;
