import styled from 'styled-components';
import { colors } from '../design-tokens';

interface StyledFooterProps {
  isDarkMode?: boolean;
}
export const StyledFooter = styled.footer<StyledFooterProps>`
  background-image: url(${({ isDarkMode }) => isDarkMode ? '/footerbg-darkmode.png' : '/footerbg.png'});
  padding: 37px 15px 50px;
  width: 100%;

  
`;

export const FooterInner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  p {
    color: ${colors.grayLight};
    padding: 20px 0 0;
    font-size: 11px;
  }
`;
