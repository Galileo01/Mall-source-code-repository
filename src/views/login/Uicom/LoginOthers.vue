<template>
  <div class="others">
    <div class="title">
      <p>其它登录方式</p>
    </div>
    <div class="others-content-wapper">
      <div
        class="other-item"
        v-for="(value,index) in text"
        :key="index"
      >
        <a href="javascript:void;"><img
            :src="require('assets/img/login/icon-sc'+(index+1)+'.png')"
            alt=""
            class="icon"
          ></a>
        <p class="text">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginOthers",
  data() {
    return {
      // 拼接 图片地址 src
      text: ["微信", "淘宝 ", "QQ", "微博"]
    };
  }
};
</script>

<style scoped>
.others {
  margin-top: 30px;
}
.title {
  color: #9c898b;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: center;
}
.others-content-wapper {
  margin-top: 50px;
  display: flex;
  /* width: 90%; */
position: absolute;
left:50%;
transform: translate(-50%,0);
}
.other-item {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
.other-item img {
  display: block;
  width: 35px;
  height: 35px;
  border: 0;
}
.other-item .text {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #9d8b8b;
}
</style>