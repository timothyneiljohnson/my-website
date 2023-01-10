import styled from 'styled-components';

export const StickyElementWrapper = styled.div`
  inset: 0 0 auto auto;
  width: 100%;
  height: 100%;
  position: relative;
`;

interface StickyElementInnerProps {
  topOffset?: number;
}

export const StickyElementInner = styled.div<StickyElementInnerProps>`
  ${({ topOffset }) => `
    position: sticky;
    top: ${topOffset}px;
  `}
`;
