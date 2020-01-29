<template>
  <div class="goods-list-item" v-if="Object.keys(good).length!==0">
    <a :href="good.link">
      <img
        v-lazy="showImage"
        alt=""
        @load="imgloaded"
        @click.prevent="itemClick"
      >
    </a>
    <div class="good-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goodlistitem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    //向事件总线对象 发送一个imgloaded 事件
    imgloaded(){
      this.$bus.$emit('imgloaded');
      
    },
    itemClick(){
      this.$router.push('/detail/'+this.good.iid);
    }
  },
  computed:{
    showImage(){
      return this.good.image||this.good.show.img;//解决不同页面下，good的结构不同的 问题
    }
  }
};
</script>

<style>
.goods-list-item {
  width: 48%;
  position: relative;
  font-size: 13px;
  text-align: center;
    padding-bottom: 40px;
    position: relative;
}
.goods-list-item img {
  width: 100%;
}
.good-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    
}
.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.good-info .price {
  color: var(--color-tint);
  margin-right: 20px;
}
.good-info .collect {
    position: relative;
  }

.good-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>