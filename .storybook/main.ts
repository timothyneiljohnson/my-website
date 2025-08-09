import { dirname, join } from 'path';
// .storybook/main.ts

// Imports the Storybook's configuration API
const config = {
  stories: ['../common-components/**/stories.@(ts|tsx)', '../src/components/**/stories.@(ts|tsx)', '../src/experiments/**/stories.@(ts|tsx)'],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions"), {
    name: '@storybook/addon-styling-webpack',
    options: {
      rules: [
        // Replaces existing CSS rules to support PostCSS
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              // Gets options from `postcss.config.js` in your project root
              loader: 'postcss-loader',
              options: { implementation: require.resolve('postcss') }
            }
          ],
        }
      ]
    }
  }],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },
  staticDirs: [{ from: '../public', to: '/' }],
};
module.exports = config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}