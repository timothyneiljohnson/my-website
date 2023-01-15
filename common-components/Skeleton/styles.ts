import styled from 'styled-components';
import { animation, decorations } from '../design-tokens';

interface StyledSkeletonProps {
  color: string;
  height?: number;
  isDarkMode?: boolean;
  lighterColor: string;
  rounded?: boolean;
  shortestSideLength?: number;
  src?: string;
  topMargin?: number;
  type: string;
  width?: number;
  style?: any;
}

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  height: ${({ height }) => `${height > 0 ? `${height}px` : '100%'}`};
  width: ${({ width }) => `${width > 0 ? `${width}px` : '100%'}`};
  margin-top: ${({ topMargin }) => `${topMargin > 0 ? `${topMargin}px` : '0'}`};
  background: ${({ color, lighterColor }) =>
    `linear-gradient(90deg, ${color}, ${lighterColor}, ${color}, ${lighterColor}, ${color}, ${lighterColor}, ${color})`};
  background-size: 300vw;
  position: relative;
  animation: ${animation.keyframes.backgroundPosition} 12s linear infinite;
  ${({ shortestSideLength, type }) =>
    type === 'circle'
      ? `
    border-radius: 50%;
    overflow: hidden;

    border-radius: 50%;
    width: ${shortestSideLength}px;
    height: ${shortestSideLength}px;
  `
      : ''}
  ${({ type, src }) =>
    type === 'svg' && src
      ? `
        mask: url(${src}) no-repeat center left;
        mask-size: contain;
      `
      : ''}
  ${({ rounded }) => (rounded ? decorations.borderRadiusStyle : '')}
`;
