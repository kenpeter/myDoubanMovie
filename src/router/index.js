// vue
import Vue from 'vue'
// vue router
import Router from 'vue-router'
// @ means no need for ..
// movie
import Moving from '@/components/moving'
// upcoming
import Upcoming from '@/components/upcoming'
// top 250
import Top250 from '@/components/top250'
// movie detail
import MoviesDetail from '@/components/common/moviesDetail'
// search list
import Search from '@/components/searchList'

// vue use router
Vue.use(Router)

/**
 * 路由信息配置
 */
export default new Router({
  routes: [
    {
      // home path is moving
      path: '/',
      name: 'Moving',
      component: Moving
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming
    },
    {
      path: '/top250',
      name: 'Top250',
      component: Top250
    },
    {
      // search path
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      // movies detail path
      path: '/moviesDetail',
      name: 'moviesDetail',
      component: MoviesDetail
    }

  ]
})
