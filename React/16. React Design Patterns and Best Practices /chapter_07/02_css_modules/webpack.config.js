const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
        {
          test: /\.js$/, 
          exclude: /(node_modules|bower_components)/, 
          loader: 'babel-loader', 
          options: {
            presets: ['es2015', 'react']
          } 
        }, 
        { 
          test: /\.css$/, 
          loader: 'style-loader', 
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};