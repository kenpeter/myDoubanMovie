<!-- plate -->
<template>
  <!-- header -->
  <div class="douban-header">
    <!-- container -->
    <div class="douban-header-container">
      <!-- search -->
      <div class="douban-search">
        <!-- under search another container -->
        <div class="search-container">
          <!-- el input is element input -->
          <!-- place holder -->
          <!-- v model, content -->
          <el-input placeholder="电影、影人、影院、电视剧" v-model="content">
            <!-- element button -->
            <!-- what is slot append -->
            <!-- can append search icon -->
            <!-- onclick, search movie -->
            <el-button slot="append" icon="search" @click="searchMovie"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <div class="douban-bar">
      <ul>
        <!-- click, we change the title of this component -->
        <li v-for="bar in barList" @click="choiceUrl(bar.title)">
          <!-- router link -->
          <!-- :to, to a url -->
          <!-- :class, active or not -->
          <router-link :to="bar.url" :class="title===bar.title? 'active':''">{{bar.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    // data, func, with content
    data () {
      // return obj
      return {
        // content is the search text
        content: '',
        // title showing ....
        title: 'Showing',
        // the 3 small links.
        barList: [{
          title: 'Showing',
          url: '/'
        }, {
          title: 'Upcoming',
          url: '/upcoming'
        }, {
          title: 'Top250',
          url: '/top250'
        }]
      }
    },
    methods: {
      choiceUrl (title) {
        // change the central title
        this.title = title
      },
      // search movie.......
      searchMovie () {
        // 1. search_text, commit, to mutations, mutation changes part of state, it affects its getter.
        // 2. dispatch an action, the action contains multiple commit. Here 1 is import
        // we need state.searchText to send to api, after that we have result and not_loading
        // 3. search_loading == true, again, why???????
        // 4. router pushes search router, query: searchText, this.content

        // this, dollar store
        // when we commit, we commit into store.
        // SEARCH_TEXT is the function inside mutations.js
        // searchText: this.content, is like param passing to func.
        this.$store.commit('SEARCH_TEXT', {searchText: this.content})

        // dispatch an action, action calls a commit
        this.$store.dispatch('getSearchList')
        // .....
        this.$store.commit('SEARCH_LOADING', {loading: true})
        // .....
        this.$router.push({path: '/search', query: {searchText: this.content}})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  // less style...
  @import "../style/color";
  .douban-header{
    background: @mainColor;
    width: 100%;
    height: 114px;
    .douban-bar{

      width: 950px;
      margin: 0 auto;
      height: 20px;
      ul{
        li{
          list-style: none;
          float: left;
          line-height: 20px;
          cursor: pointer;
          a{
            display: inline-block;
            padding: 8px;
            font-size: 12px;
            color: #aaa;
            text-decoration: none;
          }
          a.active{
            color: @doubanColor;
          }
        }
      }
    }
    .douban-header-container{
      width: 100%;
      margin: 0 auto;
      border-bottom: 1px solid @line;
      .douban-search{
        width: 950px;
        margin: 0 auto;
        height: 75px;
        .title{
          color: @doubanColor;
          font-size: 30px;
          font-weight: bold;
          line-height: 75px;
        }
        .search-container{
          display: inline-block;
          line-height: 75px;
          vertical-align: top;
          width: 500px;
          margin-left: 0px;
          input{
            height: 34px;
          }
        }
        .douban-title-img{
          width: 175px;
          height: 90px;
          float: right;
          margin-top: 10px;
        }
      }
    }
  }
</style>
