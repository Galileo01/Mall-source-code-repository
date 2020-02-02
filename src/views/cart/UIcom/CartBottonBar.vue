<template>
  <div class="bottom-bar">
    <div class="button-wapper">
      <check-button
        class="check-button"
        :isChecked="isCheckAll"
        @click.native="AllClick"
      >
      </check-button>
      <div>全选</div>
    </div>
    <div class="total-price">合计:￥{{totalPrice}}</div>
    <div
      class="pay"
      @click="goCalc"
    >去计算{{totalCount}}</div>
  </div>
</template>

<script>
import CheckButton from "./CartCheckButton";
import { mapState } from "vuex";
import { log } from "util";
export default {
  name: "CartBottonBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapState(["cartList"]), //将store 的state 映射到 computed
    //计算总价格
    totalPrice() {
      const total = this.cartList
        .filter(value => value.checked)
        .reduce((pre, cur) => {
          return pre + cur.count * cur.price;
        }, 0);
      return total.toFixed(2);
    },
    //计算选中的个数
    totalCount() {
      return this.cartList
        .filter(value => value.checked)
        .reduce((pre, cur) => {
          console.log(cur.count);

          return pre + cur.count;
        }, 0);
    },
    isCheckAll() {
      if (this.cartList.length === 0) return false;
      const unChecked = this.cartList.find(value => !value.checked); //查找没有被选中的 元素
      if (unChecked) return false;
      else return true;
    }
  },
  methods: {
    AllClick() {
      if (this.isCheckAll) {
        this.$store.commit("discheckAll");
      } else this.$store.commit("checkAll");
    },
    goCalc() {
      if (this.totalCount === 0) {
        //没有 选择商品
        this.$toast.show("请选择商品");
      }
      //没有 登录
      else if (Object.keys(this.$store.state.userdata).length === 0) {
        this.$toast.show("请登录");
      } else {
     //跳转 支付界面
        this.$toast.show("跳转到支付页面....", 2000);
      }

    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 49px;
  line-height: 40px;
}
.bottom-bar .check-button {
  margin: 10px 5px 10px 10px;
}
.button-wapper {
  display: flex;
}
.pay {
  width: 80px;
  text-align: center;
  background-color: orangered;
  color: #fff;
  margin-right: 10px;
}
</style>