const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },

    resolve: {
        extensions: ['.js','.jsx','.json']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff",
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                options: {
                    name: 'font/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=10000",
                options: {
                    name:'[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}
