<template>
  <div class="check-button" >
      <img src="~assets/img/cart/tick.svg" alt="" :class="{check:isChecked}">
  </div>
</template>

<script>
export default {
    name:"CartCheckButton",
    props:{
        isChecked:{
            type:Boolean,
            default:true
        }
    }
};
</script>

<style>
.check-button{
    display: flex;
    height: 20px;
    width: 20px;
    margin:40px 2px 40px 0;
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check-button img{
    border-radius: 50%;
}
.check{
    background-color: red;
}
</style>