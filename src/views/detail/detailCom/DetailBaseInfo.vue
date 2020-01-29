<template>
  <div
    class="base-info"
    v-if="Object.keys(goodsInfo).length!==0"
  >
    <!--在info有具体的数据后在进行-->
    <div class="db-title">{{goodsInfo.desc}}

    </div>
    <div class="db-price">
      <span class="nowprice">￥{{goodsInfo.price}}</span>
      <span class="oldprice">{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="db-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.service[infoLength-1].name}}</span>
    </div>
    <div class="db-services">
      <span
        class="info-service-item"
        v-for="index in infoLength-1"
        :key="index"
      >
        <img :src="goodsInfo.service[index-1].icon">
        <span>{{goodsInfo.service[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseinfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
        /*
          由于 再Detail 中 获取info 实在 Promise ，属于一步操作，所以传来的 info 很可能是一个空对象
          应该保证 goodsInfo 不是默认值，再渲染，通过 v-if 来控制 
        */
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    infoLength() {
      return this.goodsInfo.service.length;
    }
  }
};
</script>

<style>
.base-info {
  margin-top: 7px;
  padding: 0 4px 0 4px;
  color: #999;
  position: relative;
}
.db-title {
  color: #222;
}
.db-price {
  padding-top: 7px;
  position: relative;
}

.db-price .nowprice {
  color: var(--color-high-text);
  font-size: 24px;
}
.db-price .oldprice {
  margin-left: 5px;
  text-decoration: line-through;
  font-size: 14px;
}
.db-price .discount {
  color: #fff;
  background-color: var(--color-high-text);
  padding: 3px;
  margin-left: 5px;
  border-radius: 30%;
  font-size: 13px;
  position: absolute;
}
.db-other {
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.db-other span {
  margin-top: 10px;
  /* flex-grow: 1; */
  font-size: 13px;
  text-align: center;
}
.db-services img {
  width: 20px;
  height: 20px;
}
.db-services {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-bottom: 10px;
}
.db-services .info-service-item {
  height: 20px;
}
.db-services span {
  font-size: 13px;
  height: 20px;
  line-height: 20px;
}
.db-services * {
  vertical-align: middle;
}
</style>