<template>
    <div class="content">
      <router-view></router-view>
    </div>
</template>
<style>
body{
  margin:0;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-size:14px/20px;
  background-color: #f0f0f0;
}
*{box-sizing: border-box;}
img {
    border: 0;
}
.content{
    padding : 50px 0;
    min-height: 465px;
    display: block;
    overflow: visible;
    overflow-x: hidden;
}
header{
    left: 0;
    right: 0;
    width: 100%;
    position: fixed;
    z-index: 1000;
    top: -1px;
    padding-top: 1px;
}
footer{
    left: 0;
    right: 0;
    width: 100%;
    position: fixed;
    z-index: 1000;
    bottom: -1px;
    padding-bottom: 1px;
}
</style>
