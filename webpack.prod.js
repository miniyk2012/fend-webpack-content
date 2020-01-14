const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/client/index.js', // 指要webpack打包的入口文件
    module: {
        rules: [ //  配置loader
            {
                test: /\.js$/, //正则匹配命中要使用loader的文件
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'file.png',
                    }
                }],

            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html", //模板路径
            filename: "./index.html", // //通过模板生成的文件名
        })
    ]
}