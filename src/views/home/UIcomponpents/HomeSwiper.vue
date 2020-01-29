<template>
  <swiper>
    <swiper-item
      v-for="(value,index) in banner"
      :key="index"
    >
      <!--vue2.2之后使用v-for 需要加上key，才能轮播-->
      <a :href="value.link">
        <img
          :src="value.image"
          alt=""
          @load="imgloaded"
        >
      </a>
    </swiper-item>

  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index"; //解构
export default {
  name: "HomeSwiper",
  data() {
    return {
      isImgload: false
    };
  },
  props: {
    banner: Array
  },
  components: {
    swiper: Swiper,
    "swiper-item": SwiperItem
  },
  methods: {
    imgloaded() {
      if(!this.isImgload)
      {
        this.$emit('swiperImgload');//轮播图的 图片加载完之后向 父组件 Home 传递一个 事件
        this.isImgload=true;
      }
    }
  }
};
</script>

<style>
</style>