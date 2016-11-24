const webpack = require('webpack');

// Remember we installed this at the beginning? Now we're using it.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Okay, this may be confusing at first glance but go through it step-by-step
module.exports = env => {
  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {
     /**
     * entry tells webpack where to start looking.
     * In this case we have both an app and vendor file.
     */
    entry: {
      app: path.join(__dirname, '../src/'),
      vendor: ['react', 'react-dom', 'react-router'],
    },
    /**
     * output tells webpack where to put the files he creates
     * after running all its loaders and plugins.
     *
     * > [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
     * > path.join(__dirname, '../build/') will output into a /build folder in
     *   the root of this project.
     */
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, '../build/'),
    },

    module: {
      loaders: [ // Loaders allow you to preprocess files!
        {
          test: /\.(js)$/, // look for .js files
          exclude: /node_modules/, // ingore /node_modules
          loader: 'babel', // preprocess with that babel goodness we installed earlier
          query: {
            cacheDirectory: true,
          },
        },
      ],
    },

    plugins: removeEmpty([
      // used to split out our sepcified vendor script
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),

      /**
      * HtmlWebpackPlugin will make sure out JavaScript files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),

      // Only running DedupePlugin() and UglifyJsPlugin() in production
      ifProd(new webpack.optimize.DedupePlugin()),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          'screw_ie8': true,
          'warnings': false,
          'unused': true,
          'dead_code': true,
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      })),
    ]),
  };
};