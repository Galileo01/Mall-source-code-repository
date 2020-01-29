<template>
  <div v-if="Object.keys(detailInfo).length!==0">
    <div class="wa">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <p class="keys">{{detailInfo.detailImage[0].key}}</p>
   <div class="imags">
      <img :src="value" alt="" v-for="(value,index) in detailInfo.detailImage[0].list" :key="index" @load="imgloaded">
   </div>

  </div>
</template>

<script>
export default {
  name: "DetailImage",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {
        };
      }
    }
  },
  data() {
    return {
      
      }
    }
  ,methods:{
    imgloaded(){
      this.$bus.$emit('imgloaded');
      this.$emit('imgloaded')
      // console.log(this.$bus);

    },
  }
};
</script>

<style>
.wa {
  position: relative;
}
.start,
.end {
  height: 1px;
  width: 20%;
  background-color: black;
  margin: 10px 0 10px 0px;
}
.start {
  margin-left: 5px;
}

.end {
  position: absolute;
  right: 5px;
}
.desc {
  font-size: 14px;
  padding: 5px;
}
.keys{
  margin-top: 30px;
  font-size: 15px;
  text-align: center;
}
.imags img{
  width: 100vw;
  margin-top: 5px;
}
</style>