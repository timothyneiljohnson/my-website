import styled from 'styled-components';
import { decorations } from '../design-tokens';

interface StyledAspectRatioProps {
  ratio: number;
}

export const StyledAspectRatio = styled.div<StyledAspectRatioProps>`
  position: relative;
  width: 100%;
  padding-bottom: ${({ ratio }) => 100 / ratio}%;
  ${decorations.borderRadiusStyle};
`;

export const AspectRatioInner = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;

  * {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
