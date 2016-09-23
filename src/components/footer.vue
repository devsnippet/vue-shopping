<template>
  <div class="footer">
    <ul>
      <li>
        <a v-link="'search'">
          <i class="iconfont icon-zhuye"></i>
          <span>首页</span>
        </a>
      </li>
      <li>
        <a v-link="'search'">
          <i class="iconfont icon-shangdian"></i>
          <span>购物车</span>
        </a>
      </li>
      <li>
        <a v-link="'search'">
          <i class="iconfont icon-yonghuicon"></i>
          <span>我的</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:function () {
    return {
      function () {
      }
    }
  },
  components: {
      
  },
  methods:{
    
  }
  
}

</script>

<style lang="scss">
  .footer {
      border-top:1px solid #ddd;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      text-align: center;
    ul {
      display: flex;
      margin:0;
      width: 100%;
      line-height: 1;
      background-color: #FFF;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 5px 0;
      li {
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
        a {
          display: block;
          width: 100%;
          height: 100%;
          text-align: center;
          color: #333;
          text-decoration: none;
          i{
            font-size:24px;
            display:block;
            text-align:center;
          }
          span{
            font-size:12px;
          }
        }
      }
    }
  }
</style>