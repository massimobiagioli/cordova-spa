const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../www/js')
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'mustache-loader'
    }]
  }
};