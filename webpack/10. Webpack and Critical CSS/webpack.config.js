const webpack = require('webpack');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const path = require("path");

module.exports = {
	entry: './main.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(svg|woff|woff2|eot|ttf)(\?.*$|$)/,
				use: 'url-loader'
			}
		]
	},

	plugins: [
		new ExtractTextPlugin({ filename: 'style.css' }),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new HtmlCriticalPlugin({
			base: path.join(path.resolve(__dirname), 'dist/'),
			src: 'index.html',
			dest: 'index.html',
			inline: true,
			minify: true,
			extract: true,
			width: 375,
			height: 465,
			penthouse: {
				blockJSRequests: false,
			}
		})
	]
};
