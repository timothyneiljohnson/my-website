import { createGlobalStyle } from 'styled-components';
import { colors } from '../../common-components/design-tokens';

interface GlobalStylesProps {
  isDarkMode?: boolean;
}
export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    background: ${({ isDarkMode }) =>
      isDarkMode
        ? `${colors.grayDark} url(/bg-darkMode.png) repeat`
        : `${colors.grayLightest} url(/bg.png) repeat`};
    line-height: 1.2;
    min-width: 300px;
  }

  code,
  pre {
    background-color: #042f38 !important;
  }
`;
