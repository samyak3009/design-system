const path = require('path');

const cssTokenFiles = [
  path.resolve(__dirname, '../css/src/variables/index.css'),
  path.resolve(__dirname, '../css/src/tokens/index.css')
];

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../core/components/**/*.story.@(js|jsx|ts|tsx)', '../core/ai-components/**/*.story.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-css-modules',
  ],
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../core');
    config.resolve.alias['@css'] = path.resolve(__dirname, '../css/src');
    config.resolve.alias['@innovaccer/mds-images/ui-states'] = path.resolve(__dirname, '../mds-images/ui-states');

    // Fix CSS loader configuration
    // Find and remove any existing CSS rules to avoid conflicts
    config.module.rules = config.module.rules.filter(rule =>
      !(rule.test && rule.test.toString().includes('.css'))
    );

    // Add our custom CSS rule
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('autoprefixer'),
                require('postcss-color-mod-function')({
                  importFrom: cssTokenFiles,
                }),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Configure babel-loader for JS and JSX files
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    });

    // Configure babel-loader for TS and TSX files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            ['@babel/preset-react', { runtime: 'automatic' }]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    });

    // Ensure TypeScript files are properly resolved
    config.resolve.extensions.push('.ts', '.tsx');

    // Return the altered config
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