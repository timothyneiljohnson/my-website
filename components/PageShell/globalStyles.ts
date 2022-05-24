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

  p {
    padding-bottom: 8px;
  }

  code,
  pre {
    background-color: #042f38 !important;
  }

  .h-position-relative {
    position: relative;
  }

  .h-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
`;
