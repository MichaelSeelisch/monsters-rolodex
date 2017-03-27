var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require("path");

var isProd = process.env.NODE_ENV == 'production'; // true or false
var cssDev = ['style-loader', 'css-loader','sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader','sass-loader'],
    publicPath: '/dist'
});
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact'  
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    // 'file-loader?name=[path][hash:12].[ext]'
                    'file-loader?name=[name].[ext]&publicPath=images/&outputPath=images/',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            /*minify: {
                collapseWhitespace: true
            },*/
            hash: true,
            excludeChunks: ['contact'],     // Exclude contact.js code
            /* filename: './../index.html', */
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Page',
            hash: true,
            chunks: ['contact'],    // Only inlcude contact.js code
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally

        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    ]
}