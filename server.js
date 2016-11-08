var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    // host: 'localhost',
    contentBase: __dirname +'/dist', //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true,
    noInfo: true,
    hot: true,
    inline: true, //实时刷新
    proxy: {
        '/api/*': {
            target: 'http://localhost:8888',
            secure: false,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
    // port: 8081 //端口号
}).listen('80','localhost',function(err,result){
    if (err) {
      console.log(err);
    } else {
      console.log('localhost:80');
    }
  })
