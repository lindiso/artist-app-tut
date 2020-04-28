const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackStrip = require('strip-loader');
const CompressionPlugin = require('compression-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const BrotliPlugin = require('brotli-webpack-plugin');

const config = require('./config');
const { root } = require('./helpers');

const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  output: {
    path: root('dist'),
    publicPath: '/',
    filename: '[name].[chunkhash:3].js',
    chunkFilename: '[name].[chunkhash:3].chunk.js',
  },

  // enabling sourcemaps for prod is not secure
  // only use this on testing environments

  // devtool: 'source-map',

  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      minSize: 100,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.test\.jsx?$).*\.(j|t)sx?$/,
        loader: WebpackStrip.loader('console.log'),
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js(\?.*)?$/i,
      threshold: 10240,
      minRatio: 0.8,
    }),

    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    new webpack.LoaderOptionsPlugin({
      htmlLoader: {},
    }),

    new SWPrecacheWebpackPlugin(config.preCache),

    new WebpackPwaManifest(config.manifest),
  ],
});
