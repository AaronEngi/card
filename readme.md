hah


安装nodejs
cd 到main
执行npm install


/*
安装：

babel的文件夹嵌套太多，需要重新安装下
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

css相关处理
npm install --save-dev autoprefixer postcss-loader
npm install file-loader css-loader style-loader --save-dev

webpack打包工具
npm install webpack -g
npm install webpack --save-dev
本地服务器
npm install --save-dev webpack-dev-server

react相关
npm install --save react react-dom babelify

微信界面库
npm install weui react-weui --save

前端路由：界面跳转控制
npm install -S react-router

新增
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-es2016
react-addons-css-transition-group
npm install image-webpack-loader --save-dev
npm install url-loader --save-dev


所有大综合：
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react autoprefixer postcss-loader file-loader css-loader style-loader webpack webpack-dev-server

npm install --save react react-dom babelify weui react-weui react-router
*/

****************************
启动查看效果：
方法1：
webpack 
 
直接打开本地文件build/index.html

方法2：
npm start

浏览器：http://localhost:8080/

********************************
参考weui示例工程的代码结构，定个规范吧。
代码目录结构
src目录是源代码
component下面是各种组件，页面上的小组件，可以复用，放在这个目录下面。
pages 是各个页面，实际上是按页面分的功能模块。相同模块的多个页面，也可以放在同一个文件夹下。
app.js是入口

build目录是编译后的代码
index.html 不是编译文件，是源代码