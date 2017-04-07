// the moving store
// get part of state
import {getters} from './getters'
// actions for more commits
import {actions} from './actions'
// setter, which is mutation.
import {mutations} from './mutations'

// final state
const state = {
  // movie title
  title: 'doubanMovie', // App 标题
  // movingList.subjects = array
  movingList: {  // 正在上映列表
    subjects: []
  },
  // after search, we have subjects = array
  searchList: {  // 搜索列表
    subjects: []
  },
  // search text in text box
  searchText: '', // 搜索内容
  // loading movie === true
  loadingMoving: true, // 正在上映是否显示loading
  // loading upcoming movie === true
  loadingUpComing: true, // 即将上映是否显示loading
  // search loading === true
  searchLoading: true, // 搜索列表是否显示loading
  // that is for show more button......
  pageload: false, // 是否正在加载分页
  // upcoming movie, actual list
  upcomBody: {  // 即将上映的电影列表
    start: 0
  },
  // actual loading a movie
  loadingDetail: true, // 电影详情是否显示loading
  // top 240 movies
  ranking250: {}, // top 250列表
  // default city
  city: '杭州', // 当前城市 默认'杭州'
  // movie detail has rating and images
  movieDetail: { // 电影详情
    rating: {},
    images: {}
  },
  // movie id....,, single movie but with others....
  id: '', // 电影ID
  // ranking250 start page
  start: 0, // top 250分页起点
  // movie comment
  movieComment: {} // 电影短评
}

// export init state
// export getter, setter (mutation)
// actions (more commits)
export default {
  state,
  getters,
  actions,
  mutations
}
