const path = require('path');
const Jarvis = require("webpack-jarvis");

const config = {
    context: path.resolve(__dirname, 'src'),

    mode: 'development',

    entry: {
        // removing 'src' directory from entry point, since 'context' is taking care of that
        app: './assets/js/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/[name].bundle.js'
    },

    module: {
        rules: [
        {
            test: /\.js$/,
            include: /src/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env']
                } 
            }
        }]
    },

    devServer: {
        contentBase: path.resolve(__dirname, "./dist/assets/media"),
        compress: true,
        port: 12000,
        stats: 'errors-only',
        open: true
    },

    devtool: 'inline-source-map',

    plugins: [
        new Jarvis({
            port: 1337 // optional: set a port
        })
    ]
};

module.exports = config;