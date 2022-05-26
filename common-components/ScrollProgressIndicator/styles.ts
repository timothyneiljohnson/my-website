import styled from 'styled-components';

interface ScrollProgressIndicatorWrapperProps {
  height?: number;
  width?: number;
  topMargin?: number;
  style?: {
    '--scroll-progress': number;
    '--indicator-height': number;
  }
}

export const ScrollProgressIndicatorWrapper = styled.div<ScrollProgressIndicatorWrapperProps>`
  height: calc(var(--indicator-height, 0) * 1px);
  width: 100%;
  position: relative;
  z-index: 98;
`;

interface StyledScrollProgressIndicatorProps {
  color?: string;
}
export const StyledScrollProgressIndicator = styled.div<StyledScrollProgressIndicatorProps>`
  height: calc(var(--indicator-height, 0) * 1px);
  width: calc(var(--scroll-progress, 0) * 100%);
  position: fixed;
  top: 0;
  background-color: ${({ color }) => color};
`;
