var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'public');

/*new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
}), new webpack.optimize.UglifyJsPlugin();*/

var config = {
    entry: {
        app: APP_DIR + '/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            hash: true,
            template: '.public/index.html',
            filename: './dist/index.html' //relative to root of the application
        })
        /*new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()*/

    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
};

module.exports = config;