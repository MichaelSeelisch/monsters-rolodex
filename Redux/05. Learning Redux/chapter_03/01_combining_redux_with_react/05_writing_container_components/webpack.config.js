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
    }
 };
