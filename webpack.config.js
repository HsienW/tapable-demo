const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SimulationWebpackPlugin = require('./src/webpack-test/plugin/simulation-webpack-plugin');
const WebpackBPlugin = require('./src/webpack-test/plugin/simulation-webpack-b-plugin');
const SimulationWebpackFilePlugin  = require('./src/webpack-test/plugin/simulation-webpack-file-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './src/webpack-test/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    devtool: false,
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                {
                    loader: 'inspect-loader',
                    options: {
                        callback(inspect) {
                            console.log('===== inspect =====');
                            console.log(inspect.arguments);
                        }
                    }
                },
                // {
                //     loader: './src/webpack-test/loader/fake-sass-loader/fake-sass-loader.js'
                // }
                // {
                //     loader: './src/webpack-test/loader/simulation-webpack-loader.js?limt=1024&name=[hash:8].[ext]\'',
                //     options: {
                //         test: 'is option test'
                //     }
                // }
                {
                    loader: './src/webpack-test/loader/simulation-webpack-loader.js',
                    options: {
                        test: 'is option test'
                    }
                }
            ]
        }]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/tapable-test/index.html',
        //     filename: 'index.html',
        // }),
        new HtmlWebpackPlugin({
            template: './src/webpack-test/index.html',
            filename: 'index.html',
        }),
        new SimulationWebpackPlugin({test: true}),
        new WebpackBPlugin({test: true}),
        new SimulationWebpackFilePlugin(),
        new CleanWebpackPlugin(),
    ]
}
