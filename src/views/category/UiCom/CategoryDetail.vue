<template>
  <div
    class="category-detail"
    v-if="Object.keys(CategoryDetail).length!==0"
  >
    <goods-list :goods="Details">

    </goods-list>
  </div>
</template>

<script>
import Goodslist from "components/content/goodslist/Goodslist";
import Goodslistitem from "components/content/goodslist/Goodslistitem";

export default {
  name: "CategoryDetail",
  props: {
    CategoryDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    Details() {
      // console.log(this.CategoryDetail);
      const goods = [];
      this.CategoryDetail.forEach((value, index) => {
        // 填充 数据
        const obj = {
          link: value.link,
          image: value.img,
          title: value.title,
          price: value.price,
          cfav: value.cfav,
          iid:value.iid
        };
        // console.log(obj);
        goods.push(obj);
      });
      //  console.log(goods);
      return goods;
    }
  },
  components: {
    "goods-list": Goodslist,
    "goods-list-item": Goodslistitem
  },
  created(){
    // this.$watch('CategoryDetail',(newVal,oldVal)=>{
    //   console.log('new',newVal);
    //   console.log('\nold',oldVal);
      
    // })
  }
};
</script>
<style scoped>
.category-detail {
  /* width: 260px; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>