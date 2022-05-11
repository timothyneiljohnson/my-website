import { keyframes } from 'styled-components';

const colors = {
  primary: '#5874DC',
  secondary: '#67b4a2',
  tertiary: '#384E78',
  quaternary: '#e06c78',
  quinary: '#fa9284',
  white: '#fff',
  grayLightest: '#efefef',
  grayLighter: '#ccc',
  grayLight: '#999',
  grayDark: '#666',
  grayDarker: '#333',
  grayDarkest: '#222',
};

const gradients = {
  primary: {
    start: colors.primary,
    end: colors.quinary,
  },
  secondary: {
    start: colors.secondary,
    end: colors.primary,
  },
  tertiary: {
    start: colors.tertiary,
    end: colors.primary,
  },
  quaternary: {
    start: colors.quaternary,
    end: colors.tertiary,
  },
  quinary: {
    start: colors.quinary,
    end: colors.quaternary,
  },
};

const focusStyle = `
  outline: ${colors.grayLight} dashed 1px;
  outline-offset: 2px;
`;

const decorations = {
  borderRadiusStyle: 'border-radius: 6px;',
  buttons: {
    borderRadiusStyle: 'border-radius: 8px;',
    hoverFilterStyle: 'filter: brightness(95%);',
  },
  boxShadow: {
    smStyle: 'box-shadow: rgba(0, 0, 0, 0.15) 0 1px 3px 1px;',
    mdStyle: 'box-shadow: rgba(0, 0, 0, 0.15) 0 4px 4px 0;',
    lgStyle: '',
  },
  filterShadow: {
    smStyle: '',
    mdStyle: 'filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));',
    lgStyle: '',
  },
  headingFontStyle: {
    h1: `
      font-size: 32px;
      line-height: 36px;
    `,
    h2: `
      font-size: 22px;
      line-height: 26px;
    `,
    h3: `
      font-size: 18px;
      line-height: 22px;
    `,
    h4: `
      font-size: 14px;
      line-height: 18px;
    `,
    h5: `
      font-size: 12px;
      line-height: 16px;
    `,
    h6: `
      font-size: 12px;
      line-height: 16px;
    `,
  },
};

const animation = {
  durations: {
    slowest: 2000,
    slower: 800,
    slow: 500,
    fast: 350,
    faster: 200,
    fastest: 100,
  },
  keyframes: {
    backgroundPosition: keyframes`
      from {
        background-position: 100% 0%;
      }
      to {
          background-position: 0% 100%;
      }
    `,
    emphasisGrowAndRotate: keyframes`
      0% {
        transform: rotate(0) scale(1);
      }
      80% {
        transform: rotate(-18deg) scale(1.18);
      }
      100% {
        transform: rotate(0) scale(1);
      }
    `,
    fadeIn: keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `,
    overflowMarqueeBounce: (distance: number) => keyframes`
      0% {
      transform: translate(0, 0);
      }
      40%,
      60% {
        transform: translate(${-distance}px, 0);
      }
      100% {
        transform: translate(0, 0);
      }
    `,
    riseInRiseOut: (distance: number) => keyframes`
      0% {
        transform: translateY(${distance}px);
        opacity: 0;
      }
      33%,
      66% {
        transform: translateY(0px);
        opacity: 1;
      }
      100% {
        transform: translateY(${-distance}px);
        opacity: 0;
      }
    `,
    riseAndFadeIn: (distance: number) => keyframes`
      from {
        transform: translateY(${distance}px);
        opacity: 0;
        pointer-events: none;
      }
      to {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    `,
    rotate360: keyframes`
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    `,
  },
};

const breakpoints = {
  xl: '1200px',
  lgMax: '1199px',
  lg: '992px',
  mdMax: '991px',
  md: '668px',
  smMax: '667px',
  sm: '480px',
  xsMax: '479px',
  xs: 0,
  xxsMax: '374px',
};

const mediaQueries = {
  xxsMax: `(max-width: ${breakpoints.xxsMax})`,
  xs: `(min-width: ${breakpoints.xs})`,
  xsMax: `(max-width: ${breakpoints.xsMax})`,
  sm: `(min-width: ${breakpoints.sm})`,
  smMax: `(max-width: ${breakpoints.smMax})`,
  md: `(min-width: ${breakpoints.md})`,
  mdMax: `(max-width: ${breakpoints.mdMax})`,
  lg: `(min-width: ${breakpoints.lg})`,
  lgMax: `(max-width: ${breakpoints.lgMax})`,
  xl: `(min-width: ${breakpoints.xl})`,
  portait: '(orientation: portrait)',
  darkMode: '(prefers-color-scheme: dark)', // Avoid this because we need manual override
  reduceMotion: '(prefers-reduced-motion: reduce)',
};

const spacing = {
  x1: '4px',
  x2: '8px',
  x3: '12px',
  x4: '16px',
  x5: '20px',
  x6: '24px',
  x7: '28px',
  x8: '32px',
  x9: '36px',
  x10: '40px',
};

const font = {
  families: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
};

const a11y = {
  reduceMotionOverrideStyle: `@media ${mediaQueries.reduceMotion} { transition: none; }`,
};

export {
  a11y,
  animation,
  breakpoints,
  colors,
  decorations,
  focusStyle,
  font,
  gradients,
  mediaQueries,
  spacing,
};
