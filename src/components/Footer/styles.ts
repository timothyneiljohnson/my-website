import styled from 'styled-components';
import { colors, spacing } from '../../../common-components/design-tokens';

interface StyledFooterProps {
  isDarkMode?: boolean;
}
export const StyledFooter = styled.footer<StyledFooterProps>`
  background-image: url(${({ isDarkMode }) => isDarkMode ? '/footerbg-darkmode.png' : '/footerbg.png'});
  padding: ${spacing.x9} ${spacing.x4} 50px;
  width: 100%;
`;

interface FooterInnerProps {
  isDarkMode?: boolean;
}
export const FooterInner = styled.div<FooterInnerProps>`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  p {
    color: ${({ isDarkMode }) =>
      isDarkMode ? colors.grayLighter : colors.grayLight};
    padding: ${spacing.x5} 0 0;
    font-size: 11px;
  }
`;

export const FooterBottom = styled.div`
  a:hover {
    text-decoration: underline;
  }
`;
