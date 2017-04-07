// utils is asset path, loader, etc
var utils = require('./utils')
// prod and dev config
var config = require('../config')
// is prod
var isProduction = process.env.NODE_ENV === 'production'

// another css loader
// source map
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
