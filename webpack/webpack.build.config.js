/**生产项目使用的webpack配置文件
 * 最终打包生成的文件放置在websrc文件夹下
 * 本地打开会报错，原因是html文件中自动生成的bundle.js文件是绝对路径，适用于服务器端部署情况。
 * 若需在本地通过查看文件方式直接打开预览，可手动修改为相对路径
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //每次打包成功构建之前，删除指定文件夹内文件，保留静态加载文件

const rootDir = path.resolve(__dirname, '../');
const srcDir = path.resolve(rootDir, './src');
const webDir = path.resolve(rootDir, './websrc');
const nodeModuleDir = path.resolve(rootDir, './node_modules');

var jsPath                        = 'res/js/';
var cssPath                       = 'res/css/';
var imgPath                       = 'res/img/';
var fontsPath                     = 'res/fonts/';

module.exports = {
    target: "web",
    entry: {
        app: path.resolve(srcDir, './entry/index.js')
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
        //在最终的html中自动插入所有生成的bundle文件，默认插入在body末端。
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: path.resolve(srcDir, './template/index.ejs')
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['res/*']
        }), // 这个插件的路径是相对于项目root来取的，而不是相对于当前文件
    ],
};