// import vue
import Vue from 'vue'
// import vuex
import Vuex from 'vuex'
// moving/index
import moving from './moving/index'
// use vuex
Vue.use(Vuex)
// export default,
// new Vuex.Store
export default new Vuex.Store({
  // pass modules with moving
  modules: {
    moving
  }
})
