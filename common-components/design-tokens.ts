import { keyframes } from 'styled-components';
import { SideNames } from './types';

const colors = {
  primary: '#5874DC',
  secondary: '#57b7b4',
  tertiary: '#3D4D75',
  quaternary: '#e06c78',
  quinary: '#fa9284',
  white: '#fff',
  grayLightest: '#efefef',
  grayLighter: '#ddd',
  grayLight: '#8a939d',
  grayDark: '#666',
  grayDarker: '#333',
  grayDarkest: '#222',
  messages: {
    info: '#248fc8',
    warning: '#e29f4c',
    success: '#2aa956',
    error: '#cb3b3e',
  },
};

const buttons = {
  primary: {
    bg: colors.primary,
    border: colors.primary,
    text: colors.white,
  },
  secondary: {
    bg: colors.tertiary,
    border: colors.tertiary,
    text: colors.white,
  },
  default: {
    bg: colors.white,
    border: colors.grayLighter,
    text: colors.grayDarker,
  },
  defaultDarkMode: {
    bg: colors.grayLight,
    border: colors.grayLight,
    borderHover: colors.grayLightest,
    text: colors.white,
  },
  disabled: {
    bg: colors.grayLighter,
    border: colors.grayLighter,
    text: colors.grayLight,
  },
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

const decorations = {
  borderRadiusStyle: 'border-radius: 10px;',
  buttons: {
    borderRadiusStyle: 'border-radius: 8px;',
    hoverFilterStyle: 'filter: brightness(95%);',
  },
  boxShadow: {
    smStyle: 'box-shadow: rgba(0, 0, 0, 0.15) 0 1px 3px 1px;',
    mdStyle: 'box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px 2px;',
    lgStyle: '',
  },
  filterShadow: {
    smStyle: 'filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.1));',
    mdStyle: 'filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));',
    lgStyle: '',
  },
};

const focusStyle = {
  default: `
    outline: ${colors.grayLight} dashed 1px;
    outline-offset: 2px;
  `,
  tight: `
    outline: ${colors.grayLight} dashed 1px;
  `,
  // Safari cannot easily do rounded outlines
  withRadius: (radius = 6) => `
    position: relative;
    outline: none;
    &::before {
      content: '';
      position: absolute;
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      top: -3px;
      left: -3px;
      border: ${colors.grayLight} dashed 1px;
      border-radius: ${radius + 2}px;
    }
  `,
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
      0% {
        background-position: 100%;
      }
      50% {
        background-position: 0%;
      }
      100% {
        background-position: 100%;
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
    fadeOut: keyframes`
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
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
    scaleFadeIn: (initialScale: number) => keyframes`
      from {
        transform: scale(${initialScale});
        opacity: 0;
        pointer-events: none;
      }
      to {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }
    `,
    slideInSlideOut: (distance: number) => keyframes`
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
    slideIn: (direction: SideNames, distance: number) => keyframes`
      from {
        transform: ${
          ['bottom', 'top'].includes(direction) ? 'translateY' : 'translateX'
        }(${['bottom', 'right'].includes(direction) ? distance : -distance}px);
        pointer-events: none;
      }
      to {
        transform: translateY(0px);
        pointer-events: auto;
      }
    `,
    slideOut: (direction: SideNames, distance: number) => keyframes`
      from {
        transform: translateY(0px);
        pointer-events: auto;
      }
      to {
        transform: ${
          ['bottom', 'top'].includes(direction) ? 'translateY' : 'translateX'
        }(${['bottom', 'right'].includes(direction) ? distance : -distance}px);
        pointer-events: none;
      }
    `,
    slideFadeIn: (direction: SideNames, distance: number) => keyframes`
      from {
        transform: ${
          ['bottom', 'top'].includes(direction) ? 'translateY' : 'translateX'
        }(${['bottom', 'right'].includes(direction) ? distance : -distance}px);
        opacity: 0;
        pointer-events: none;
      }
      to {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    `,
    rotate: (degrees: number) => keyframes`
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(${degrees}deg);
      }
    `,
    changeHeight: (start: number, end: number) => keyframes`
      from {
        height: ${start}px;
      }
      to {
        height: ${end}px;
      }
    `,
  },
  curve: {
    bounce: 'cubic-bezier(0.68, -0.6, 0.32, 1.8)',
  },
};

const breakpoints = {
  xl: '1200px',
  lgMax: '1199px',
  lg: '992px',
  mdMax: '991px',
  md: '721px',
  smMax: '720px',
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
  highContrast: '(prefers-contrast: more)',
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
  x11: '44px',
  x12: '48px',
  x13: '52px',
  x14: '56px',
};

const font = {
  families: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospace:
      '"Cousine", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  headingStyle: {
    h1: `
      font-size: 26px;
      line-height: 30px;
    `,
    h2: `
      font-size: 20px;
      line-height: 24px;
    `,
    h3: `
      font-size: 18px;
      line-height: 22px;
    `,
    h4: `
      font-size: 15px;
      line-height: 19px;
    `,
    h5: `
      font-size: 13px;
      line-height: 17px;
    `,
    h6: `
    font-size: 12px;
    line-height: 16px;
    `,
  },
};

const a11y = {
  reduceMotionOverrideStyle: `@media ${mediaQueries.reduceMotion} { transition: none; }`,
};

export {
  a11y,
  animation,
  buttons,
  breakpoints,
  colors,
  decorations,
  focusStyle,
  font,
  gradients,
  mediaQueries,
  spacing,
};
