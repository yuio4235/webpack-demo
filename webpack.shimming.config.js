const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'Shimming'}),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: require.resolve('./src/index.js'),
                use: 'imports-loader?this=>window',
            }
        ]
    }
};