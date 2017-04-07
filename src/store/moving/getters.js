export const getters = {
  title: state => {
    // test
    console.log('getters, title: ', state.title)
    return state.title
  },
  movingList: state => {
    // change the rating half
    for (let subject of state.movingList.subjects) {
      subject.rating.average = subject.rating.average / 2
    }
    // test
    console.log('getters, movieList: ', state.movingList)
    return state.movingList
  },
  loadingMoving: state => {
    // test
    console.log('getters, loadingMoving: ', state.loadingMoving)
    return state.loadingMoving
  },
  upcomBody: state => {
    // test
    console.log('getters, upcomBody: ', state.upcomBody)
    return state.upcomBody
  },
  pageload: state => {
    // test
    console.log('getters, pageload: ', state.pageload)
    return state.pageload
  },
  city: state => {
    // test
    console.log('getters, city: ', state.city)
    return state.city
  },
  loadingUpComing: state => {
    // test
    console.log('getters, loadingUpComing: ', state.loadingUpComing)
    return state.loadingUpComing
  },
  // searchList
  // state is param
  // we have func
  searchList: state => {
    // state.define_in_mutations.xxxxxx
    // subjects
    for (let subject of state.searchList.subjects) {
      // we half the rating.... why?
      subject.rating.average = subject.rating.average / 2
    }
    // return the part has been changed.
    return state.searchList
  },
  // now the search text has been changed.
  searchText: state => {
    // test
    console.log('getters, searchText: ', state.searchText)
    return state.searchText
  },
  searchLoading: state => {
    // test
    console.log('getters, searchLoading: ', state.searchLoading)
    return state.searchLoading
  },
  ranking250: state => {
    // test
    console.log('getters, ranking250: ', state.ranking250)
    return state.ranking250
  },
  start: state => {
    // test
    console.log('getters, start: ', state.start)
    return state.start
  },
  id: state => {
    // test
    console.log('getters, id: ', state.id)
    return state.id
  },
  movieDetail: state => {
    state.movieDetail.rating.average = state.movieDetail.rating.average / 2
    // test
    console.log('getters, movieDetail: ', state.movieDetail)
    return state.movieDetail
  },
  loadingDetail: state => {
    // test
    console.log('getters, loadingDetail: ', state.loadingDetail)
    return state.loadingDetail
  },
  movieComment: state => {
    // test
    console.log('getters, movieComment: ', state.movieComment)
    return state.movieComment
  }

}
