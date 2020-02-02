<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods:{
      //显示弹窗
      show(message="要显示的信息",duration=2000,callback)
      {
          this.message=message;
          this.isShow=true;
          setTimeout(()=>{
              this.isShow=false
              if(callback){//如果传入 回调函数   则 在 文本 消失后 立即执行
                callback();
              }
          },duration);
      }
  }
};
</script>

<style>
.toast{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50% ,-50%);
    color:#fff;
    background-color: rgba(0, 0,0, .65);
    padding: 8px 10px;
    z-index: 3;
}
</style>