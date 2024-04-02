import styled from 'styled-components';
import {
  mediaQueries,
  spacing,
} from '../../../common-components/design-tokens';

export const MainNavList = styled.ul`
  margin: ${spacing.x2} 0;
  right: 0;
  white-space: nowrap;
`;

export const MainNavListItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;

  @media ${mediaQueries.xsMax} {
    margin-right: ${spacing.x2};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const LogoLink = styled.a`
  height: 30px;
  max-width: 100%;
  display: inline-block;
  outline: none;
  margin: ${spacing.x2} 0;
  position: relative;
  aspect-ratio: 1507 / 92;
`;
