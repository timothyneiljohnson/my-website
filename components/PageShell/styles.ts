import styled from 'styled-components';
import { Heading } from '../../common-components';
import { colors, decorations } from '../../common-components/design-tokens';

export const StyledMain = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  padding: 0 15px;

  p {
    padding-bottom: 10px;
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
  padding: 36px;
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}
`;

export const FeaturedPageImage = styled.img`
  padding-bottom: 16px;
  width: 100%;
`;

export const StyledDate = styled.div`
  font-family: Helvetica, Arial, Sans-Serif;
  color: ${colors.grayLight};
  font-weight: bold;
  font-style: italic;
  letter-spacing: 0.2px;
  padding: 12px 0;
`;

export const PostHeading = styled(Heading)`
  margin: 8px 0 12px;
`;
