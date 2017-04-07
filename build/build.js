// check version and execute
require('./check-versions')()
// process env, set node_env, prd
process.env.NODE_ENV = 'production'

// terminal spinner
var ora = require('ora')
// rm -rf
var rm = require('rimraf')
// path
var path = require('path')
// chalk
var chalk = require('chalk')
// webpack
var webpack = require('webpack')
// config is a dir
var config = require('../config')
// use javascirpt with webpack json
var webpackConfig = require('./webpack.prod.conf')
// set up spin
var spinner = ora('building for production...')
// now spin
spinner.start()

// rm '/' + 'static';
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  // error
  if (err) throw err
  // webpack with config
  webpack(webpackConfig, function (err, stats) {
    // after webpack config, no more spin
    spinner.stop()
    // error
    if (err) throw err
    // process stdout
    // stats to string
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    // build done.
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
