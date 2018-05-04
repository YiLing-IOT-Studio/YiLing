const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        stats: 'errors-only',
        contentBase: path.resolve(__dirname, 'src/main/resources/templates'),
        open: true,
        overlay: true,
        publicPath: '/static/dist/'
    }
});