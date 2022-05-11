import styled from 'styled-components';
import { mediaQueries } from '../../common-components/design-tokens';

export const MainNavList = styled.ul`
  margin-top: 16px;
  right: 0;
`;

export const MainNavListItem = styled.li`
  float: left;
  margin-right: 12px;

  @media ${mediaQueries.xsMax} {
    margin-right: 8px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const LogoLink = styled.a`
  height: auto;
  display: inline-block;
  outline: none;
  margin-top: 21px;
`;
