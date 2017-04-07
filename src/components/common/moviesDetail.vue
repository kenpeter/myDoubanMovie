<!-- template -->
<template>
  <!-- loading detail is compute, indicate loading -->
  <div class="container-moving" v-loading="loadingDetail">
    <!-- content -->
    <div class="content">
      <h1>
        <!-- title -->
        <span class="title">{{movieDetail.title}} {{movieDetail.original_title}}</span>
        <!-- year -->
        <span class="year">({{movieDetail.year}})</span>
      </h1>
      <div class="detail clearfix">
        <div class="left-side">
          <div class="actor-list">
            <div class="subject">
              <div class="mainpic">
                <!-- has diff img size -->
                <a href="https://movie.douban.com/subject/25900945/photos?type=R"><img class="movieImg" :src="movieDetail.images.medium" alt="" title="More movie pic"></a>
              </div>
              <div class="info">
                <!-- directors -->
                <span class="p1">Director: </span><span v-for="item in movieDetail.directors" class="attrs">{{item.name}}</span><br>
                <!-- cast -->
                <span class="p1">Cast: </span><span v-for="item in movieDetail.casts" class="attrs">{{item.name}}/</span><br>
                <!-- genre -->
                <span class="p1">Type: </span><span v-for="item in movieDetail.genres" class="attrs">{{item}}/</span><br>
                <span class="p1">Country: </span><span v-for="(item,index) in movieDetail.countries" class="attrs">{{item}}</span><br>
                <span class="p1">IMDB: </span><span class="attrs">....</span><br>
              </div>
            </div>
            <div class="people-sroce">
              <div>
                <!-- score num -->
                <p>Score</p>
                <span class="score" v-if="movieDetail.rating.average * 2">{{movieDetail.rating.average * 2}}</span>
                <!-- rating average -->
                <el-rate
                  v-model="movieDetail.rating.average"
                  disabled>
                </el-rate>
                <!-- show rating or not -->
                <p class="no-publish" v-if="!movieDetail.rating.average * 2">Not in theater yet</p>
                <p class="comment-num" v-if="movieDetail.rating.average * 2">{{movieDetail.ratings_count}} people rated</p>
              </div>
            </div>
          </div>
          <div class="insterest-people">
            <div class="top">
            <a href=""><button>Watch</button></a>
            <a href=""><button>Watched</button></a>
            <span class="score-to">Rate:
                <el-rate show-text></el-rate>
                </span>
            </div>
          </div>
          <div class="gtleft">
            <ul class="ul">
              <li><img src="https://img3.doubanio.com/f/shire/cc03d0fcf32b7ce3af7b160a0b85e5e66b47cc42/pics/short-comment.gif" alt=""><a href="">Write comment</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif" alt=""><a href="">Write review</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif" alt=""><a href="">Ask question</a></li>
              <li><img src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif" alt=""><a href="">Add to list</a></li>
              <li><img src="" alt=""><a href="">Share</a></li>
            </ul>
          </div>
          <div class="summary">
            <!-- title -->
            <p class="summary-title">{{movieDetail.title}} summary</p>
            <!-- summary -->
            <p class="intro">{{movieDetail.summary}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'moviesDetail',
    data () {
      return {

      }
    },
    mounted () {
      // query.id
      let id = this.$route.query.id
      // store commit, moving id, commit means setter
      // state.id = id
      this.$store.commit('MOVING_ID', {id})
      this.$store.dispatch('getMovieDetail')
    },
    components: {
      // we have a component, which is anoy func with require
      'movieComment': (resolve) => {
        require(['./movieComment.vue'], resolve)
      }
    },
    computed: {
      // movie detail in compute
      movieDetail () {
        return this.$store.getters.movieDetail
      },
      // movie is loading
      loadingDetail () {
        return this.$store.getters.loadingDetail
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../../style/base";
  .container-moving{
    width: 950px;
    margin: 30px auto;
    .content{
      min-height: 420px;
      h1{
        word-break: break-all;
        display: block;
        font-size: 25px;
        font-weight: bold;
        color: #494949;
        padding: 0 0 15px 0;
        .year{
          color: #888;
        }
      }
      .detail{
        .left-side{
          float: left;
          width:590px;
          padding-right: 40px;
          .actor-list{
            margin-bottom: 30px;
            .subject{
              width:415px;
              float: left;
              .mainpic{
                margin: 3px 12px 0 0;
                max-width: 155px;
                overflow: hidden;
                text-align: center;
                float: left;
                height: 140px;
                a{
                  img{
                    margin-bottom: 10px;
                    max-width: 100px;
                  }
                }
                .more-pic{
                  text-decoration: none;
                  color: #BBBBBB;
                  font-size: 12px;
                  text-align: center;
                }
              }
              .info{
                float: left;
                max-width: 248px;
                word-wrap: break-word;
                .p1{
                  line-height: 150%;
                  color: #666666;
                }
                .attrs{
                  color: #37a;
                }
              }
            }
            .people-sroce{
              float: left;
              width:155px;
              margin: 2px 0 0 0;
              padding: 0 0 0 15px;
              border-left:1px solid #eaeaea;
              color: #aaa;
              .score{
                font-size: 25px;
                margin-right: 10px;
              }
              .el-rate{
                vertical-align: top;
                display: inline-block;
                margin-top: 3px;
                i{
                  font-size: 14px;
                }
              }
              .comment-num{
                margin-top: -20px;
                margin-left: 45px;
                color: #666699;
              }
            }
          }
          .insterest-people{
            clear: both;
            padding:20px 0 3px;
            .top{
                button{
                  display: inline-block;
                  width:50px;
                  height: 25px;
                  background:#fae9da;
                  border: 1px solid #ca6445;
                  color: #333;
                  margin-right: 10px;
                  border-radius: 4px;
                }
            }
            .score-to{
              .el-rate{
                margin-left: 5px;
                display: inline-block;
                .el-rate__icon{
                  font-size: 12px;
                }
              }
            }
          }
          .gtleft{
            padding: 4px 4px 0 0;
            float: left;
            .ul{
              padding-top: 6px;
              li{
                float: left;
                display: inline;
                line-height: 14px;
                margin-right: 15px;
                img{
                  max-width: 100%;
                  margin-right: 5px;
                }
                a{
                  text-decoration: none;
                  color: #37a;
                }
              }
            }
          }
          .summary{
            float: left;
            clear: both;
            margin-top: 20px;
            .summary-title{
              color: #007722;
              font-size: 16px;
            }
          }
        }
        .right-side{
          float: right;
          width:310px;
          .ticket{
            padding:20px 0;
            margin-bottom: 40px;
            background-color: #F0F3F5;
            color: #999;
            font-size: 13px;
            text-align: center;
            a{
              display: inline-block;
              width:160px;
              line-height: 30px;
              background: #268dcd;
              border-radius: 2px;
              color: #fff;
            }
          }
          .game-pic{
            img{
              display: inherit;
              margin: 0 auto;
            }
          }
          .qrcode-app{
            margin: 20px 0;
            border: none;
          }
        }
      }
    }
  }

</style>
