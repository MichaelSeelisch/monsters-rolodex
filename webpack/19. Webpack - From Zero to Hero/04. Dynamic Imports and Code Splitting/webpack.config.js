const HtmlWebpackPlugin = require("html-webpack-plugin"); // first import ...
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// To prevent argv being undefined, let's use a default value
module.exports = (env={}, argv={}) => ({
    module: {
        rules: require("./webpack.module.rules")(env, argv)
    },
    plugins: [
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
});