import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssColorModFunction from 'postcss-color-mod-function';

const cssTokenFiles = [
  path.resolve(__dirname, '../css/src/variables/index.css'),
  path.resolve(__dirname, '../css/src/tokens/index.css')
];

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  // For POC, we'll only include a few components
  stories: [
    // Select components for the POC
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
    autodocs: true,
  },
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

    // Add aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../core'),
      '@css': path.resolve(__dirname, '../css/src'),
      '@innovaccer/mds-images/ui-states': path.resolve(__dirname, '../mds-images/ui-states'),
    };

    return config;
  },
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

export default config;