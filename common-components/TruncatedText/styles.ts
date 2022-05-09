import styled from 'styled-components';

interface StyledTruncatedTextProps {
  characters?: number;
  lines?: number;
}

export const StyledTruncatedText = styled.span<StyledTruncatedTextProps>`
  ${({ lines }) => lines ? `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
  ` : null}
  ${({ characters }) => characters ? `
    display: inline;
  ` : null}
  
  overflow: hidden;
`;
