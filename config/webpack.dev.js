const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const { root } = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  output: {
    path: root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  optimization: {
    runtimeChunk: false,
    splitChunks: false,
  },

  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true,
    // Added this stuff
    historyApiFallback: {
      index: '/',
      disableDotRule: true,
    },
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/assets': {
        target: 'http://localhost:8080/',
      },
    },
    stats: 'minimal',
    watchOptions: { aggregateTimeout: 200 },
  },
});
