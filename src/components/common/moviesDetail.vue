<template>
  <div class="container-moving" v-loading="loadingDetail">
  
  </div>
</template>
<script>

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
