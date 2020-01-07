# webpack-react
采用webpack打包的react项目框架

项目简介：
该项目已引入了React基本包react和react-dom，采用webpack进行打包，配置了jsx是加载器babel-loader(已解决版本兼容性问题，踩了很多坑)。该项目中的webpack配置致力于为前端独立开发提供便利。采用webpack-dev-server实现本地服务，同时支持HMR；基于React背景引入了react-hot-loader，实现React组件的实时局部更新。另外该项目支持ES6语法，同时可根据自我需求添加新的loader。

使用方法：
1. clone或者download本项目到本地
2. 执行npm install，安装node依赖包（首先确保本地已安装node，推荐全局安装）
npm install命令会依据项目中的package.json和ppaackage-lock.json安装本项目指定版本的依赖包。不要轻易修改ppaackage-lock.json中依赖包的指定版本，很有可以能造成不兼容出错。
3. 执行npm run start，通过node启动webpack dev-server

项目特点：
dev-server启动成功后，会自动在浏览器中打开新的页面（open: true），访问该服务器；生产环境不需要，dev-server主要是为前端开发阶段提供独立开发的便利。
由于使用了react-hot-loader，当React组件发生变化时，会实现组件的局部更新（很多时候不需要刷新浏览器）。react-hot-loader以来webpack的HMR开启，webpack.config.js均已配置好。

启动成功后，修改App.js中组件的render内容，会发现浏览器相应页面随之更新。

