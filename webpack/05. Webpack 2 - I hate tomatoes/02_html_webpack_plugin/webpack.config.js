var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html',
            // template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })
    ]
}