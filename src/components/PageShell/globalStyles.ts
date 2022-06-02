import { createGlobalStyle } from 'styled-components';
import { animation, colors } from '../../../common-components/design-tokens';

interface GlobalStylesProps {
  isDarkMode?: boolean;
}
export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    transition: background ${animation.durations.fastest}ms ease;
    background: ${({ isDarkMode }) =>
      isDarkMode
        ? `${colors.grayDark} url(/bg-darkmode.jpg) repeat`
        : `${colors.grayLightest} url(/bg.png) repeat`};
  }
`;
