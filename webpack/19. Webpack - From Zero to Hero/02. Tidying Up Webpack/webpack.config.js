const HtmlWebpackPlugin = require("html-webpack-plugin"); // first import ...

// To prevent argv being undefined, let's use a default value
module.exports = (env={}, argv={}) => ({
    module: {
        rules: [
        {
            test: /\.js$/,
            use: "babel-loader"
        }],
    },
    plugins: [
        // Any option given to Webpack client can be captured on the "argv"
        argv.mode === "development" ? new HtmlWebpackPlugin() : null
    ].filter(
        // To remove any possibility of "null" values inside the plugins array, we filter it
        plugin => !!plugin
    ),
    devtool: "source-map",
});