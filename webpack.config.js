const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/',
        hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'Output Management'}),
        new CleanWebpackPlugin(),
        new ManifestPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};