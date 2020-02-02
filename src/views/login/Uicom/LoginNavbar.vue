<template>
  <div>
    <nav-bar class="login-nav">
      <img
        src="~assets/img/login/back.svg"
        alt=""
        slot="left"
        class="back"
        @click="backClick"
      >
      <div slot="right">客服</div>
    </nav-bar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
export default {
  name: "LoginNavbar",
  components: {
    "nav-bar": Navbar
  },
  methods: {
    backClick() {
     this.$store.commit("changeMainBarShow",true);
      this.$router.back();
    }
  }
};
</script>

<style>
.login-nav img {
  margin-top: 12px;
}
.login-nav{
  background-color: #666EE9;
  color: #fff;
}
</style>