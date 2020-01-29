<template>
  <swiper class="dswapper" v-if="showSwiper">
   <swiper-item v-for="value in topImages" :key="value.item">
       <img :src="value" alt="">
   </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    'swiper': Swiper,
    "swiper-item": SwiperItem
  },
  computed:{
    showSwiper(){
      return this.topImages.length!==0;
    }
  }

};
</script>

<style scoped>
.dswapper{
    height: 300px;
    overflow: hidden;
}
</style>