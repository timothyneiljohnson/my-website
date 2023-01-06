import styled from 'styled-components';
import {
  colors,
  decorations,
  focusStyle,
  mediaQueries,
  spacing,
} from '../../../common-components/design-tokens';
import { Transition } from '../../../common-components/Transition';

interface StyledMainProps {
  isFullWidth?: boolean;
}
export const StyledMain = styled.main<StyledMainProps>`
  width: 100%;
  ${({ isFullWidth }) =>
    isFullWidth ? 'text-align: center;' : 'max-width: 1032px;'}
  margin: 0 auto ${spacing.x8};
  padding: 0 ${spacing.x4};
`;

interface StyledPageContainerProps {
  isDarkMode?: boolean;
}
export const StyledPageContainer = styled.div<StyledPageContainerProps>`
  ${({ isDarkMode }) => `
    background-color: ${isDarkMode ? colors.grayDarker : colors.white};
    color: ${isDarkMode ? colors.grayLightest : colors.grayDarker};
  `}
  padding: ${spacing.x9};
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}


  @media ${mediaQueries.smMax} {
    padding: ${spacing.x4};
  }
`;

export const FeaturedImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: ${spacing.x6} 0 ${spacing.x4};

  @media ${mediaQueries.smMax} {
    margin: ${spacing.x4} 0 ${spacing.x2};
  }
`;

interface StyledDateProps {
  isDarkMode?: boolean;
}
export const StyledDate = styled.div<StyledDateProps>`
  font-family: Helvetica, Arial, Sans-Serif;
  ${({ isDarkMode }) => `
    color: ${isDarkMode ? colors.grayLighter : colors.grayDark};
  `}
  font-weight: bold;
  font-style: italic;
  letter-spacing: 0.2px;
  padding: ${spacing.x3} 0;
`;

interface PostContentProps {
  isDarkMode?: boolean;
}
export const PostContent = styled.div<PostContentProps>`
  a {
    color: ${({ isDarkMode }) =>
      isDarkMode ? colors.secondary : colors.primary};
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    list-style: initial;
    margin: revert;
    padding: revert;

    li {
      margin-bottom: ${spacing.x2};
    }
  }

  p {
    padding-bottom: ${spacing.x2};
    font-size: 16px;
    line-height: 24px;
  }

  blockquote {
    border-left: 2px solid ${colors.grayDark};
    margin: ${spacing.x2} 0 ${spacing.x4};
    padding-left: ${spacing.x5};
  }
`;

export const BackToTop = styled(Transition)`
  position: fixed;
  bottom: 0;
  right: ${spacing.x5};
  bottom: ${spacing.x5};
  width: 40px;
  height: 40px;
  z-index: 98;
  overflow: hidden;
  cursor: pointer;
  margin-left: 10px;
`;

export const BackToTopButton = styled.button`
  border-radius: 999px;
  width: 32px;
  height: 32px;
  
  &::before {
    margin-left: ${spacing.x1};
    margin-top: ${spacing.x1};
  }

  &:focus {
    ${focusStyle.withRadius(9999)}
  }
`;
