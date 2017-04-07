// see http://vuejs-templates.github.io/webpack for documentation.
// path
var path = require('path')
// module export json
module.exports = {
  // build, prod
  build: {
    // env, prod.env
    env: require('./prod.env'),
    // index path, ./dist/index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // asset root, ./dist
    assetsRoot: path.resolve(__dirname, '../dist'),
    // asset sub dir, ./static
    assetsSubDirectory: 'static',
    // asset public path, ./
    assetsPublicPath: './',
    // production source map
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // gzip false default
    productionGzip: false,
    // gzip, js and css
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // report
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    // dev
    env: require('./dev.env'),
    // port
    port: 8011,
    // auto open browser
    autoOpenBrowser: true,
    // /static
    assetsSubDirectory: 'static',
    // / vs /static
    assetsPublicPath: '/',
    // what is proxytable, all request to /api is http://api.douban.com/v2
    proxyTable: {
      '/api': {
        target: 'http://api.douban.com/v2', // the url
        changeOrigin: true, // change origin
        pathRewrite: {
          '^/api': '' // if see /api, show nothing
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false // css source map buggy, so disable
  }
}
