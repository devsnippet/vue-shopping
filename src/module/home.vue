
<template>
  <header>
      <my-header></my-header>
    </header>
      <div class="homMain">
          <div class="banner">
            <mt-swipe :auto="4000">
              <mt-swipe-item><img src="../assets/img/1.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../assets/img/2.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../assets/img/3.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
          </div>
          <nav>
            <ul>
              <li><a v-link="'search'">
                <i class="iconfont icon-tongjifenxi"></i>
                <span>限时团购</span>
                </a></li>
              <li><a v-link="'search'">
                <i class="iconfont icon-tongjifenxi"></i>
                <span>会员中心</span>
                </a></li>
              <li><a v-link="'search'">
                <i class="iconfont icon-tongjifenxi"></i>
                <span>领券中心</span>
                </a></li>
              <li><a v-link="'search'">
                <i class="iconfont icon-tongjifenxi"></i>
                <span>一元抢购</span>
                </a></li>
              <li><a v-link="'search'">
                <i class="iconfont icon-tongjifenxi"></i>
                <span>全部频道</span>
                </a></li>
            </ul>
          </nav>
          <div class="navDemo1">
            <div class="top">
              <span class="vline left" style="border-color: #F6B7B7;"></span>
              <img src="../assets/img/hot.png" width="15px" height="15px" alt="" />
              <span class="title" style="color:#FF2E2E">热门</span>
              <span class="vline right" style="border-color: #F6B7B7;"></span>
            </div>
            <ul class="mui-flex">
              <li>
                <a v-link="'/'">
                  
                </a>
              </li>
            </ul>

          </div>
      </div>
      <footer>
      <my-footer></my-footer>
    </footer>

</template>

<script>
import MyHeader from '../components/header'
import MyFooter from '../components/footer'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data:function () {
    return {
      function () {
       SwipeItem,
       Swipe
      }
    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  methods:{

  }

}

</script>

<style lang="scss">
  .homMain{
    height:100vh;
    width:100%;
    .banner{
        height:27%;
      .swipe{
        height:100%;
        img{
          width:100%;
        }
      }
    }
    nav{
      ul{
        display: flex;
        margin: 0;
        width: 100%;
        line-height: 1;
        background-color: #FFF;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        padding: 5px 10px;
        li{
          width: 0;
          position: relative;
          display: block;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          color: #777;
          font-size: 16px;
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          a{
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            color: #333;
            text-decoration: none;
            span{
              display:block;
              text-align:center;
              font-size:12px;
            }
          }
        }
      }
    }
    .top{
      display: block;
      color: #051B28;
      font-size: 14px;
      line-height: 28px;
      height: 28px;
      text-align: center;
      background-color: transparent;
    }
    .vline {
        display: inline-block;
        border-bottom: 1px solid;
        width: 34px;
        margin-bottom: 5px;
      }
  }
  footer{
    ul>li:nth-child(1){
      a{
        color:#e31939;
      }
    }
  }

</style>
