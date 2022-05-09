import { css } from 'styled-components';
import { breakpoints } from '../design-tokens';

const THEME_CONF = 'flexboxgrid';
export const BASE_CONF = {
  gridSize: 12,
  gutterWidth: 0,
  outerMargin: '0',
  mediaQuery: 'only screen',
  breakpoints,
};

const makeMedia = (media) => (
  (...args) => css`
    @media ${media} {
      ${css.apply(null, [...args])}
    }
  `
);

const configCache = [];
const makeCacheId = (props) =>
  JSON.stringify((props.theme && props.theme[THEME_CONF]) || {});
const resolveConfig = (props) => {
  const themeConf = (props.theme && props.theme[THEME_CONF]) || {};

  const conf = {
    ...BASE_CONF,
    ...themeConf,
    breakpoints: {
      ...BASE_CONF.breakpoints,
      ...themeConf.breakpoints,
    },
  };

  conf.minMedia = Object.keys(conf.breakpoints).reduce((media, breakpoint: string | number) => {
    const breakpointWidth = conf.breakpoints[breakpoint];
    const value = media;
    value[breakpoint] = makeMedia(
      [conf.mediaQuery, `(min-width: ${breakpointWidth})`]
        .filter(Boolean)
        .join(' and ')
    );
    return value;
  }, {});

  conf.maxMedia = Object.keys(conf.breakpoints).reduce((media, breakpoint: string | number) => {
    const breakpointWidth = conf.breakpoints[breakpoint];
    const value = media;
    value[breakpoint] = makeMedia(
      [conf.mediaQuery, `(max-width: ${breakpointWidth})`]
        .filter(Boolean)
        .join(' and ')
    );
    return value;
  }, {});

  return conf;
};

export const SCREEN_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

export default function config(props) {
  const cacheId = makeCacheId(props);
  if (configCache[0] === cacheId) {
    return configCache[1];
  }

  const conf = resolveConfig(props);

  configCache[0] = cacheId;
  configCache[1] = conf;

  return conf;
}
