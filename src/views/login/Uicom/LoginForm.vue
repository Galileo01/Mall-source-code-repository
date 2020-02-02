<template>
  <div class="login-form">
    <div class="form-wapper">
      <p class="title">账户登录</p>
      <div class="aui-flex">
        <div class="box">
          <img
            class="icon icon-user"
            src="~assets/img/login/name.png"
          >
          <input
            id="username"
            type="text"
            autocomplete="off"
            placeholder="用户名"
            v-model="in_name"
            v-focus
           
          >
        </div>
        <div class="box">
          <img
            class="icon icon-user"
            src="~assets/img/login/safe.svg"
          >
          <input
            id="pass"
            type="text"
            autocomplete="off"
            placeholder="密码"
            v-model="in_pass"
           
          >
        </div>
        <!-- {{in_name}}
        {{in_pass}} -->
        <div class="login-button">
          <button @click="login">立即登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginCheck } from "network/login";
export default {
  name: "LoginForm",
  data() {
    return {
      in_name: "",
      in_pass: ""
    };
  },
  methods: {
    login() {
      console.log("\n password ", this.in_pass);

      if (this.in_name && this.in_pass) {
        //用户名和 密码 有输入
        loginCheck(this.in_name, this.in_pass)
          .then(res => {
            console.log(res);

            if(res.isCorrect)//验证正确
            {
              this.$store.commit("getUserData", res.userdata);
             //弹窗 提示 并在文本 消失 后返回
            this.$toast.show("登录成功", 2000, () => {
              this.$store.commit("changeMainBarShow", true);
              this.$router.back();
            });
            }
            else{
                this.$toast.show("密码或用户名错误");
            }

          })
          .catch(error => {
            console.log(error);
          });

       
      }
    }
  }
};
</script>

<style>
.login-form {
  width: 100%;
  background-color: #666ee9;
  padding-bottom: 50px;
  padding-top: 10px;
}
.form-wapper {
  width: 80%;
  margin: 0px auto;
  border-radius: 5px;
  padding: 1.8rem 1.8rem 4rem;
  /* height: 300px; */
  background-color: #fff;
}
p.title {
  font-size: 1rem;
  font-weight: 400;
  color: #4e4e4e;
  margin-bottom: 0.2rem;
  text-align: left;
}
.box {
  background: #f1f0f0;
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-top: 10px;
}
.icon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
  display: block;
  border: 0;
  float: left;
  background-size: 20px;
  background-repeat: no-repeat;
}
.icon-user {
  position: absolute;
  left: 10px;
  top: 0.4rem;
}
.box input {
  height: 2.2rem;
  line-height: 2.2rem;
  padding: 0.4rem 2rem;
  background: 0 0;
  border: 0;
  width: 100%;
  font-size: 14px;
  outline: none;
}
.login-button {
  margin-top: 40px;
}
.login-button button {
  background: linear-gradient(to right, #586fe4, #676cea);
  border-radius: 22px;
  color: #fff;
  border: 0;
  width: 100%;
  height: 2.35rem;
  line-height: 2.35rem;
  font-size: 1rem;
  box-shadow: 0 5px 9px #dadefd;
}
</style>