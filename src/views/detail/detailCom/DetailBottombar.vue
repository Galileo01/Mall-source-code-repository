<template>
  <div class="bottom-bar">
    <div>
      <div class="service icon"></div>
      <div>客服</div>
    </div>
    <div>
      <div class="shop icon"></div>
      <div>店铺</div>
    </div>
    <div>
      <div class="icon"></div>
      <div>收藏</div>
    </div>
    <div class="right-wapper">
      <div class="cart" @click="addClick">
        加入购物车
      </div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottombar",
  methods:{
    addClick()
    {
        this.$emit('addCart');  
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;
  display: flex;
  font-size: 14px;
  text-align: center;
padding-left: 10px;
  justify-content: space-between;
}
.bottom-bar > div {
  height: 49px;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 4px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.service {
  background-position: 0 -54px;
}

.shop {
  background-position: 0 -98px;
}
.right-wapper{
    display: flex;
}
.cart,
.buy {
  width: 80px;
  line-height: 49px;
  font-weight: 600;
  color: #333;
}
.cart {
  background-color: #ffe817;
}
.buy {
  background-color: #f69;
  color: #ffffff;
}
</style>