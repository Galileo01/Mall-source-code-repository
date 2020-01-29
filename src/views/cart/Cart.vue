<template>
  <div class="cart">
    <Navbar class="cart-bar">
      <div slot="center" class="title">购物车({{cartLength}})</div>
    </Navbar>
    <cart-list></cart-list>
    <botton-bar></botton-bar>
  </div>
</template>

<script>
import  Navbar from "components/common/navbar/Navbar";
import  CartList from "./UIcom/CartList"
import BottonBar from "./UIcom/CartBottonBar"
//导入 辅助函数
import  { mapGetters,mapState } from 'vuex'
export default {
  name:"Cart",
  components:{
    Navbar,
    CartList,
    BottonBar
  },
  computed:{
      ...mapGetters(['cartLength']),//使用扩展运算符，将mapGetters函数 返回 的getters 对象  映射到组件的 computed中
      ...mapState(['cartList']),
  
  }                                  //NOTE:  由于babel 的版本问题，可能不能处理 对象扩展语法，所以 会报错，可以安装 支持对象扩展语法的babel 插件
}
</script>

<style scoped>
 .cart-bar{
   background-color: var(--color-tint);
   color: #fff;
 }
 .cart{
   height: 100vh;
   /* position: relative; */
  
 }
 
</style>