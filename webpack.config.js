const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SimulationWebpackPlugin = require('./src/simulation-webpack-plugin')

module.exports = {
    mode: 'development',
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        // new SimulationWebpackPlugin({test: true})
    ]
}
