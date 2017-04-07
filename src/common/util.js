// need vue
import Vue from 'vue'
// $http is http client
import $http from 'vue-resource'
// vue uses http client
Vue.use($http)
// instance vue.... vm.$http.get.....
let vm = new Vue()

// /api path, we append the path here
const configPath = '/api'
// global has /api
window.configPath = configPath

// utils class
export class Utils {
  // get url with data
  get (url, data = {}) {
    // url ==== /api/movie/in_theaters
    // url ====  /api/movie/search
    url = configPath + url

    //  new promise, resolve and reject
    return new Promise((resolve, reject) => {
      // vm http get url,
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        // case 1, normal list
        // url ==== /api/movie/in_theaters
        // data ==== {city: hangzhou}
        // response is very rich
        // count: 20,
        // start: 0,
        // title: where_to_show_movie
        // totla: 22
        // subjects: array
        //
        // each subject
        // alt, is the movie url
        // cast: array
        // collect_count: 4099
        // directors: array... (like image, etc)
        // genres
        // id
        // images
        // rating
        // title
        // year
        // console.log('utils: ', url, data)

        // case 2, search
        // or url ====  /api/movie/search
        // data ==== {q: movie_title}
        // same as case 1, just less movies
        // console.log('utils: ', response.body)

        // case 3, /api ==== http://api.douban.com/v2
        // /api/movie/in_theaters === http://api.douban.com/v2/movie/in_theaters

        resolve(response.body)
      }, function () {
        console.log('cannot connect!!!!')
      })
    })
  }

  // 获取滚动条当前的位置
  getScrollTop () {
    // where is the scroll position.
    let scrollTop = 0
    // document element
    // document element scoll top
    if (document.documentElement && document.documentElement.scrollTop) {
      // scroll top, assign document, document element, scroll top
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      // else if document, body, scroll top
      scrollTop = document.body.scrollTop
    }
    // return ....
    return scrollTop
  }

  // 获取当前可是范围的高度
  // documentElement.clientHeight === browser height
  // document.body.clientHeight === means the big big body
  getClientHeight () {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
  }

  // 获取文档完整的高度
  getScrollHeight () {
    let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    return scrollHeight
  }
}
