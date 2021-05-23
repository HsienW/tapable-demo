const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SimulationWebpackPlugin = require('./src/simulation-webpack-plugin')

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
    module:{
        rules:[{
            test: /\.(js)$/,
            use: './src/simulation-webpack-loader.js'
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
        // new SimulationWebpackPlugin({test: true})
    ]
}
