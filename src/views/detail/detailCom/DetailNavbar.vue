<template>
  <div>
    <nav-bar class="de-nav">
      <img
        src="~assets/img/common/back.svg"
        alt=""
        slot="left"
        class="back"
        @click="backClick"
      >
      <div
        slot="center"
        class="titles"
      >
        <div
          v-for="(value,index) in titles"
          :key="index"
          class="title"
          :class="{active:index===currentIndex}"
          @click="titleClick(index)"
        >
          {{value}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
export default {
  name: "DetailNavbar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  }
  ,
  methods:{
      //标题点击切换 选中样式
      titleClick(index){
          this.currentIndex=index;
          //向父组件 发送事件
          this.$emit('titleClick',index);
      },
      //返回上一级，路由
      backClick(){
          this.$router.back();
      }
  },
  components: {
    "nav-bar": Navbar
  }
};
</script>

<style>
.de-nav{
  position: relative;
  z-index: 3;
  background-color: #fff;
}
.titles {
  display: flex;
  font-size: 14px;
}
.title {
  flex-grow: 1;
}
.back {
  margin-top: 12px;

}
.active{
    color: var(--color-high-text);
}
</style>