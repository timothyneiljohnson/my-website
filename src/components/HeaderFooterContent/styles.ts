import styled from 'styled-components';
import {
  colors,
  gradients,
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

interface LogoLinkProps {
  isDarkMode: boolean;
}
export const LogoLink = styled.a<LogoLinkProps>`
  font-family: 'Crimson Text', serif;
  font-size: 42px;
  letter-spacing: 0.5px;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.white : colors.tertiary)};
  vertical-align: top;
  max-width: 100%;
  display: inline;
  outline: none;
  margin: ${spacing.x1} 0;
  position: relative;
  aspect-ratio: 1507 / 92;

  @media ${mediaQueries.mdMax} {
    font-size: 36px;
  }
  @media ${mediaQueries.xsMax} {
      font-size: 31px;
    }

  span {
    font-family: 'Pacifico', cursive;
    font-size: 31px;
    color: ${({ isDarkMode }) => (isDarkMode ? colors.white : '#4A78A0')};
    padding-right: 3.5px;
    background-image: linear-gradient(
      45deg,
      ${({ isDarkMode }) =>
        isDarkMode ? gradients.primary.end : gradients.secondary.start},
      ${({ isDarkMode }) =>
        isDarkMode ? gradients.primary.start : gradients.secondary.end}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    @media ${mediaQueries.mdMax} {
      font-size: 25px;
    }
    @media ${mediaQueries.xsMax} {
      font-size: 20px;
    }
  }
`;
