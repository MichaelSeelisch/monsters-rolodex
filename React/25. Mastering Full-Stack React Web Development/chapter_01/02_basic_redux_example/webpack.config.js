const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devServer: {
        inline: true,
        port: 3000,
        contentBase: './dist'
    }
}
