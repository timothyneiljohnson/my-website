import styled from 'styled-components';
import { animation, colors, decorations } from '../design-tokens';

interface StyledPlaceholderProps {
  height?: number;
  width?: number;
  topMargin?: number;
  isDarkMode?: boolean;
}

export const StyledPlaceholder = styled.div<StyledPlaceholderProps>`
  height: ${({ height }) => `${height > 0 ? `${height}px` : '100%'}`};
  width: ${({ width }) => `${width > 0 ? `${width}px` : '100%'}`};
  margin-top: ${({ topMargin }) => `${topMargin > 0 ? `${topMargin}px` : '0'}`};
  background: ${({ isDarkMode }) => isDarkMode ? `linear-gradient(-45deg, ${colors.grayDark} 0%, ${colors.grayLight} 33%, ${colors.grayDark} 66%, ${colors.grayLight} 100%)` : `linear-gradient(-45deg, ${colors.grayLightest} 0%, ${colors.grayLighter} 33%, ${colors.grayLightest} 66%, ${colors.grayLighter} 100%)`};
  background-size: 400%;
  position: relative;
  animation: ${animation.keyframes.backgroundPosition} ${animation.durations.slowest}ms linear infinite;
  ${decorations.borderRadiusStyle}
`;
