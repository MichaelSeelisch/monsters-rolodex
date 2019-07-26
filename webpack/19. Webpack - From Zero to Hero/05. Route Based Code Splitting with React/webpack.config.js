const HtmlWebpackPlugin = require("html-webpack-plugin"); // first import ...
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { DefinePlugin } = require("webpack");

// To prevent argv being undefined, let's use a default value
module.exports = (env={}, argv={}) => ({
    module: {
        rules: require("./webpack.module.rules")(env, argv)
    },
    plugins: [
        new DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify(argv.mode)
            }
        }),
        // Any parameter given to Webpack client can be captured on the "env"
        env.analyse ? new BundleAnalyzerPlugin() : null,

        // Any option given to Webpack client can be captured on the "argv"
        argv.mode === "development" ? new HtmlWebpackPlugin() : null,
        argv.mode === "production" ? new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
        : null
    ].filter(pl => pl !== null),
    devtool: "source-map",
    resolve: {
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
});