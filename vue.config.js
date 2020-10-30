const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'css': resolve('src/assets/css'),
        'images': resolve('src/assets/images'),
        'views': resolve('src/views'),
        'components': resolve('src/components'),
        'api': resolve('src/api'),
        'mixins': resolve('src/mixins'),
        'store': resolve('src/store'),
        'service': resolve('src/service')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'windows.jQuery': 'jquery'
      })
    ]
  },
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: 8080,
    hot: true,
    open: 'Google Chrome',
    proxy: {
      '/api': {
        target: 'http://www.xiongmaoyouxuan.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
