<template>
  <div class="recommend">
    <div
      v-for="(value,index) in recommend"
      :key="index"
      class="recommend-item"
    >
      <a :href="value.link">
        <img
          :src="value.image"
          alt=""
        >
        <div>{{value.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homerecommend",
  props: {
    recommend: Array
  }
};
</script>

<style>
.recommend{
    text-align: center;
    display: flex;
    font-size: 12px;
}
.recommend img{
    width: 60%;
    margin: 10px;
}

</style>