import { HTMLAttributes, ReactNode } from 'react';
import { StyledGrid } from './styles';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | ReactNode[];
  fixed?: boolean;
}
export const Grid = ({ children, fixed }: GridProps) => (
  <StyledGrid fixed={fixed}>{children}</StyledGrid>
);

Grid.displayName = 'Grid';
