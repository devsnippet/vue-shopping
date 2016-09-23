
<template>
  <header>
    <div class="searHeader">
        <div class="h-left">
          <mt-button @click="back">
          <i class="iconfont icon-fanhui2"></i>
          </mt-button>
        </div>
        <div class="h-center">
          <form class="searInput" v-on:submit.prevent="search">
            <i class="iconfont icon-sousuochaxun"></i>
            <input class="text" type="text" name="textValue" placeholder="请输入····" v-model="searchText.content">
            <span class="cancel" v-show="cancelBtn.content" @click="delInput">取消</span>
          </form>
        </div>
      </div>
  </header>
      <div class="searchMain">
        <ul>
          <li v-for="list in searchList | filterBy searchText.content">
            <a v-link="'search'">
              <i class="iconfont icon-sousuochaxun"></i>
              {{list.name}}
            </a>
          </li>
        </ul>
      </div>


</template>

<script>
export default {
  data:function () {
    return {
      searchText:{
          content:''
      },
      searchList:[
        {'name':'放弃后的心疼'},
        {'name':'凹凸曼大战菊花侠'},
        {'name':'心酸的问候'},
        {'name':'胡子先生'},
        {'name':'拉黑世界做回自己'},
        {'name':'犯二年代的半吊子'},
        {'name':'跳梁小丑的爱情'},
        {'name':'亲爱、咱私奔'},
        {'name':'姿势千奇百变'},
        {'name':'梦里寻她'},
        {'name':'心没肺放肆的笑'},
        {'name':'从前讲的未来'},
        {'name':'童话一结束，遗忘就是幸福'},
        {'name':'你连机会也不舍得给我'},
        {'name':'别人别我'},
        {'name':'放弃后的心疼'},
        {'name':'凹凸曼大战菊花侠'},
        {'name':'心酸的问候'},
        {'name':'胡子先生'},
        {'name':'拉黑世界做回自己'},
        {'name':'犯二年代的半吊子'},
        {'name':'跳梁小丑的爱情'},
        {'name':'亲爱、咱私奔'},
        {'name':'姿势千奇百变'},
        {'name':'梦里寻她'},
        {'name':'心没肺放肆的笑'},
        {'name':'从前讲的未来'},
        {'name':'童话一结束，遗忘就是幸福'},
        {'name':'你连机会也不舍得给我'},
        {'name':'别人别我'}
      ]
    }
  },

  computed:{
      cancelBtn: function () {
          return {
            content: !!this.searchText.content.trim(),
          }
        },
      isValid: function () {
      var searchText = this.searchText
      return Object.keys(searchText).every(function (key) {
        return searchText[key]
      })
    }
  },
  methods:{
    search: function () {
      if (this.isValid) {
        //Users.push(this.newUser)
        //this.newUser.name = ''
        this.searchText.content = ''
        if(this.searchText.content){
          list='false'
        }else {
          list='true'
        }
      }
    },
    back:function(){
        javascript:history.back(-1);
    },
    delInput:function(){
        console.log("清空")
    }
  }

}
</script>

<style lang="scss">
.searHeader {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  background:#fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  height: 50px;
  line-height: 1.5;
  padding: 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  border-bottom:1px solid #ddd;
  .h-left {
    -webkit-box-flex: .1;
    -ms-flex: .1;
    flex: .1;
    text-align: left;
    button{
      background:transparent;
      box-shadow:none;
      color:#333;
      padding:0;
    }
    .ad,
    i {
      margin: 0;
      display: block;
    text-align: center;
    }
    .ad{
      font-size:10px;
    }
  }
  .h-center {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    .searInput {
      position: relative;
      display: block;
      width:100%;
      background-color: #ddd;
      border-radius: 3px;
      padding: 0 10px;
      color:#333;
      text-decoration:none;
      i {
        position: absolute;
        left: 10px;
        line-height: 1.8;
      }
      input {
        display:block;
        width:100%;
        margin: 0;
        border:none;
        color:#333;
        background: transparent;
        padding: 0 22px;
        font-weight: normal;
        font-size: 14px;
        line-height: 2;
        &::-webkit-input-placeholder{
            color:#666;
        }
      }
      .cancel{
        position: absolute;
        right:0;
        top:0;
        padding:0 5px;
        background:#ccc;
        line-height:2
      }
    }
  }

}

.searchMain{
  ul{
    padding:0;
    li{
      list-style-type: none;
      a{
        display:block;
        padding:5px 10px;
        color:#333;
        text-decoration: none;
        i{
          color:#999;
        }
      }
    }
  }
}
</style>
