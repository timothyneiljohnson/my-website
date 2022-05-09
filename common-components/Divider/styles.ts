import styled from 'styled-components';

interface StyledDividerProps {
  color: string;
  height: number;
}
export const StyledDivider = styled.hr<StyledDividerProps>`
  border-top: ${({ height }) => height}px solid ${({ color }) => color};
  margin: 10px 0;
`;
