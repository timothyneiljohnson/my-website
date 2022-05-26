import styled from 'styled-components';
import { spacing } from '../design-tokens';

interface StyledDividerProps {
  color: string;
  height: number;
}
export const StyledDivider = styled.hr<StyledDividerProps>`
  border-top: ${({ height }) => height}px solid ${({ color }) => color};
  margin: ${spacing.x3} 0;
`;
