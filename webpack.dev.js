const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    mode: "development",
    optimization: { //这个地方不用再使用UglifyPlugin,这个会增加bundle的体积，默认现在用的TerserPlugin
        // runtimeChunk: true, 
        splitChunks: {chunks: "all"}
    }    
});