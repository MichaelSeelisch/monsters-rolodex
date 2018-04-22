var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader'
        }
        ]
    }
};