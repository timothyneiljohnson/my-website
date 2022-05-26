import styled from 'styled-components';
import { mediaQueries, spacing } from '../../common-components/design-tokens';

export const MainNavList = styled.ul`
  margin-top: ${spacing.x4};
  right: 0;
`;

export const MainNavListItem = styled.li`
  float: left;
  margin-right: ${spacing.x3};

  @media ${mediaQueries.xsMax} {
    margin-right: ${spacing.x2};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const LogoLink = styled.a`
  height: 30px;
  width: 100%;
  display: inline-block;
  outline: none;
  margin-top: 21px;
  position: relative;
`;
