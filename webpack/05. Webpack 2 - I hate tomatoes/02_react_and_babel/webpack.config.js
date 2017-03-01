var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, // gzip compression
        port: 9000,
        stats: 'errors-only',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader', 
                    loader: ['css-loader', 'sass-loader'],
                    publicPath: './dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            /*minify: {
                collapseWhitespace: true
            },*/
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}