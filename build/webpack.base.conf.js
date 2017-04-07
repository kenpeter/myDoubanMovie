// path
var path = require('path')
// util with asset and path
var utils = require('./utils')
// config with prod, dev
var config = require('../config')
// vue loader is css loader
var vueLoaderConfig = require('./vue-loader.conf')

// resolve it is dir go up
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

//
module.exports = {
  // app, .... main.js
  entry: {
    app: './src/main.js'
  },
  output: {
    // output result path
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // that is where the @ symbol coming from
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        // linter
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        // .vue
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        // .js
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        // url for img file
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        // url for font
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
