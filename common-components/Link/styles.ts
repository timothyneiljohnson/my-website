import { HTMLProps, ReactNode } from 'react';
import styled from 'styled-components';
import { LinkElement } from './LinkElement';

interface StyledLinkProps extends HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
  color?: string;
  noUnderline?: boolean;
}

export const StyledLink = styled(LinkElement)<StyledLinkProps>`
  display: inline;
  color: ${({ color }) => color};
  text-decoration: ${({ noUnderline }) => noUnderline ? 'none' : 'underline'};

  &:hover {
    text-decoration: underline;
  }
`;
