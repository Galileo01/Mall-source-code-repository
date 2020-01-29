<template>
  <div class="cart-list">
    <scroll class="list-wapper" ref="scroll">
        <list-item v-for="(value,index) in cartList" :key="index" :good="value">

        </list-item>
    </scroll>

  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import {mapState} from "vuex"
import  ListItem from "./CartListItem"
export default {
  name: "CartList",
  components: {
    Scroll,
    ListItem
  },
  computed:{
    ...mapState(['cartList'])
  },activated(){
   this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list{
 position: absolute;
  bottom: 89px;
  top:44px;
  /* height: 400px; */
background-color: #fff;
}
.list-wapper{
  height: 100%;
  overflow: hidden;
  width:100vw;
  display: flex;
  flex-direction: column;
}
</style>