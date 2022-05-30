const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口
    // 注意:config里面的配置文件直接算在外层,不用跳出
    entry: "./public/main.js",
    // 输出
    output: {
        // 输出路径
        path: undefined,
        // 输出文件名
        filename: "js/[name].[contenthash:4].js",
    },
    // 加载器
    module: {
        rules: [
            // 处理css文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // 处理图片资源
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,// 小于10kb的图片会被base64处理
                    }
                },
                generator: {
                    // 输出图片名字
                    filename: "images/[name][hash:4][ext][query]"
                }
            },
            // 处理字体图标资源和其它资源
            {
                test: /\.(ttf|woff2?|map4|map3|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "media/[hash:4][ext][query]",
                },
            },
            // js资源
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: "babel-loader",
            },
        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以public/index.html为模板创建文件
            // 新的文件内容与源文件一致,且会自动引入打包资源
            template: path.resolve(__dirname, '../public/index.html'),
            // 导入ico文件
            favicon: (__dirname, './public/favicon.ico')
        })
    ],
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "5050", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    experiments: {
        topLevelAwait: true
    },
    // 模式
    mode: "production"
}