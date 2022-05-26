import styled from 'styled-components';
import { colors, decorations, mediaQueries, spacing } from '../../common-components/design-tokens';

export const StyledMain = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: ${spacing.x8} auto;
  padding: 0 ${spacing.x4};

  p {
    padding-bottom: ${spacing.x2};
    font-size: 16px;
    line-height: 24px;
  }
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
  height: 500px;
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
