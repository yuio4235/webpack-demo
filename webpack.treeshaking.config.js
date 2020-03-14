//The configuration file not follows the practivce of name the config files, but just show what's tree shaking.

const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development', //set to development to make sure the bundle is not minified 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'Tree Shaking'})
    ],
    optimization: {
        usedExports: true
    }
};