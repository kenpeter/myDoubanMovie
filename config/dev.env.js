// basically dev import prod and merge it.
// webpack merge
var merge = require('webpack-merge')
// also require prod.env
var prodEnv = require('./prod.env')

// module exports
// merge prod_env
module.exports = merge(prodEnv, {
  // node_env, dev
  NODE_ENV: '"development"'
})
