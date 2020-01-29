<template>
  <div class="goods">
<good-list-item v-for="(value,key,index) in goods" :key="index" :good="value">

</good-list-item>
  </div>
</template>

<script>
import Goodslistitem from './Goodslistitem'
export default {
  name: "Goodslist",
  props:{
      goods:{
          type:Array,
          default(){
              return [];
          }
      }
  },
    components:{
        'good-list-item':Goodslistitem
    }
};
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;/*均等分所有的间距 */
}
</style>