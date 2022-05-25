import { createGlobalStyle } from 'styled-components';
import { animation, colors } from '../../common-components/design-tokens';

interface GlobalStylesProps {
  isDarkMode?: boolean;
}
export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    transition: background ${animation.durations.fastest}ms ease;
    background: ${({ isDarkMode }) =>
      isDarkMode
        ? `${colors.grayLight} url(/bg-darkmode.png) repeat`
        : `${colors.grayLightest} url(/bg.png) repeat`};
    line-height: 1.2;
    min-width: 300px;
  }
`;
