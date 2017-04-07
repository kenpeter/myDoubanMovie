<template>
  <!-- search loading -->
  <div class="search-list" v-loading="searchLoading">
    <!-- search then we have a list of subject -->
    <searchTag v-for="(subject,index) in searchList.subjects" :subject="subject" :key="index"></searchTag>
  </div>
</template>

<script>

  export default{
    data () {
      return {

      }
    },
    mounted () {
      if (this.searchText === '') {
        // empty text, then get from query
        let searchText = this.$route.query.searchText
        // set search text
        // the fire get_search_list, because it takes longer.....?
        this.$store.commit('SEARCH_TEXT', {searchText})
        this.$store.dispatch('getSearchList')
      }
    },
    components: {
      // need search tag
      'searchTag': (resolve) => {
        require(['./common/searchTag.vue'], resolve)
      }
    },
    computed: {
      // search text compute
      searchText () {
        return this.$store.getters.searchText
      },
      // search list compute
      searchList () {
        return this.$store.getters.searchList
      },
      // search loading compute
      searchLoading () {
        return this.$store.getters.searchLoading
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .search-list{
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }
</style>
