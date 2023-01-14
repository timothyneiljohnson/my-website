import { HTMLProps, ReactNode } from 'react';
import styled from 'styled-components';

interface StyledLinkProps extends HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
  color?: string;
  noUnderline?: boolean;
  reverseUnderline?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline;
  color: ${({ color }) => color};
  text-decoration: ${({ noUnderline, reverseUnderline }) =>
    noUnderline || reverseUnderline ? 'none' : 'underline'};

  &:hover {
    ${({ noUnderline }) => !noUnderline ? 'text-decoration: underline;' : ''}
  }
`;
