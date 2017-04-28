const { resolve } = require('path');

module.exports = {

  entry: {
    'history': './dist/index.js'
  },

  output: {
    filename: '[name].js',
    path: resolve('dist/bundles'),
    library: '@frampton/history',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: [ '.js' ]
  }
};
