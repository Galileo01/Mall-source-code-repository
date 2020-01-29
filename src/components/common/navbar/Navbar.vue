<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div> <!-- width:  60px                 line-height:44px flex-->
</template>

<script>
export default {
    name:'Navbar'
};
</script>

<style>
.nav-bar {
  height: 44px;
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  width: 100vw;
}
.right , .left{
    width: 60px;
}
.center{
    flex-grow: 1;
}
</style>