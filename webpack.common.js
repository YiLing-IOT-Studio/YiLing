const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './source/js/main.js',
        common: './source/js/common.js'
    },
    plugins: [
        new CleanWebpackPlugin(['src/main/resources/static/dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // }),
        new ExtractTextPlugin({
            filename: './css/[name].bundle.css',
            allChunks: true
        })
    ],
    output: {
        filename: './js/[name].bundle.js',
        path: path.resolve(__dirname, 'src/main/resources/static/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory=true', // 使用cache提升编译速度
                options: {
                    presets: ['env']
                        // plugins: ['tranform-runtime'] // 避免重复引入
                }
            }
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }]
    }
};