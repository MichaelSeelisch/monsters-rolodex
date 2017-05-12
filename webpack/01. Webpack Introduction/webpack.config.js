var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: 'url-loader'}
        ]
    },
    plugins: [
        new uglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ]
};
