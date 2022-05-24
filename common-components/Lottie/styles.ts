import styled from 'styled-components';
import { decorations } from '../design-tokens';

interface StyledLottieProps {
  background?: string;
  height?: number;
  width?: number;
}

export const StyledLottie = styled.div<StyledLottieProps>`
  height: ${({ height }) => `${height > 0 ? `${height}px` : '100%'}`};
  width: ${({ width }) => `${width > 0 ? `${width}px` : '100%'}`};
  background: ${({ background }) => background};
  background-size: 400%;
  position: relative;
  ${decorations.borderRadiusStyle}
`;
