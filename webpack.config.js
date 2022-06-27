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
            },
            { // 配置处理less
                test: /\.less$/, // 匹配以 less结尾的文件
                // css-loader 把css 文件转换成 webpack 可以识别的文件
                // style-loader 把css代码 插入到dom中
                // loader 执行 从右往左
                // less-loader 将less 文件转换成 webpack可以识别的代码
                // less 讲 less 语法 转换成 css
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {// webpack 5
                test: /\.(png|jpg|gif)$/i, // 匹配的图片
                // type: 'asset/resource', // 处理资源模块的方式
                // asset/resource 直接复制dist 目录下
                // type: 'asset/inline'
                // 直接转换成based64

                // 在导出一个 data URI 和发送一个单独的文件之间自动选择。
                // 如果你设置的是asset模式
                // 以8KB大小区分图片文件
                // 小于8KB的, 把图片文件转base64, 打包进js中
                // 大于8KB的, 直接把图片文件输出到dist下
                type: 'asset',
                dependency: { not: ['url'] },
                // parser: { // 解析器 规则
                //   dataUrlCondition: { // dataUrl的情况
                //     maxSize: 8 * 1024,
                //     // maxSize 限制最大值
                //   },
                // },
                // generator: { // 生成器
                //   filename: '[hash:6][ext]', // 资源文件处理之后 输出的文件名
                //   // ext 文件扩展名
                // }
            },
        ]
    }
}