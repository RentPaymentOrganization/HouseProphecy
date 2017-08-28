const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const utils = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {

    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: true
        })
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/main.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            
        }),
        new UglifyJSPlugin({
            ecma: 8,
            sourceMap: true
        })
    ]

}