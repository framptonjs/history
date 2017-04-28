const { resolve } = require('path');

module.exports = {

  entry: {
    'history.spec': './testing/tests/index.js'
  },

  output: {
    filename: '[name].js',
    path: resolve('testing/bundles'),
  },

  resolve: {
    extensions: [ '.js' ]
  }
};
