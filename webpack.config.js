const path = require('path');

module.exports = {
  entry: './src/ebcdic.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'EBCDIC',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: 'production'
};