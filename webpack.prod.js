const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "production",
    plugins: [
    ],
    optimization: { //这个地方不用再使用UglifyPlugin,这个会增加bundle的体积，默认现在用的TerserPlugin
        // runtimeChunk: true, 
        splitChunks: {chunks: "all"},
    }
});