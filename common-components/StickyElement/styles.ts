import styled from 'styled-components';

export const StickyElementWrapper = styled.div`
  inset: 0 0 auto auto;
  width: 100%;
  position: relative;
`;

interface StickyElementInnerProps {
  isFixed?: boolean;
  targetTopOffset?: number;
}

export const StickyElementInner = styled.div<StickyElementInnerProps>`
  ${({ isFixed, targetTopOffset }) => isFixed ? `
    position: ${isFixed ? 'sticky' : 'relative'};
    top: ${isFixed ? `${targetTopOffset}px` : 'auto'};
  ` : null}
`;
