import { HTMLProps, ReactNode } from 'react';
import styled from 'styled-components';

interface StyledLinkProps extends HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
  color?: string;
  noUnderline?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline;
  color: ${({ color }) => color};
  text-decoration: ${({ noUnderline }) => noUnderline ? 'none' : 'underline'};

  &:hover {
    text-decoration: underline;
  }
`;
