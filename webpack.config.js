const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    devtool: false,
    devServer: {
        contentBase: './dist',
        historyApiFallback: true, // 不做跳轉
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        })
    ]
}
