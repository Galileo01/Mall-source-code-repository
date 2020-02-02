<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <keep-alive exclude="Detail,Login"><router-view></router-view></keep-alive>
    <!-- 逗号 分隔排除的 组件名称-->
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
import MainTabBar from'components/content/mainTabbar/MainTabBar'

export default {
  name:'App',
  components:{
    'main-tabbar':MainTabBar
  }
}

/*
TODO:
1. 完成登录 界面 和 store的 统一
2. 将微信模拟页面 Vue组件化， 完成 付款页面的 搭建 
 */
</script>
<style>

@import "./assets/css/base.css";
 #app {
    position: relative;
  }
</style>
