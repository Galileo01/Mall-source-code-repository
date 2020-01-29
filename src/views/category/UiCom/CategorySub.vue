<template>
  <div v-if="Object.keys(subcategories).length!==0" class="category-sub">
    <grid-view
      :cols="3"
      :lineSpace="15"
      :v-margin="20"
      v-if="subcategories"
    >
      <div
        class="item"
        v-for="(item, index) in subcategories"
        :key="index"
      >
        <a :href="item.link">
          <img
            class="item-img"
            :src="item.image"
            alt=""
            @load="imgloaded"
          >
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";

export default {
  name: "CategorySub",
  components: {
    GridView
  },
  props: {
    subcategories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgloaded() {
      this.$bus.$emit("imgloaded");
    }
  },
  created(){
    this.$watch('subcategories',(newVal,oldVal)=>{
      console.log('newVal',newVal);
      console.log('oldVal',oldVal);
      
    })
  }
};
</script>

<style scoped>
.category-sub{
  width: 100%;
}
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>
