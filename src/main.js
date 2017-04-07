// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// element ui import has Vue, the actual Vue
import Vue from './common/element-ui-import'
// what is app? It has header and router_view, matching component.
import App from './App'
// router, path...
import router from './router'
// store/index.js
import store from './store'
require.ensure([], function () {
  require('element-ui/lib/theme-default/index.css')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
