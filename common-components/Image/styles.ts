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
  shouldForwardProp: (prop: string) => !['noFadeIn'].includes(prop),
})<StyledImageProps>`
  ${({ noFadeIn }) =>
    !noFadeIn &&
    css`
      animation: ${animation.keyframes.fadeIn} ${animation.durations.fast}ms
        ease-in-out;
    `}
`;

interface StyledImageContainerProps extends ImageProps {
  height?: number;
  width?: number;
  round?: boolean;
  shortestSideLength?: number;
}

export const StyledImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop: string) =>
    !['round', 'shortestSideLength'].includes(prop),
})<StyledImageContainerProps>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: border-radius ${animation.durations.faster}ms ease-in-out,
    width ${animation.durations.faster}ms ease-in-out,
    height ${animation.durations.faster}ms ease-in-out;

  ${({ shortestSideLength, round }) =>
    round
      ? `
        border-radius: 50%;
        width: ${shortestSideLength}px;
        height: ${shortestSideLength}px;

        img {
          object-fit: cover;
        }
      `
      : ''};
`;
