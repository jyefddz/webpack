const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/main.js", // 入口
    output: {
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({//自定义配置
            template: './public/index.html',
            // template 为webpack 打包生成 dist/ html 文件指定模版
            filename: 'index.html' // html 文件 文件名称
        }),
    ],
}