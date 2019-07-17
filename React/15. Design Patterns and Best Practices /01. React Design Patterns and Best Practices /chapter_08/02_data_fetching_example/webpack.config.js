const nodeExternals = require('webpack-node-externals');
const path = require('path');

const rules = [{ 
    test: /\.js$/, 
    exclude: /(node_modules|bower_components)/, 
    loader: 'babel-loader', 
    options: { 
        presets: [
            'es2015',
            'react'
        ] 
    } 
}];

const client = {
    entry: './src/client.js',
    mode: 'development',
    output: { 
        path: path.resolve(__dirname, './dist/public'), 
        filename: 'bundle.js', 
    },
    module: {
        rules
    }
};

const server = { 
    entry: './src/server.js',
    mode: 'development',
    output: { 
        path: path.resolve(__dirname, './dist'), 
        filename: 'server.js', 
    },
    module: {
        rules
    },
    target: 'node',
    externals: [
        nodeExternals()
    ] 
};

module.exports = [client, server];