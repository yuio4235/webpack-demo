const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "production",
    plugins: [
    ],
    optimization: {
        runtimeChunk: 'single',
    }
});