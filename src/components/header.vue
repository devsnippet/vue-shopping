<template>
  <div class="header">
    <div class="h-left">
      <mt-button @click="diqu = true">
      <i class="iconfont icon-biaojidian1"></i>
      <span class="ad">依拉玛依镇</span>
      </mt-button>
    </div>
    <div class="h-center">
      <a v-link="'search'">
        <i class="iconfont icon-sousuochaxun"></i>
        <h2>输入搜索内容</h2>
      </a>
    </div>
    <div class="h-right">
      <mt-button @click="navSm = true">
      <i class="iconfont icon-pinglun2"></i>
      </mt-button>
      </div>
  </div>
 <mt-popup :visible.sync="diqu" popup-transition="popup-fade" >
   <div class="citySelect">
        <select v-model='province'>
            <option value="">请选择</option>
            <option v-for="item in provinces" value="{{item}}">{{item}}</option>
        </select>
        <select v-model='city'>
            <option value="">请选择</option>
            <option v-for="item in citys" value="{{item}}">{{item}}</option>
        </select>
        <select v-model='county'>
            <option value="">请选择</option>
            <option v-for="item in countys" value="{{item}}">{{item}}</option>
        </select>
    </div>
</mt-popup>

<mt-popup :visible.sync="navSm" modal="false" popup-transition="popup-fade" >
   <div class="navSmMain">
     <mt-button @click="navSm = false" >返回</mt-button>
     <ul class="navUl">
       <li>
         <a v-link="'推荐'">推荐</a>
       </li>
       <li>
         <a v-link="'推荐'">推荐</a>
       </li>
       <li>
         <a v-link="'推荐'">推荐</a>
       </li>
       <li>
         <a v-link="'推荐'">推荐</a>
       </li>
       <li>
         <a v-link="'推荐'">推荐</a>
       </li>
     </ul>
   </div>
</mt-popup>
</template>

<script>
import { Popup } from 'mint-ui';
import { Picker } from 'mint-ui';
export default {
  props:{
        province:{
            type:String,
            default:''
        },
        city:{
            type:String,
            default:''
        },
        county:{
            type:String,
            default:''
        }
    },
  data:function () {
    return {
      diqu:false,
      navSm:false,
      addressData:null
    }
  },
  init:function(){
      var that=this
      setTimeout(function(){
          that.$http({
                    url: '@@city.json',
                    method: 'GET',
	                  dataType:"json",
                    data:this.data
                })
                .then(function (data) {
                  that.$set(this.addressData,this.data)
                  console.log(this.data)
                })
      },1000)
  },
  watch:{
          province:function(val,oldval){
              if(val!==oldval){
                  this.city=''
              }
          },
          city:function(val,oldval){
              if(val!==oldval){
                  this.county=''
              }
          }
      },
      computed:{
        provinces:function(){
            if(!this.addressData)return
            var c=[]
            for(var key in this.addressData.province){
                c.push(key)
            }

            return c
        },
        citys:function(){
            if(!this.addressData
                || !this.addressData.province)
                return

            var c=[]
            for(var key in this.addressData[this.province]){
                c.push(key)
            }

            return c
        },
        countys:function(){
            if(!this.addressData
                ||!this.addressData.city)
                return

            var c=[]
            for(var key in this.addressData[this.province][this.city]){
                c.push(key)
            }

            return c
        }}
}

</script>

<style lang="scss">
  .header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #e31939;
    box-sizing: border-box;
    color: #fff;
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
    .h-left {
      -webkit-box-flex: .3;
      -ms-flex: .3;
      flex: .3;
      text-align: left;
      button{
        background:transparent;
        box-shadow:none;
        color:#fff;
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
      a {
        position: relative;
        display: block;
        width:100%;
        background-color: #C90D2B;
        border-radius: 3px;
        padding: 0 10px;
        color:#fff;
        text-decoration:none;
        i {
          position: absolute;
          left: 10px;
          line-height: 1.8;
        }
        h2 {
          margin: 0;
          padding: 0 0 0 22px;
          font-weight: normal;
          font-size: 14px;
          line-height: 2;
        }
      }
    }
    .h-right {
      -webkit-box-flex: .2;
      -ms-flex: .2;
      flex: .2;
      text-align: right;
      button{
        background:transparent;
        box-shadow:none;
        color:#fff;
      }
      i {
        font-size:20px;
      }

    }
  }
  .mint-popup {
    width:100%;
    height:100%;
    overflow:hidden;
    .navSmMain{
      button{
        width:100%;
        border-radius:0;
      }
      .navUl{
        padding:0 5px;
        position: relative;
        li{
          width:20%;
          float:left;
          padding:0 5px;
          list-style-type: none;
          a{
            display:block;
            width:100%;
            padding:10px 0 ;
            background:#F5F5F5;
            text-align:center;
            text-decoration: none;
            color:#333;
            font-size:14px;
          }
        }
        &::after{
          position: absolute;
          content:"";
          clear:both;
        }
      }
    }
  }
</style>
