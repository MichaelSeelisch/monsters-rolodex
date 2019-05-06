const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
 };
