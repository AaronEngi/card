// webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: ['babel-polyfill', './src/app'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js'
  },
  module: {
    loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            }, {
                test: /\.css/,
				loader: 'style!css!postcss!less'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
  },
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}
