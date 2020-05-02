const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'client', 'index.js'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        inline: true,
        port: 8001,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public', 'dist')

    },
    module: {
        rules: [{
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', { 'modules': false }], 'react'
                        ]
                    }
                }

            },
            {
                test: /\.(jpg|jpeg|png|svg)?$/,
                use: ['file-loader']

            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'] //order is important

            }

        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}