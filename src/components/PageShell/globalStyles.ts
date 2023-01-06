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

  /* Make YouTube videos inserted via WordPress embed full-width */

  .wp-block-embed-youtube {
    overflow: hidden;
    position: relative;
    max-width: 100%;
    height: auto;
    padding-bottom: 56.25%;
  }

  .wp-block-embed-youtube iframe,
  .wp-block-embed-youtube object,
  .wp-block-embed-youtube embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
