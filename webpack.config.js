const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        // 清除dist文件下的内容
        new CleanWebpackPlugin()
    ],
    // 配置开发服务器
    devServer: {
        open: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 匹配所有的css文件
                // loader 执行的顺序： use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}