<template>
  <scroll class="cate-scroll">
    <div
      class="cate-title"
      v-for="(value,index) in categories"
      :key="index"
       :class="{checked:currenI===index}"
       @click="itemClick(index)"
    >{{value.title}}</div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "CategoryMenu",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {
      currenI:0
    }
  },
  components: {
    Scroll
  },
  methods:{
    itemClick(index){
      this.currenI=index;
      this.$emit('menuClick',index);//向父组件 传递 点击事件
    }
  }
};
</script>

<style scoped>
.cate-scroll {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}

.cate-title {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  background-color: #f6f6f6;
}
.checked{
  font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
}
</style>