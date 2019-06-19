const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-react']
                }
            }
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
}