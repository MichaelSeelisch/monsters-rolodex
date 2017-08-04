const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './js/main',
	output: {
		filename: './js/[name].bundle.js',
		path: path.resolve(__dirname, '../bin')
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file-loader?name=[name].[ext]&publicPath=./img/&outputPath=./img/',
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

	plugins: [
		new UglifyJSPlugin(),
		new ExtractTextPlugin({
			filename: './css/main.css',
			disable: false,
			allChunks: true
		}),
	]
};
