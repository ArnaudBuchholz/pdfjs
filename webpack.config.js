const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './web_bundle.js'],
  target: 'web',
  mode: 'production',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'pdfjs.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      // exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [[
            "babel-preset-env", {
              "targets": {
                  "browsers": ["last 2 versions", "ie >= 7"]
            }
          }]]
        }
      }
    }]
  }

}
