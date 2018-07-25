const path = require('path');

module.exports = {
    mode: 'development',

    entry: ['babel-polyfill', './index.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },

    module: {
        rules: [{
            test: /.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
  }
};