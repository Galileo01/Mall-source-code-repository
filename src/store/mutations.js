export default {
    addCount(state,index){//增加商品的个数
      state.cartList[index].count++;
    },
    //添加商品
    addGood(state,payload){
      state.cartList.push(payload);
    },
    checkAll(state){
        state.cartList.forEach(value=>value.checked=true);
    },
    discheckAll(state){
      state.cartList.forEach(value=>value.checked=false);
    }
  }