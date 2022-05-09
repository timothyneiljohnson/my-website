import styled from 'styled-components';
import { StandardSizes } from '../types';

export const sizeMap = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 14,
};

export const StyledLoadingDots = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface LoadingDotsWrapperProps {
  size?: StandardSizes;
}
export const LoadingDotsWrapper = styled.div<LoadingDotsWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => sizeMap[size] * 5}px;
  height: ${({ size }) => sizeMap[size] * 4.6}px;
`;

interface LoadingDotProps {
  color?: string;
  size?: StandardSizes;
}
export const LoadingDot = styled.div<LoadingDotProps>`
  margin: 0 auto;
  width: ${({ size }) => sizeMap[size]}px;
  height: ${({ size }) => sizeMap[size]}px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  color: ${({ color }) => color};
  animation: dotRising 1.2s infinite linear;
  animation-delay: 0.15s;

  &:first-child {
    left: ${({ size }) => sizeMap[size] * -1.5}px;
    animation: dotRising 1.2s infinite linear;
    animation-delay: 0s;
  }

  &:nth-child(3) {
    left: ${({ size }) => sizeMap[size] * 1.5}px;
    animation: dotRising 1.2s infinite linear;
    animation-delay: 0.3s;
  }

  @keyframes dotRising {
    0% {
      transform: translateY(${({ size }) => `${sizeMap[size] * 1.4}px`});
      opacity: 0;
    }
    33%,
    66% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(${({ size }) => `${sizeMap[size] * -1.8}px`});
      opacity: 0;
    }
  }
`;
