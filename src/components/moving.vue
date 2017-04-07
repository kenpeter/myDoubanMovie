<!-- template -->
<template>
  <!-- class movie -->
  <div class="moving">
    <!-- class title -->
    <div class="tit">
      <!-- city var from computed -->
      <h1>Ticket - {{city}}</h1>

      <!-- location -->
      <div id="" class="locat">
        <!-- element dropdown -->
        <!-- trigger click, param command, matching command below -->
        <el-dropdown trigger="click" @command="changeCity">
          <!-- the text link -->
          <span class="el-dropdown-link">
            [change city]
          </span>
          <!-- dropdown menu -->
          <!-- each index -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(city,index) in citys" :command="city.name" :key="index">{{city.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="hd">
        <h2>In theater</h2>
        <ul class="tab-hd clearfix">
          <li class="on">Showing</li>
        </ul>
      </div>
    </div>
    <!-- here we list all movies -->
    <MoviesTag :data="movingList" class="movieTag"></MoviesTag>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        // List of citys
        /**
         * 城市列表
         */
        citys: [
          {
            name: '北京'
          },
          {
            name: '上海'

          },
          {
            name: '广州'
          },
          {
            name: '深圳'
          },
          {
            name: '杭州'
          }
        ]
      }
    },
    mounted () {
      // when mounted
      // dispatch
      /**
       * 获取正在上映列表
       */
      this.$store.dispatch('getMoving')
    },
    methods: {
      /**
       * function 切换城市
       * @param command
       */
      changeCity (command) {
        // command is the name of city
        console.log('changeCity: ', command)
        // store commit, movie loading, true
        this.$store.commit('MOVING_LOADING', {loading: true})
        // store commit movie city, change city
        this.$store.commit('MOVIE_CITY', {city: command})
        // store dispatch, get all movies.
        this.$store.dispatch('getMoving')
      }
    },
    components: {
      // we import a component
      // it is anoy func
      // what is resolve....?
      'MoviesTag': (resolve) => {
        require(['./common/moviesTag.vue'], resolve)
      }
    },
    computed: {
      /**
       * function 电影列表函数
       * @returns {computed.movingList|state.movingList|{subjects}|getters.movingList|*}
       */
      movingList () {
        // basically, component use getters
        // this.store.getters.xxxxxxx
        // it is a computed.
        return this.$store.getters.movingList
      },
      /**
       * function 获取当前城市
       * @returns {*|computed.city|string|getters.city}
       */
      city () {
        // so we use lots of computed, now get getters, get city
        return this.$store.getters.city
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
  .moving {
    margin-bottom: 20px;
    p {
      color: red;
    }
    .tit {
      width: 950px;
      margin: 0 auto;
      margin-top: 20px;
      h1 {
        display: inline-block;
        width: 126px;
        font-size: 20px;
        color: #000;
      }
      .locat {
        position: relative;
        display: inline-block;

      }
      .hd{
        border: none;
      }
    }
  }
</style>
