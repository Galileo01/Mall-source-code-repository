<template>
  <div class="list-item">
    <check-button :is-checked="good.checked" @click.native="checkClick"></check-button>
    <img
      :src="good.image"
      alt=""
    >
    <div class="info">
      <p class="title">{{good.title}}</p>
      <p class="desc">{{good.desc}}</p>
      <div class="other"><span class="price">￥{{good.price}}</span>
        <span class="count">x{{good.count}}</span></div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CartCheckButton";
export default {
  name: "CartListItem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods:{
    checkClick(){
      this.good.checked=!this.good.checked;
    }
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  margin: 10px 0 0 5px;
  /* width: 100%; */
  border-bottom: 5px solid #f2f5f8;
}
.list-item img {
  height: 120px;
  width: 80px;
  border-radius: 10px;
}
.info {
  padding: 0 10px 0 10px;
  width: calc(100% - 100px - 5px); /* 计算宽度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .title {
  font-size: 17px;
  font-weight: 700;
}
.info .desc {
  font-size: 14px;
  margin-top: 20px;
}
.info .other {
  display: flex;
  justify-content: space-between;
}
.info .other .price {
  color: orangered;
}
.other .count {
  font-weight: 700;
}
</style>