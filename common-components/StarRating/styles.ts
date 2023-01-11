import styled from 'styled-components';

export const StyledStarRating = styled.div`
  position: relative;
`;

interface FractionalStarWrapperProps {
  size?: number;
  value?: number;
}
export const FractionalStarWrapper = styled.div<FractionalStarWrapperProps>`
  position: absolute;
  display: inline-block;
  top: 0;
  clip: ${({ size, value }) => `rect(0, ${size * value}px, ${size}px, 0)`};
`;
