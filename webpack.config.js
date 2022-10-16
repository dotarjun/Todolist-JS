const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin2');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        todoMgmt: './src/todoMgmt.js',
        formData: './src/formData.js',
        dateConverter: './src/dateConverter.js',
        color: './src/color.js',
        audio: './src/audio.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Retrodolist',
            favicon: './src/assets/images/favicon.ico',
        }),

        new Visualizer({
            filename: path.join('..', 'stats', 'statistics.html'),
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif|ico)/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|odt|ttf|eot|otf)/i,
                type: 'asset/resource'
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
};
