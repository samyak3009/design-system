const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssColorModFunction = require('postcss-color-mod-function');

const cssTokenFiles = [
  path.resolve(__dirname, '../css/src/variables/index.css'),
  path.resolve(__dirname, '../css/src/tokens/index.css')
];

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
  stories: [
    '../core/components/atoms/button/**/*.story.@(js|jsx|ts|tsx)',
    '../core/components/atoms/icon/**/*.story.@(js|jsx|ts|tsx)',
    '../core/components/atoms/text/**/*.story.@(js|jsx|ts|tsx)',
    '../core/ai-components/Sara/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],

  // Webpack configuration
  webpackFinal: async (config) => {
    // Add PostCSS configuration
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                autoprefixer,
                postcssColorModFunction({
                  importFrom: cssTokenFiles,
                }),
              ],
            },
          },
        },
      ],
    });

    // Configure babel for JSX and TypeScript
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'], // Uses .babelrc configuration
    });

    // Add aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../core'),
      '@css': path.resolve(__dirname, '../css/src'),
      '@innovaccer/mds-images/ui-states': path.resolve(__dirname, '../mds-images/ui-states'),
    };

    // Add extensions
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },

  // TypeScript configuration
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter(prop) {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },

  // External references
  refs: {
    'rich-text-editor': {
      title: 'Rich Text Editor',
      url: 'https://innovaccer.github.io/mds-rich-text-editor/',
    },
    'mds-helpers': {
      title: 'MDS Helpers',
      url: 'https://innovaccer.github.io/mds-helpers/',
    },
  },
};