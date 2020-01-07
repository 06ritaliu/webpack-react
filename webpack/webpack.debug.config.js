const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '../');
const srcDir = path.resolve(rootDir, './src');
const webDir = path.resolve(rootDir, './web');
const nodeModuleDir = path.resolve(rootDir, './node_modules');

var jsPath                        = 'res/js/';
var cssPath                       = 'res/css/';
var imgPath                       = 'res/img/';
var fontsPath                     = 'res/fonts/';

module.exports = {
    target: "web",
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack/hot/only-dev-server',
            path.resolve(srcDir, './entry/index.js')
        ]
    },
    output: {
        path: webDir,
        filename: jsPath + '[name].bundle.js',
        chunkFilename: jsPath + 'chunk_[id].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: nodeModuleDir
            },
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: nodeModuleDir
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: path.resolve(srcDir, './template/index.ejs')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    // watch: true, //watch模式
    devServer: { //dev-server模式
        contentBase: webDir,
        port: 3000,
        open: true,
        hot: true,
        host: "localhost",
        hotOnly: true,
        inline: true,
        publicPath: '/'
    }
};