<template>
  <div id="user-info">
    <a href="javascript:void;" class="clear-fix">
      <slot name="user-icon">
        <div class="privateImage-svg left">
          <img :src="userdata.usericon" alt="">
        </div>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div @click="login">{{showText}}</div>
        </slot>
        
      </div>
    </a>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">{{showRemain}}</span>
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">{{showQuan}}</span>
        </div>
        <div class="account-info">我的优惠券</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">{{showCredit}}</span>
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
  </div>
</template>

<script>
	export default {
    name: "UserInfo",
    data(){
      return {
        
      }
    },
    computed:{
      userdata(){//以 计算属性 的形式 ，属性 会随 它 依赖的 数据改变而 改变
        return this.$store.state.userdata;
      },
      isLogined(){   //表示 是否 登录账户
      return Object.keys(this.userdata).length!==0;
      },
      showText(){
        //如果已经 登录，返回用户名
        return this.isLogined?this.userdata.username:'登录/注册';
      },
      showRemain(){
        return this.isLogined?this.userdata.remains+'元':'未登录';
      },
      showQuan(){
       return this.isLogined?this.userdata.youhuiquan+'张':'未登录';
      },
      showCredit(){
         return this.isLogined?this.userdata.credit+'分':'未登录';
      }
    },
    methods:{
      login(){
        //隐藏 maintabbar 
        this.$store.commit('changeMainBarShow',false);
        //进入登录界面
        this.$router.push('login');
      }
    }
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #user-info img {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
    width:80px;
  }


  .account {
    display: flex;
      background-color: #fff;
  }

  .account-item {
    width: 100%;
  
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 18px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
    font-size: 16px;
  }

</style>
