var path = require('path')
var webpack = require('webpack')
var ET = require('extract-text-webpack-plugin');

module.exports = {
    // entry: './src/scripts/app.js',
    entry: [
      'webpack-dev-server/client?http://localhost:80',
      'webpack/hot/only-dev-server',
      __dirname + '/src/scripts/app.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/public',
        filename: 'bundle.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [
            // {
            //   test: /\.vue$/,
            //   loader: 'vue',
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
             {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // {
            //     test: /\.html$/,
            //     loader: 'vue-html'
            // },
            //  {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'url',
            //     query: {
            //         limit: 10000,
            //         name: '[name].[ext]?[hash]' /*当图片小于10000时会转换*/
            //     }
            // },
            {
              test: /\.css$/,
              loader: 'style!css'
            },
            {
                test: /\.scss$/,
                // loader:'style!css!sass'
                loader: ET.extract('style', 'css!sass') //?modules!postcss 添加对样式表的处理 postcss为CSS代码自动添加适应不同浏览器的CSS前缀。
            }
        ]
    },
    // vue
    // vue: {
    //     loaders: {
    //         js: 'babel',
    //         sass: ET.extract('vue-style-loader', 'css!sass')
    //     }
    // },
    // devServer: {
    //     // host:'192.168.23.1',/android_asset/www/
    //     host: '127.0.0.1',
    //     contentBase: './', //本地服务器所加载的页面所在的目录
    //     colors: true, //终端中输出结果为彩色
    //     historyApiFallback: true,
    //     noInfo: true,
    //     /*小黑屏*/
    //     inline: true, //实时刷新
    //     proxy: {
    //         '/api/*': {
    //             target: 'http://localhost:8888',
    //             secure: false,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     },
    //     port: 8081 //端口号
    // },
    // devtool: '#source-map',
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new ET('./bundle.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
