<template>
  <div
    class="grid-view"
    ref="gridView"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: {
    cols: {
      type: Number,
      default: 2
    },
    hMargin: {
      type: Number,
      default: 8
    },
    vMargin: {
      type: Number,
      default: 8
    },
    itemSpace: {
      type: Number,
      default: 8
    },
    lineSpace: {
      type: Number,
      default: 8
    }
  },
  mounted: function() {
    setTimeout(this._autoLayout, 20);
  },
  methods: {
    
  }
};
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 18px;
}
.item{
  /* width: 70px; */
  width:33%;
}
</style>
