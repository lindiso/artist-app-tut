const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const config = require('./config');

const htmlConfig = {
  BUILD_NUMBER: process.env.BUILD_NUMBER,
  fav: config.favicon,
  template: 'src/index.ejs',
  themeColor: config.themeColor,
  title: config.title,
};

module.exports = {
  entry: {
    app: './src/index.tsx',
  },

  resolve: {
    alias: {
      '~': path.join(__dirname, '../src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  /**
   * This is a MASSIVE overhead.
   * Only enable it to debug runtime errors.
   */

  // devtool: 'source-map',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /^(?!.*\.test\.(t|j)sx?$).*\.(t|j)sx?$/,
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(eot|woff|woff2|svg|ttf|gif|png)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },

  node: {
    fs: 'empty',
  },

  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          API_BASE_PATH: JSON.stringify(process.env.API_BASE_PATH),
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          BUILD_NUMBER: JSON.stringify(process.env.BUILD_NUMBER),
          RUN_ENV: JSON.stringify(process.env.RUN_ENV),
          PORT: JSON.stringify(process.env.PORT),
        },
      },
    }),

    new HtmlWebpackPlugin(htmlConfig),

  ],
};
