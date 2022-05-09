import styled from 'styled-components';

interface StyledOutdentProps {
  horizontal?: number;
  vertical?: number;
}

export const StyledOutdent = styled.div<StyledOutdentProps>`
  ${({ horizontal, vertical }) =>
    `margin: ${vertical || 0}px ${horizontal || 0}px;`}
`;
