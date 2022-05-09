import styled from 'styled-components';
import { animation } from '../design-tokens';

interface StyledImageProps {
  fullWidth?: boolean;
  height?: number;
  width?: number;
  topMargin?: number;
  round?: boolean;
  noFadeIn?: boolean;
  shortestSideLength?: number;
}

export const StyledImage = styled.img<StyledImageProps>`
  height: ${({ height }) => `${height > 0 ? `${height}px` : 'auto'}`};
  width: ${({ width }) => `${width > 0 ? `${width}px` : 'auto'};`};
  ${({ width, fullWidth }) => `${!width && fullWidth ? 'width: 100%;' : ''}`}
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
  transition: border-radius ${animation.durationFaster}ms ease-in-out,
    width ${animation.durationFaster}ms ease-in-out,
    height ${animation.durationFaster}ms ease-in-out;
  animation: fadeInAnimation
    ${({ noFadeIn }) =>
      `${noFadeIn ? 0 : animation.durationFast}ms ease-in-out`};

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
